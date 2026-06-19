"use client";

import { RendererKind } from "@/lib/brands";

// =============================================================
// Public API — RenderResult is the dispatcher used by LiveDemo
// =============================================================

export function RenderResult({
  kind,
  loading,
  result,
  accent,
}: {
  kind: RendererKind;
  loading: boolean;
  result: unknown;
  accent: string;
}) {
  if (kind === "tbf_four_surfaces") return <TbfFourSurfaces loading={loading} result={result as TbfFourResp | null} />;
  if (kind === "tbf_full_stack") return <TbfFullStack loading={loading} result={result as TbfFullResp | null} />;
  if (kind === "romanoff_full_stack") return <RomanoffFullStack loading={loading} result={result as RomanoffFullResp | null} accent={accent} />;
  if (kind === "press_quotes") return <PressQuotes loading={loading} result={result as PressQuotesResp | null} accent={accent} />;
  if (kind === "aeo_page") return <AeoPage loading={loading} result={result as AeoPageResp | null} accent={accent} />;
  if (kind === "sample_triage") return <SampleTriage loading={loading} result={result as SampleTriageResp | null} accent={accent} />;
  if (kind === "blog_splinter") return <BlogSplinter loading={loading} result={result as BlogSplinterResp | null} accent={accent} />;
  return null;
}

// =============================================================
// Response shapes (matching the actual n8n workflows)
// =============================================================

type FourSurfaces = { instagram: string; linkedin: string; email_subject: string; email_body: string; blog_headline: string; blog_lede: string };
type SeoBlock = { meta_title: string; meta_description: string; h1: string; primary_keyword: string; internal_link_suggestions: { anchor: string; target_url: string }[]; schema_jsonld: string };
type AeoBlock = { question: string; direct_answer: string; full_answer: string; schema_faq_markup: string };

type TbfFourResp = { surfaces: FourSurfaces };
type TbfFullResp = { stack: { social: FourSurfaces; seo: SeoBlock; aeo: AeoBlock; geo: { definition_snippet: string; comparison_snippet: string; statistic_snippet: string } } };
type RomanoffFullResp = { stack: { press_quote: string; instagram: string; tiktok_script: string; podcast_pitch: string; seo: SeoBlock; aeo: AeoBlock; geo: { definition_snippet: string; three_signs_snippet: string; clinical_reframe_snippet: string; permission_grant_snippet: string } } };
type PressQuotesResp = { quotes: { variant_a: { angle: string; quote: string }; variant_b: { angle: string; quote: string }; variant_c: { angle: string; quote: string }; suggested_pull_quote: string; credentials: string } };
type AeoPageResp = { page: { url_slug: string; meta_title: string; meta_description: string; h1: string; direct_answer: string; full_answer: string; ethics_caveat: string; schema_faq_markup: string; schema_person_markup: string; geo_snippets: { definition_snippet: string; three_signs_snippet: string; clinical_reframe_snippet: string; permission_grant_snippet: string } } };
type SampleTriageResp = { triage: { classification: { primary_category: string; confidence: number; reasoning: string }; fit_score: number; fit_reasoning: string; recommended_sample_pack: string; likely_formulation_problem: string; email: { subject: string; body: string } } };
type BlogSplinterResp = { splinter: { linkedin_carousels: { hook: string; slides: { headline: string; body: string }[]; close: string }[]; x_threads: { hook_tweet: string; follow_tweets: string[]; close_tweet: string }[]; ig_captions: string[]; cold_email_pitch: { subject: string; body: string }; key_quotes: string[] } };

// =============================================================
// Individual renderers
// =============================================================

function TbfFourSurfaces({ loading, result }: { loading: boolean; result: TbfFourResp | null }) {
  const s = result?.surfaces;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card title="Instagram caption" meta={s ? `${wc(s.instagram)} words` : "—"} loading={loading} text={s?.instagram} />
      <Card title="LinkedIn post" meta={s ? `${wc(s.linkedin)} words` : "—"} loading={loading} text={s?.linkedin} />
      <Card title="Cold email" meta={s ? `${wc(s.email_body)} words` : "—"} loading={loading} subject={s?.email_subject} text={s?.email_body} />
      <Card title="Blog opener" meta={s ? `${wc(s.blog_lede)} words` : "—"} loading={loading} headline={s?.blog_headline} text={s?.blog_lede} />
    </div>
  );
}

