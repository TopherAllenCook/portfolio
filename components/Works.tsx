import Image from "next/image";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32 border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-3">Selected works</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl leading-[1.02]">
              Fifteen years of brand launches, rebuilds, and stories that scaled.
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--muted)] text-base">
            Case studies across consumer wellness, higher ed, B2B SaaS, and bestselling author
            brands. Brand stewardship, narrative work, and the growth programs underneath.
          </p>
        </div>

        <ol className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {works.map((w, i) => (
            <li key={w.slug} className="group">
              <a
                href={`#work-${w.slug}`}
                className="grid grid-cols-12 gap-4 md:gap-8 items-center py-6 md:py-8 transition-colors hover:bg-[color:var(--bg-elev)]/60 -mx-4 px-4 rounded-sm"
              >
                <div className="col-span-12 md:col-span-1 text-[color:var(--muted)] text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="hidden md:block md:col-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
                    <Image
                      src={w.image}
                      alt={`${w.client} site preview`}
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                    {w.client}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">
                    {w.role} · {w.period}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 text-[color:var(--ink-2)] text-base md:text-lg leading-snug">
                  {w.headline}
                </div>
                <div className="col-span-12 md:col-span-1 flex md:justify-end">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] group-hover:bg-[color:var(--ink)] group-hover:text-[color:var(--bg)] group-hover:border-[color:var(--ink)] transition-colors"
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-24 space-y-32">
          {works.map((w) => (
            <article
              key={w.slug}
              id={`work-${w.slug}`}
              className="scroll-mt-24"
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10 mb-8">
                <div className="col-span-12 md:col-span-4">
                  <p className="eyebrow mb-2">{w.category}</p>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
                    {w.client}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {w.role}
                    <br />
                    {w.period}
                  </p>
                  {w.link ? (
                    <a
                      href={w.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-1 text-sm link-underline"
                    >
                      {w.link.label}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 10L10 2M10 2H4M10 2v6"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : null}
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="font-display text-2xl md:text-3xl leading-snug text-[color:var(--ink)]">
                    {w.headline}
                  </p>
                </div>
              </div>

              <a
                href={w.link?.href ?? `#work-${w.slug}`}
                target={w.link ? "_blank" : undefined}
                rel={w.link ? "noreferrer noopener" : undefined}
                className="block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] group"
              >
                <Image
                  src={w.image}
                  alt={`${w.client} hero`}
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority={w.slug === works[0].slug}
                />
                {w.link ? (
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)]/85 text-[color:var(--bg)] px-3 py-1.5 text-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit {w.link.label}
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : null}
              </a>

              <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10">
                <div className="col-span-12 md:col-span-4" />
                <div className="col-span-12 md:col-span-8 space-y-8">
                  <p className="text-[color:var(--ink-2)] text-base md:text-lg leading-relaxed max-w-2xl">
                    {w.summary}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    {w.metrics.map((m) => (
                      <div key={m.label} className="border-t border-[color:var(--line)] pt-3">
                        <div
                          className="font-display text-2xl md:text-3xl tracking-tight"
                          style={{ color: w.accent ?? "var(--ink)" }}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-[color:var(--muted)] mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 pt-2">
                    {w.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-[color:var(--ink-2)] text-base leading-relaxed"
                      >
                        <span
                          className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--ink)] flex-shrink-0"
                          aria-hidden
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
