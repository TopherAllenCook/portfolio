import Image from "next/image";

const GOLD = "#C3964D";
const RED = "#C14B33";

const DC = "/works/jack-carr/dc";
const GUESTS = [
  { f: `${DC}/2024-10-24_pete-hegseth-danger-close-podcast.jpeg`, name: "Pete Hegseth" },
  { f: `${DC}/2024-10-23_mike-waltz-danger-close-podcast.jpeg`, name: "Mike Waltz" },
  { f: `${DC}/2024-10-23_trey-yingst-danger-close-podcast-episode.jpeg`, name: "Trey Yingst" },
  { f: `${DC}/2024-04-29_investigative-journalist-annie-jacobsen-war-weaponry-and-government-secrecy.jpeg`, name: "Annie Jacobsen" },
  { f: `${DC}/2024-04-29_peter-zeihan-takes-big-swings-danger-close-jack-carr.jpeg`, name: "Peter Zeihan" },
  { f: `${DC}/2024-08-07_the-china-threat-with-peter-schweizer.jpeg`, name: "Peter Schweizer" },
  { f: `${DC}/2024-07-05_katie-pavlich-returns.jpeg`, name: "Katie Pavlich" },
  { f: `${DC}/2024-04-29_ed-calderon-combating-mexican-drug-cartels.jpeg`, name: "Ed Calderón" },
];

