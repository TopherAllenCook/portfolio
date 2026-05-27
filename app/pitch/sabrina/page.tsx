import Link from "next/link";
import RomanoffPitchBody from "@/components/RomanoffPitchBody";

export const metadata = {
  title: "Marketing Engineer Pitch — Dr. Sabrina Romanoff — Chris Cook",
  description:
    "A content operating system pitched to Dr. Sabrina Romanoff by Chris Cook, demonstrated on her own brand. Brain, agent, workflows. Press-cluster on autopilot.",
  robots: { index: false, follow: false },
};

export default function PitchSabrina() {
  return (
    <main className="flex-1">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
          <div className="flex items-baseline gap-3">
            <Link
              href="/"
              className="font-display text-xl tracking-tight hover:text-[color:var(--ink-2)] transition-colors"
            >
              Chris Cook
            </Link>
            <span className="text-[color:var(--muted)] text-sm">
              / Marketing Engineer Pitch
            </span>
          </div>
          <p className="text-xs text-[color:var(--muted)] tracking-widest uppercase">
            Prepared for Dr. Sabrina Romanoff · May 2026
          </p>
        </div>
      </header>

      <article className="pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-3">The Pitch</p>
              <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Press cluster on autopilot. Voice consistent across every surface.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-6">
              <p className="font-display text-2xl md:text-3xl leading-[1.2] text-[color:var(--ink)]">
                A Harvard-trained press cluster runs on a brain, an agent, and
                a few well-placed workflows.
              </p>
              <p className="text-[color:var(--ink-2)] text-base md:text-lg leading-relaxed max-w-2xl">
                I built the foundation before this conversation. Captured your
                voice from drsabrinaromanoff.com plus your aggregated press
                footprint, mapped the three-layer architecture, and shipped a
                live n8n workflow that returns press quote + Instagram + Reel
                script + podcast pitch + SEO + AEO + GEO in about a minute.
                Click through the brain. Run the demo.
              </p>
            </div>
          </div>

          <RomanoffPitchBody />

          <section className="mt-24 md:mt-32 border-t border-[color:var(--line)] pt-12">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-4">
                <p className="eyebrow mb-3">Next step</p>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
                  A 30-minute walkthrough.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-8 space-y-6">
                <p className="text-[color:var(--ink-2)] text-base md:text-lg leading-relaxed max-w-2xl">
                  Brain, workflows, and demo all exist as a working package.
                  The fastest way to evaluate fit is a screen share where I
                  walk through one of the eight automations end-to-end against
                  your actual press queue.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <a
                    href="mailto:topher.a.cook@gmail.com?subject=Marketing%20Engineer%20pitch%20walkthrough%20%E2%80%94%20Dr.%20Romanoff"
                    className="inline-flex items-center justify-between gap-3 rounded-md border border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--bg)] px-5 py-4 transition-opacity hover:opacity-90"
                  >
                    <span className="font-medium">Email Chris</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/christopherallencook"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-between gap-3 rounded-md border border-[color:var(--line)] bg-white/50 px-5 py-4 transition-colors hover:bg-white"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <Link
                    href="/work/sabrina-romanoff"
                    className="inline-flex items-center justify-between gap-3 rounded-md border border-[color:var(--line)] bg-white/50 px-5 py-4 transition-colors hover:bg-white"
                  >
                    <span className="font-medium">Portfolio case study</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <p className="text-sm text-[color:var(--muted)] pt-3">
                  Chris Cook · Lehi, Utah ·{" "}
                  <a href="mailto:topher.a.cook@gmail.com" className="link-underline">
                    topher.a.cook@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
