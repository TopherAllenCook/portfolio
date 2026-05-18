"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Works", href: "#works" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
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
          ? "backdrop-blur-md bg-[color:var(--bg)]/70 border-b border-[color:var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl leading-none">Chris Cook</span>
          <span className="hidden sm:inline text-[color:var(--muted)] text-sm">
            / Brand Manager &amp; Storyteller
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
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
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] px-4 py-2 text-sm font-medium hover:bg-[color:var(--ink-2)] transition-colors"
        >
          Book intro call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#contact"
          className="md:hidden text-sm link-underline"
          aria-label="Contact"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
