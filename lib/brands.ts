// Brand configs powering BrainExplorer + LiveDemo + the pitch case studies.
// Add a new client by appending one config object here.

export type BrandFile = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
};

export type BrandPreset = { label: string; value: string };

export type BrandAudience = { id: string; label: string };

export type BrandWebhooks = {
  // Simpler short-form workflow (4-6 surfaces).
  short?: string;
  // Full content stack (social + SEO + AEO + GEO).
  full: string;
};

export type Brand = {
  slug: string;
  client: string;
  shortName: string;
  accent: string;
  category: string;
  // Where to fetch brain files from (relative to /public).
  brainBase: string;
  brainFiles: BrandFile[];
  webhooks: BrandWebhooks;
  presets: BrandPreset[];
  audiences: BrandAudience[];
  // The shape of the response from the FULL webhook.
  // "tbf" = social/seo/aeo/geo blocks. "romanoff" = press_quote/instagram/tiktok_script/podcast_pitch/seo/aeo/geo.
  shape: "tbf" | "romanoff";
};

export const BRANDS: Brand[] = [
  {
    slug: "tbf",
    client: "Nexus Agriscience / Terpene Belt Farms",
    shortName: "Terpene Belt Farms",
    accent: "#4F7A3C",
    category: "B2B / cannabis terpene supplier",
    brainBase: "/brain",
    brainFiles: [
      { slug: "voice-manual", title: "voice-manual.md", tagline: "9-axis stylometric profile. The system prompt for every agent.", emoji: "🎙️" },
      { slug: "brand-canon", title: "brand-canon.md", tagline: "Verbatim one-liners and trademarked phrasings.", emoji: "📜" },
      { slug: "product-catalog", title: "product-catalog.md", tagline: "Every SKU by aroma family. Real names, real numbers.", emoji: "📦" },
      { slug: "formulator-personas", title: "formulator-personas.md", tagline: "Four B2B reader profiles with vocabulary keys.", emoji: "👥" },
      { slug: "seo-keywords", title: "seo-keywords.md", tagline: "Keyword universe + on-page schema requirements.", emoji: "🔍" },
      { slug: "aeo-questions", title: "aeo-questions.md", tagline: "20 questions formulators ask AI engines.", emoji: "💬" },
      { slug: "geo-snippets", title: "geo-snippets.md", tagline: "Quote-ready definitions, comparisons, statistics.", emoji: "✂️" },
      { slug: "harvest-vintages", title: "harvest-vintages.md", tagline: "Vintage timeline 2003-2025 with operational facts.", emoji: "🌱" },
      { slug: "research-corpus", title: "research-corpus.md", tagline: "The peer-reviewed citation backbone.", emoji: "📚" },
      { slug: "automation-stack", title: "automation-stack.md", tagline: "Live workflows + the queued roadmap.", emoji: "⚙️" },
    ],
    webhooks: {
      short: "https://financiallyfitphotographe.app.n8n.cloud/webhook/tbf-content-demo",
      full: "https://financiallyfitphotographe.app.n8n.cloud/webhook/tbf-content-stack",
    },
    presets: [
      { label: "UCLA research grant", value: "Nexus Agriscience selected for UCLA-led, California state-funded cannabis research grant. TBF terpene oils will be the input dataset." },
      { label: "Pine-129 vintage release", value: "TBF just released the 2025 Pine-129 vintage at 8.2% caryophyllene by GC-MS, the highest concentration recorded for this cultivar." },
      { label: "Vape thermal stability", value: "New internal GC-MS data shows TBF Gas-707 holds flavor integrity at 230°C, where most monoterpene-dominant blends drop off above 180°C." },
    ],
    audiences: [
      { id: "vape", label: "Vape R&D" },
      { id: "beverage", label: "Beverage formulator" },
      { id: "edible", label: "Edible formulator" },
      { id: "distributor", label: "Distributor / procurement" },
    ],
    shape: "tbf",
  },
  {
    slug: "romanoff",
    client: "Dr. Sabrina Romanoff",
    shortName: "Dr. Sabrina Romanoff",
    accent: "#7C5B8C",
    category: "Personal brand / clinical psychologist + press",
    brainBase: "/sabrina-brain",
    brainFiles: [
      { slug: "voice-manual", title: "voice-manual.md", tagline: "9-axis stylometric profile. Clinical authority delivered conversationally.", emoji: "🎙️" },
      { slug: "brand-canon", title: "brand-canon.md", tagline: "Verbatim bio lines + credentials cluster.", emoji: "📜" },
      { slug: "services-catalog", title: "services-catalog.md", tagline: "Individual therapy, couples therapy, consulting, press services.", emoji: "🩺" },
      { slug: "audience-personas", title: "audience-personas.md", tagline: "Journalist, social audience, therapy prospect, podcast booker.", emoji: "👥" },
      { slug: "seo-keywords", title: "seo-keywords.md", tagline: "NYC therapist + mental-health keyword universe.", emoji: "🔍" },
      { slug: "aeo-questions", title: "aeo-questions.md", tagline: "25 questions people ask AI engines about her topics.", emoji: "💬" },
      { slug: "geo-snippets", title: "geo-snippets.md", tagline: "Quote-ready clinical reframes for AI engines.", emoji: "✂️" },
      { slug: "press-history", title: "press-history.md", tagline: "USA Today, Washington Post, Today Show, BBC + 35 more outlets.", emoji: "📰" },
      { slug: "research-corpus", title: "research-corpus.md", tagline: "Attachment theory, couples, anxiety, trauma citation backbone.", emoji: "📚" },
      { slug: "automation-stack", title: "automation-stack.md", tagline: "Press-quote generator + cultural-moment watcher + 5 more.", emoji: "⚙️" },
    ],
    webhooks: {
      full: "https://financiallyfitphotographe.app.n8n.cloud/webhook/romanoff-content-stack",
    },
    presets: [
      { label: "Doomscrolling + anxiety", value: "The connection between doomscrolling and rising anxiety levels in young adults. New research on threat-detection circuitry and compulsive news consumption." },
      { label: "Loneliness epidemic", value: "The Surgeon General's 2023 advisory framed loneliness as a public health crisis. What clinicians are actually seeing in their practices in 2026." },
      { label: "Reality TV breakup analysis", value: "A high-profile reality TV couple just publicly split mid-season. Press wants a clinical read on their on-camera communication patterns." },
    ],
    audiences: [
      { id: "press", label: "Press / journalist" },
      { id: "social", label: "Social audience" },
      { id: "prospect", label: "Therapy prospect" },
      { id: "booker", label: "Podcast / TV booker" },
    ],
    shape: "romanoff",
  },
];

export function getBrand(slug: string): Brand {
  const b = BRANDS.find((x) => x.slug === slug);
  if (!b) throw new Error(`Unknown brand: ${slug}`);
  return b;
}
