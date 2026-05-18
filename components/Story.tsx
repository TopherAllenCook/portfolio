export default function Story() {
  return (
    <section
      id="story"
      className="py-24 md:py-32 bg-[color:var(--bg-elev)] border-y border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow mb-3">My story</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02]">
            Brand manager. Storyteller.
            <br />
            <span className="italic text-[color:var(--accent)]">Builder.</span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8 space-y-6 text-[color:var(--ink-2)] text-lg leading-relaxed">
          <p>
            I&rsquo;m a brand manager and storyteller who happens to ship the technical growth
            engine underneath. Fifteen years of positioning, narrative work, and product launches:
            40+ products at doTERRA, the brand stewardship of a #1 NYT bestselling author through
            his final Terminal List launch, enrollment marketing for a national online university
            pathway, and a multi-location music school network where I grew qualified leads more
            than 150% YoY.
          </p>
          <p>
            What I&rsquo;m best at: walking into a brand that&rsquo;s been treated like a series of
            unrelated channels and turning it back into one coherent story. Positioning that
            stands up, narrative that travels, funnels that convert, and creative that
            doesn&rsquo;t apologize for itself.
          </p>
          <p>
            I&rsquo;m also unusually hands-on for someone at this level. I build my own sites and
            scrapers, write SQL when I need to, prompt-engineer my way through analysis, and ship
            production work with AI-native tooling. The combination is rare, and it&rsquo;s the
            thing that lets brand and growth actually move in the same direction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 pt-8">
            <Capability title="Brand & Story">
              Positioning, narrative architecture, voice, brand stewardship, creative direction
            </Capability>
            <Capability title="Product Marketing">
              Launches, GTM, positioning, market and customer research, messaging
            </Capability>
            <Capability title="Growth">
              Paid media, SEO, CRO, funnel architecture, vendor and agency management
            </Capability>
            <Capability title="Lifecycle">
              Email and CRM programs, segmentation, automation across Marketo and HubSpot
            </Capability>
            <Capability title="AI & Automation">
              Claude, ChatGPT, Midjourney, workflow automation, prompt engineering, AEO
            </Capability>
            <Capability title="Leadership">
              Direct-report teams, cross-functional alignment, executive presentation
            </Capability>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capability({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-semibold tracking-tight text-[color:var(--ink)]">{title}</div>
      <div className="mt-1 text-sm text-[color:var(--muted)] leading-snug">{children}</div>
    </div>
  );
}
