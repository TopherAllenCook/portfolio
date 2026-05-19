import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32 border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">Selected works</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl leading-[1.02]">
              Fifteen years of brand launches, rebuilds, and stories that scaled.
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--muted)] text-base">
            A short list of selected case studies. Click any entry for the full project.
          </p>
        </div>

        <ol className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {works.map((w, i) => (
            <li key={w.slug} className="group">
              <Link
                href={`/work/${w.slug}`}
                className="grid grid-cols-12 gap-4 md:gap-8 items-center py-6 md:py-7 transition-colors hover:bg-[color:var(--bg-elev)]/60 -mx-4 px-4 rounded-sm"
              >
                <div className="col-span-12 md:col-span-1 text-[color:var(--muted)] text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="hidden md:block md:col-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
                    <Image
                      src={w.image}
                      alt={`${w.client} preview`}
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
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