function TbfFullStack({ loading, result }: { loading: boolean; result: TbfFullResp | null }) {
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="Social" badge="6 surfaces" tint="#f5f5f5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Instagram" meta={result ? `${wc(result.stack.social.instagram)} words` : "—"} loading={loading} text={result?.stack.social.instagram} />
          <Card title="LinkedIn" meta={result ? `${wc(result.stack.social.linkedin)} words` : "—"} loading={loading} text={result?.stack.social.linkedin} />
          <Card title="Cold email" meta={result ? `${wc(result.stack.social.email_body)} words` : "—"} loading={loading} subject={result?.stack.social.email_subject} text={result?.stack.social.email_body} />
          <Card title="Blog opener" meta={result ? `${wc(result.stack.social.blog_lede)} words` : "—"} loading={loading} headline={result?.stack.social.blog_headline} text={result?.stack.social.blog_lede} />
        </div>
      </Row>
      <SeoRow loading={loading} value={result?.stack.seo} empty={empty} />
      <AeoRow loading={loading} value={result?.stack.aeo} empty={empty} />
      <Row title="GEO" badge="3 snippet types" tint="#B94A2C">
        {empty ? <Empty mode="GEO" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="Definition snippet" loading={loading} value={result?.stack.geo.definition_snippet} accent />
            <Field label="Comparison snippet" loading={loading} value={result?.stack.geo.comparison_snippet} accent />
            <Field label="Statistic snippet" loading={loading} value={result?.stack.geo.statistic_snippet} accent />
          </div>
        )}
      </Row>
    </div>
  );
}

function RomanoffFullStack({ loading, result, accent }: { loading: boolean; result: RomanoffFullResp | null; accent: string }) {
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="Press + Social" badge="4 surfaces" tint="#f5f5f5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Press quote" meta={result ? `${wc(result.stack.press_quote)} words` : "—"} loading={loading} text={result?.stack.press_quote} />
          <Card title="Instagram caption" meta={result ? `${wc(result.stack.instagram)} words` : "—"} loading={loading} text={result?.stack.instagram} />
          <Card title="TikTok / Reel script" meta={result ? `${wc(result.stack.tiktok_script)} words` : "—"} loading={loading} text={result?.stack.tiktok_script} />
          <Card title="Podcast pitch" meta={result ? `${wc(result.stack.podcast_pitch)} words` : "—"} loading={loading} text={result?.stack.podcast_pitch} />
        </div>
      </Row>
      <SeoRow loading={loading} value={result?.stack.seo} empty={empty} />
      <AeoRow loading={loading} value={result?.stack.aeo} empty={empty} />
      <Row title="GEO" badge="4 snippet types" tint={accent}>
        {empty ? <Empty mode="GEO" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Definition snippet" loading={loading} value={result?.stack.geo.definition_snippet} accent />
            <Field label="Three-signs snippet" loading={loading} value={result?.stack.geo.three_signs_snippet} accent />
            <Field label="Clinical reframe snippet" loading={loading} value={result?.stack.geo.clinical_reframe_snippet} accent />
            <Field label="Permission grant snippet" loading={loading} value={result?.stack.geo.permission_grant_snippet} accent />
          </div>
        )}
      </Row>
    </div>
  );
}

function PressQuotes({ loading, result, accent }: { loading: boolean; result: PressQuotesResp | null; accent: string }) {
  const q = result?.quotes;
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="Three quote variants" badge="journalist can pick the angle that fits" tint={accent}>
        {empty ? <Empty mode="quotes" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuoteCard angle={q?.variant_a.angle} quote={q?.variant_a.quote} loading={loading} />
            <QuoteCard angle={q?.variant_b.angle} quote={q?.variant_b.quote} loading={loading} />
            <QuoteCard angle={q?.variant_c.angle} quote={q?.variant_c.quote} loading={loading} />
          </div>
        )}
      </Row>
      <Row title="Pull quote + cred block" badge="for the publication" tint="#f5f5f5">
        {empty ? <Empty mode="callout" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Suggested pull-quote line (the callout)" loading={loading} value={q?.suggested_pull_quote} accent />
            <Field label="Credentials block (for attribution)" loading={loading} value={q?.credentials} />
          </div>
        )}
      </Row>
    </div>
  );
}

