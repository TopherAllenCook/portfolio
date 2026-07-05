// AI Bliss — the productized, subscription offer. Modeled on the DesignJoy
// playbook: one flat monthly price, one request at a time, async, pause anytime.
// This is the leverage layer of the practice — recurring revenue, standardized
// delivery, AI doing the production so margin expands over time.

const steps = [
  {
    n: "01",
    title: "Subscribe",
    blurb:
      "Pick a plan and you are in. No scoping calls, no six-week proposals. Onboarding is a short async brief.",
  },
  {
    n: "02",
    title: "Request",
    blurb:
      "Add requests to your board and prioritize them however you like. One active request at a time, unlimited in the queue.",
  },
  {
    n: "03",
    title: "Delivered in days",
    blurb:
      "AI-native production means most requests land in 2 to 4 days. Revise as many times as you need until it is right.",
  },
  {
    n: "04",
    title: "Pause anytime",
    blurb:
      "Only need it some months? Pause and keep your remaining days for later. Cancel whenever. No lock-in, ever.",
  },
];

const requests = [
  "Landing pages",
  "Email & CRM flows",
  "Ad creative batches",
  "Custom AI agents",
  "Marketing automations",
  "Campaign builds",
  "Content systems",
  "Analytics dashboards",
];

const plans = [
  {
    name: "Solo",
    price: "$7,995",
    cadence: "/ month",
    tagline: "One request at a time.",
    features: [
      "One active request at a time",
      "Unlimited requests & revisions",
      "AI-native production, 2–4 day turnarounds",
      "Async board, no standing meetings",
      "Pause or cancel anytime",
    ],
    featured: false,
  },
  {
    name: "Double",
    price: "$12,995",
    cadence: "/ month",
    tagline: "Two requests in parallel.",
    features: [
      "Two active requests at a time",
      "Everything in Solo",
      "Priority queue & faster turnarounds",
      "Quarterly strategy session included",
      "Pause or cancel anytime",
    ],
    featured: true,
  },
];

export default function AiBliss() {
  return (
    <section
      id="ai-bliss"
      className="py-24 md:py-36 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="bracket mb-5 inline-flex">Productized</span>
            <h2 className="display-xl text-[clamp(3rem,10vw,9rem)]">
              AI Bliss
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--ink-2)] text-lg leading-relaxed">
            An AI-native marketing team on subscription. One request at a time,
            delivered in days. Pause or cancel anytime. The output of a full
            department, without the overhead of one.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-xl overflow-hidden mb-20">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-[color:var(--bg-panel)] p-7 md:p-9 flex flex-col gap-4 min-h-[240px]"
            >
              <div className="flex items-center justify-between">
                <span className="bracket bracket-muted text-[11px]">Step</span>
                <span className="font-display text-2xl text-[color:var(--muted)] tabular-nums">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-tight leading-[1.05] mt-1">
                {s.title}
              </h3>
              <p className="text-[color:var(--muted)] text-[15px] leading-relaxed">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>

        {/* What counts as a request */}
        <div className="mb-20">
          <span className="bracket bracket-muted mb-6 inline-flex">
            One request means
          </span>
          <div className="flex flex-wrap gap-3">
            {requests.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] px-5 py-2.5 text-sm text-[color:var(--ink-2)]"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-8 md:p-10 flex flex-col border ${
                p.featured
                  ? "border-[color:var(--accent)] bg-[color:var(--bg-panel)]"
                  : "border-[color:var(--line)] bg-[color:var(--bg-panel)]"
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-3xl tracking-tight">
                  {p.name}
                </h3>
                {p.featured && (
                  <span className="bracket text-[11px]">Most popular</span>
                )}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="display-xl text-[clamp(2.5rem,6vw,4rem)] tabular-nums">
                  {p.price}
                </span>
                <span className="text-[color:var(--muted)] text-lg">
                  {p.cadence}
                </span>
              </div>
              <p className="text-[color:var(--ink-2)] mb-8">{p.tagline}</p>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[color:var(--ink-2)] leading-relaxed"
                  >
                    <span
                      className="text-[color:var(--accent)] mt-1 select-none"
                      aria-hidden
                    >
                      ✦
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
              >
                Start with {p.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[color:var(--muted)] max-w-xl leading-relaxed">
          Not sure which fits? Start on either plan and switch anytime — a
          15-minute intro call sorts it out fast.
        </p>
      </div>
    </section>
  );
}
