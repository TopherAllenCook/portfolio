import { beforeEach, describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

// Mock the db helpers so tests don't need a live database
vi.mock("./db", () => ({
  createAnalysis: vi.fn(async () => 42),
  listAnalysesByUser: vi.fn(async () => [
    {
      id: 42,
      userId: 1,
      title: "My Color Analysis",
      photoUrl: null,
      photoKey: null,
      seasonKey: null,
      depthVerdict: null,
      undertoneVerdict: null,
      chromaVerdict: null,
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getAnalysisById: vi.fn(async (id: number, userId: number) =>
    id === 42 && userId === 1
      ? {
          id: 42,
          userId: 1,
          title: "My Color Analysis",
          photoUrl: null,
          photoKey: null,
          seasonKey: null,
          depthVerdict: null,
          undertoneVerdict: null,
          chromaVerdict: null,
          notes: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      : undefined,
  ),
  updateAnalysis: vi.fn(async () => undefined),
  deleteAnalysis: vi.fn(async () => undefined),
  getUserByOpenId: vi.fn(async () => undefined),
  upsertUser: vi.fn(async () => undefined),
}));

vi.mock("./storage", () => ({
  storagePut: vi.fn(async (relKey: string) => ({
    key: relKey,
    url: `/manus-storage/${relKey}`,
  })),
}));

import { appRouter } from "./routers";
import * as dbModule from "./db";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "sample-user",
    email: "sample@example.com",
    name: "Sample User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as unknown as TrpcContext["res"],
  };
}

function createAnonContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as unknown as TrpcContext["res"],
  };
}

describe("analysis router", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates an analysis for the signed-in user", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.create({ title: "Test Analysis" });
    expect(result).toEqual({ id: 42 });
    expect(dbModule.createAnalysis).toHaveBeenCalledWith({ userId: 1, title: "Test Analysis" });
  });

  it("lists analyses for the signed-in user", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.list();
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe(42);
    expect(dbModule.listAnalysesByUser).toHaveBeenCalledWith(1);
  });

  it("updates an analysis with a season verdict", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.update({
      id: 42,
      seasonKey: "deepAutumn",
      depthVerdict: "deep",
      undertoneVerdict: "warm",
      chromaVerdict: "soft",
    });
    expect(result).toEqual({ success: true });
    expect(dbModule.updateAnalysis).toHaveBeenCalledWith(42, 1, {
      seasonKey: "deepAutumn",
      depthVerdict: "deep",
      undertoneVerdict: "warm",
      chromaVerdict: "soft",
    });
  });

  it("updates an analysis with a photo URL (wizard save flow)", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.update({
      id: 42,
      seasonKey: "deepAutumn",
      photoUrl: "https://example.com/user-photos/1/analysis-42.webp",
    });
    expect(result).toEqual({ success: true });
    expect(dbModule.updateAnalysis).toHaveBeenCalledWith(42, 1, {
      seasonKey: "deepAutumn",
      photoUrl: "https://example.com/user-photos/1/analysis-42.webp",
    });
  });

  it("rejects an invalid photo URL", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.analysis.update({ id: 42, photoUrl: "not-a-url" }),
    ).rejects.toThrow();
  });

  it("rejects an invalid season key", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.analysis.update({ id: 42, seasonKey: "notASeason" as never }),
    ).rejects.toThrow();
  });

  it("rejects updates to analyses the user does not own", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(caller.analysis.update({ id: 999, title: "Nope" })).rejects.toThrow(
      "Analysis not found",
    );
  });

  it("uploads a photo and stores the storage URL", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const base64 = Buffer.from("fake-image-bytes").toString("base64");
    const result = await caller.analysis.uploadPhoto({
      id: 42,
      base64,
      mimeType: "image/jpeg",
    });
    expect(result.url).toContain("/manus-storage/");
    expect(dbModule.updateAnalysis).toHaveBeenCalledWith(
      42,
      1,
      expect.objectContaining({ photoUrl: expect.stringContaining("/manus-storage/") }),
    );
  });

  it("gets a single analysis owned by the user", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.get({ id: 42 });
    expect(result.id).toBe(42);
    expect(dbModule.getAnalysisById).toHaveBeenCalledWith(42, 1);
  });

  it("throws NOT_FOUND when getting an analysis the user does not own", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(caller.analysis.get({ id: 999 })).rejects.toThrow("Analysis not found");
  });

  it("deletes an analysis scoped to the user", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const result = await caller.analysis.delete({ id: 42 });
    expect(result).toEqual({ success: true });
    expect(dbModule.deleteAnalysis).toHaveBeenCalledWith(42, 1);
  });

  it("rejects photo upload for an analysis the user does not own", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const base64 = Buffer.from("fake").toString("base64");
    await expect(
      caller.analysis.uploadPhoto({ id: 999, base64, mimeType: "image/jpeg" }),
    ).rejects.toThrow("Analysis not found");
  });

  it("rejects oversized photo uploads", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    const bigBuffer = Buffer.alloc(11 * 1024 * 1024, 1);
    await expect(
      caller.analysis.uploadPhoto({
        id: 42,
        base64: bigBuffer.toString("base64"),
        mimeType: "image/jpeg",
      }),
    ).rejects.toThrow("Photo must be under 10MB");
  });

  it("rejects invalid photo mime types", async () => {
    const caller = appRouter.createCaller(createAuthContext());
    await expect(
      caller.analysis.uploadPhoto({
        id: 42,
        base64: Buffer.from("fake").toString("base64"),
        mimeType: "image/gif" as never,
      }),
    ).rejects.toThrow();
  });

  it("blocks anonymous users from analysis procedures", async () => {
    const caller = appRouter.createCaller(createAnonContext());
    await expect(caller.analysis.list()).rejects.toThrow();
  });
});
