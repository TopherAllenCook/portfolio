"use client";

import { useState } from "react";

const WEBHOOKS = {
  four_surfaces:
    "https://financiallyfitphotographe.app.n8n.cloud/webhook/tbf-content-demo",
  full_stack:
    "https://financiallyfitphotographe.app.n8n.cloud/webhook/tbf-content-stack",
} as const;

type Mode = keyof typeof WEBHOOKS;

type FourSurfaces = {
  instagram: string;
  linkedin: string;
  email_subject: string;
  email_body: string;
  blog_headline: string;
  blog_lede: string;
};

type FullStack = {
  social: FourSurfaces;
  seo: {
    meta_title: string;
    meta_description: string;
    h1: string;
    primary_keyword: string;
    internal_link_suggestions: { anchor: string; target_url: string }[];
    schema_jsonld: string;
  };
  aeo: {
    question: string;
    direct_answer: string;
    full_answer: string;
    schema_faq_markup: string;
  };
  geo: {
    definition_snippet: string;
    comparison_snippet: string;
    statistic_snippet: string;
  };
};

type FourSurfacesResponse = {
  surfaces: FourSurfaces;
  voice_manual_version: string;
  model: string;
};

type FullStackResponse = {
  stack: FullStack;
  voice_manual_version: string;
  brain_files_referenced: string[];
  model: string;
};

const PRESET_TOPICS = [
  {
    label: "UCLA research grant",
    value:
      "Nexus Agriscience selected for UCLA-led, California state-funded cannabis research grant. TBF terpene oils will be the input dataset.",
  },
  {
    label: "Pine-129 vintage release",
    value:
      "TBF just released the 2025 Pine-129 vintage at 8.2% caryophyllene by GC-MS, the highest concentration recorded for this cultivar.",
  },
  {
    label: "Vape thermal stability",
    value:
      "New internal GC-MS data shows TBF Gas-707 holds flavor integrity at 230°C, where most monoterpene-dominant blends drop off above 180°C.",
  },
];

const AUDIENCES: { id: "vape" | "beverage" | "edible" | "distributor"; label: string }[] = [
  { id: "vape", label: "Vape R&D" },
  { id: "beverage", label: "Beverage formulator" },
  { id: "edible", label: "Edible formulator" },
  { id: "distributor", label: "Distributor / procurement" },
];

export default function LiveDemo() {
  const [mode, setMode] = useState<Mode>("four_surfaces");
  const [topic, setTopic] = useState(PRESET_TOPICS[0].value);
  const [audience, setAudience] = useState<typeof AUDIENCES[number]["id"]>("vape");
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fourResult, setFourResult] = useState<FourSurfacesResponse | null>(null);
  const [stackResult, setStackResult] = useState<FullStackResponse | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    setElapsed(null);
    setFourResult(null);
    setStackResult(null);
    const startedAt = Date.now();

    try {
      const body =
        mode === "four_surfaces" ? { topic } : { topic, audience };
      const resp = await fetch(WEBHOOKS[mode], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!resp.ok) throw new Error(`Webhook returned ${resp.status}`);
      const data = await resp.json();
      if (mode === "four_surfaces") setFourResult(data as FourSurfacesResponse);
      else setStackResult(data as FullStackResponse);
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

  const expectedSeconds = mode === "four_surfaces" ? 30 : 60;

  return (
    <div className="not-prose">
      {/* Mode tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        <ModeTab
          active={mode === "four_surfaces"}
          onClick={() => setMode("four_surfaces")}
          title="Four Surfaces"
          subtitle="Social drop · ~30s"
        />
        <ModeTab
          active={mode === "full_stack"}
          onClick={() => setMode("full_stack")}
          title="Full Content Stack"
          subtitle="Social + SEO + AEO + GEO · ~60s"
        />
      </div>

      {/* Input panel */}
      <div className="border border-[color:var(--line)] rounded-lg bg-white/60 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-4 flex-wrap">
          <p className="eyebrow">Input</p>
          <span className="text-[10px] tabular-nums text-[color:var(--muted)] uppercase tracking-widest">
            {mode === "four_surfaces"
              ? "POSTs to /webhook/tbf-content-demo · Claude Sonnet 4.6 · Voice Manual v1"
              : "POSTs to /webhook/tbf-content-stack · 9 brain files loaded · Claude Sonnet 4.6"}
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

        {mode === "full_stack" && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[color:var(--muted)] mr-1">Audience:</span>
            {AUDIENCES.map((a) => (
              <button
                key={a.id}
                onClick={() => setAudience(a.id)}
                disabled={loading}
                className={
                  "text-xs px-3 py-1 rounded-full border transition-colors " +
                  (audience === a.id
                    ? "bg-[#4F7A3C] text-white border-[#4F7A3C]"
                    : "bg-white border-[color:var(--line)] hover:bg-[color:var(--bg-elev)]") +
                  (loading ? " opacity-50 cursor-not-allowed" : "")
                }
              >
                {a.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={generate}
            disabled={loading || !topic.trim()}
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--ink)] text-[color:var(--bg)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="inline-block h-3 w-3 rounded-full border-2 border-[color:var(--bg)] border-t-transparent animate-spin" />
                Generating {mode === "four_surfaces" ? "four surfaces" : "the full stack"}…
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
              {(fourResult ?? stackResult)?.model} · manual:{" "}
              {(fourResult ?? stackResult)?.voice_manual_version}
              {stackResult && (
                <>
                  {" · "}
                  brain files loaded:{" "}
                  {stackResult.brain_files_referenced.length}
                </>
              )}
            </span>
          )}
          {loading && (
            <span className="text-xs text-[color:var(--muted)]">
              ~{expectedSeconds}s end-to-end. The agent loads the brain, calls
              Claude, parses structured output, and returns.
            </span>
          )}
        </div>

        {error && (
          <div className="mt-4 text-sm rounded-md border border-red-200 bg-red-50 text-red-800 px-4 py-3">
            {error}
          </div>
        )}
      </div>

      {/* Results */}
      {mode === "four_surfaces" && (
        <FourSurfacesResults loading={loading} result={fourResult} />
      )}
      {mode === "full_stack" && (
        <FullStackResults loading={loading} result={stackResult} />
      )}
    </div>
  );
}

function ModeTab({
  active,
  onClick,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "text-left px-4 py-3 rounded-lg border transition-all flex-1 min-w-[160px] " +
        (active
          ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--bg)]"
          : "border-[color:var(--line)] bg-white/60 hover:bg-white")
      }
    >
      <div className="text-sm font-medium leading-tight">{title}</div>
      <div
        className={
          "text-[10px] mt-1 tracking-wide uppercase " +
          (active ? "opacity-70" : "text-[color:var(--muted)]")
        }
      >
        {subtitle}
      </div>
    </button>
  );
}

