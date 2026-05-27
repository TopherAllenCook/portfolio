import Image from "next/image";
import LiveDemo from "@/components/LiveDemo";
import BrainExplorer from "@/components/BrainExplorer";

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
        eyebrow="03 · The Brain"
        title="Ten real files. Plain markdown. Versioned in git. The agent reads all of them on every task."
      >
        <p>
          This is not a slide describing a brain. This is the brain. Click any
          file in the explorer below to see the actual content the agent loads
          before generating anything. The Voice Manual is one of ten files.
          The rest are the product catalog, formulator personas, the SEO
          keyword universe, the AEO question library, the GEO snippet
          templates, the harvest journal, the cited research corpus, the
          brand canon, and the live automation roadmap.
        </p>
        <BrainExplorer />
        <p className="mt-6 text-sm text-[color:var(--muted)]">
          Every workflow loads these as a system prompt. Edit one file, every
          downstream surface inherits the change.
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
        eyebrow="05 · Live Demo · Test the System"
        title="Two live n8n workflows. Pick a mode, pick a topic, watch the brain produce on-brand output."
      >
        <p>
          Two production webhooks are wired up. The <em>Four Surfaces</em> mode
          hits <code className="text-[12px] font-mono">/webhook/tbf-content-demo</code>{" "}
          and returns a social drop (IG, LinkedIn, cold email, blog opener) in
          about 30 seconds. The <em>Full Content Stack</em> mode hits{" "}
          <code className="text-[12px] font-mono">/webhook/tbf-content-stack</code>{" "}
          with an audience selector and returns the social drop plus a full SEO
          package (meta, H1, JSON-LD schema, internal-link suggestions), an AEO
          Q&amp;A pack (question + cited answer + FAQ schema), and three GEO
          quote-ready snippets (definition, comparison, statistic). About 60
          seconds for the full stack.
        </p>
        <LiveDemo />
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
