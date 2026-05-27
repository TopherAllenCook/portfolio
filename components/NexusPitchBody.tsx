import Image from "next/image";

// Shared body of the Nexus / Terpene Belt Farms Marketing Engineer pitch.
// Used by both the portfolio case-study page (/work/nexus-marketing-engineer)
// and the standalone direct-link pitch (/pitch/nexus).

const ACCENT = "#4F7A3C";

export default function NexusPitchBody() {
  return (
    <>
      {/* Architecture SVG hero */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
        <Image
          src="/works/nexus-marketing-engineer.svg"
          alt="Three-layer marketing engineering architecture: Obsidian brain, Claude agent, n8n workflows"
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <Section eyebrow="01 · The Proposition" title="A content system, not a content service.">
        <p>
          Most marketing partners ship deliverables. A marketing engineer ships a
          system that ships deliverables. The pitch for Nexus / Terpene Belt
          Farms is simple: turn the harvest cadence, the lab cadence, and the
          press cadence into one content cadence. One brain. One agent. One
          workflow engine. Everything written, drafted, and queued on the first
          pass already sounds like TBF.
        </p>
        <p>
          I built the foundation for you before this conversation. The voice is
          extracted. The architecture is mapped. The first day is loaded.
        </p>
      </Section>

      <Section eyebrow="02 · The Architecture" title="Brain, agent, workflows. Three layers, one operating system.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 not-prose">
          <ArchCard
            index="01"
            title="Brain"
            subtitle="Obsidian / Markdown vault"
            tint="#161512"
            body="The persistent memory of the brand. Voice Manual, product catalog, COA library, formulator personas, brand canon, harvest journal, competitor briefs, research corpus. Files, not a database. Versioned in git. Human-editable. The single source of truth every other layer reads from."
          />
          <ArchCard
            index="02"
            title="Agent"
            subtitle="Claude Code · skills · MCP"
            tint="#4F7A3C"
            body="The executor. Reads the entire brain on every task. Talks to Gmail, Calendar, Airtable, Slack, Firecrawl, GA4 through MCP skills. Drafts blogs, LinkedIn posts, IG captions, cold emails, and PR replies. Voice Manual loads first, every time."
          />
          <ArchCard
            index="03"
            title="Workflows"
            subtitle="n8n · triggers + plumbing"
            tint="#b94a2c"
            body="The cadence engine. Webhooks fire the agent when a sample-pack request lands. Cron fires the agent every Friday for the founder digest. RSS fires the agent when a relevant terpene paper hits PubMed. n8n is the wiring, not the brain."
          />
        </div>
      </Section>

      <Section
        eyebrow="03 · The Voice Manual"
        title="Day-one deliverable: a 9-axis stylometric profile of the brand."
      >
        <p>
          Before any automation gets wired, the agent needs to know what TBF
          sounds like. I scraped the public web corpus (About page plus eight
          long-form blog posts, roughly 6,000 words of brand prose) and ran a
          9-axis stylometric analysis. The output is a versioned Voice Manual
          that loads as a system-prompt prefix into every downstream draft.
        </p>
        <div className="not-prose mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {VOICE_AXES.map((row) => (
            <div
              key={row.n}
              className="border border-[color:var(--line)] rounded-md p-4 bg-white/40"
            >
              <span className="text-[10px] tabular-nums text-[color:var(--muted)]">
                AXIS {row.n.padStart(2, "0")}
              </span>
              <div className="font-display text-lg leading-tight mt-1">
                {row.t}
              </div>
              <div className="text-sm text-[color:var(--ink-2)] mt-2 leading-snug">
                {row.d}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--muted)]">
          The full Voice Manual sits in the brain and reloads before every
          draft. Every agent gets a copy. Every output is checkable against it.
        </p>
      </Section>

      <Section
        eyebrow="04 · The Roadmap"
        title="Eight n8n automations, ranked by ROI for the formulator audience."
      >
        <div className="not-prose space-y-3 mt-2">
          {ROADMAP.map((a) => (
            <div
              key={a.rank}
              className="grid grid-cols-12 gap-4 md:gap-6 items-start border-t border-[color:var(--line)] pt-5"
            >
              <div className="col-span-12 md:col-span-1">
                <div
                  className="font-display text-2xl"
                  style={{ color: ACCENT }}
                >
                  {a.rank}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-display text-xl md:text-2xl leading-tight">
                  {a.name}
                </div>
                <div className="text-xs text-[color:var(--muted)] mt-2 space-y-0.5">
                  <div>
                    <span className="font-medium text-[color:var(--ink-2)]">
                      Trigger:
                    </span>{" "}
                    {a.trigger}
                  </div>
                  <div>
                    <span className="font-medium text-[color:var(--ink-2)]">
                      Impact:
                    </span>{" "}
                    {a.impact}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 text-[color:var(--ink-2)] leading-relaxed">
                {a.why}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="05 · The Demo"
        title="One real news event. Four polished surfaces. Generated against the Voice Manual."
      >
        <p>
          In February 2026, Nexus Agriscience was selected for a UCLA-led,
          California state-funded cannabis research grant, with TBF supplying
          the native-terpene input dataset. Below: the four drafts the system
          would produce from that single news input. None of these were
          hand-tuned for tone. The Voice Manual carries the brand voice.
        </p>
        <div className="not-prose mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <DemoCard
            surface="Instagram caption"
            meta="~120 words · IG feed"
            body={
              <>
                <p>
                  A peer-reviewed cannabis study, run on Fresh Never Frozen®
                  terpenes, with a UCLA lab on the masthead.
                </p>
                <p className="mt-2">
                  This month, our parent (Nexus Agriscience) was selected for a
                  California state-funded research grant led by UCLA. Our oils
                  are the input. The work will look at how solventless,
                  cannabis-derived terpene profiles behave when they leave the
                  lab and enter real product matrices.
                </p>
                <p className="mt-2">
                  Sample packs and technical conversations: link in bio.
                </p>
              </>
            }
          />
          <DemoCard
            surface="LinkedIn post"
            meta="~270 words · founder voice"
            body={
              <>
                <p>
                  A short note on the UCLA cannabis research grant our parent
                  company received last week.
                </p>
                <p className="mt-2">
                  Most published research on cannabis terpenes runs on
                  standards, isolates, or reconstituted profiles. That is the
                  right starting point for science at scale. But it leaves a
                  gap: full-spectrum native cannabis terpenes, captured fresh
                  and never frozen, behave differently than the sum of their
                  isolates.
                </p>
                <p className="mt-2">
                  The work UCLA is leading, supported by Nexus, will use our
                  2023-2025 vintages as one input dataset. That changes what
                  formulators will be able to cite in 12-18 months.
                </p>
              </>
            }
          />
          <DemoCard
            surface="Cold email"
            meta="~140 words · to R&D directors"
            body={
              <>
                <p className="text-sm">
                  <span className="text-[color:var(--muted)]">Subject:</span> A
                  new dataset on full-spectrum terpene behavior in vape carts
                </p>
                <p className="mt-3">Hi [First name],</p>
                <p className="mt-2">
                  Short note from Terpene Belt Farms. Our parent (Nexus
                  Agriscience) was selected this month for a California
                  state-funded research grant led by UCLA. Our 2023-2025
                  harvest oils are one of the input datasets.
                </p>
                <p className="mt-2">
                  Happy to send a sample pack of the 2024 harvest (5 profiles,
                  low minimums) or do a 15-minute technical call on what we are
                  seeing in real cart matrices.
                </p>
              </>
            }
          />
          <DemoCard
            surface="Blog opener"
            meta="lede only · for terpenebeltfarms.com/blogs"
            body={
              <>
                <p className="font-display text-base leading-snug">
                  Cannabis Terpene Research Joins UCLA: What a State-Funded
                  Grant Means for Formulators
                </p>
                <p className="mt-3">
                  The peer-reviewed cannabis terpene literature has a known
                  gap: most published work uses isolate standards or
                  reconstituted profiles, not the full-spectrum native cannabis
                  oils that B2B formulators actually buy and put into product.
                  The gap is structural, not malicious.
                </p>
                <p className="mt-2">
                  In February 2026, our parent company at Nexus Agriscience was
                  selected for a California state-funded research grant led by
                  UCLA. Below: why the gap exists, what the work will cover,
                  and what product developers should expect to cite in 12-18
                  months.
                </p>
              </>
            }
          />
        </div>
      </Section>

      <Section
        eyebrow="06 · The First 90 Days"
        title="A concrete sequence. Compounding outputs. Nothing speculative."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <PhaseCard
            phase="Weeks 1-2"
            title="Brain online"
            points={[
              "Voice Manual v1 finalized with founder review",
              "Product catalog + COA library imported to Obsidian",
              "Formulator personas authored (vape, beverage, edible, distributor)",
              "Brand canon + competitor briefs seeded",
            ]}
          />
          <PhaseCard
            phase="Weeks 3-6"
            title="First two automations live"
            points={[
              "Sample-Pack Triage Agent shipped + measured",
              "Vintage Release Engine wired to next COA drop",
              "Founder digest running every Friday",
              "Approval queue in Airtable, single founder login",
            ]}
          />
          <PhaseCard
            phase="Weeks 7-12"
            title="Scale across surfaces"
            points={[
              "Blog Splinter live — every existing blog backfilled into multi-platform",
              "Research Watcher running daily on PubMed + trade press",
              "Formulator Q&A bot answering DMs with cited replies",
              "Newsletter automation publishing weekly to a real list",
            ]}
          />
        </div>
        <p className="mt-8 text-[color:var(--ink-2)] leading-relaxed max-w-3xl">
          By end of quarter, the brand is publishing roughly eight pieces of
          formulator-targeted content per week, every harvest auto-generates a
          content release, every sample request gets a personalized technical
          follow-up, and the founder gets a one-page cockpit view every Friday.
          All of it sounds like TBF on the first pass. None of it required a
          human to write tone notes for each surface. That is the compounding
          effect of building the brain first.
        </p>
      </Section>
    </>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10">
      <div className="col-span-12 md:col-span-4">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
          {title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-8 space-y-5 text-[color:var(--ink-2)] text-base md:text-lg leading-relaxed max-w-2xl">
        {children}
      </div>
    </section>
  );
}

function ArchCard({
  index,
  title,
  subtitle,
  tint,
  body,
}: {
  index: string;
  title: string;
  subtitle: string;
  tint: string;
  body: string;
}) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-white/50 h-full flex flex-col">
      <span className="text-[10px] tabular-nums text-[color:var(--muted)] tracking-widest">
        LAYER {index}
      </span>
      <div className="font-display text-2xl mt-1" style={{ color: tint }}>
        {title}
      </div>
      <div className="text-xs text-[color:var(--muted)] mt-1 mb-3">
        {subtitle}
      </div>
      <p className="text-sm text-[color:var(--ink-2)] leading-relaxed">{body}</p>
    </div>
  );
}

function DemoCard({
  surface,
  meta,
  body,
}: {
  surface: string;
  meta: string;
  body: React.ReactNode;
}) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-white/60">
      <div className="flex items-baseline justify-between gap-2">
        <p className="eyebrow">{surface}</p>
        <span className="text-[10px] text-[color:var(--muted)]">{meta}</span>
      </div>
      <div className="mt-4 text-sm text-[color:var(--ink-2)] leading-relaxed">
        {body}
      </div>
    </div>
  );
}

