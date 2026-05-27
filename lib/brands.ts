// Brand configs powering BrainExplorer + LiveDemo + the pitch case studies.
// Add a new client by appending one config object here.
// Add a new automation by appending a Workflow to the brand's workflows array.

export type BrandFile = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
};

export type WorkflowFieldType = "text" | "textarea" | "select" | "number";

export type WorkflowField = {
  name: string;
  label: string;
  type: WorkflowFieldType;
  placeholder?: string;
  defaultValue?: string;
  options?: { value: string; label: string }[];
};

export type WorkflowPreset = {
  label: string;
  values: Record<string, string>;
};

// "renderer" tells the LiveDemo component which result-rendering component
// to use for the response from this workflow.
export type RendererKind =
  | "tbf_four_surfaces"
  | "tbf_full_stack"
  | "romanoff_full_stack"
  | "press_quotes"
  | "aeo_page"
  | "sample_triage"
  | "blog_splinter";

export type Workflow = {
  id: string;
  label: string;
  badge: string;
  description: string;
  webhook: string;
  expectedSeconds: number;
  inputFields: WorkflowField[];
  presets: WorkflowPreset[];
  renderer: RendererKind;
};

export type Brand = {
  slug: string;
  client: string;
  shortName: string;
  accent: string;
  category: string;
  brainBase: string;
  brainFiles: BrandFile[];
  workflows: Workflow[];
};

