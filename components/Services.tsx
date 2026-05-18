const services = [
  {
    n: "01",
    title: "Brand Strategy & Storytelling",
    blurb:
      "Positioning, narrative architecture, voice, and the messaging system that ties every channel back to a single story. The work that makes the rest of the marketing actually mean something.",
    bullets: ["Positioning & messaging", "Narrative architecture", "Brand stewardship", "Creative direction"],
  },
  {
    n: "02",
    title: "Product Marketing & Launches",
    blurb:
      "End-to-end go-to-market for new products and re-launches. Customer and market research, messaging, launch creative, and cross-functional choreography between product, sales, and brand.",
    bullets: ["Launch strategy & GTM", "Market & customer research", "Messaging frameworks", "Cross-functional GTM"],
  },
  {
    n: "03",
    title: "Growth, Performance & Lifecycle",
    blurb:
      "The engine that turns story into demand. Paid media, SEO, CRO, and lifecycle programs built as one growth system, with creative testing and funnel analytics at the core.",
    bullets: ["Meta, Google, programmatic", "SEO & content strategy", "CRO & UX overhauls", "Lifecycle & CRM"],
  },
  {
    n: "04",
    title: "AI-Native Marketing",
    blurb:
      "Practical AI inside the marketing stack. Prompt systems, custom agents, content engines, AEO, and the automations that let a small team move like a large one.",
    bullets: ["Claude / OpenAI workflows", "Custom agents & scrapers", "AEO & content engines", "Workflow automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">What I do</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl leading-[1.02]">
              Brand first. Growth right behind it.
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--muted)]">
            Story is where it starts. Without a brand that means something, the rest is just
            noise. With it, growth and lifecycle do the work they were built for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--line)] border border-[color:var(--line)]">
          {services.map((s) => (
            <div
              key={s.n}
              className="bg-[color:var(--bg)] p-8 md:p-10 flex flex-col gap-4 hover:bg-[color:var(--bg-elev)] transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">{s.n}</span>
                <span className="text-[color:var(--muted)] text-xs">Practice area</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
                {s.title}
              </h3>
              <p className="text-[color:var(--ink-2)] leading-relaxed">{s.blurb}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-xs rounded-full border border-[color:var(--line)] px-3 py-1 text-[color:var(--muted)]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