function AeoPage({ loading, result, accent }: { loading: boolean; result: AeoPageResp | null; accent: string }) {
  const p = result?.page;
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="Page metadata" badge="/answers/<slug>" tint="#4F7A3C">
        {empty ? <Empty mode="page" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="URL slug" loading={loading} value={p?.url_slug} mono />
            <Field label="Meta title" loading={loading} value={p?.meta_title} />
            <Field label="H1 (declarative)" loading={loading} value={p?.h1} />
            <Field label="Meta description" loading={loading} value={p?.meta_description} cols={3} />
          </div>
        )}
      </Row>
      <Row title="Answer body" badge="what AI engines lift" tint={accent}>
        {empty ? <Empty mode="answer" /> : (
          <div className="grid grid-cols-1 gap-4">
            <Field label="Direct answer (SVO, names her by name)" loading={loading} value={p?.direct_answer} accent />
            <Field label="Full answer (mechanism + technique + practical step)" loading={loading} value={p?.full_answer} />
            <Field label="Ethics caveat" loading={loading} value={p?.ethics_caveat} />
          </div>
        )}
      </Row>
      <Row title="Schema markup" badge="paste into <head>" tint="#f5f5f5">
        {empty ? <Empty mode="schema" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="FAQPage Schema" loading={loading} value={safeJSON(p?.schema_faq_markup)} mono scroll />
            <Field label="Person Schema (author)" loading={loading} value={safeJSON(p?.schema_person_markup)} mono scroll />
          </div>
        )}
      </Row>
      <Row title="GEO snippets" badge="quote-ready" tint={accent}>
        {empty ? <Empty mode="GEO" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Definition snippet" loading={loading} value={p?.geo_snippets.definition_snippet} accent />
            <Field label="Three-signs snippet" loading={loading} value={p?.geo_snippets.three_signs_snippet} accent />
            <Field label="Clinical reframe snippet" loading={loading} value={p?.geo_snippets.clinical_reframe_snippet} accent />
            <Field label="Permission grant snippet" loading={loading} value={p?.geo_snippets.permission_grant_snippet} accent />
          </div>
        )}
      </Row>
    </div>
  );
}

function SampleTriage({ loading, result, accent }: { loading: boolean; result: SampleTriageResp | null; accent: string }) {
  const t = result?.triage;
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="Triage decision" badge="agent classifies, scores, picks sample pack" tint={accent}>
        {empty ? <Empty mode="triage" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field
              label="Primary category"
              loading={loading}
              value={t ? `${t.classification.primary_category} (${Math.round(t.classification.confidence * 100)}% confident)` : undefined}
              accent
            />
            <Field label="Fit score (0-100)" loading={loading} value={t?.fit_score?.toString()} accent />
            <Field label="Recommended sample pack" loading={loading} value={t?.recommended_sample_pack} accent />
            <Field label="Classification reasoning" loading={loading} value={t?.classification.reasoning} cols={3} />
            <Field label="Fit reasoning" loading={loading} value={t?.fit_reasoning} cols={3} />
            <Field label="Likely formulation problem TBF can solve" loading={loading} value={t?.likely_formulation_problem} cols={3} />
          </div>
        )}
      </Row>
      <Row title="Personalized follow-up email" badge="ready to send (human-review queue)" tint="#f5f5f5">
        {empty ? <Empty mode="email" /> : (
          <Card title="Email" meta={t ? `${wc(t.email.body)} words` : "—"} loading={loading} subject={t?.email.subject} text={t?.email.body} />
        )}
      </Row>
    </div>
  );
}

