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
    slug: "sabrina-romanoff",
    client: "Dr. Sabrina Romanoff",
    role: "Marketing Engineer (Pitch)",
    period: "2026 — Proposal",
    category: "Personal Brand · Press · Clinical Practice",
    headline:
      "A press-cluster-on-autopilot content operating system for a Harvard-trained clinical psychologist with a 40-outlet media footprint.",
    summary:
      "A live application of the Marketing Engineer toolkit, scoped for Dr. Sabrina Romanoff. Captured her Voice Manual from her owned site plus aggregated press voice, built a 10-file brain (services, audience personas, press history, AEO question library, GEO snippet templates, research corpus), shipped a live n8n workflow that returns press quotes, IG captions, TikTok scripts, podcast pitches, and full SEO+AEO+GEO surfaces in under a minute. Same brain-agent-workflows architecture as the TBF build, applied to a personal-brand vertical.",
    highlights: [
      "Scraped Dr. Romanoff's owned site + 40+ press outlet footprint into a single Voice Manual",
      "Built a 10-file Obsidian brain covering services, audiences, press history, SEO/AEO/GEO assets, research corpus",
      "Published an n8n workflow generating 7 on-brand surfaces (press, IG, TikTok, pitch, SEO, AEO, GEO) per topic",
      "Demonstrated the methodology generalizes from B2B agritech (TBF) to personal-brand creator economy without changing the architecture",
    ],
    metrics: [
      { label: "Brain files shipped", value: "10" },
      { label: "Surfaces per run", value: "7" },
      { label: "Press outlets cataloged", value: "40+" },
      { label: "Audience personas", value: "4" },
    ],
    link: { label: "drsabrinaromanoff.com", href: "https://drsabrinaromanoff.com" },
    accent: "#7C5B8C",
    image: "/works/sabrina-romanoff.jpeg",
  },
  {
    slug: "nexus-marketing-engineer",
    client: "Nexus Agriscience / Terpene Belt Farms",
    role: "Marketing Engineer (Pitch)",
    period: "2026 — Proposal",
    category: "Marketing Engineering",
    headline:
      "A content operating system for a vertically integrated cannabis terpene processor, demonstrated on their own brand.",
    summary:
      "A live application of the Marketing Engineer toolkit, scoped specifically for Nexus / Terpene Belt Farms. Extracted the brand's voice from their public corpus into a structured Voice Manual, mapped a three-layer content architecture (Obsidian brain + Claude agent + n8n workflows), and prototyped four on-brand outputs from a single recent news event. The pitch: turn one harvest, one blog, and one press hit into eight pieces of formulator-targeted content per week, all on the first pass.",
    highlights: [
      "Scraped and stylometrically analyzed the TBF public web corpus (About + 8 long-form blogs) to produce a 9-axis Voice Manual",
      "Designed the three-layer system: persistent Obsidian brand brain, Claude-based executor agent, n8n workflow plumbing",
      "Mapped 8 concrete n8n automations ranked by ROI for B2B-formulator audience (sample-pack triage, vintage release engine, blog splintering, research watcher, formulator Q&A bot, founder digest, conference pipeline, newsletter)",
      "Demonstrated the system end-to-end: one real news event (UCLA-led state research grant) generated four polished surfaces (IG, LinkedIn, cold email, blog opener) in the captured voice",
    ],
    metrics: [
      { label: "Voice axes extracted", value: "9" },
      { label: "n8n automations mapped", value: "8" },
      { label: "Surfaces demoed", value: "4" },
      { label: "Corpus scraped", value: "9 pages" },
    ],
    link: { label: "terpenebeltfarms.com", href: "https://terpenebeltfarms.com" },
    accent: "#4F7A3C",
    image: "/works/terpene-belt-farms.jpeg",
  },
  {
    slug: "ridley-academy",
    client: "Ridley Academy (Concept Pitch)",
    role: "Designer & Builder (Pitch)",
    period: "2026 — Proposal",
    category: "Concept Site & VSL Funnel",
    headline:
      "A cinematic book-a-call funnel concept for a piano-education brand, built as a working site to win the role.",
    summary:
      "An unsolicited concept build for Stephen Ridley's piano-education brand: a dark, editorial landing experience and a book-a-call VSL funnel, designed and shipped as a real, browsable site to make the funnel strategy behind the application tangible rather than theoretical.",
    highlights: [
      "Designed and built a live concept site end to end (cinematic hero, VSL, book-a-call funnel)",
      "Authored the funnel strategy and VSL framing around a free live-masterclass offer",
      "Shipped the concept as a working site, not a slide, to demonstrate the build capability",
    ],
    metrics: [
      { label: "Scope", value: "Concept + build" },
      { label: "Turnaround", value: "Days" },
      { label: "Stack", value: "Next.js" },
    ],
    link: {
      label: "ridley-academy-concept.vercel.app",
      href: "https://ridley-academy-concept.vercel.app",
    },
    accent: "#9B2D2D",
    image: "/works/ridley-academy.jpeg",
  },
  {
    slug: "real-estate-hospitality",
    client: "Real Estate & Hospitality Group",
    role: "Freelance Brand & Web Consultant",
    period: "2025",
    category: "Brand & Web Redesign",
    headline:
      "Rebuilding the digital home of a Utah real estate and hospitality group, end to end.",
    summary:
      "A freelance engagement rebuilding the full website for a Utah real estate and hospitality group and its sub-brands across development and hospitality. Architecture, UX, visual design, and copy, with the brand told back to its audience in one coherent story across every page.",
    highlights: [
      "Led information architecture, UX, visual design, and copy for the full site",
      "Aligned multiple sub-brands across development and hospitality under one narrative system",
      "Translated a long history of buildings and projects into a clear, story-first presentation",
    ],
    metrics: [
      { label: "Scope of redesign", value: "End to end" },
      { label: "Sub-brands aligned", value: "3" },
      { label: "Disciplines led", value: "4" },
    ],
    accent: "#8B6F47",
    image: "/works/real-estate-hospitality.jpeg",
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
  {
    slug: "glymed-plus",
    client: "GlyMed Plus",
    role: "Fractional Marketing Director",
    period: "2021 — 2022",
    category: "Professional Skincare · Brand & Design",
    headline:
      "Leading brand, content, and a full design transformation for a professional medical-aesthetics skincare line.",
    summary:
      "Served as fractional Marketing Director for GlyMed Plus, a professional-grade, esthetician-trusted skincare brand sold through licensed aestheticians and medical spas. Directed brand and the monthly promotional and education calendar, ran protocol- and regimen-led campaigns across a deep professional catalog, and helped drive the brand's new design transformation.",
    highlights: [
      "Directed brand and the monthly promotional/education calendar across the professional catalog",
      "Helped drive the brand's new design transformation",
      "Built education-led marketing (protocols, regimens, blogs, toolkits) for a licensed-pro audience",
    ],
    metrics: [
      { label: "Audience", value: "Licensed pros" },
      { label: "Category", value: "Medical aesthetics" },
      { label: "Scope", value: "Brand + content" },
    ],
    link: { label: "glymedplus.com", href: "https://www.glymedplus.com" },
    accent: "#C8553D",
    image: "/works/glymed-plus.jpeg",
  },
  {
    slug: "get-found-ai",
    client: "Get Found AI",
    role: "Founder, Designer & Builder",
    period: "2025 — Present",
    category: "Independent Product",
    headline:
      "Building the visibility layer wedding vendors need inside AI search.",
    summary:
      "Designed and built a product that helps wedding vendors get surfaced inside ChatGPT, Perplexity, and Gemini results. The audit engine grades a vendor's web presence against how LLMs actually retrieve and rank information, then prescribes the structured content and AEO work to close the gap. Positioning, IA, product design, copy, and engineering all owned end to end.",
    highlights: [
      "Identified a real category gap: wedding vendors are largely invisible to LLM-powered search",
      "Designed an audit engine that scores AEO posture and prescribes specific fixes",
      "Shipped marketing site, product flow, and reporting layer solo, AI-native stack",
    ],
    metrics: [
      { label: "Scope", value: "End to end" },
      { label: "Disciplines", value: "5" },
      { label: "Stack", value: "Next.js + AI" },
    ],
    link: { label: "getfoundai.co", href: "https://getfoundai.co" },
    accent: "#4A6B8A",
    image: "/works/get-found-ai.jpeg",
  },
  {
    slug: "glide-cleaners",
    client: "Glide Cleaners",
    role: "Designer & Builder",
    period: "2025",
    category: "Independent Web Build",
    headline:
      "A polished consumer site shipped in days using modern AI-native build tools.",
    summary:
      "Designed and built a clean, conversion-minded marketing site for Glide Cleaners using a low-code, AI-assisted build stack. The project demonstrates how I compress design and build timelines without compromising on brand quality, copy, or UX.",
    highlights: [
      "Built the full marketing site in days, not weeks",
      "Owned brand design, copy, IA, and conversion architecture",
      "Shipped using AI-assisted tooling (Lovable + Claude) for rapid iteration",
    ],
    metrics: [
      { label: "Build time", value: "Days" },
      { label: "Scope", value: "End to end" },
      { label: "Stack", value: "AI-native" },
    ],
    link: {
      label: "glide-sparkle-hub.lovable.app",
      href: "https://glide-sparkle-hub.lovable.app",
    },
    accent: "#1F6F8B",
    image: "/works/glide-cleaners.jpeg",
  },
  {
    slug: "glide-window-cleaning-audit",
    client: "Glide Window Cleaning",
    role: "Paid Media Consultant",
    period: "2026",
    category: "Consulting Audit",
    headline:
      "A full Google Ads audit and rebuild plan for a multi-market home-services brand.",
    summary:
      "Conducted a 360-day audit of Glide Window Cleaning's Google Ads account ($16K spend, 309 conversions) and authored a complete rebuild plan. Diagnosed the real problem (a starved learning signal and a missing search foundation, not a weak category) and prescribed a geo-segmented structure with branded protection, offline conversion uploads, and disciplined bidding tiers across Arizona, Utah, and Denver.",
    highlights: [
      "Diagnosed under-1% impression share against competitors operating in the 20-30% range",
      "Designed a market-by-market budget and bid plan to push into the competitive tier",
      "Prescribed branded search, offline conversion uploads, and a manual rebuild before automation",
    ],
    metrics: [
      { label: "Spend audited", value: "$16K" },
      { label: "Period reviewed", value: "360 days" },
      { label: "Markets planned", value: "3" },
    ],
    accent: "#4F7CAC",
    image: "/works/glide-window-cleaning.jpeg",
  },
  {
    slug: "dieu-humilie",
    client: "Dieu Humilié",
    role: "Brand & Product Designer",
    period: "2021",
    category: "Brand Concept & Advertising",
    headline:
      "Repositioning the men's hairpiece category as luxury, ethical, and unapologetically masculine.",
    summary:
      "Concepted and designed an end-to-end brand and product line for Dieu Humilié, a luxury, ethically sourced men's hairpiece brand. Customer research, positioning, brand identity, product line architecture, packaging, and an advertising campaign built to destigmatize the category and speak to a man who wants to feel powerful, handsome, and confident.",
    highlights: [
      "Built the positioning on direct research with hair-replacement customers and luxury buyers",
      "Designed brand identity, product line (adhesive, hair masque, cologne), and packaging system",
      "Wrote and art-directed the launch advertising and social campaign",
    ],
    metrics: [
      { label: "Disciplines", value: "5" },
      { label: "Product SKUs", value: "4" },
      { label: "Scope", value: "End to end" },
    ],
    accent: "#A6826A",
    image: "/works/dieu-humilie.jpeg",
  },
  {
    slug: "amavi",
    client: "Amavi (doTERRA R&D)",
    role: "Associate Product Marketing & Brand Manager",
    period: "2021",
    category: "Market Research & Product Concept",
    headline:
      "A research-backed product concept for men's essential-oil fragrance, a category doTERRA hadn't entered.",
    summary:
      "Authored the market research, competitive benchmarking, persona work, and product concept for Amavi, a proposed men's essential-oil fragrance line for doTERRA. Mapped a $31B global fragrance market, defined the target buyer, and designed a three-product launch concept (Azul, Roso, Noir) priced to undercut category leaders while staying ethically sourced.",
    highlights: [
      "Sized the global fragrance market and built a competitive benchmark against Skylar, Henry Rose, Le Labo",
      "Defined a target buyer and use occasions backed by Mintel and survey data",
      "Designed a three-product sampler concept with sustainable packaging and a $24 retail price point",
    ],
    metrics: [
      { label: "Market size mapped", value: "$31B" },
      { label: "Concepts designed", value: "3" },
      { label: "Benchmarks", value: "5" },
    ],
    accent: "#3E5B6A",
    image: "/works/amavi.jpeg",
  },
  {
    slug: "doterra-wellness-program",
    client: "doTERRA Wellness Programs",
    role: "Associate Product Marketing & Brand Manager",
    period: "2021",
    category: "Customer Research & UX",
    headline:
      "Finding out why doTERRA customers dropped a 3-month Wellness Program early, and what to change.",
    summary:
      "Owned the customer research project investigating why doTERRA Wellness Program participants dropped before completing the 3-month track. Designed and ran a 200+ respondent survey, analyzed expectations vs. experience, and surfaced the structural changes (product variety, choice, ordering flexibility, pricing) needed to lift completion.",
    highlights: [
      "Designed and ran a survey with 202 analyzed responses across customer types",
      "Identified the core drivers of drop-off (cost, lack of choice, fixed kit ordering, low product variety)",
      "Translated findings into program-level recommendations for product, pricing, and UX teams",
    ],
    metrics: [
      { label: "Respondents", value: "202" },
      { label: "Programs studied", value: "3" },
      { label: "Avg. satisfaction", value: "4.04 / 5" },
    ],
    accent: "#5A7C5A",
    image: "/works/wellness-program.jpeg",
  },
  {
    slug: "doterra-mothers-day-2020",
    client: "doTERRA Mother's Day 2020",
    role: "Associate Product Marketing & Brand Manager",
    period: "2020",
    category: "Campaign & Creative",
    headline:
      "A Mother's Day campaign for doTERRA's WQA Florals line, anchored by a story about the women worth celebrating.",
    summary:
      "Concepted, wrote, and shipped the Mother's Day 2020 promotional campaign for doTERRA's WQA Florals collection (Rose, Neroli, Jasmine, Magnolia, Blue Lotus). Authored the brand narrative (\"We are bright, charming, beautiful, strong, smart, creative, lovers, mothers, sisters, daughters, women, precious.\") and produced a full set of social, story, and ad creative across Instagram, Facebook, and WhatsApp.",
    highlights: [
      "Wrote the campaign manifesto and product sourcing stories for five WQA Florals",
      "Designed a full social and ad asset pack spanning story, square, and horizontal formats",
      "Coordinated cross-functional rollout across paid, organic, and lifecycle channels",
    ],
    metrics: [
      { label: "Products featured", value: "5" },
      { label: "Asset formats", value: "8+" },
      { label: "Channels", value: "Paid, organic, CRM" },
    ],
    accent: "#C2554A",
    image: "/works/mothers-day-2020.jpeg",
  },
];
