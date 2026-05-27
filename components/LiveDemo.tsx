"use client";

import { useEffect, useState } from "react";
import { getBrand } from "@/lib/brands";

type Mode = "short" | "full";

// TBF Full Stack response shape
type TbfFullStack = {
  social: {
    instagram: string;
    linkedin: string;
    email_subject: string;
    email_body: string;
    blog_headline: string;
    blog_lede: string;
  };
  seo: SeoBlock;
  aeo: AeoBlock;
  geo: { definition_snippet: string; comparison_snippet: string; statistic_snippet: string };
};

// Romanoff Full Stack response shape
type RomanoffFullStack = {
  press_quote: string;
  instagram: string;
  tiktok_script: string;
  podcast_pitch: string;
  seo: SeoBlock;
  aeo: AeoBlock;
  geo: {
    definition_snippet: string;
    three_signs_snippet: string;
    clinical_reframe_snippet: string;
    permission_grant_snippet: string;
  };
};

type SeoBlock = {
  meta_title: string;
  meta_description: string;
  h1: string;
  primary_keyword: string;
  internal_link_suggestions: { anchor: string; target_url: string }[];
  schema_jsonld: string;
};

type AeoBlock = {
  question: string;
  direct_answer: string;
  full_answer: string;
  schema_faq_markup: string;
};

type TbfShortResponse = {
  surfaces: TbfFullStack["social"];
  voice_manual_version: string;
  model: string;
};

type FullResponse = {
  stack: TbfFullStack | RomanoffFullStack;
  voice_manual_version: string;
  brain_files_referenced: string[];
  model: string;
};

