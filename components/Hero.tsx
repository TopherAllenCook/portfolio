export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8 reveal">
          <span className="bracket">Brand · Growth · AI</span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            AI marketing consultant · Fractional, 2026
          </span>
        </div>

        <h1 className="display-xl text-[clamp(3.5rem,16vw,14rem)] reveal reveal-delay-1">
          Chris
          <br />
          Cook
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <p className="lg:col-span-7 max-w-2xl text-lg md:text-xl text-[color:var(--ink-2)] leading-relaxed reveal reveal-delay-2">
            An AI-native marketing consultant with fifteen years of brand and
            growth behind him. I embed with lean teams &mdash; fractional
            &mdash; and put AI inside the marketing stack, so a small team ships
            like a large one: coherent brand, growth that converts, and the
            automation that makes it move.
          </p>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end reveal reveal-delay-3">
            <a href="mailto:topher.a.cook@gmail.com" className="btn btn-primary">
              topher.a.cook@gmail.com
            </a>
            <a href="/#work" className="btn btn-ghost">
              View work
            </a>
          </div>
        </div>
      </div>

      <a
        href="/#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--ink)] transition-colors reveal reveal-delay-4"
      >
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
          <rect
            x="1"
            y="1"
            width="12"
            height="20"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="7" cy="7" r="1.6" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
