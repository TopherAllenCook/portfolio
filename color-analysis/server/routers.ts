import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  createAnalysis,
  deleteAnalysis,
  getAnalysisById,
  listAnalysesByUser,
  updateAnalysis,
} from "./db";
import { storagePut } from "./storage";

const seasonKeySchema = z.enum([
  "lightSpring",
  "trueSpring",
  "brightSpring",
  "lightSummer",
  "trueSummer",
  "softSummer",
  "softAutumn",
  "trueAutumn",
  "deepAutumn",
  "deepWinter",
  "trueWinter",
  "brightWinter",
]);

const analysisUpdateSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).max(120).optional(),
  seasonKey: seasonKeySchema.nullable().optional(),
  depthVerdict: z.enum(["light", "medium", "deep"]).nullable().optional(),
  undertoneVerdict: z.enum(["warm", "cool", "neutral"]).nullable().optional(),
  chromaVerdict: z.enum(["clear", "soft"]).nullable().optional(),
  notes: z.string().max(5000).nullable().optional(),
  /** Allows the Find My Season wizard to carry the analyzed photo onto the saved result */
  photoUrl: z.string().url().max(1024).nullable().optional(),
});

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  analysis: router({
    list: protectedProcedure.query(({ ctx }) => listAnalysesByUser(ctx.user.id)),

    get: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .query(async ({ ctx, input }) => {
        const analysis = await getAnalysisById(input.id, ctx.user.id);
        if (!analysis) throw new TRPCError({ code: "NOT_FOUND", message: "Analysis not found" });
        return analysis;
      }),

    create: protectedProcedure
      .input(
        z.object({
          title: z.string().min(1).max(120).default("My Color Analysis"),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        const id = await createAnalysis({ userId: ctx.user.id, title: input.title });
        return { id };
      }),

    uploadPhoto: protectedProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          /** base64-encoded image data (no data: prefix) */
          base64: z.string().min(1),
          mimeType: z.enum(["image/jpeg", "image/png", "image/webp"]),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        const analysis = await getAnalysisById(input.id, ctx.user.id);
        if (!analysis) throw new TRPCError({ code: "NOT_FOUND", message: "Analysis not found" });

        const buffer = Buffer.from(input.base64, "base64");
        const maxBytes = 10 * 1024 * 1024;
        if (buffer.length > maxBytes) {
          throw new TRPCError({ code: "PAYLOAD_TOO_LARGE", message: "Photo must be under 10MB" });
        }

        const ext = input.mimeType === "image/png" ? "png" : input.mimeType === "image/webp" ? "webp" : "jpg";
        const { key, url } = await storagePut(
          `user-photos/${ctx.user.id}/analysis-${input.id}.${ext}`,
          buffer,
          input.mimeType,
        );

        await updateAnalysis(input.id, ctx.user.id, { photoUrl: url, photoKey: key });
        return { url, key };
      }),

    update: protectedProcedure.input(analysisUpdateSchema).mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const analysis = await getAnalysisById(id, ctx.user.id);
      if (!analysis) throw new TRPCError({ code: "NOT_FOUND", message: "Analysis not found" });
      await updateAnalysis(id, ctx.user.id, data);
      return { success: true } as const;
    }),

    delete: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ ctx, input }) => {
        await deleteAnalysis(input.id, ctx.user.id);
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
