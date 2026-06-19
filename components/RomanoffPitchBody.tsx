import Image from "next/image";
import LiveDemo from "@/components/LiveDemo";
import BrainExplorer from "@/components/BrainExplorer";

const ACCENT = "#7C5B8C";

export default function RomanoffPitchBody() {
  return (
    <>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
        <Image
          src="/works/sabrina-romanoff.svg"
          alt="Three-layer architecture for Dr. Sabrina Romanoff: Obsidian brain, Claude agent, n8n workflows"
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <Section eyebrow="01 · The Proposition" title="Press cluster on autopilot. Practice protected. Voice consistent across every surface.">
        <p>
          Dr. Romanoff's brand is a forty-outlet press cluster, a clinical
          practice, and a growing social presence — all carried by one
          credentialed human. The pitch is to turn the press cluster from
          reactive (journalist emails, she replies) into proactive (cultural
          moment hits, she has a ready angle in three minutes), and to extend
          her voice across short-form social, AEO, and SEO surfaces without
          adding hours to her week.
        </p>
        <p>
          The brain is built. The workflows are wired. The voice is captured
          from her owned surfaces and her aggregated press footprint. Run the
          demo below to see her brand voice speak about a topic she has never
          posted on.
        </p>
      </Section>

      <Section eyebrow="02 · The Architecture" title="Brain, agent, workflows. Same three layers as any TBF-class build.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 not-prose">
          <ArchCard
            index="01"
            title="Brain"
            subtitle="Obsidian / Markdown vault"
            tint="#f5f5f5"
            body="Voice Manual (clinical authority delivered conversationally), brand canon, services catalog, audience personas (journalist, social audience, therapy prospect, podcast booker), SEO keywords, AEO question library, GEO snippet templates, press history (40+ outlets), research corpus, automation stack roadmap."
          />
          <ArchCard
            index="02"
            title="Agent"
            subtitle="Claude Code · MCP skills"
            tint={ACCENT}
            body="Reads the entire brain on every task. Talks to Gmail (press replies and outbound pitches), Airtable (press queue and content DB), an RSS-driven cultural-moment watcher, and a TV-recap prep skill. Drafts press quotes, IG captions, TikTok scripts, podcast pitches, and AEO answer pages — all loaded with the Voice Manual first."
          />
          <ArchCard
            index="03"
            title="Workflows"
            subtitle="n8n · triggers + plumbing"
            tint="#b94a2c"
            body="Webhook fires the agent when a journalist email lands. Cron fires the cultural-moment watcher every morning. Manual trigger from her phone for reality-TV recap prep. n8n is the cadence engine; the brain provides the brand voice; Claude is the executor."
          />
        </div>
      </Section>

      <Section
        eyebrow="03 · The Brain"
        title="Ten real files. Plain markdown. The agent reads all of them on every task."
      >
        <p>
          This is not a slide describing a brain. This is the brain. Click any
          file in the explorer below to see the actual content the agent loads
          before generating anything for Dr. Romanoff. The Voice Manual is one
          of ten files; the rest carry her practice details, audience targeting,
          press history, the research she stands on, and the n8n automation
          roadmap.
        </p>
        <BrainExplorer brandSlug="romanoff" />
        <p className="mt-6 text-sm text-[color:var(--muted)]">
          Edit one file, every downstream surface inherits the change. Press
          history changes → every press pitch updates the credibility paragraph
          automatically.
        </p>
      </Section>

      <Section
        eyebrow="04 · The Roadmap"
        title="Eight n8n automations tuned to a press-driven personal brand."
      >
        <div className="not-prose space-y-3 mt-2">
          {ROADMAP.map((a) => (
            <div key={a.rank} className="grid grid-cols-12 gap-4 md:gap-6 items-start border-t border-[color:var(--line)] pt-5">
              <div className="col-span-12 md:col-span-1">
                <div className="font-display text-2xl" style={{ color: ACCENT }}>
                  {a.rank}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-display text-xl md:text-2xl leading-tight">
                  {a.name}
                </div>
                <div className="text-xs text-[color:var(--muted)] mt-2 space-y-0.5">
                  <div>
                    <span className="font-medium text-[color:var(--ink-2)]">Trigger:</span> {a.trigger}
                  </div>
                  <div>
                    <span className="font-medium text-[color:var(--ink-2)]">Impact:</span> {a.impact}
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
        title="One production n8n workflow. Pick a topic, watch the brain produce a full content stack in Dr. Romanoff's voice."
      >
        <p>
          The webhook below hits a published n8n workflow at{" "}
          <code className="text-[12px] font-mono">/webhook/romanoff-content-stack</code>.
          Claude Sonnet 4.6 loads ten brain files as system context, then
          returns seven on-brand surfaces in about a minute: press quote,
          Instagram caption, TikTok / Reel script, podcast pitch, SEO bundle,
          AEO Q&amp;A pack with FAQPage schema, and four GEO quote-ready
          snippets (definition, three-signs, clinical reframe, permission
          grant). Pick an audience to tune the output per surface.
        </p>
        <LiveDemo brandSlug="romanoff" />
      </Section>

      <Section
        eyebrow="06 · The First 90 Days"
        title="Brain. Press-quote engine. Cultural-moment watcher. Then scale."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <PhaseCard
            phase="Weeks 1-2"
            title="Brain online"
            points={[
              "Voice Manual v1 finalized with Dr. Romanoff review",
              "Press history fully cataloged in Obsidian (40+ outlets, topic specialties tagged)",
              "Services catalog + audience personas signed off",
              "Research corpus seeded with attachment + couples + anxiety foundations",
            ]}
          />
          <PhaseCard
            phase="Weeks 3-6"
            title="Top two automations live"
            points={[
              "Press-quote generator shipped + measured against historical reply time",
              "Cultural-moment watcher running daily on lifestyle + pop-culture feeds",
              "Therapy-prospect FAQ bot deployed on the contact form",
              "Approval queue in Airtable, single login for Dr. Romanoff",
            ]}
          />
          <PhaseCard
            phase="Weeks 7-12"
            title="Scale across surfaces"
            points={[
              "AEO page generator publishing /answers/ pages on the 25 core questions",
              "Reality-TV recap engine prepping every booked appearance",
              "Podcast pitch engine running weekly cycles",
              "Press-cluster digest delivered every Friday",
            ]}
          />
        </div>
        <p className="mt-8 text-[color:var(--ink-2)] leading-relaxed max-w-3xl">
          By end of quarter, press response time drops from hours to minutes,
          every cultural moment generates a coordinated press + IG + Reel
          response, the AEO surface is publishing the questions her press
          cluster has already prepared her to answer, and the founder's Friday
          digest shows the press footprint compounding week over week.
        </p>
      </Section>
    </>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
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

function ArchCard({ index, title, subtitle, tint, body }: { index: string; title: string; subtitle: string; tint: string; body: string }) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)] h-full flex flex-col">
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

function PhaseCard({ phase, title, points }: { phase: string; title: string; points: string[] }) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)] h-full">
      <p className="eyebrow">{phase}</p>
      <div className="font-display text-xl md:text-2xl tracking-tight leading-tight mt-1">
        {title}
      </div>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm text-[color:var(--ink-2)] leading-snug">
            <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[color:var(--ink)] flex-shrink-0" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ROADMAP = [
  { rank: "01", name: "Press-Quote Generator", why: "Every journalist email turns into 2-3 ready-to-publish quote drafts in under three minutes, each tuned to outlet + topic + word-count. The brain loads her press history so the credibility paragraph is always current.", trigger: "Webhook from press-inquiry form / email forward", impact: "Cuts response time from hours to minutes; protects practice hours" },
  { rank: "02", name: "Cultural-Moment Watcher", why: "Daily RSS / trend scan across lifestyle, pop-culture, and mental-health beats. When a relevant moment hits, the agent drafts a press pitch angle, an IG caption, and a 30-second Reel script — all coordinated to one position.", trigger: "Daily cron + RSS feeds", impact: "Turns the press cluster from reactive to proactive newsjacking" },
  { rank: "03", name: "Reality-TV Recap Engine", why: "When she books a TV recap appearance, the agent ingests the episode summary and returns 5-8 clinical observations she can lead with, each tied to a named psychological concept (attachment, communication patterns, conflict styles).", trigger: "Manual trigger from her phone", impact: "Prep time per appearance drops from 60-90 min to 15" },
  { rank: "04", name: "Podcast Pitch Engine", why: "Customized 120-word pitches to a targeting list of relevant podcasts, each pitch drawing three specific topic ideas from her press-history specialty inventory.", trigger: "Weekly cron + curated podcast list", impact: "Expands outbound pitch capacity without staffing" },
  { rank: "05", name: "Therapy-Prospect FAQ Bot", why: "Auto-reply to contact-form submissions with answers to common pre-booking questions (out-of-network billing, telehealth, scheduling). Tags the inquiry for her to handle the clinical-match question only.", trigger: "Webhook on contact-form submission", impact: "Cuts pre-consult email back-and-forth by ~70%" },
  { rank: "06", name: "AEO Page Generator", why: "For each of the 25 highest-volume questions her topics get asked on AI engines, generate an /answers/<slug> page with FAQPage schema, Person schema, and a citation-ready direct answer.", trigger: "Manual queue, batch nightly", impact: "Claims search authority on her core topics within 6-12 months" },
  { rank: "07", name: "Newsletter Engine (queued)", why: "Tuesday 300-500 word digest pulling from cultural moments + one clinical concept + one client-friendly research note. Owned distribution channel that reduces dependency on the press cluster.", trigger: "Weekly cron + brain RAG", impact: "Owned audience growth + email-list asset" },
  { rank: "08", name: "Press-Cluster Digest", why: "Friday recap: new mentions found via Google Alert + Mention.com style scrape, new outlets pitched this week, status of pending press inquiries. One page, in Slack + Obsidian.", trigger: "Friday cron + mention scrapers", impact: "Founder visibility into press footprint compounding" },
];