export default function LiveDemo({ brandSlug }: { brandSlug: string }) {
  const brand = getBrand(brandSlug);
  const hasShort = !!brand.webhooks.short;
  const [mode, setMode] = useState<Mode>(hasShort ? "short" : "full");
  const [topic, setTopic] = useState(brand.presets[0].value);
  const [audience, setAudience] = useState<string>(brand.audiences[0].id);
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shortResult, setShortResult] = useState<TbfShortResponse | null>(null);
  const [fullResult, setFullResult] = useState<FullResponse | null>(null);

  // Reset state when brand or mode changes
  useEffect(() => {
    setMode(hasShort ? "short" : "full");
    setTopic(brand.presets[0].value);
    setAudience(brand.audiences[0].id);
    setShortResult(null);
    setFullResult(null);
    setElapsed(null);
    setError(null);
  }, [brand.slug, brand.presets, brand.audiences, hasShort]);

  async function generate() {
    setLoading(true);
    setError(null);
    setElapsed(null);
    setShortResult(null);
    setFullResult(null);
    const startedAt = Date.now();

    try {
      const url = mode === "short" ? brand.webhooks.short! : brand.webhooks.full;
      const body =
        mode === "short" ? { topic } : { topic, audience };
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!resp.ok) throw new Error(`Webhook returned ${resp.status}`);
      const data = await resp.json();
      if (mode === "short") setShortResult(data as TbfShortResponse);
      else setFullResult(data as FullResponse);
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

  const expectedSeconds = mode === "short" ? 30 : 60;

  return (
    <div className="not-prose">
      {/* Mode tabs (only if brand has a short workflow) */}
      {hasShort && (
        <div className="flex flex-wrap gap-2 mb-4">
          <ModeTab
            active={mode === "short"}
            onClick={() => setMode("short")}
            title="Four Surfaces"
            subtitle="Social drop · ~30s"
          />
          <ModeTab
            active={mode === "full"}
            onClick={() => setMode("full")}
            title="Full Content Stack"
            subtitle="Social + SEO + AEO + GEO · ~60s"
          />
        </div>
      )}

      {/* Input panel */}
      <div className="border border-[color:var(--line)] rounded-lg bg-white/60 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-4 flex-wrap">
          <p className="eyebrow">Input</p>
          <span className="text-[10px] tabular-nums text-[color:var(--muted)] uppercase tracking-widest">
            POSTs to {mode === "short" ? new URL(brand.webhooks.short!).pathname : new URL(brand.webhooks.full).pathname}
            {" · "}
            Claude Sonnet 4.6 · {brand.brainFiles.length} brain files loadable
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {brand.presets.map((p) => (
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
          className="w-full text-sm border border-[color:var(--line)] rounded-md bg-white px-4 py-3 leading-relaxed text-[color:var(--ink-2)] focus:outline-none focus:ring-2 focus:ring-[#4F7A3C]/40 focus:border-[#4F7A3C] resize-y disabled:opacity-60"
          placeholder="Paste a news event, topic, or angle..."
        />

        {mode === "full" && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[color:var(--muted)] mr-1">Audience:</span>
            {brand.audiences.map((a) => (
              <button
                key={a.id}
                onClick={() => setAudience(a.id)}
                disabled={loading}
                className={
                  "text-xs px-3 py-1 rounded-full border transition-colors " +
                  (audience === a.id
                    ? "text-white border-current"
                    : "bg-white border-[color:var(--line)] hover:bg-[color:var(--bg-elev)]") +
                  (loading ? " opacity-50 cursor-not-allowed" : "")
                }
                style={
                  audience === a.id
                    ? { backgroundColor: brand.accent, borderColor: brand.accent }
                    : undefined
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
                Generating {mode === "short" ? "four surfaces" : "the full stack"}…
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
              {(shortResult ?? fullResult)?.model} · manual:{" "}
              {(shortResult ?? fullResult)?.voice_manual_version}
              {fullResult && (
                <>
                  {" · "}brain files loaded: {fullResult.brain_files_referenced.length}
                </>
              )}
            </span>
          )}
          {loading && (
            <span className="text-xs text-[color:var(--muted)]">
              ~{expectedSeconds}s end-to-end.
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
      {mode === "short" && (
        <TbfShortResults loading={loading} result={shortResult} />
      )}
      {mode === "full" && brand.shape === "tbf" && (
        <TbfFullResults loading={loading} result={fullResult as { stack: TbfFullStack } | null} />
      )}
      {mode === "full" && brand.shape === "romanoff" && (
        <RomanoffFullResults loading={loading} result={fullResult as { stack: RomanoffFullStack } | null} />
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

function TbfShortResults({
  loading,
  result,
}: {
  loading: boolean;
  result: TbfShortResponse | null;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      <ResultCard surface="Instagram caption" meta={result ? `${wc(result.surfaces.instagram)} words` : "—"} loading={loading} body={result?.surfaces.instagram} />
      <ResultCard surface="LinkedIn post" meta={result ? `${wc(result.surfaces.linkedin)} words` : "—"} loading={loading} body={result?.surfaces.linkedin} />
      <ResultCard surface="Cold email" meta={result ? `${wc(result.surfaces.email_body)} words` : "—"} loading={loading} body={result ? { subject: result.surfaces.email_subject, body: result.surfaces.email_body } : undefined} />
      <ResultCard surface="Blog opener" meta={result ? `${wc(result.surfaces.blog_lede)} words` : "—"} loading={loading} body={result ? { headline: result.surfaces.blog_headline, lede: result.surfaces.blog_lede } : undefined} />
    </div>
  );
}

function TbfFullResults({
  loading,
  result,
}: {
  loading: boolean;
  result: { stack: TbfFullStack } | null;
}) {
  const empty = !loading && !result;
  return (
    <div className="mt-6 space-y-6">
      <StackRow title="Social" badge="6 surfaces" tint="#161512">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard surface="Instagram" meta={result ? `${wc(result.stack.social.instagram)} words` : "—"} loading={loading} body={result?.stack.social.instagram} />
          <ResultCard surface="LinkedIn" meta={result ? `${wc(result.stack.social.linkedin)} words` : "—"} loading={loading} body={result?.stack.social.linkedin} />
          <ResultCard surface="Cold email" meta={result ? `${wc(result.stack.social.email_body)} words` : "—"} loading={loading} body={result ? { subject: result.stack.social.email_subject, body: result.stack.social.email_body } : undefined} />
          <ResultCard surface="Blog opener" meta={result ? `${wc(result.stack.social.blog_lede)} words` : "—"} loading={loading} body={result ? { headline: result.stack.social.blog_headline, lede: result.stack.social.blog_lede } : undefined} />
        </div>
      </StackRow>
      <SeoRow loading={loading} value={result?.stack.seo} empty={empty} />
      <AeoRow loading={loading} value={result?.stack.aeo} empty={empty} />
      <StackRow title="GEO" badge="3 quote-ready snippet types" tint="#B94A2C">
        {empty ? <EmptyHint mode="GEO" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FieldCard label="Definition snippet" loading={loading} value={result?.stack.geo.definition_snippet} accent />
            <FieldCard label="Comparison snippet" loading={loading} value={result?.stack.geo.comparison_snippet} accent />
            <FieldCard label="Statistic snippet" loading={loading} value={result?.stack.geo.statistic_snippet} accent />
          </div>
        )}
      </StackRow>
    </div>
  );
}

function RomanoffFullResults({
  loading,
  result,
}: {
  loading: boolean;
  result: { stack: RomanoffFullStack } | null;
}) {
  const empty = !loading && !result;
  return (
    <div className="mt-6 space-y-6">
      <StackRow title="Press + Social" badge="4 surfaces" tint="#161512">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard surface="Press quote" meta={result ? `${wc(result.stack.press_quote)} words` : "—"} loading={loading} body={result?.stack.press_quote} />
          <ResultCard surface="Instagram caption" meta={result ? `${wc(result.stack.instagram)} words` : "—"} loading={loading} body={result?.stack.instagram} />
          <ResultCard surface="TikTok / Reel script" meta={result ? `${wc(result.stack.tiktok_script)} words` : "—"} loading={loading} body={result?.stack.tiktok_script} />
          <ResultCard surface="Podcast pitch" meta={result ? `${wc(result.stack.podcast_pitch)} words` : "—"} loading={loading} body={result?.stack.podcast_pitch} />
        </div>
      </StackRow>
      <SeoRow loading={loading} value={result?.stack.seo} empty={empty} />
      <AeoRow loading={loading} value={result?.stack.aeo} empty={empty} />
      <StackRow title="GEO" badge="4 quote-ready snippet types" tint="#7C5B8C">
        {empty ? <EmptyHint mode="GEO" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FieldCard label="Definition snippet" loading={loading} value={result?.stack.geo.definition_snippet} accent />
            <FieldCard label="Three-signs snippet" loading={loading} value={result?.stack.geo.three_signs_snippet} accent />
            <FieldCard label="Clinical reframe snippet" loading={loading} value={result?.stack.geo.clinical_reframe_snippet} accent />
            <FieldCard label="Permission grant snippet" loading={loading} value={result?.stack.geo.permission_grant_snippet} accent />
          </div>
        )}
      </StackRow>
    </div>
  );
}

function SeoRow({
  loading,
  value,
  empty,
}: {
  loading: boolean;
  value?: SeoBlock;
  empty: boolean;
}) {
  return (
    <StackRow title="SEO" badge="meta + schema + links" tint="#4F7A3C">
      {empty ? <EmptyHint mode="SEO" /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FieldCard label="Meta title" loading={loading} value={value?.meta_title} mono />
          <FieldCard label="H1" loading={loading} value={value?.h1} />
          <FieldCard label="Primary keyword" loading={loading} value={value?.primary_keyword} mono />
          <FieldCard label="Meta description" loading={loading} value={value?.meta_description} cols={3} />
          <FieldCard label="Internal link suggestions" loading={loading} value={value?.internal_link_suggestions?.map((l) => `→ "${l.anchor}" → ${l.target_url}`).join("\n")} cols={3} mono />
          <FieldCard label="Schema.org JSON-LD" loading={loading} value={safeJSON(value?.schema_jsonld)} cols={3} mono scroll />
        </div>
      )}
    </StackRow>
  );
}

function AeoRow({
  loading,
  value,
  empty,
}: {
  loading: boolean;
  value?: AeoBlock;
  empty: boolean;
}) {
  return (
    <StackRow title="AEO" badge="answer-engine-optimized" tint="#7C5B3F">
      {empty ? <EmptyHint mode="AEO" /> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldCard label="Question (search query)" loading={loading} value={value?.question} cols={2} />
          <FieldCard label="Direct answer (the snippet AI engines lift)" loading={loading} value={value?.direct_answer} cols={2} accent />
          <FieldCard label="Full answer" loading={loading} value={value?.full_answer} cols={2} />
          <FieldCard label="Schema.org FAQPage markup" loading={loading} value={safeJSON(value?.schema_faq_markup)} cols={2} mono scroll />
        </div>
      )}
    </StackRow>
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
          <h3 className="font-display text-xl tracking-tight" style={{ color: tint }}>
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
            <span className="text-[color:var(--muted)]">Subject:</span> {body.subject}
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
  const span = cols === 3 ? "md:col-span-3" : cols === 2 ? "md:col-span-2" : "md:col-span-1";
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

function wc(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function safeJSON(maybeJSON: string | undefined): string | undefined {
  if (!maybeJSON) return undefined;
  try {
    return JSON.stringify(JSON.parse(maybeJSON), null, 2);
  } catch {
    return maybeJSON;
  }
}
