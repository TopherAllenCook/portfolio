const capabilities = [
  {
    n: "01",
    title: "Brand & Story",
    blurb:
      "Positioning, narrative architecture, voice, brand stewardship, and creative direction. The work that makes the rest of the marketing actually mean something.",
  },
  {
    n: "02",
    title: "Product Marketing",
    blurb:
      "Launches and go-to-market, positioning, market and customer research, and the messaging frameworks that tie product, sales, and brand together.",
  },
  {
    n: "03",
    title: "Growth",
    blurb:
      "Paid media, SEO, CRO, and funnel architecture built as one growth system, with creative testing and analytics at the core. Vendor and agency management included.",
  },
  {
    n: "04",
    title: "Lifecycle",
    blurb:
      "Email and CRM programs, segmentation, and automation across Marketo and HubSpot. The engine that keeps a customer relationship moving after the first touch.",
  },
  {
    n: "05",
    title: "AI & Automation",
    blurb:
      "Practical AI inside the marketing stack: Claude, ChatGPT, Midjourney, custom agents, prompt engineering, AEO, and the workflow automation that lets a small team move like a large one.",
  },
  {
    n: "06",
    title: "Leadership",
    blurb:
      "Direct-report teams, cross-functional alignment, and executive presentation. Pulling brand, product, and growth in the same direction toward a shared number.",
  },
];

export default function Services() {
  return (
    <section
      id="capabilities"
      className="py-24 md:py-36 border-t border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="bracket mb-5 inline-flex">Services</span>
            <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] max-w-3xl">
              Capabilities
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--muted)] text-base leading-relaxed">
            Story is where it starts. Without a brand that means something, the
            rest is just noise. With it, growth and lifecycle do the work they
            were built for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-xl overflow-hidden">
          {capabilities.map((c) => (
            <div
              key={c.n}
              className="bg-[color:var(--bg-elev)] p-7 md:p-9 flex flex-col gap-4 hover:bg-[color:var(--bg-panel)] transition-colors duration-300 min-h-[280px]"
            >
              <div className="flex items-center justify-between">
                <span className="bracket bracket-muted text-[11px]">
                  Capability
                </span>
                <span className="font-display text-2xl text-[color:var(--muted)] tabular-nums">
                  {c.n}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-[1.05] mt-2">
                {c.title}
              </h3>
              <p className="text-[color:var(--muted)] text-[15px] leading-relaxed">
                {c.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
