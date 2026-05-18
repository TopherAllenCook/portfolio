export default function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--bg)] border-t border-[color:var(--bg)]/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xl">Chris Cook</span>
          <span className="text-[color:var(--bg)]/50 text-sm">Lehi, Utah</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[color:var(--bg)]/70">
          <a
            href="https://linkedin.com/in/christopherallencook"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline"
          >
            LinkedIn
          </a>
          <a href="mailto:topher.a.cook@gmail.com" className="link-underline">
            Email
          </a>
          <span className="text-[color:var(--bg)]/40">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
