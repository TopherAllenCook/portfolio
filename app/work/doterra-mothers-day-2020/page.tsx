import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MothersDayCaseBody from "@/components/MothersDayCaseBody";
import { works } from "@/lib/works";

const SLUG = "doterra-mothers-day-2020";

export async function generateMetadata() {
  const work = works.find((w) => w.slug === SLUG);
  if (!work) return {};
  return {
    title: `${work.client} · Chris Cook`,
    description: work.headline,
  };
}

export default function MothersDayCaseStudy() {
  const work = works.find((w) => w.slug === SLUG)!;
  const idx = works.findIndex((w) => w.slug === SLUG);
  const next = works[(idx + 1) % works.length];

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 2L2 10M2 10h6M2 10V4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All works
            </Link>

            <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10 mb-10">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-3">{work.category}</p>
                <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02]">
                  {work.client}
                </h1>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {work.role}
                  <br />
                  {work.period}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="font-display text-2xl md:text-4xl leading-[1.15] text-[color:var(--ink)]">
                  {work.headline}
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
              <Image
                src={work.image}
                alt="doTERRA Precious Florals Mother's Day 2020 campaign"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <MothersDayCaseBody />

            <section className="mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-3">07 · Project shape</p>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
                  At a glance.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-8 space-y-8">
                <p className="text-[color:var(--ink-2)] text-base md:text-lg leading-relaxed max-w-2xl">
                  {work.summary}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {work.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="border-t border-[color:var(--line)] pt-3"
                    >
                      <div
                        className="font-display text-2xl md:text-3xl tracking-tight"
                        style={{ color: work.accent ?? "var(--ink)" }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs text-[color:var(--muted)] mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2">
                  {work.highlights.map((h) => (
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
            </section>

            <div className="mt-24 pt-10 border-t border-[color:var(--line)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 2L2 10M2 10h6M2 10V4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                All works
              </Link>
              <Link
                href={`/work/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm text-[color:var(--ink)] hover:text-[color:var(--ink-2)] transition-colors"
              >
                Next: {next.client}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 10L10 2M10 2H4M10 2v6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