function FourSurfacesResults({
  loading,
  result,
}: {
  loading: boolean;
  result: FourSurfacesResponse | null;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      <ResultCard
        surface="Instagram caption"
        meta={result ? `${countWords(result.surfaces.instagram)} words` : "—"}
        loading={loading}
        body={result?.surfaces.instagram}
      />
      <ResultCard
        surface="LinkedIn post"
        meta={result ? `${countWords(result.surfaces.linkedin)} words` : "—"}
        loading={loading}
        body={result?.surfaces.linkedin}
      />
      <ResultCard
        surface="Cold email"
        meta={result ? `${countWords(result.surfaces.email_body)} words` : "—"}
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
        meta={result ? `${countWords(result.surfaces.blog_lede)} words` : "—"}
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
  );
}

function FullStackResults({
  loading,
  result,
}: {
  loading: boolean;
  result: FullStackResponse | null;
}) {
  const empty = !loading && !result;
  return (
    <div className="mt-6 space-y-6">
      {/* SOCIAL row */}
      <StackRow title="Social" badge="6 surfaces" tint="#161512">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard
            surface="Instagram"
            meta={result ? `${countWords(result.stack.social.instagram)} words` : "—"}
            loading={loading}
            body={result?.stack.social.instagram}
          />
          <ResultCard
            surface="LinkedIn"
            meta={result ? `${countWords(result.stack.social.linkedin)} words` : "—"}
            loading={loading}
            body={result?.stack.social.linkedin}
          />
          <ResultCard
            surface="Cold email"
            meta={result ? `${countWords(result.stack.social.email_body)} words` : "—"}
            loading={loading}
            body={
              result
                ? {
                    subject: result.stack.social.email_subject,
                    body: result.stack.social.email_body,
                  }
                : undefined
            }
          />
          <ResultCard
            surface="Blog opener"
            meta={result ? `${countWords(result.stack.social.blog_lede)} words` : "—"}
            loading={loading}
            body={
              result
                ? {
                    headline: result.stack.social.blog_headline,
                    lede: result.stack.social.blog_lede,
                  }
                : undefined
            }
          />
        </div>
      </StackRow>

      {/* SEO row */}
      <StackRow title="SEO" badge="meta + schema + links" tint="#4F7A3C">
        {empty ? (
          <EmptyHint mode="SEO" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FieldCard label="Meta title" loading={loading} value={result?.stack.seo.meta_title} mono />
            <FieldCard label="H1" loading={loading} value={result?.stack.seo.h1} />
            <FieldCard label="Primary keyword" loading={loading} value={result?.stack.seo.primary_keyword} mono />
            <FieldCard
              label="Meta description"
              loading={loading}
              value={result?.stack.seo.meta_description}
              cols={3}
            />
            <FieldCard
              label="Internal link suggestions"
              loading={loading}
              value={result?.stack.seo.internal_link_suggestions
                ?.map((l) => `→ "${l.anchor}" → ${l.target_url}`)
                .join("\n")}
              cols={3}
              mono
            />
            <FieldCard
              label="Schema.org JSON-LD"
              loading={loading}
              value={safePrettyJSON(result?.stack.seo.schema_jsonld)}
              cols={3}
              mono
              scroll
            />
          </div>
        )}
      </StackRow>

      {/* AEO row */}
      <StackRow title="AEO" badge="answer-engine-optimized" tint="#7C5B3F">
        {empty ? (
          <EmptyHint mode="AEO" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldCard label="Question (search query)" loading={loading} value={result?.stack.aeo.question} cols={2} />
            <FieldCard
              label="Direct answer (the snippet AI engines lift)"
              loading={loading}
              value={result?.stack.aeo.direct_answer}
              cols={2}
              accent
            />
            <FieldCard
              label="Full answer"
              loading={loading}
              value={result?.stack.aeo.full_answer}
              cols={2}
            />
            <FieldCard
              label="Schema.org FAQPage markup"
              loading={loading}
              value={safePrettyJSON(result?.stack.aeo.schema_faq_markup)}
              cols={2}
              mono
              scroll
            />
          </div>
        )}
      </StackRow>

      {/* GEO row */}
      <StackRow title="GEO" badge="3 quote-ready snippet types" tint="#B94A2C">
        {empty ? (
          <EmptyHint mode="GEO" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FieldCard
              label="Definition snippet"
              loading={loading}
              value={result?.stack.geo.definition_snippet}
              accent
            />
            <FieldCard
              label="Comparison snippet"
              loading={loading}
              value={result?.stack.geo.comparison_snippet}
              accent
            />
            <FieldCard
              label="Statistic snippet"
              loading={loading}
              value={result?.stack.geo.statistic_snippet}
              accent
            />
          </div>
        )}
      </StackRow>
    </div>
  );
}