const N8N = "https://financiallyfitphotographe.app.n8n.cloud/webhook";

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
    workflows: [
      {
        id: "tbf_four_surfaces",
        label: "Four Surfaces",
        badge: "Social drop · ~30s",
        description: "Single topic in, four polished social surfaces out (Instagram, LinkedIn, cold email, blog opener). The simplest demonstration of voice-manual-driven generation.",
        webhook: `${N8N}/tbf-content-demo`,
        expectedSeconds: 30,
        renderer: "tbf_four_surfaces",
        inputFields: [
          { name: "topic", label: "Topic", type: "textarea", placeholder: "News event, vintage update, technical hook..." },
        ],
        presets: [
          { label: "UCLA research grant", values: { topic: "Nexus Agriscience selected for UCLA-led, California state-funded cannabis research grant. TBF terpene oils will be the input dataset." } },
          { label: "Pine-129 vintage release", values: { topic: "TBF just released the 2025 Pine-129 vintage at 8.2% caryophyllene by GC-MS, the highest concentration recorded for this cultivar." } },
          { label: "Vape thermal stability", values: { topic: "New internal GC-MS data shows TBF Gas-707 holds flavor integrity at 230°C, where most monoterpene-dominant blends drop off above 180°C." } },
        ],
      },
      {
        id: "tbf_full_stack",
        label: "Full Content Stack",
        badge: "Social + SEO + AEO + GEO · ~60s",
        description: "The flagship workflow. Topic + audience in, full multi-surface content stack out: 6 social surfaces plus a complete SEO bundle, AEO Q&A pack with FAQPage schema, and 3 GEO quote-ready snippets.",
        webhook: `${N8N}/tbf-content-stack`,
        expectedSeconds: 60,
        renderer: "tbf_full_stack",
        inputFields: [
          { name: "topic", label: "Topic", type: "textarea", placeholder: "News event, harvest update, technical claim..." },
          {
            name: "audience",
            label: "Audience",
            type: "select",
            defaultValue: "vape",
            options: [
              { value: "vape", label: "Vape R&D" },
              { value: "beverage", label: "Beverage formulator" },
              { value: "edible", label: "Edible formulator" },
              { value: "distributor", label: "Distributor / procurement" },
            ],
          },
        ],
        presets: [
          { label: "UCLA research grant", values: { topic: "Nexus Agriscience selected for UCLA-led, California state-funded cannabis research grant. TBF terpene oils will be the input dataset.", audience: "vape" } },
          { label: "Pine-129 vintage release", values: { topic: "TBF just released the 2025 Pine-129 vintage at 8.2% caryophyllene by GC-MS, the highest concentration recorded for this cultivar.", audience: "vape" } },
          { label: "Beverage solubility", values: { topic: "New emulsification protocol allows TBF Citrus-78 to dose at 0.03% in carbonated beverages without phase separation across the 90-day shelf life.", audience: "beverage" } },
        ],
      },
      {
        id: "tbf_sample_pack_triage",
        label: "Sample-Pack Triage Agent",
        badge: "Inbound lead → classified + personalized · ~25s",
        description: "Every sample-pack request is a pipeline event. This workflow takes the prospect's company info, classifies them into the right formulator category, scores fit, picks the right sample pack, and drafts a personalized technical follow-up email in TBF voice.",
        webhook: `${N8N}/tbf-sample-pack-triage`,
        expectedSeconds: 25,
        renderer: "sample_triage",
        inputFields: [
          { name: "company_name", label: "Company name", type: "text", placeholder: "e.g. Stiiizy" },
          { name: "website", label: "Website (domain)", type: "text", placeholder: "e.g. stiiizy.com" },
          { name: "product_description", label: "Product line / description", type: "textarea", placeholder: "What they make, who they sell to, scale..." },
          { name: "requester_title", label: "Requester title", type: "text", placeholder: "e.g. Director of R&D" },
        ],
        presets: [
          { label: "Premium vape (Stiiizy)", values: { company_name: "Stiiizy", website: "stiiizy.com", product_description: "Premium 510-thread vape cartridges and proprietary battery system; mass-market cannabis brand active across California and Nevada", requester_title: "Director of Product Innovation" } },
          { label: "RTD beverage startup", values: { company_name: "Cann", website: "drinkcann.com", product_description: "Low-dose, CBD + THC sparkling social tonics. RTD beverages, currently in-market in California and select states.", requester_title: "Beverage Formulation Lead" } },
          { label: "Solventless extractor", values: { company_name: "710 Labs", website: "710labs.com", product_description: "Solventless concentrate brand. Live rosin badder, hash, and infused pre-rolls. Premium positioning.", requester_title: "Head of R&D" } },
        ],
      },
      {
        id: "tbf_blog_splinter",
        label: "Blog Splinter",
        badge: "1 blog → 14+ on-brand assets · ~75s",
        description: "Paste a TBF long-form blog. The agent splinters it into a multi-platform pack: 3 LinkedIn carousels (slide-by-slide), 2 X threads (hook + follow tweets), 5 IG captions, 3 pull-quote tweets, and a cold-email pitch. All in TBF voice.",
        webhook: `${N8N}/tbf-blog-splinter`,
        expectedSeconds: 75,
        renderer: "blog_splinter",
        inputFields: [
          { name: "title", label: "Blog title", type: "text", placeholder: "Long-form blog headline" },
          { name: "content", label: "Blog content (paste body or excerpt)", type: "textarea", placeholder: "Paste the blog content here..." },
        ],
        presets: [
          {
            label: "Caryophyllene concentration blog",
            values: {
              title: "Why Caryophyllene Concentration Is the Metric Your Sesquiterpene Supplier Has Been Avoiding",
              content: "The conventional wisdom in terpene formulation holds that a complex profile is automatically a better profile. More compounds, the thinking goes, means a richer entourage effect and a more defensible product story. That assumption deserves scrutiny, because complexity without concentration data is just noise on a GC-MS readout. Caryophyllene is the clearest counterexample. As a bicyclic sesquiterpene with a 15-carbon backbone, it occupies a chemically distinct tier from the linalools and myrcenes that dominate most commodity blends. Its molecular architecture resists oxidative degradation at elevated temperatures, it survives the viscosity and flash-point demands of distillate-carrier systems, and its concentration, measured in precise percentage points, is a direct predictor of how a profile will perform after 90 days of accelerated aging. The 2025 Pine-129 vintage from our fields in The California Terpene Belt registers 8.2% caryophyllene on GC×GC analysis, a number that reflects both cultivar genetics and the environmental specificity of the season.",
            },
          },
          {
            label: "Terpene vintage primer",
            values: {
              title: "Seasonal Terpene Vintage Reports: How Harvest Month Changes Profile Chemistry",
              content: "In cannabis terpene production, timing is everything. Environmental variables like temperature, light intensity, and humidity during late flowering significantly impact terpene biosynthesis. Early-season harvests favor monoterpenes (limonene, terpinolene) producing light, citrusy profiles ideal for vapes and beverages. Mid-season hits the optimal balance with the highest total terpene content. Late-season produces sesquiterpene-rich extracts (caryophyllene, humulene) with deeper, spicier characteristics suited for premium concentrates. These natural vintages, similar to wine, create both formulation challenges (consistency) and brand opportunities (limited-edition vintage releases). Our year-on-year GC×GC data on the same cultivars shows seasonal myrcene variation of up to 18%, requiring blending protocols for year-round consistency.",
            },
          },
        ],
      },
    ],
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
      { slug: "research-corpus", title: "research-corpus.md", tagline: "Attachment, couples, anxiety, trauma citation backbone.", emoji: "📚" },
      { slug: "automation-stack", title: "automation-stack.md", tagline: "Press-quote generator + cultural-moment watcher + 5 more.", emoji: "⚙️" },
    ],
    workflows: [
      {
        id: "romanoff_full_stack",
        label: "Full Content Stack",
        badge: "Press + Social + SEO + AEO + GEO · ~60s",
        description: "The flagship workflow. Topic + audience in, 7 on-brand surfaces out: press quote, Instagram, TikTok script, podcast pitch, plus a full SEO bundle, AEO Q&A pack with FAQPage schema, and 4 GEO quote-ready snippets.",
        webhook: `${N8N}/romanoff-content-stack`,
        expectedSeconds: 60,
        renderer: "romanoff_full_stack",
        inputFields: [
          { name: "topic", label: "Topic", type: "textarea", placeholder: "News event, cultural moment, clinical concept..." },
          {
            name: "audience",
            label: "Audience",
            type: "select",
            defaultValue: "press",
            options: [
              { value: "press", label: "Press / journalist" },
              { value: "social", label: "Social audience" },
              { value: "prospect", label: "Therapy prospect" },
              { value: "booker", label: "Podcast / TV booker" },
            ],
          },
        ],
        presets: [
          { label: "Doomscrolling + anxiety", values: { topic: "The connection between doomscrolling and rising anxiety levels in young adults. New research on threat-detection circuitry and compulsive news consumption.", audience: "press" } },
          { label: "Loneliness epidemic", values: { topic: "The Surgeon General's 2023 advisory framed loneliness as a public health crisis. What clinicians are actually seeing in their practices in 2026.", audience: "press" } },
          { label: "Reality TV breakup", values: { topic: "A high-profile reality TV couple just publicly split mid-season. Press wants a clinical read on their on-camera communication patterns.", audience: "press" } },
        ],
      },
      {
        id: "romanoff_press_quote",
        label: "Press-Quote Generator",
        badge: "Outlet + topic → 3 quote variants · ~15s",
        description: "Single-purpose workflow tuned for journalist deadlines. Takes outlet + topic + word count, returns three distinct quote variants (mechanism-led, reframe-led, three-signs), plus a suggested pull-quote line and the credentials block for attribution.",
        webhook: `${N8N}/romanoff-press-quote`,
        expectedSeconds: 15,
        renderer: "press_quotes",
        inputFields: [
          { name: "outlet", label: "Outlet", type: "text", placeholder: "e.g. Cosmopolitan, Today Show, BBC" },
          { name: "topic", label: "Topic the journalist is writing about", type: "textarea", placeholder: "What they're asking her to comment on..." },
          { name: "word_count", label: "Word count per quote", type: "number", defaultValue: "60" },
        ],
        presets: [
          { label: "Why people stay too long", values: { outlet: "Cosmopolitan", topic: "Why people stay in relationships past their expiration date. Sunk cost bias, intermittent reinforcement, attachment activation.", word_count: "60" } },
          { label: "Holiday family stress", values: { outlet: "Today Show", topic: "Managing holiday family stress. Boundaries with in-laws, sibling dynamics, when to skip the visit entirely.", word_count: "45" } },
          { label: "Workplace burnout 2026", values: { outlet: "Forbes", topic: "The new face of workplace burnout in 2026. Post-pandemic shifts, the always-on culture, and what HR is missing.", word_count: "80" } },
        ],
      },
      {
        id: "romanoff_aeo_page",
        label: "AEO Page Generator",
        badge: "Question → full /answers/ page · ~40s",
        description: "Takes one search-style question and generates a complete answer page tuned to be cited by AI engines (Perplexity, ChatGPT, Google AI Overview): SVO direct answer, full mechanism-driven answer, ethics caveat, Schema.org FAQPage + Person markup, and 4 GEO snippet types.",
        webhook: `${N8N}/romanoff-aeo-page`,
        expectedSeconds: 40,
        renderer: "aeo_page",
        inputFields: [
          { name: "question", label: "Question (the literal search query)", type: "textarea", placeholder: "What are the 4 attachment styles in adult relationships?" },
        ],
        presets: [
          { label: "4 attachment styles", values: { question: "What are the 4 attachment styles in adult relationships?" } },
          { label: "Why doomscrolling at night", values: { question: "Why does my anxiety get worse when I doomscroll at night?" } },
          { label: "Communication death spiral", values: { question: "What is the communication death spiral in couples?" } },
        ],
      },
    ],
  },
];

export function getBrand(slug: string): Brand {
  const b = BRANDS.find((x) => x.slug === slug);
  if (!b) throw new Error(`Unknown brand: ${slug}`);
  return b;
}

export function getWorkflow(brandSlug: string, workflowId: string): Workflow {
  const brand = getBrand(brandSlug);
  const w = brand.workflows.find((x) => x.id === workflowId);
  if (!w) throw new Error(`Unknown workflow: ${workflowId} on brand ${brandSlug}`);
  return w;
}
