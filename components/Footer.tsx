export default function Footer() {
  return (
    <footer className="bg-[color:var(--bg)] border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="font-display text-4xl md:text-5xl tracking-tight uppercase">
              Chris Cook
            </div>
            <div className="mt-3 text-sm text-[color:var(--muted)] uppercase tracking-[0.12em]">
              Brand · Story · Build &nbsp;/&nbsp; Lehi, Utah
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] uppercase tracking-[0.12em] text-[color:var(--ink-2)]">
            <a
              href="https://linkedin.com/in/christopherallencook"
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline hover:text-[color:var(--ink)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:topher.a.cook@gmail.com"
              className="link-underline hover:text-[color:var(--ink)]"
            >
              Email
            </a>
            <a
              href="tel:+18019951159"
              className="link-underline hover:text-[color:var(--ink)]"
            >
              801-995-1159
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
          <span>&copy; 2026 Chris Cook</span>
          <span className="uppercase tracking-[0.14em]">
            Available for senior brand &amp; marketing roles
          </span>
        </div>
      </div>
    </footer>
  );
}