function PhaseCard({
  phase,
  title,
  points,
}: {
  phase: string;
  title: string;
  points: string[];
}) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-white/50 h-full">
      <p className="eyebrow">{phase}</p>
      <div className="font-display text-xl md:text-2xl tracking-tight leading-tight mt-1">
        {title}
      </div>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li
            key={p}
            className="flex gap-2.5 text-sm text-[color:var(--ink-2)] leading-snug"
          >
            <span
              className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[color:var(--ink)] flex-shrink-0"
              aria-hidden
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const VOICE_AXES = [
  { n: "1", t: "Audience & register", d: "B2B formulator, second-person plural, college-educated technical" },
  { n: "2", t: "Sentence architecture", d: "Claim → mechanism → strategic implication, 2-4 sentence grafs" },
  { n: "3", t: "Vocabulary palette", d: "Fresh Never Frozen®, fragrance farming, vintage, terroir, sesquiterpene" },
  { n: "4", t: "Rhetorical moves", d: "Eight recurring scaffolds (myth → mechanism, data drop, tiered matrix)" },
  { n: "5", t: "Authority markers", d: "Specificity over hedging, proprietary data with humility, regulatory fluency" },
  { n: "6", t: "Visual / structural defaults", d: "H2 + H3 only, comparison tables, FAQ close, soft sample-pack CTA" },
  { n: "7", t: "Brand canon", d: "One-liners to preserve verbatim across surfaces" },
  { n: "8", t: "Anti-patterns", d: "No consumer hype, no em-dashes, no first-person singular, no 'strain'" },
  { n: "9", t: "Surface tuning", d: "Web vs. LinkedIn vs. IG vs. cold email — length, opener, CTA per surface" },
];

