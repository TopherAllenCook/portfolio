import { beforeEach, describe, expect, it } from "vitest";
import {
  base64ByteLength,
  create,
  list,
  remove,
  update,
  uploadPhoto,
} from "@/lib/analysisStore";

/** Minimal in-memory Storage so the localStorage-backed store runs under Node. */
class MemoryStorage {
  private map = new Map<string, string>();
  get length() {
    return this.map.size;
  }
  getItem(k: string) {
    return this.map.has(k) ? this.map.get(k)! : null;
  }
  setItem(k: string, v: string) {
    this.map.set(k, String(v));
  }
  removeItem(k: string) {
    this.map.delete(k);
  }
  clear() {
    this.map.clear();
  }
  key(i: number) {
    return [...this.map.keys()][i] ?? null;
  }
}

beforeEach(() => {
  (globalThis as { localStorage?: Storage }).localStorage = new MemoryStorage() as unknown as Storage;
});

describe("base64ByteLength", () => {
  it("matches the decoded byte length", () => {
    // "hi" -> "aGk=" (2 bytes), "hey" -> "aGV5" (3 bytes)
    expect(base64ByteLength("aGk=")).toBe(2);
    expect(base64ByteLength("aGV5")).toBe(3);
    expect(base64ByteLength("")).toBe(0);
  });
});

describe("analysisStore CRUD", () => {
  it("starts empty", async () => {
    expect(await list()).toEqual([]);
  });

  it("creates with an incrementing id and lists newest first", async () => {
    const a = await create({ title: "First" });
    const b = await create({ title: "Second" });
    expect(b.id).toBeGreaterThan(a.id);

    const rows = await list();
    expect(rows).toHaveLength(2);
    expect(rows[0].id).toBe(b.id); // newest first
    expect(rows.map((r) => r.title).sort()).toEqual(["First", "Second"]);
  });

  it("updates fields and rejects unknown ids", async () => {
    const { id } = await create({ title: "Draft" });
    await update({ id, seasonKey: "deepAutumn", notes: "warm + deep" });

    const row = (await list()).find((r) => r.id === id)!;
    expect(row.seasonKey).toBe("deepAutumn");
    expect(row.notes).toBe("warm + deep");

    await expect(update({ id: 9999, title: "nope" })).rejects.toThrow(/not found/i);
  });

  it("deletes by id", async () => {
    const { id } = await create({ title: "Temp" });
    await remove({ id });
    expect(await list()).toHaveLength(0);
  });
});

describe("uploadPhoto", () => {
  it("stores the photo as a data URL", async () => {
    const { id } = await create({ title: "With photo" });
    const { url } = await uploadPhoto({ id, base64: "aGk=", mimeType: "image/png" });
    expect(url).toBe("data:image/png;base64,aGk=");

    const row = (await list()).find((r) => r.id === id)!;
    expect(row.photoUrl).toBe(url);
  });

  it("rejects photos over 10MB", async () => {
    const { id } = await create({ title: "Too big" });
    // 14M base64 chars decode to ~11MB, over the 10MB limit.
    const huge = "A".repeat(14 * 1024 * 1024);
    await expect(
      uploadPhoto({ id, base64: huge, mimeType: "image/jpeg" }),
    ).rejects.toThrow(/10MB/i);
  });
});