function BlogSplinter({ loading, result, accent }: { loading: boolean; result: BlogSplinterResp | null; accent: string }) {
  const s = result?.splinter;
  const empty = !loading && !result;
  return (
    <div className="space-y-6">
      <Row title="LinkedIn carousels" badge="3 carousels × ~5 slides each" tint={accent}>
        {empty ? <Empty mode="carousels" /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(s?.linkedin_carousels ?? [null, null, null]).map((c, i) => (
              <div key={i} className="border border-[color:var(--line)] rounded-lg p-4 bg-[color:var(--bg-panel)]">
                <p className="eyebrow">Carousel {i + 1}</p>
                {loading && !c && <div className="mt-3 space-y-2"><Skel /><Skel w="11/12" /><Skel w="10/12" /></div>}
                {c && (
                  <div className="mt-3 text-xs text-[color:var(--ink-2)] space-y-2 leading-relaxed">
                    <div className="font-medium">{c.hook}</div>
                    <div className="space-y-2 mt-2">
                      {c.slides.map((sl, j) => (
                        <div key={j} className="border-t border-[color:var(--line)] pt-2">
                          <div className="text-[10px] text-[color:var(--muted)]">Slide {j + 1}</div>
                          <div className="font-medium">{sl.headline}</div>
                          <div>{sl.body}</div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[color:var(--line)] pt-2 italic">{c.close}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Row>

      <Row title="X threads" badge="2 threads · hook + follow tweets + close" tint="#f5f5f5">
        {empty ? <Empty mode="threads" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(s?.x_threads ?? [null, null]).map((t, i) => (
              <div key={i} className="border border-[color:var(--line)] rounded-lg p-4 bg-[color:var(--bg-panel)]">
                <p className="eyebrow">Thread {i + 1}</p>
                {loading && !t && <div className="mt-3 space-y-2"><Skel /><Skel w="11/12" /></div>}
                {t && (
                  <div className="mt-3 text-xs text-[color:var(--ink-2)] space-y-2 leading-relaxed">
                    <div className="font-medium border-l-2 border-[color:var(--ink)] pl-2">{t.hook_tweet}</div>
                    {t.follow_tweets.map((tw, j) => (
                      <div key={j} className="border-l border-[color:var(--line)] pl-2">{tw}</div>
                    ))}
                    <div className="border-l-2 border-[color:var(--muted)] pl-2 italic">{t.close_tweet}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Row>

      <Row title="Instagram captions" badge="5 captions, 80-150 words each" tint={accent}>
        {empty ? <Empty mode="captions" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(s?.ig_captions ?? [null, null, null, null, null]).map((c, i) => (
              <div key={i} className="border border-[color:var(--line)] rounded-lg p-4 bg-[color:var(--bg-panel)]">
                <div className="flex items-baseline justify-between">
                  <p className="eyebrow">Caption {i + 1}</p>
                  <span className="text-[10px] text-[color:var(--muted)]">
                    {c ? `${wc(c)} words` : "—"}
                  </span>
                </div>
                {loading && !c && <div className="mt-3 space-y-2"><Skel /><Skel w="11/12" /><Skel w="10/12" /></div>}
                {c && <div className="mt-3 text-xs text-[color:var(--ink-2)] leading-relaxed whitespace-pre-wrap">{c}</div>}
              </div>
            ))}
          </div>
        )}
      </Row>

      <Row title="Cold email + key quotes" badge="outbound pitch + 3 tweet-ready pull quotes" tint="#f5f5f5">
        {empty ? <Empty mode="outbound" /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Cold-email pitch" meta={s ? `${wc(s.cold_email_pitch.body)} words` : "—"} loading={loading} subject={s?.cold_email_pitch.subject} text={s?.cold_email_pitch.body} />
            <div className="border border-[color:var(--line)] rounded-lg p-4 bg-[color:var(--bg-panel)]">
              <p className="eyebrow">Key quotes (drop as standalone tweets)</p>
              {loading && !s && <div className="mt-3 space-y-2"><Skel /><Skel w="11/12" /></div>}
              {s && (
                <ul className="mt-3 space-y-3">
                  {s.key_quotes.map((q, i) => (
                    <li key={i} className="text-xs text-[color:var(--ink-2)] leading-relaxed border-l-2 border-[color:var(--ink)] pl-3 italic">
                      {q}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Row>
    </div>
  );
}

// =============================================================
// Shared sub-components
// =============================================================

function Row({ title, badge, tint, children }: { title: string; badge: string; tint: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-xl tracking-tight" style={{ color: tint }}>{title}</h3>
          <span className="text-xs text-[color:var(--muted)]">{badge}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function SeoRow({ loading, value, empty }: { loading: boolean; value?: SeoBlock; empty: boolean }) {
  return (
    <Row title="SEO" badge="meta + schema + links" tint="#4F7A3C">
      {empty ? <Empty mode="SEO" /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field label="Meta title" loading={loading} value={value?.meta_title} mono />
          <Field label="H1" loading={loading} value={value?.h1} />
          <Field label="Primary keyword" loading={loading} value={value?.primary_keyword} mono />
          <Field label="Meta description" loading={loading} value={value?.meta_description} cols={3} />
          <Field label="Internal link suggestions" loading={loading} value={value?.internal_link_suggestions?.map((l) => `→ "${l.anchor}" → ${l.target_url}`).join("\n")} cols={3} mono />
          <Field label="Schema.org JSON-LD" loading={loading} value={safeJSON(value?.schema_jsonld)} cols={3} mono scroll />
        </div>
      )}
    </Row>
  );
}

function AeoRow({ loading, value, empty }: { loading: boolean; value?: AeoBlock; empty: boolean }) {
  return (
    <Row title="AEO" badge="answer-engine-optimized" tint="#7C5B3F">
      {empty ? <Empty mode="AEO" /> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Question (search query)" loading={loading} value={value?.question} cols={2} />
          <Field label="Direct answer (the snippet AI engines lift)" loading={loading} value={value?.direct_answer} cols={2} accent />
          <Field label="Full answer" loading={loading} value={value?.full_answer} cols={2} />
          <Field label="Schema.org FAQPage markup" loading={loading} value={safeJSON(value?.schema_faq_markup)} cols={2} mono scroll />
        </div>
      )}
    </Row>
  );
}

function Card({ title, meta, loading, subject, headline, text }: { title: string; meta: string; loading: boolean; subject?: string; headline?: string; text?: string }) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)] min-h-[200px]">
      <div className="flex items-baseline justify-between gap-2">
        <p className="eyebrow">{title}</p>
        <span className="text-[10px] text-[color:var(--muted)]">{meta}</span>
      </div>
      {loading && !text && (
        <div className="mt-4 space-y-2">
          <Skel /><Skel w="11/12" /><Skel w="10/12" /><Skel /><Skel w="9/12" />
        </div>
      )}
      {!loading && !text && (
        <p className="mt-6 text-sm text-[color:var(--muted)] italic">
          Run the agent above to see this surface populate live.
        </p>
      )}
      {text && (
        <div className="mt-4 text-sm text-[color:var(--ink-2)] leading-relaxed">
          {subject && (
            <p className="text-xs">
              <span className="text-[color:var(--muted)]">Subject:</span> {subject}
            </p>
          )}
          {headline && (
            <p className="font-display text-base leading-snug">{headline}</p>
          )}
          {(subject || headline) && <div className="h-3" />}
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      )}
    </div>
  );
}

function QuoteCard({ angle, quote, loading }: { angle?: string; quote?: string; loading: boolean }) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-4 bg-[color:var(--bg-elev)]">
      <p className="eyebrow">{angle ? `Variant · ${angle}` : "Variant"}</p>
      {loading && !quote && <div className="mt-3 space-y-2"><Skel /><Skel w="11/12" /><Skel w="10/12" /></div>}
      {quote && <p className="mt-3 text-sm text-[color:var(--ink-2)] leading-relaxed italic">"{quote}"</p>}
    </div>
  );
}

function Field({ label, loading, value, cols = 1, mono = false, scroll = false, accent = false }: { label: string; loading: boolean; value?: string; cols?: 1 | 2 | 3; mono?: boolean; scroll?: boolean; accent?: boolean }) {
  const span = cols === 3 ? "md:col-span-3" : cols === 2 ? "md:col-span-2" : "md:col-span-1";
  return (
    <div className={"border border-[color:var(--line)] rounded-lg p-4 " + (accent ? "bg-[color:var(--bg-elev)]" : "bg-[color:var(--bg-panel)]") + " " + span}>
      <p className="eyebrow">{label}</p>
      {loading && (
        <div className="mt-3 space-y-2"><Skel /><Skel w="10/12" /></div>
      )}
      {!loading && value && (
        <pre className={"mt-2 text-xs leading-relaxed whitespace-pre-wrap " + (mono ? "font-mono" : "") + " " + (scroll ? "max-h-44 overflow-y-auto" : "") + " text-[color:var(--ink-2)]"}>
          {value}
        </pre>
      )}
      {!loading && !value && (
        <p className="mt-3 text-xs text-[color:var(--muted)] italic">—</p>
      )}
    </div>
  );
}

function Empty({ mode }: { mode: string }) {
  return (
    <div className="border border-dashed border-[color:var(--line)] rounded-lg p-6 text-sm text-[color:var(--muted)] italic">
      Run the agent above to generate the {mode} block.
    </div>
  );
}

function Skel({ w }: { w?: string }) {
  return <div className={`h-3 rounded bg-[color:var(--line)] animate-pulse ${w ? `w-${w}` : "w-full"}`} />;
}

function wc(s?: string): number {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function safeJSON(maybe: string | undefined): string | undefined {
  if (!maybe) return undefined;
  try {
    return JSON.stringify(JSON.parse(maybe), null, 2);
  } catch {
    return maybe;
  }
}