function StackRow({
  title,
  badge,
  tint,
  children,
}: {
  title: string;
  badge: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-baseline gap-3">
          <h3
            className="font-display text-xl tracking-tight"
            style={{ color: tint }}
          >
            {title}
          </h3>
          <span className="text-xs text-[color:var(--muted)]">{badge}</span>
        </div>
      </div>
      {children}
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

function FieldCard({
  label,
  loading,
  value,
  cols = 1,
  mono = false,
  scroll = false,
  accent = false,
}: {
  label: string;
  loading: boolean;
  value?: string;
  cols?: 1 | 2 | 3;
  mono?: boolean;
  scroll?: boolean;
  accent?: boolean;
}) {
  const span =
    cols === 3
      ? "md:col-span-3"
      : cols === 2
      ? "md:col-span-2"
      : "md:col-span-1";
  return (
    <div
      className={
        "border border-[color:var(--line)] rounded-lg p-4 " +
        (accent ? "bg-[color:var(--bg-elev)]" : "bg-white/60") +
        " " +
        span
      }
    >
      <p className="eyebrow">{label}</p>
      {loading && (
        <div className="mt-3 space-y-2">
          <SkeletonLine width="w-full" />
          <SkeletonLine width="w-10/12" />
        </div>
      )}
      {!loading && value && (
        <pre
          className={
            "mt-2 text-xs leading-relaxed whitespace-pre-wrap " +
            (mono ? "font-mono" : "") +
            " " +
            (scroll ? "max-h-44 overflow-y-auto" : "") +
            " text-[color:var(--ink-2)]"
          }
        >
          {value}
        </pre>
      )}
      {!loading && !value && (
        <p className="mt-3 text-xs text-[color:var(--muted)] italic">—</p>
      )}
    </div>
  );
}

function EmptyHint({ mode }: { mode: string }) {
  return (
    <div className="border border-dashed border-[color:var(--line)] rounded-lg p-6 text-sm text-[color:var(--muted)] italic">
      Run the agent above to generate the {mode} block.
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

function safePrettyJSON(maybeJSON: string | undefined): string | undefined {
  if (!maybeJSON) return undefined;
  try {
    return JSON.stringify(JSON.parse(maybeJSON), null, 2);
  } catch {
    return maybeJSON;
  }
}
