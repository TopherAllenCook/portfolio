export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10 reveal">
          <span className="block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
          <p className="eyebrow">Available for senior brand &amp; marketing roles, 2026</p>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.96] tracking-tight max-w-5xl reveal reveal-delay-1">
          Brand stories that <em className="italic text-[color:var(--accent)]">connect</em>,
          <br className="hidden sm:block" />
          growth engines that <em className="italic">convert</em>.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-[color:var(--ink-2)] leading-relaxed reveal reveal-delay-2">
          I&rsquo;m Chris, a brand manager and storyteller with a builder&rsquo;s bias. Fifteen
          years of positioning, narrative work, and product launches, paired with the technical
          growth and lifecycle systems that turn stories into measurable demand.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 reveal reveal-delay-3">
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--ink-2)] transition-colors"
          >
            View selected works
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-medium hover:bg-[color:var(--bg-elev)] transition-colors"
          >
            Book a 15 min intro call
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal reveal-delay-3">
          <Stat value="40+" label="Products launched" />
          <Stat value="$120M+" label="Revenue contribution" />
          <Stat value="150%+" label="Lead growth YoY" />
          <Stat value="15 yrs" label="Marketing experience" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[color:var(--line)] pt-4">
      <div className="font-display text-4xl md:text-5xl tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-[color:var(--muted)]">{label}</div>
    </div>
  );
}
