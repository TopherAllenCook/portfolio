import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-40 border-t border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--bg)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-[color:var(--bg)]/60 mb-6">Contact</p>
        <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.95] max-w-5xl">
          Have a story to <em className="italic text-[color:var(--accent)]">tell</em>,
          <br />
          a brand to build,
          <br />
          or a number to move?
        </h2>

        <p className="mt-8 max-w-xl text-lg text-[color:var(--bg)]/70 leading-relaxed">
          Currently open to senior brand and marketing roles in-house, plus selective consulting
          engagements. The fastest way to reach me is email, but a 15 minute intro call is
          usually more useful for both of us.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <ContactCard label="Email" value="topher.a.cook@gmail.com" href="mailto:topher.a.cook@gmail.com" />
          <ContactCard label="Phone" value="801-995-1159" href="tel:+18019951159" />
          <ContactCard
            label="LinkedIn"
            value="christopherallencook"
            href="https://linkedin.com/in/christopherallencook"
          />
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow text-[color:var(--bg)]/60 mb-3">Start a conversation</p>
            <p className="text-[color:var(--bg)]/70 leading-relaxed">
              Tell me a little about the brand, the team, or the problem you&rsquo;re circling.
              I&rsquo;ll write back from{" "}
              <span className="text-[color:var(--bg)]">topher.a.cook@gmail.com</span>.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block border-t border-[color:var(--bg)]/20 pt-4 hover:border-[color:var(--bg)] transition-colors"
    >
      <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--bg)]/50">
        {label}
      </div>
      <div className="mt-2 font-display text-2xl md:text-3xl tracking-tight">{value}</div>
      <span className="mt-2 inline-flex items-center gap-1 text-xs text-[color:var(--bg)]/60 group-hover:text-[color:var(--bg)]">
        Open
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 10L10 2M10 2H4M10 2v6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
