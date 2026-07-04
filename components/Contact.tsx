import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-40 border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <span className="bracket mb-8 inline-flex">Start a conversation</span>
        <h2 className="display-xl text-[clamp(2.5rem,9vw,8rem)] max-w-5xl">
          Have a story to tell,
          <br />a brand to build, or
          <br />a number to move?
        </h2>

        <p className="mt-10 max-w-xl text-lg text-[color:var(--ink-2)] leading-relaxed">
          Available for fractional and consulting engagements &mdash; embedding
          with your team as your AI marketing lead. Open to the right in-house
          role too. The fastest way to reach me is email, but a 15 minute intro
          call is usually more useful for both of us.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="mailto:topher.a.cook@gmail.com" className="btn btn-primary">
            topher.a.cook@gmail.com
          </a>
          <a href="tel:+18019951159" className="btn btn-ghost">
            801-995-1159
          </a>
          <a
            href="https://linkedin.com/in/christopherallencook"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <span className="bracket bracket-muted mb-4 inline-flex">
              Send a message
            </span>
            <p className="text-[color:var(--muted)] leading-relaxed">
              Tell me a little about the brand, the team, or the problem
              you&rsquo;re circling. I&rsquo;ll write back from{" "}
              <span className="text-[color:var(--ink)]">
                topher.a.cook@gmail.com
              </span>
              .
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
