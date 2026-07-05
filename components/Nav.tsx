"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "AI Bliss", href: "/#ai-bliss" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--bg)]/80 border-b border-[color:var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-3 group">
          <span className="font-display text-xl leading-none tracking-tight uppercase">
            Chris Cook
          </span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
            <span className="block w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
            Fractional &amp; consulting · 2026
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[13px] uppercase tracking-[0.12em] font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[color:var(--ink-2)] hover:text-[color:var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="btn btn-primary !py-2.5 !px-4 text-xs">
          Get in touch
        </a>
      </div>
    </header>
  );
}
