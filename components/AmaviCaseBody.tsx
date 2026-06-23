import Image from "next/image";

const AZUL = "#1C6FA6";
const ROSO = "#B23A2E";
const NOIR = "#A9A29B";

export default function AmaviCaseBody() {
  return (
    <>
      <Section
        eyebrow="01 · The Starting Point"
        title="Amāvī already existed. Fragrance didn't."
      >
        <p>
          doTERRA had an Amāvī men's grooming line, a cologne-style Touch blend,
          an aftershave, and a bath bar. What it didn't have was an actual
          fragrance offering. My job was to find out whether it should have one,
          and to de-risk the bet before anyone tooled up a production line.
        </p>
      </Section>

      <Section
        eyebrow="02 · The Brief"
        title="Could we extend Amāvī into fragrance without betting the farm?"
      >
        <p>
          I led the research and ideation to answer two questions: is there a
          real opening for an essential-oil men's fragrance, and if so, how do
          we test it before committing to a full, expensive line?
        </p>
      </Section>

      <Section
        eyebrow="03 · The Market"
        title="A large category, quietly growing."
      >
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-lg overflow-hidden">
          {[
            { v: "$31.4B", l: "Global fragrance market" },
            { v: "46%", l: "Is men's fragrance" },
            { v: "$75.8B", l: "Projected by 2027" },
            { v: "$140", l: "Avg. monthly male personal-care spend" },
          ].map((s) => (
            <div key={s.l} className="bg-[color:var(--bg-panel)] p-5">
              <div className="font-display text-3xl md:text-4xl tracking-tight text-[color:var(--ink)]">
                {s.v}
              </div>
              <div className="text-xs text-[color:var(--muted)] mt-2 leading-snug">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[color:var(--muted)]">
          Sources: Perfume Market Size Report 2019–2025; Mintel Fragrance
          2018–2020; Huffington Post 2021.
        </p>
      </Section>

      <Section
        eyebrow="04 · What the Research Said · Mintel"
        title="Men don't buy fragrance the way you'd think."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <InsightCard
            title="Secondary signals win"
            body="Men are swayed by sustainable packaging, functional claims, and added benefits, not just the scent itself."
          />
          <InsightCard
            title="Loyalty is real"
            body="45% buy the same brand for a given product. Earn the first purchase and you tend to keep them."
          />
          <InsightCard
            title="Masculinity, redefined"
            body="Clean, gender-aware, and functional is rising, while traditional cologne demand stays strong."
          />
        </div>
      </Section>

      <Section eyebrow="05 · The Insight" title="A blue ocean in men's care.">
        <p>
          The clean, functional, essential-oil-based fragrance that younger men
          say they want barely existed for them. doTERRA, an essential-oil
          company with a loyal base and an existing Amāvī line, was uniquely
          built to fill it.
        </p>
      </Section>

      <Section
        eyebrow="06 · The Landscape"
        title="Between mass and clean."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)]">
            <p className="eyebrow">Mass prestige</p>
            <div className="font-display text-xl mt-1 text-[color:var(--ink)]">
              Sauvage · Acqua di Gio · Eternity
            </div>
            <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
              Powerful, synthetic, ~$125 / 50ml. Fresh, citrus, woody-oriental.
              Loved, but not clean.
            </p>
          </div>
          <div className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)]">
            <p className="eyebrow">Clean challengers</p>
            <div className="font-display text-xl mt-1 text-[color:var(--ink)]">
              Skylar · Henry Rose
            </div>
            <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
              Natural, EWG-certified, functional claims, ~$95–$125. Clean, but
              not essential-oil, and not built for men.
            </p>
          </div>
        </div>
        <p className="mt-2">
          <span className="text-[color:var(--ink)] font-medium">The gap:</span>{" "}
          clean, essential-oil-based, made for men, at an accessible price.
        </p>
      </Section>

      <Section
        eyebrow="07 · The Customer"
        title="Designed for one man in particular."
      >
        <div className="not-prose border border-[color:var(--line)] rounded-lg p-6 bg-[color:var(--bg-panel)]">
          <div className="font-display text-2xl text-[color:var(--ink)]">
            Jason, 35
          </div>
          <p className="text-xs text-[color:var(--muted)] mt-1">
            Tech / business management · Married, two kids · California · ~$69K
            household · health &amp; fitness
          </p>
          <p className="text-sm text-[color:var(--ink-2)] mt-4 leading-relaxed max-w-xl">
            Wants to look and feel better about life, and to be a good influence
            on the world around him. Frustrated by toxicity in everyday
            products, opaque marketing, and &ldquo;green&rdquo; products that
            don&apos;t work.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Career success", "Family life", "Sustainability", "Clean & effective"].map(
              (t) => (
                <span
                  key={t}
                  className="text-xs uppercase tracking-[0.08em] text-[color:var(--muted)] border border-[color:var(--line)] rounded-full px-3 py-1"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="08 · The Recommendation"
        title="Don't launch a line. Launch a test."
      >
        <p>
          Rather than tool up a full fragrance line on a hunch, I recommended
          extending Amāvī with a low-cost, three-scent Discovery Set, essential-oil
          based and sustainably packaged, to learn what the market actually
          wanted first.
        </p>
        <div className="not-prose grid grid-cols-3 gap-4 mt-2">
          {[
            { v: "3", l: "Sample scents · 1.5 ml glass spray vial" },
            { v: "$2.41", l: "COGS per unit" },
            { v: "$24.67", l: "Set retail" },
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
      </Section>

      <Section
        eyebrow="09 · The Concept · Amāvī"
        title="One color. Three languages. Three men."
      >
        <p>
          Three scents, each a color named in a different language and built into
          its own world, so the trio reads like three men, not three vials:
          Azul, Roso, and Noir.
        </p>
      </Section>

      <div className="mt-12 md:mt-16 space-y-12 md:space-y-16">
        <Scent
          accent={AZUL}
          name="Azul"
          meta="Blue · Spanish · Fresh Aquatic"
          tagline="The escape."
          story="Cool sea breeze, warm sand, and the azure water of a sun-kissed coast. Fresh and crisp, for the man who needs to get away."
          notes="Bergamot · Lime · Spearmint · Magnolia · Cedarwood · Vetiver · Frankincense"
          scene="/works/amavi/azul-scene.jpeg"
          product="/works/amavi/azul-product.jpeg"
          reverse={false}
        />
        <Scent
          accent={ROSO}
          name="Roso"
          meta="Red · Italian · Sport"
          tagline="The champion."
          story="Citrus, fresh, and metallic. For the man on the go and winning at life, on the track, the court, or the climb."
          notes="Wild Orange · Bergamot · Sichuan Pepper · Neroli · Tonka Bean · Oakmoss · Vetiver"
          scene="/works/amavi/roso-scene.jpeg"
          product="/works/amavi/roso-product.jpeg"
          reverse
        />
        <Scent
          accent={NOIR}
          name="Noir"
          meta="Black · French · Night"
          tagline="The romantic."
          story="Daringly dark and sweet. A night out dancing, or jazz on vinyl. Individuality and mystery, after dark."
          notes="Red Mandarin · Bergamot · Sichuan Pepper · Orange Blossom · Tonka Bean · Patchouli · Guaiacwood"
          scene="/works/amavi/noir-scene.jpeg"
          product="/works/amavi/noir-product.jpeg"
          reverse={false}
        />
      </div>

      <Section
        eyebrow="10 · From Concept to Shelf"
        title="It shipped. As the test."
      >
        <p>
          In May 2022, doTERRA launched the Amāvī Discovery Set, three 1.5 ml
          vials, Azul, Roso, and Noir, the exact sample trio I recommended. The
          names, scent stories, and essential-oil approach made it to market
          intact, extending the Amāvī line into fragrance.
        </p>
        <div className="not-prose relative aspect-[16/10] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] mt-2">
          <Image
            src="/works/amavi/discovery-set-real.jpeg"
            alt="The shipped Amāvī Discovery Set: Azul, Roso, and Noir sample vials"
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
        </div>
      </Section>

      <Section
        eyebrow="11 · How I Build Products"
        title="Question, research, a testable bet, a world worth buying."
      >
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          {[
            {
              n: "01",
              t: "Start with the real question",
              b: "Not “what should we make,” but “is there an opening, and who is it for.”",
            },
            {
              n: "02",
              t: "Let research find the gap",
              b: "Market, Mintel, competitors, and the customer, until the white space is obvious.",
            },
            {
              n: "03",
              t: "De-risk with a lean test",
              b: "A cheap Discovery Set to learn from the market before betting on a full line.",
            },
            {
              n: "04",
              t: "Give it a world worth buying",
              b: "Names, stories, and art direction so the product reads like something with a point of view.",
            },
          ].map((p) => (
            <div
              key={p.n}
              className="border border-[color:var(--line)] rounded-lg p-5 bg-[color:var(--bg-panel)]"
            >
              <span className="font-display text-2xl text-[color:var(--muted)]">
                {p.n}
              </span>
              <div className="font-display text-xl mt-1 text-[color:var(--ink)] leading-tight">
                {p.t}
              </div>
              <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
                {p.b}
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

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t-2 pt-4" style={{ borderColor: "var(--accent)" }}>
      <div className="font-display text-xl leading-tight text-[color:var(--ink)]">
        {title}
      </div>
      <p className="text-sm text-[color:var(--ink-2)] mt-2 leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Scent({
  accent,
  name,
  meta,
  tagline,
  story,
  notes,
  scene,
  product,
  reverse,
}: {
  accent: string;
  name: string;
  meta: string;
  tagline: string;
  story: string;
  notes: string;
  scene: string;
  product: string;
  reverse: boolean;
}) {
  return (
    <div className="grid grid-cols-12 gap-5 md:gap-8 items-stretch">
      <div
        className={`col-span-12 md:col-span-7 ${reverse ? "md:order-2" : ""}`}
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
          <Image
            src={scene}
            alt={`Amāvī ${name} — ${meta}`}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={`col-span-12 md:col-span-5 flex flex-col justify-center ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <span
          className="inline-block h-1 w-10 rounded-full mb-4"
          style={{ backgroundColor: accent }}
          aria-hidden
        />
        <p className="eyebrow">{meta}</p>
        <h3
          className="font-display text-5xl md:text-6xl tracking-tight leading-none mt-1"
          style={{ color: accent }}
        >
          {name}
        </h3>
        <p className="font-display text-xl text-[color:var(--ink)] mt-3">
          {tagline}
        </p>
        <p className="text-[color:var(--ink-2)] leading-relaxed mt-3">
          {story}
        </p>
        <div className="mt-5 flex items-start gap-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
            <Image
              src={product}
              alt={`Amāvī ${name} product`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <p className="text-xs text-[color:var(--muted)] leading-relaxed">
            {notes}
          </p>
        </div>
      </div>
    </div>
  );
}
