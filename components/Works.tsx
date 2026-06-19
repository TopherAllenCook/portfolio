import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <section
      id="work"
      className="py-24 md:py-36 border-t border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="bracket mb-5 inline-flex">Work</span>
            <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] max-w-3xl">
              Selected
              <br />
              works
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--muted)] text-base leading-relaxed">
            Fifteen years of brand launches, rebuilds, and stories that scaled.
            Select any entry for the full case study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {works.map((w, i) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group relative block overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={w.image}
                  alt={`${w.client} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
                />
                {/* gradient + overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[color:var(--accent)]/0 group-hover:bg-[color:var(--accent)]/[0.08] transition-colors duration-500" />

                {/* index */}
                <span className="absolute top-4 left-5 text-[11px] font-semibold tracking-[0.2em] text-white/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* VIEW affordance */}
                <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 rounded-md bg-[color:var(--accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* bottom text block */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-2">
                    {w.category}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white leading-tight">
                    {w.client}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-snug max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500">
                    {w.headline}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-5 md:px-6 py-4 border-t border-[color:var(--line)]">
                <span className="text-xs uppercase tracking-[0.1em] text-[color:var(--muted)]">
                  {w.role}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-[color:var(--muted)]">
                  {w.period}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
