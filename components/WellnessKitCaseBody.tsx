const ACCENT = "#5A7C5A";

export default function WellnessKitCaseBody() {
  return (
    <>
      <Section
        eyebrow="01 · The Question"
        title="Why do doTERRA customers drop the 3-month Wellness Programs early?"
      >
        <p>
          doTERRA's Wellness Programs bundled essential oils and supplements
          into three monthly kits built around a goal, Immunity, Relief, or Mind
          &amp; Mood. Plenty of customers started. Too many stopped before month
          three. I owned the research to find out why, and what to change.
        </p>
      </Section>

      <Section
        eyebrow="02 · The Method"
        title="Three surveys, three angles on the same problem."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <MethodCard
            n="01"
            audience="Program participants"
            count="202"
            q="Why did you end the program early?"
          />
          <MethodCard
            n="02"
            audience="Current customers, non-participants"
            count="168"
            q="Why aren't you using the Programs at all?"
          />
          <MethodCard
            n="03"
            audience="Non-doTERRA consumers (Prolific)"
            count="2 tracks"
            q="How does framing change willingness to join?"
          />
        </div>
      </Section>

      <Section
        eyebrow="03 · Survey One · Drop-off"
        title="Satisfaction was high. Completion wasn't."
      >
        <p>
          Participants rated the program well overall, this was not a quality
          problem. It was a structure-and-price problem, and the open-ended
          answers said so plainly.
        </p>
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-lg overflow-hidden mt-2">
          {[
            { v: "4.04 / 5", l: "Avg. satisfaction" },
            { v: "202", l: "Analyzed responses" },
            { v: "96%", l: "Female respondents" },
            { v: "3", l: "Programs studied" },
          ].map((s) => (
            <div key={s.l} className="bg-[color:var(--bg-panel)] p-5">
              <div className="font-display text-2xl md:text-3xl tracking-tight text-[color:var(--ink)]">
                {s.v}
              </div>
              <div className="text-xs text-[color:var(--muted)] mt-2 leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="not-prose mt-4">
          <p className="eyebrow mb-3">Why they ended early</p>
          <BarList
            accent={ACCENT}
            items={[
              { label: "Too expensive", v: 35 },
              { label: "Wanted oils outside the kits", v: 20 },
              { label: "Only wanted month-1 items", v: 15 },
              { label: "Didn't want month-3 items", v: 13 },
              { label: "Didn't use month-1 items", v: 11 },
            ]}
          />
        </div>
      </Section>

      <Section
        eyebrow="04 · What They Wanted"
        title="More variety. More choice. Less lock-in."
      >
        <p>
          Asked what would make the Programs better, customers were consistent:
          give us more, and let us choose.
        </p>
        <div className="not-prose mt-2">
          <BarList
            accent={ACCENT}
            items={[
              { label: "More product variety in each kit", v: 22 },
              { label: "Ability to choose products", v: 13 },
              { label: "Order kits out of sequence", v: 13 },
            ]}
            max={25}
          />
        </div>
      </Section>

      <Section
        eyebrow="05 · Survey Two · The Non-Participants"
        title="Most loyal customers weren't saying no. They were saying 'not for me, yet.'"
      >
        <p>
          Among current customers who had never joined, the blockers were price,
          a sense that they already owned the products, dislike of a fixed
          bundle, and real confusion between the Wellness Program and the
          flagship Lifelong Vitality (LLV) subscription. Education moved
          perception measurably: when the program was explained in detail,
          neutral-and-negative views shifted positive.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mt-2">
          {[
            { t: "Price", b: "Good quality, but overpriced." },
            { t: "Already stocked", b: "I use what I need, as I need it." },
            { t: "Bundle aversion", b: "I'd rather pick & choose what I want." },
          ].map((c) => (
            <figure key={c.t}>
              <span
                className="font-display text-5xl leading-[0.6] block"
                style={{ color: ACCENT }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="text-base text-[color:var(--ink-2)] italic leading-relaxed mt-1">
                {c.b}
              </blockquote>
              <figcaption className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)] mt-3">
                {c.t}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="06 · Survey Three · The Outside View"
        title="To people outside the base, the wrapper mattered more than the product."
      >
        <p>
          A third-party study on Prolific tested non-doTERRA consumers against
          two framings of the same offer. The &ldquo;wellness program&rdquo;
          framing drew genuine interest; the &ldquo;direct sales&rdquo; framing
          triggered the word the category fears most, &ldquo;scam.&rdquo; A photo
          of an actual Immunity kit drew &ldquo;poison&rdquo; and
          &ldquo;scary&rdquo; reactions, a branding signal, not a product one.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)]">
            <p className="eyebrow">Framed as a wellness program</p>
            <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
              &ldquo;Comprehensive,&rdquo; &ldquo;healthy,&rdquo;
              &ldquo;improve,&rdquo; &ldquo;mental health, well-being.&rdquo;
              Generally positive, open to learning more.
            </p>
          </div>
          <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)]">
            <p className="eyebrow">Framed as direct sales</p>
            <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
              &ldquo;Pushy,&rdquo; &ldquo;expensive,&rdquo;
              &ldquo;quotas,&rdquo; &ldquo;scam.&rdquo; Same product, far more
              skepticism.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="07 · Findings & Recommendations"
        title="Spread the value, hand over the choice, fix the wrapper."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          {[
            {
              t: "Rebalance the kits",
              b: "Spread the most-loved products evenly across all three months so month 2 and 3 stop feeling like filler.",
            },
            {
              t: "Add customization",
              b: "Let members swap a product for another at the same price or category, and order kits out of sequence.",
            },
            {
              t: "Make value visible",
              b: "Discounted, purchasable add-ons and an exclusive item in each kit, so the program out-values buying à la carte.",
            },
            {
              t: "Educate + redesign",
              b: "Disambiguate the Program from LLV up front, and redesign the kit packaging that read as clinical and off-putting to outsiders.",
            },
          ].map((r) => (
            <div
              key={r.t}
              className="border-t-2 pt-4"
              style={{ borderColor: ACCENT }}
            >
              <div className="font-display text-xl text-[color:var(--ink)] leading-tight">
                {r.t}
              </div>
              <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
                {r.b}
              </p>
            </div>
          ))}
        </div>
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

function MethodCard({
  n,
  audience,
  count,
  q,
}: {
  n: string;
  audience: string;
  count: string;
  q: string;
}) {
  return (
    <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)] h-full flex flex-col">
      <span className="text-[10px] tabular-nums text-[color:var(--muted)] tracking-widest">
        SURVEY {n}
      </span>
      <div className="font-display text-3xl mt-1" style={{ color: ACCENT }}>
        {count}
      </div>
      <div className="text-xs text-[color:var(--muted)] mt-1 mb-3">
        {audience}
      </div>
      <p className="text-sm text-[color:var(--ink-2)] leading-relaxed mt-auto">
        {q}
      </p>
    </div>
  );
}

function BarList({
  items,
  accent,
  max = 40,
}: {
  items: { label: string; v: number }[];
  accent: string;
  max?: number;
}) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-4">
          <div className="w-48 md:w-64 flex-shrink-0 text-sm text-[color:var(--ink-2)]">
            {it.label}
          </div>
          <div className="flex-1 h-2 rounded-full bg-[color:var(--bg-elev)] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${(it.v / max) * 100}%`, backgroundColor: accent }}
            />
          </div>
          <div className="w-10 text-right font-display text-lg text-[color:var(--ink)]">
            {it.v}%
          </div>
        </div>
      ))}
    </div>
  );
}
