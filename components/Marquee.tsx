// Infinite horizontal marquee of brand/client names drawn from the case studies.
// Curated short names so the strip reads as recognizable brands, not full titles.
const brands = [
  "doTERRA",
  "Jack Carr",
  "WGU Academy",
  "Nexus",
  "Terpene Belt Farms",
  "One Music Schools",
  "InsCipher",
  "Get Found AI",
  "Dr. Sabrina Romanoff",
  "Amavi",
  "Glide",
];

export default function Marquee() {
  // Duplicate the list so the -50% translate loop is seamless.
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Selected brands"
      className="border-y border-[color:var(--line)] py-7 overflow-hidden marquee-track"
    >
      <div className="marquee">
        {loop.map((name, i) => (
          <div key={`${name}-${i}`} className="flex items-center shrink-0">
            <span className="font-display text-2xl md:text-3xl tracking-tight text-[color:var(--ink-2)] uppercase whitespace-nowrap px-8">
              {name}
            </span>
            <span
              className="text-[color:var(--accent)] text-xl select-none"
              aria-hidden
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
