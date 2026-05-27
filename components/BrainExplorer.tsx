"use client";

import { useEffect, useState } from "react";

const BRAIN_FILES: { slug: string; title: string; tagline: string; emoji: string }[] = [
  { slug: "voice-manual", title: "voice-manual.md", tagline: "9-axis stylometric profile. The system prompt for every agent.", emoji: "🎙️" },
  { slug: "brand-canon", title: "brand-canon.md", tagline: "Verbatim one-liners and trademarked phrasings.", emoji: "📜" },
  { slug: "product-catalog", title: "product-catalog.md", tagline: "Every SKU by aroma family. Real names, real numbers.", emoji: "📦" },
  { slug: "formulator-personas", title: "formulator-personas.md", tagline: "Four B2B reader profiles with vocabulary keys.", emoji: "👥" },
  { slug: "seo-keywords", title: "seo-keywords.md", tagline: "Keyword universe + on-page schema requirements.", emoji: "🔍" },
  { slug: "aeo-questions", title: "aeo-questions.md", tagline: "20 questions formulators ask AI engines.", emoji: "💬" },
  { slug: "geo-snippets", title: "geo-snippets.md", tagline: "Quote-ready definitions, comparisons, statistics.", emoji: "✂️" },
  { slug: "harvest-vintages", title: "harvest-vintages.md", tagline: "Vintage timeline 2003-2025 with operational facts.", emoji: "🌱" },
  { slug: "research-corpus", title: "research-corpus.md", tagline: "The peer-reviewed citation backbone.", emoji: "📚" },
  { slug: "automation-stack", title: "automation-stack.md", tagline: "Live workflows + the queued roadmap.", emoji: "⚙️" },
];

type Cache = Record<string, string>;

export default function BrainExplorer() {
  const [active, setActive] = useState<string>("voice-manual");
  const [cache, setCache] = useState<Cache>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache[active]) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/brain/${active}.md`)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load ${active}.md (${r.status})`);
        return r.text();
      })
      .then((text) => {
        if (cancelled) return;
        setCache((prev) => ({ ...prev, [active]: text }));
      })
      .catch((e) => !cancelled && setError(String(e)))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [active, cache]);

  const activeFile = BRAIN_FILES.find((f) => f.slug === active)!;
  const body = cache[active];
  const wordCount = body ? body.trim().split(/\s+/).filter(Boolean).length : 0;

  return (
    <div className="not-prose grid grid-cols-12 gap-4 md:gap-5 border border-[color:var(--line)] rounded-lg bg-white/40 overflow-hidden">
      {/* File tree */}
      <aside className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-[color:var(--line)] bg-white/60">
        <div className="p-4 border-b border-[color:var(--line)]">
          <p className="eyebrow">.tbf-voice/brain/</p>
          <p className="text-xs text-[color:var(--muted)] mt-1">
            {BRAIN_FILES.length} files · ~50KB · git-versioned · human-editable
          </p>
        </div>
        <ul className="divide-y divide-[color:var(--line)] max-h-[520px] overflow-y-auto">
          {BRAIN_FILES.map((f) => (
            <li key={f.slug}>
              <button
                onClick={() => setActive(f.slug)}
                className={
                  "w-full text-left px-4 py-3 transition-colors " +
                  (active === f.slug
                    ? "bg-[color:var(--bg-elev)]"
                    : "hover:bg-[color:var(--bg-elev)]/50")
                }
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-base">{f.emoji}</span>
                  <span className="font-mono text-sm text-[color:var(--ink)]">
                    {f.title}
                  </span>
                </div>
                <p className="text-xs text-[color:var(--muted)] leading-snug mt-1 pl-7">
                  {f.tagline}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content viewer */}
      <section className="col-span-12 md:col-span-8 bg-white/30">
        <div className="px-5 py-4 border-b border-[color:var(--line)] flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span>{activeFile.emoji}</span>
            <span className="font-mono text-sm">{activeFile.title}</span>
          </div>
          <span className="text-[10px] tabular-nums text-[color:var(--muted)]">
            {wordCount.toLocaleString()} words
          </span>
        </div>
        <div className="px-5 py-5 max-h-[600px] overflow-y-auto">
          {loading && (
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 rounded bg-[color:var(--line)] animate-pulse"
                  style={{ width: `${60 + Math.random() * 35}%` }}
                />
              ))}
            </div>
          )}
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          {!loading && !error && body && (
            <pre className="text-xs md:text-[13px] leading-relaxed text-[color:var(--ink-2)] whitespace-pre-wrap font-mono">
              {body}
            </pre>
          )}
        </div>
      </section>
    </div>
  );
}
