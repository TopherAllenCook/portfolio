import Image from "next/image";

const ROSE = "#C2554A";

const FLORALS = [
  { name: "Rose", like: "an ambassador of love", note: "Sourced in Bulgaria. ~10,000 rose blossoms to produce 5 mL of oil." },
  { name: "Neroli", like: "a woman of integrity and purpose", note: "Sourced in Egypt. 40 lbs of freshly picked blossoms for one 15 mL bottle." },
  { name: "Jasmine", like: "kind and charming", note: "Sourced in Egypt. ~20,000 hand-picked blossoms to create 5 mL of oil." },
  { name: "Magnolia", like: "noble and strong", note: "A delicate floral Touch, pre-diluted and ready to wear." },
  { name: "Blue Lotus", like: "complex and dynamic", note: "A rare, layered floral Touch with a quietly luxurious character." },
];

const FORMATS = [
  ["Instagram / Facebook Stories", "1080 × 1920"],
  ["Instagram single posts", "1200 × 1200"],
  ["Instagram multi-image posts", "1200 × 1200"],
  ["Facebook post", "1200 × 900"],
  ["Story ads", "768 × 1365"],
  ["Horizontal ads", "2048 × 1072"],
  ["Square ads", "1365 × 1365"],
  ["WhatsApp assets", "1200 × 1200"],
];

export default function MothersDayCaseBody() {
  return (
    <>
      <Section
        eyebrow="01 · The Brief"
        title="A Mother's Day campaign for doTERRA's Precious Florals collection."
      >
        <p>
          Mother's Day 2020. The assignment: build the full promotional campaign
          for doTERRA's WQA Precious Florals collection, five floral oils, Rose,
          Neroli, Jasmine, Magnolia, and Blue Lotus, into a single Mother's Day
          story and a complete asset pack to run it across every channel.
        </p>
      </Section>

      <Section
        eyebrow="02 · The Idea"
        title="Celebrate the women worth celebrating, one floral at a time."
      >
        <p>
          The through-line: each floral stands in for a quality of the women
          we&apos;re celebrating. Not &ldquo;buy oil for mom,&rdquo; but a small
          act of seeing her clearly.
        </p>
        <p
          className="font-display text-2xl md:text-3xl leading-snug"
          style={{ color: ROSE }}
        >
          We are bright, charming, beautiful, strong, smart, creative, lovers,
          mothers, sisters, daughters, women, precious.
        </p>
      </Section>

      <div className="mt-12 relative aspect-[1900/668] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
        <Image
          src="/works/mothers-day/products-strip.jpeg"
          alt="doTERRA Precious Florals Mother's Day campaign creative"
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>

      <Section
        eyebrow="03 · Five Florals, Five Women"
        title="Like Magnolia, she is noble and strong."
      >
        <div className="not-prose space-y-3 mt-2">
          {FLORALS.map((f) => (
            <div
              key={f.name}
              className="grid grid-cols-12 gap-3 md:gap-6 items-baseline border-t border-[color:var(--line)] pt-4"
            >
              <div className="col-span-12 md:col-span-4">
                <span className="text-[color:var(--muted)] text-sm">Like </span>
                <span
                  className="font-display text-2xl md:text-3xl"
                  style={{ color: ROSE }}
                >
                  {f.name}
                </span>
              </div>
              <div className="col-span-12 md:col-span-4 text-[color:var(--ink)] text-base md:text-lg">
                she is {f.like}.
              </div>
              <div className="col-span-12 md:col-span-4 text-xs text-[color:var(--muted)] leading-relaxed">
                {f.note}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="04 · Sourcing Stories"
        title="The luxury is in the rarity, so we told the rarity."
      >
        <p>
          A second creative track turned each oil&apos;s sourcing into a quiet,
          editorial story, the kind of detail that makes a gift feel
          considered. Neroli, hand-picked at exactly the right point in its
          flowering cycle and steam-distilled within hours.
        </p>
        <div className="not-prose grid grid-cols-12 gap-5 md:gap-8 items-center mt-2">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[692/772] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] max-w-[320px]">
              <Image
                src="/works/mothers-day/sourcing-neroli.jpeg"
                alt="Neroli sourcing story, Instagram Story creative"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4">
            {[
              { v: "10,000", l: "rose blossoms per 5 mL of Rose oil (Bulgaria)" },
              { v: "40 lbs", l: "of blossoms per 15 mL of Neroli (Egypt)" },
              { v: "20,000", l: "hand-picked blossoms per 5 mL of Jasmine (Egypt)" },
            ].map((s) => (
              <div
                key={s.l}
                className="border-t border-[color:var(--line-strong)] pt-3"
              >
                <div className="font-display text-2xl md:text-3xl tracking-tight text-[color:var(--ink)]">
                  {s.v}
                </div>
                <div className="text-xs text-[color:var(--muted)] mt-1 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="05 · The Asset Pack"
        title="One story, shipped in every shape the channels needed."
      >
        <p>
          The campaign went out as a complete, production-ready kit, story,
          square, and horizontal cuts for paid and organic, plus WhatsApp
          assets for the direct-to-customer channel.
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-2">
          {FORMATS.map(([name, dim]) => (
            <div
              key={name}
              className="flex items-baseline justify-between border-b border-[color:var(--line)] py-2"
            >
              <span className="text-sm text-[color:var(--ink-2)]">{name}</span>
              <span className="text-xs text-[color:var(--muted)] tabular-nums">
                {dim}
              </span>
            </div>
          ))}
        </div>
        <div className="not-prose relative aspect-[16/10] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] mt-4">
          <Image
            src="/works/mothers-day/products-grid.jpeg"
            alt="Precious Florals Mother's Day social creative set"
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
        </div>
      </Section>

      <Section
        eyebrow="06 · Channels"
        title="Paid, organic, and CRM, one coordinated push."
      >
        <div className="not-prose flex flex-wrap gap-2 mt-1">
          {[
            "Instagram (organic + ads)",
            "Facebook (organic + ads)",
            "WhatsApp",
            "Lifecycle / CRM",
          ].map((c) => (
            <span
              key={c}
              className="text-xs uppercase tracking-[0.08em] text-[color:var(--muted)] border border-[color:var(--line)] rounded-full px-3 py-1.5"
            >
              {c}
            </span>
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