const ROADMAP = [
  {
    rank: "01",
    name: "Sample-Pack Triage Agent",
    why: "Every sample request is a $5K–$50K pipeline event. Webhook → Apify enrich → personalized technical follow-up referencing their actual product line.",
    trigger: "Webhook (form submit)",
    impact: "Revenue, conversion lift on inbound",
  },
  {
    rank: "02",
    name: "Vintage / Harvest Release Engine",
    why: "A new COA drops → trade press email, LinkedIn announcement, IG carousel, wholesale broadcast, all generated and queued for approval in minutes.",
    trigger: "Airtable webhook (new COA)",
    impact: "Turns harvest cadence into content cadence",
  },
  {
    rank: "03",
    name: "Blog Splinter",
    why: "Every long-form blog auto-splintered into 7 LinkedIn carousels, 5 X threads, 10 IG captions, formulator email. Each surface tuned to its own Voice-Manual axis.",
    trigger: "RSS / WordPress publish event",
    impact: "10× output from existing SEO asset library",
  },
  {
    rank: "04",
    name: "Terpene Research Watcher",
    why: "PubMed + Google Scholar + trade press → agent classifies relevance → drafts a TBF technical commentary when there is a real hook. Positions TBF as the science voice of the category.",
    trigger: "Daily cron",
    impact: "Authority, SEO, PR-ready hooks",
  },
  {
    rank: "05",
    name: "Formulator Q&A Bot",
    why: "DMs and contact-form questions → agent reads the brain (blogs, COAs, product specs) → drafts a cited technical reply linking actual SKUs. Human approves before send.",
    trigger: "IG / LinkedIn DM webhook",
    impact: "Reduces sales-cycle friction",
  },
  {
    rank: "06",
    name: "Friday Founder Digest",
    why: "Competitor moves, press mentions, sample-pack volume, top DMs, regulatory news → one-page briefing in Slack + Obsidian by 5 p.m. Friday.",
    trigger: "Weekly cron",
    impact: "Founder's Monday cockpit view",
  },
  {
    rank: "07",
    name: "Conference Pipeline",
    why: "Watches cannabis conference CFPs → drafts speaker pitches and one-pagers tuned to each audience (B2B trade vs. scientific vs. regulatory).",
    trigger: "RSS + scraper, weekly",
    impact: "Stage time, press pickup",
  },
  {
    rank: "08",
    name: "Newsletter Automation",
    why: "Tuesday digest: the week's blog, a vintage spotlight, a formulator FAQ, one industry-news take. Six specialist agents, one human approval.",
    trigger: "Weekly cron",
    impact: "Owned distribution channel",
  },
];