export default function JackCarrCaseBody() {
  return (
    <>
      <Section
        eyebrow="01 · The Brief"
        title="Steward a #1 NYT bestselling author through two launches in one year."
      >
        <p>
          Jack Carr is a former Navy SEAL sniper turned #1 New York Times
          bestselling author, the mind behind <em>The Terminal List</em> and its
          Prime Video adaptation. I came on as Director of Marketing in early
          2024 to carry the brand through a back-to-back year:{" "}
          <span className="text-[color:var(--ink)]">Red Sky Mourning</span> in
          the summer and the nonfiction{" "}
          <span className="text-[color:var(--ink)]">Targeted Beirut</span> in the
          fall, while rebuilding the platform underneath both.
        </p>
      </Section>

      <Section
        eyebrow="02 · The Problem"
        title="A giant brand that still read as “just books.”"
      >
        <p>
          The site was a long stack of mismatched promo blocks, gray hero, red
          alarm bands, inconsistent thumbnail art. No system, no throughline.
          The presentation didn&apos;t match the stature of the man or the size
          of the audience.
        </p>
        <div className="not-prose relative aspect-[1185/782] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] mt-2">
          <Image
            src="/works/jack-carr/before.jpeg"
            alt="officialjackcarr.com before the rebuild"
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover object-top"
          />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.16em] bg-black/70 text-white px-2 py-1 rounded">
            Before
          </span>
        </div>
      </Section>

      <Section
        eyebrow="03 · The Insight"
        title="He's not only an author. The brand had to carry all three."
      >
        <p>
          Danger Close put Jack in the room with Hegseth, Waltz, Yingst,
          Jacobsen, and Junger. He is a <strong>warrior</strong>, an{" "}
          <strong>author</strong>, and a <strong>thought leader</strong>, and
          the brand needed to hold all three at once. The platform idea:
        </p>
        <p
          className="font-display text-2xl md:text-3xl leading-snug"
          style={{ color: GOLD }}
        >
          Go Beyond the Page. Read, Listen, Learn.
        </p>
        <p>
          One governed world that holds the warrior, the author, and the
          authority. The books are the door in.
        </p>
      </Section>

      <Section
        eyebrow="04 · The System"
        title="The brand didn't get a new logo so much as it got discipline."
      >
        <p>
          A single set of rules, applied everywhere: the crossed-axes{" "}
          <span className="text-[color:var(--ink)]">Tomahawk</span> mark, a
          deliberately small palette, and{" "}
          <span className="text-[color:var(--ink)]">Oswald</span> condensed
          headlines paired with an editorial serif. Field manual meets literary.
          A voice that reads like a mission brief, not a marketing email.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {[
            { src: "/works/jack-carr/brand/logo.jpeg", label: "The Tomahawk mark" },
            { src: "/works/jack-carr/brand/palette.jpeg", label: "A small, governed palette" },
            { src: "/works/jack-carr/brand/type.jpeg", label: "Oswald + editorial serif" },
          ].map((b) => (
            <figure key={b.label}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
                <Image
                  src={b.src}
                  alt={b.label}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-xs text-[color:var(--muted)] mt-2">
                {b.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="05 · The Front Door"
        title="officialjackcarr.com, rebuilt from scratch as a funnel, not a flyer."
      >
        <p>
          I rebuilt the site end to end on WordPress, architected as a funnel
          (awareness → engagement → conversion → retention) and instrumented
          with a GA4 event plan across the www, blog, and shop subdomains.
          Mailchimp lifecycle to a 60K+ list, and paid media across Meta, Google
          Ads, and AdRoll, all speaking the same language as the new system.
        </p>
        <div className="not-prose relative aspect-[1185/782] overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)] mt-2">
          <Image
            src="/works/jack-carr/after.jpeg"
            alt="officialjackcarr.com after the rebuild"
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover object-top"
          />
          <span
            className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.16em] text-white px-2 py-1 rounded"
            style={{ backgroundColor: RED }}
          >
            After
          </span>
        </div>
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { v: "-28%", l: "Bounce rate" },
            { v: "52%", l: "Avg. email open rate" },
            { v: "+39%", l: "PPC click-through rate" },
            { v: "60K+", l: "Subscriber base" },
          ].map((m) => (
            <div key={m.l} className="border-t border-[color:var(--line-strong)] pt-3">
              <div
                className="font-display text-2xl md:text-3xl tracking-tight"
                style={{ color: GOLD }}
              >
                {m.v}
              </div>
              <div className="text-xs text-[color:var(--muted)] mt-1">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[color:var(--muted)]">
          Figures as reported on Chris&apos;s 2024 Director of Marketing summary.
        </p>
      </Section>

      <Section
        eyebrow="06 · Danger Close"
        title="One guest template, every name in the room."
      >
        <p>
          I designed the cover art and digital creative for{" "}
          <span className="text-[color:var(--ink)]">The Danger Close Podcast</span>{" "}
          across YouTube, Spotify, Apple, and Instagram, built on a consistent
          16:9 guest system so the show looked as serious as its lineup. A
          single template, productized across an entire season of authority.
        </p>
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {GUESTS.map((g) => (
            <figure key={g.name}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-[color:var(--line)] bg-[color:var(--bg-elev)]">
                <Image
                  src={g.f}
                  alt={`Danger Close episode with ${g.name}`}
                  fill
                  sizes="(min-width: 768px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-xs text-[color:var(--muted)] mt-1.5">
                {g.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-sm text-[color:var(--muted)]">
          Plus Sebastian Junger, Peter Schweizer, Haviv Rettig Gur, and the
          Beirut-survivor testimonial series that carried{" "}
          <span className="text-[color:var(--ink-2)]">Targeted Beirut</span> past
          launch day.
        </p>
      </Section>

      <Section
        eyebrow="07 · Two Launches, One System"
        title="Red Sky Mourning, then Targeted Beirut, off the same playbook."
      >
        <p>
          With the system in place, a launch became a sequence, not a scramble:
          a weekly countdown Q&amp;A walking the backlist, gated sneak-peeks
          (preface, prologue, chapters), authority guests timed to the window,
          launch week, then sustain. Red Sky Mourning ran the play to a Joe Rogan
          #2165 appearance and{" "}
          <span style={{ color: GOLD }} className="font-medium">
            #1 New York Times Bestseller
          </span>
          . Targeted Beirut, the nonfiction, ran the same machine in the fall,
          carried by a survivor-testimonial series.
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <FigBig
            src="/works/jack-carr/rs/2024-07-12_1-new-york-times-bestseller-red-sky-mourning.jpeg"
            label="#1 NYT Bestseller, Red Sky Mourning"
            ratio="3/2"
          />
          <FigBig
            src="/works/jack-carr/rs/joe-rogan-2165.jpeg"
            label="Joe Rogan Experience #2165"
            ratio="3/2"
          />
        </div>
        <div className="not-prose mt-2">
          <FigBig
            src="/works/jack-carr/rs/2024-06-18_red-sky-mourning-official-publication.jpeg"
            label="Official publication day"
            ratio="16/9"
          />
        </div>
      </Section>

      <Section
        eyebrow="08 · The Payoff"
        title="Launches became assembly, not reinvention."
      >
        <p>
          An author platform, not a promo page. Books, podcasts, shop, and
          story, rebuilt on one system and all speaking the same language, so the
          next launch starts from a kit instead of a blank page.
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

function FigBig({
  src,
  label,
  ratio,
}: {
  src: string;
  label: string;
  ratio: string;
}) {
  return (
    <figure>
      <div
        className="relative overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elev)]"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="text-xs text-[color:var(--muted)] mt-2">
        {label}
      </figcaption>
    </figure>
  );
}
