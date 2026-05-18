export type Work = {
  slug: string;
  client: string;
  role: string;
  period: string;
  category: string;
  headline: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  link?: { label: string; href: string };
  accent?: string;
  image: string;
};

export const works: Work[] = [
  {
    slug: "lotus-company",
    client: "Lotus Company",
    role: "Brand Manager",
    period: "2025 — May 2026",
    category: "Brand & Web Redesign",
    headline:
      "Rebuilding the digital home of a Utah real estate and hospitality group, end to end.",
    summary:
      "Owned the full website rebuild for Lotus Company and its sub-brands across real estate development and hospitality. Architecture, UX, visual design, and copy, with the brand told back to its audience in one coherent story across every page.",
    highlights: [
      "Led information architecture, UX, visual design, and copy for the full site",
      "Aligned multiple sub-brands (Lotus, Lotus Built, Lotus Hospitality) under one narrative system",
      "Translated a long history of buildings and projects into a clear, story-first presentation",
    ],
    metrics: [
      { label: "Scope of redesign", value: "End to end" },
      { label: "Sub-brands aligned", value: "3" },
      { label: "Disciplines led", value: "4" },
    ],
    link: { label: "lotuscompany.com", href: "https://www.lotuscompany.com" },
    accent: "#8B6F47",
    image: "/works/lotus-company.jpeg",
  },
  {
    slug: "one-music-schools",
    client: "One Music Schools",
    role: "Director of Marketing",
    period: "Sep 2024 — Jun 2025",
    category: "Brand & Growth",
    headline: "Repositioning a multi-location music network and tuning its engine for 150%+ qualified lead growth.",
    summary:
      "Owned growth, performance, and lifecycle marketing for a fast-scaling network of 10+ music schools and multiple sub-brands. Rebuilt media strategy, creative testing, and funnel UX from the ground up.",
    highlights: [
      "Re-architected paid media across Meta and Google with a creative-first testing framework",
      "Led a site-wide UX and CRO overhaul informed by friction-point analysis",
      "Stood up lifecycle and CRM automations across multiple sub-brands",
    ],
    metrics: [
      { label: "Qualified leads YoY", value: "+150%" },
      { label: "CTR improvement", value: "+36%" },
      { label: "CPC reduction", value: "-46%" },
      { label: "Gwinnett growth", value: "+274%" },
    ],
    accent: "#B94A2C",
    image: "/works/one-music-schools.jpeg",
  },
  {
    slug: "jack-carr-official",
    client: "Jack Carr — Official",
    role: "Director of Marketing",
    period: "Feb 2024 — Sep 2024",
    category: "Brand Stewardship",
    headline: "Stewarding a bestselling author brand through the Red Sky Morning launch.",
    summary:
      "Led brand, digital marketing, and lifecycle for #1 NYT bestselling author Jack Carr's official platform. Designed and shipped a full rebuild of officialjackcarr.com and directed the multi-channel storytelling campaign for the final Terminal List novel across blogs, podcasts, and social.",
    highlights: [
      "Rebuilt officialjackcarr.com end-to-end (IA, UX, content, performance)",
      "Directed Red Sky Morning launch across blogs, podcasts, and social",
      "Built lifecycle email programs for a 60K+ subscriber fan base",
      "Managed $50K paid budget across Meta, Google, and AdRoll",
    ],
    metrics: [
      { label: "Conversion lift", value: "+20%" },
      { label: "Active subscribers", value: "60K+" },
      { label: "Ad budget managed", value: "$50K" },
    ],
    link: { label: "officialjackcarr.com", href: "https://officialjackcarr.com" },
    accent: "#2A2722",
    image: "/works/jack-carr-official.jpeg",
  },
  {
    slug: "wgu-academy",
    client: "WGU Academy",
    role: "Senior Digital Marketing Manager",
    period: "Nov 2022 — Feb 2024",
    category: "Brand & Enrollment",
    headline: "Sharpening the story and lifting enrollment for a national online university pathway.",
    summary:
      "Led digital initiatives supporting enrollment growth across SEO, paid, email, and web for Western Governors University's Academy program. Built segmentation and lifecycle programs that consistently outperformed industry benchmarks.",
    highlights: [
      "Shipped 35+ cross-channel campaigns spanning SEO, email, web, and paid",
      "Led UX and web design initiatives focused on usability and conversion",
      "Built segmentation strategy that drove industry-leading email engagement",
    ],
    metrics: [
      { label: "Campaigns shipped", value: "35+" },
      { label: "Avg. email open rate", value: "46%" },
      { label: "Email CTR", value: "2.9%" },
      { label: "Campaign ROI lift", value: "+25%" },
    ],
    accent: "#3F5A3F",
    image: "/works/wgu-academy.jpeg",
  },
  {
    slug: "doterra",
    client: "doTERRA International",
    role: "Associate Product Marketing & Brand Manager",
    period: "Feb 2019 — Jul 2021",
    category: "Brand & Product Launches",
    headline: "Telling the story of 40+ products into competitive wellness categories.",
    summary:
      "Owned brand strategy, product positioning, and launch storytelling for a global consumer wellness company. Built narrative architecture, GTM plans, and creative direction for 40+ products across competitive categories, contributing to $120M+ in product revenue.",
    highlights: [
      "Led launch strategy for 40+ products across competitive categories",
      "Conducted UX research and market gap analysis across 5 product categories",
      "Built SWOT analyses and business cases presented to senior leadership",
    ],
    metrics: [
      { label: "Products launched", value: "40+" },
      { label: "Revenue contribution", value: "$120M+" },
      { label: "Categories analyzed", value: "5" },
    ],
    accent: "#7C5B3F",
    image: "/works/doterra.jpeg",
  },
  {
    slug: "inscipher",
    client: "InsCipher",
    role: "Product Marketing Manager",
    period: "Feb 2022 — Oct 2022",
    category: "B2B Repositioning",
    headline: "Repositioning a B2B insurtech platform and the story it sells with.",
    summary:
      "Owned brand and product marketing for a B2B SaaS insurance technology platform. Drove customer and market research, rewrote positioning and messaging, and ran end-to-end go-to-market storytelling for three major campaigns.",
    highlights: [
      "Owned customer and market research informing positioning",
      "Directed end-to-end GTM for three major launches",
      "Ran events, tradeshows, and integrated email campaigns",
    ],
    metrics: [
      { label: "Time-to-market", value: "-22%" },
      { label: "Launch KPI beat", value: "+15%" },
      { label: "Major launches", value: "3" },
    ],
    accent: "#2F4858",
    image: "/works/inscipher.jpeg",
  },
];
