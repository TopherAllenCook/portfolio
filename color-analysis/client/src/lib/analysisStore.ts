/**
 * Local-first store for saved color analyses.
 *
 * The original app persisted analyses in MySQL behind a tRPC API and stored
 * photos in S3, all gated by Manus OAuth. To run as a plain static site on
 * Vercel with no backend to provision, that state now lives in the browser:
 * analyses in `localStorage`, photos inlined as data URLs. The public surface
 * mirrors what the pages need so the tRPC shim in `./trpc` can sit on top of it
 * unchanged.
 */

export type SeasonKey =
  | "lightSpring"
  | "trueSpring"
  | "brightSpring"
  | "lightSummer"
  | "trueSummer"
  | "softSummer"
  | "softAutumn"
  | "trueAutumn"
  | "deepAutumn"
  | "deepWinter"
  | "trueWinter"
  | "brightWinter";

export type DepthVerdict = "light" | "medium" | "deep";
export type UndertoneVerdict = "warm" | "cool" | "neutral";
export type ChromaVerdict = "clear" | "soft";
export type PhotoMimeType = "image/jpeg" | "image/png" | "image/webp";

export interface Analysis {
  id: number;
  title: string;
  photoUrl: string | null;
  seasonKey: SeasonKey | null;
  depthVerdict: DepthVerdict | null;
  undertoneVerdict: UndertoneVerdict | null;
  chromaVerdict: ChromaVerdict | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AnalysisUpdate {
  id: number;
  title?: string;
  seasonKey?: SeasonKey | null;
  depthVerdict?: DepthVerdict | null;
  undertoneVerdict?: UndertoneVerdict | null;
  chromaVerdict?: ChromaVerdict | null;
  notes?: string | null;
  photoUrl?: string | null;
}

const STORAGE_KEY = "color-analysis:analyses:v1";
const MAX_PHOTO_BYTES = 10 * 1024 * 1024;

/** Resolve a Storage impl, tolerating SSR / disabled storage / tests. */
function storage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

function readAll(): Analysis[] {
  const raw = storage()?.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Analysis[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: Analysis[]): void {
  storage()?.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function nextId(rows: Analysis[]): number {
  return rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
}

/** Newest first, matching the old server ordering the UI relies on. */
export async function list(): Promise<Analysis[]> {
  return readAll().sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id - a.id);
}

export async function create({ title }: { title: string }): Promise<{ id: number }> {
  const rows = readAll();
  const now = new Date().toISOString();
  const id = nextId(rows);
  rows.push({
    id,
    title,
    photoUrl: null,
    seasonKey: null,
    depthVerdict: null,
    undertoneVerdict: null,
    chromaVerdict: null,
    notes: null,
    createdAt: now,
    updatedAt: now,
  });
  writeAll(rows);
  return { id };
}

export async function update(input: AnalysisUpdate): Promise<{ success: true }> {
  const { id, ...patch } = input;
  const rows = readAll();
  const idx = rows.findIndex((r) => r.id === id);
  if (idx === -1) throw new Error("Analysis not found");
  rows[idx] = { ...rows[idx], ...patch, updatedAt: new Date().toISOString() };
  writeAll(rows);
  return { success: true };
}

export async function remove({ id }: { id: number }): Promise<{ success: true }> {
  writeAll(readAll().filter((r) => r.id !== id));
  return { success: true };
}

/** Approximate decoded byte length of a base64 string without allocating it. */
export function base64ByteLength(base64: string): number {
  const len = base64.length;
  if (len === 0) return 0;
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
  return Math.floor((len * 3) / 4) - padding;
}

export async function uploadPhoto({
  id,
  base64,
  mimeType,
}: {
  id: number;
  base64: string;
  mimeType: PhotoMimeType;
}): Promise<{ url: string; key: string }> {
  if (base64ByteLength(base64) > MAX_PHOTO_BYTES) {
    throw new Error("Photo must be under 10MB");
  }
  const url = `data:${mimeType};base64,${base64}`;
  await update({ id, photoUrl: url });
  return { url, key: `local/analysis-${id}` };
}
