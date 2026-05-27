"use client";

import { useState } from "react";

const WEBHOOK_URL =
  "https://financiallyfitphotographe.app.n8n.cloud/webhook/tbf-content-demo";

type Surfaces = {
  instagram: string;
  linkedin: string;
  email_subject: string;
  email_body: string;
  blog_headline: string;
  blog_lede: string;
};

type DemoResponse = {
  surfaces: Surfaces;
  voice_manual_version: string;
  model: string;
};

const PRESET_TOPICS = [
  {
    label: "UCLA research grant",
    value:
      "Nexus Agriscience selected for UCLA-led, California state-funded cannabis research grant. TBF terpene oils will be the input dataset.",
  },
  {
    label: "New vintage release",
    value:
      "TBF just released the 2025 Pine-129 vintage, a sesquiterpene-rich profile with 8.2% caryophyllene, harvested fresh from the California Terpene Belt.",
  },
  {
    label: "Vape thermal stability",
    value:
      "New internal GC-MS data shows TBF Gas-707 holds flavor integrity at 230°C, where most monoterpene-dominant blends drop off above 180°C.",
  },
];

export default function LiveDemo() {
  const [topic, setTopic] = useState(PRESET_TOPICS[0].value);
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DemoResponse | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    setElapsed(null);
    setResult(null);
    const startedAt = Date.now();

    try {
      const resp = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      if (!resp.ok) {
        throw new Error(`Webhook returned ${resp.status}`);
      }
      const data = (await resp.json()) as DemoResponse;
      setResult(data);
      setElapsed(Date.now() - startedAt);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Generation failed. The webhook may be cold-starting; try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="not-prose">
      {/* Input chips + custom textarea */}
      <div className="border border-[color:var(--line)] rounded-lg bg-white/60 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-4">
          <p className="eyebrow">Input</p>
          <span className="text-[10px] tabular-nums text-[color:var(--muted)] uppercase tracking-widest">
            POSTs to live n8n webhook · Claude Sonnet 4.6 · Voice Manual v1
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {PRESET_TOPICS.map((p) => (
            <button
              key={p.label}
              onClick={() => setTopic(p.value)}
              disabled={loading}
              className={
                "text-xs px-3 py-1.5 rounded-full border transition-colors " +
                (topic === p.value
                  ? "bg-[color:var(--ink)] text-[color:var(--bg)] border-[color:var(--ink)]"
                  : "bg-white border-[color:var(--line)] hover:bg-[color:var(--bg-elev)]") +
                (loading ? " opacity-50 cursor-not-allowed" : "")
              }
            >
              {p.label}
            </button>
          ))}
        </div>

        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={loading}
          rows={3}
          className="w-full text-sm border border-[color:var(--line)] rounded-md bg-white px-4 py-3 leading-relaxed text-[color:var(--ink-2)] focus:outline-none focus:ring-2 focus:ring-[color:#4F7A3C]/40 focus:border-[color:#4F7A3C] resize-y disabled:opacity-60"
          placeholder="Paste a news event, harvest update, or product spec..."
        />

        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={generate}
            disabled={loading || !topic.trim()}
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--ink)] text-[color:var(--bg)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="inline-block h-3 w-3 rounded-full border-2 border-[color:var(--bg)] border-t-transparent animate-spin" />
                Generating four surfaces…
              </>
            ) : (
              <>
                Run the agent
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 10L10 2M10 2H4M10 2v6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>

          {elapsed !== null && (
            <span className="text-xs text-[color:var(--muted)] tabular-nums">
              Completed in {(elapsed / 1000).toFixed(1)}s · model:{" "}
              {result?.model} · manual: {result?.voice_manual_version}
            </span>
          )}
          {loading && (
            <span className="text-xs text-[color:var(--muted)]">
              First run can take ~25-30s while Claude generates all four
              surfaces. Subsequent runs are faster.
            </span>
          )}
        </div>

        {error && (
          <div className="mt-4 text-sm rounded-md border border-red-200 bg-red-50 text-red-800 px-4 py-3">
            {error}
          </div>
        )}
      </div>

      {/* Results — four surfaces */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <ResultCard
          surface="Instagram caption"
          meta={
            result?.surfaces.instagram
              ? `${countWords(result.surfaces.instagram)} words`
              : "—"
          }
          loading={loading}
          body={result?.surfaces.instagram}
        />

        <ResultCard
          surface="LinkedIn post"
          meta={
            result?.surfaces.linkedin
              ? `${countWords(result.surfaces.linkedin)} words`
              : "—"
          }
          loading={loading}
          body={result?.surfaces.linkedin}
        />

        <ResultCard
          surface="Cold email"
          meta={
            result?.surfaces.email_body
              ? `${countWords(result.surfaces.email_body)} words`
              : "—"
          }
          loading={loading}
          body={
            result
              ? {
                  subject: result.surfaces.email_subject,
                  body: result.surfaces.email_body,
                }
              : undefined
          }
        />

        <ResultCard
          surface="Blog opener"
          meta={
            result?.surfaces.blog_lede
              ? `${countWords(result.surfaces.blog_lede)} words`
              : "—"
          }
          loading={loading}
          body={
            result
              ? {
                  headline: result.surfaces.blog_headline,
                  lede: result.surfaces.blog_lede,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}

function ResultCard({
  surface,
  meta,
  loading,
  body,
}: {
  surface: string;
  meta: string;
  loading: boolean;
  body?:
    | string
    | { subject: string; body: string }
    | { headline: string; lede: string };
}) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-white/60 min-h-[200px]">
      <div className="flex items-baseline justify-between gap-2">
        <p className="eyebrow">{surface}</p>
        <span className="text-[10px] text-[color:var(--muted)]">{meta}</span>
      </div>

      {loading && !body && (
        <div className="mt-4 space-y-2">
          <SkeletonLine width="w-full" />
          <SkeletonLine width="w-11/12" />
          <SkeletonLine width="w-10/12" />
          <SkeletonLine width="w-full" />
          <SkeletonLine width="w-9/12" />
        </div>
      )}

      {!loading && !body && (
        <p className="mt-6 text-sm text-[color:var(--muted)] italic">
          Run the agent above to see this surface populate live.
        </p>
      )}

      {body && typeof body === "string" && (
        <div className="mt-4 text-sm text-[color:var(--ink-2)] leading-relaxed whitespace-pre-wrap">
          {body}
        </div>
      )}

      {body && typeof body === "object" && "subject" in body && (
        <div className="mt-4 text-sm text-[color:var(--ink-2)] leading-relaxed">
          <p className="text-xs">
            <span className="text-[color:var(--muted)]">Subject:</span>{" "}
            {body.subject}
          </p>
          <p className="mt-3 whitespace-pre-wrap">{body.body}</p>
        </div>
      )}

      {body && typeof body === "object" && "headline" in body && (
        <div className="mt-4 text-[color:var(--ink-2)]">
          <p className="font-display text-base leading-snug">{body.headline}</p>
          <p className="mt-3 text-sm leading-relaxed whitespace-pre-wrap">
            {body.lede}
          </p>
        </div>
      )}
    </div>
  );
}

function SkeletonLine({ width }: { width: string }) {
  return (
    <div
      className={`h-3 rounded bg-[color:var(--line)] ${width} animate-pulse`}
    />
  );
}

function countWords(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
