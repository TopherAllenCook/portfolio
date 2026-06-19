"use client";

import { useEffect, useState } from "react";
import { getBrand } from "@/lib/brands";

type Cache = Record<string, string>;

export default function BrainExplorer({ brandSlug }: { brandSlug: string }) {
  const brand = getBrand(brandSlug);
  const firstSlug = brand.brainFiles[0].slug;
  const [active, setActive] = useState<string>(firstSlug);
  const [cache, setCache] = useState<Cache>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset cache + active file when brand changes
  useEffect(() => {
    setCache({});
    setActive(brand.brainFiles[0].slug);
  }, [brand.slug, brand.brainFiles]);

  useEffect(() => {
    if (cache[active]) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`${brand.brainBase}/${active}.md`)
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
  }, [active, cache, brand.brainBase]);

  const activeFile = brand.brainFiles.find((f) => f.slug === active)!;
  const body = cache[active];
  const wordCount = body ? body.trim().split(/\s+/).filter(Boolean).length : 0;

  return (
    <div className="not-prose grid grid-cols-12 gap-4 md:gap-5 border border-[color:var(--line)] rounded-lg bg-[color:var(--bg-panel)] overflow-hidden">
      {/* File tree */}
      <aside className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-[color:var(--line)] bg-[color:var(--bg-panel)]">
        <div className="p-4 border-b border-[color:var(--line)]">
          <p className="eyebrow">{brand.brainBase.replace(/^\//, ".")}/ </p>
          <p className="text-xs text-[color:var(--muted)] mt-1">
            {brand.brainFiles.length} files · git-versioned · human-editable
          </p>
        </div>
        <ul className="divide-y divide-[color:var(--line)] max-h-[520px] overflow-y-auto">
          {brand.brainFiles.map((f) => (
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
      <section className="col-span-12 md:col-span-8 bg-[color:var(--bg-elev)]">
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
