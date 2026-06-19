export default function Story() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 border-t border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="bracket">About</span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="display-xl text-[clamp(2.5rem,6vw,5rem)]">
              Brand
              <br />
              Manager.
              <br />
              <span className="text-[color:var(--accent)]">Builder.</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-6 text-[color:var(--ink-2)] text-lg md:text-xl leading-relaxed">
            <p>
              I&rsquo;m a brand manager and storyteller who happens to ship the
              technical growth engine underneath. Fifteen years of positioning,
              narrative work, and product launches: 40+ products at doTERRA, the
              brand stewardship of a #1 NYT bestselling author through his final
              Terminal List launch, enrollment marketing for a national online
              university pathway, and a multi-location music school network where
              I grew qualified leads more than 150% YoY.
            </p>
            <p>
              What I&rsquo;m best at: walking into a brand that&rsquo;s been
              treated like a series of unrelated channels and turning it back
              into one coherent story. Positioning that stands up, narrative that
              travels, funnels that convert, and creative that doesn&rsquo;t
              apologize for itself.
            </p>
            <p>
              I&rsquo;m also unusually hands-on for someone at this level. I
              build my own sites and scrapers, write SQL when I need to,
              prompt-engineer my way through analysis, and ship production work
              with AI-native tooling. The combination is rare, and it&rsquo;s the
              thing that lets brand and growth actually move in the same
              direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
