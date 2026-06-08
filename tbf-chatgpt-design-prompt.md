# ChatGPT prompt — Terpene Belt Farms interactive operations console

How to use: paste the prompt below into ChatGPT (GPT-5 / 4o). It returns one self-contained HTML file you
can open or preview in Canvas. If you'd rather see a still concept first, use the "image variant" note at
the end.

---

You are a senior product designer and front-end engineer. Design and BUILD a single-file, interactive
HTML prototype of a marketing operations console for the brand Terpene Belt Farms (TBF). Output ONE
self-contained .html file (inline CSS + vanilla JavaScript, no frameworks, no build step, no external
assets except Google Fonts) that I can open in a browser or preview in Canvas. Use realistic mock data
and no backend. Every function listed below must be genuinely interactive (clickable, with state), not a
static picture.

THE BRAND
Terpene Belt Farms: "Purveyors of Hemp Essential Oil." A vertically integrated California agricultural
processor (established 2019) that created the first scaled supply of hemp essential oil through what they
call "fragrance farming." Premium, heritage, terroir-driven: they treat terpene oils like wine vintages.
Signature mark: Fresh Never Frozen® (flowers processed fresh, never frozen, dried, or cured; field to oil
in 90 minutes). Origin story: the California Terpene Belt in the Diablo Range foothills of the San Joaquin
Valley; lineage traces to Garden of Eden, one of the country's earliest licensed cannabis retailers, with
100 years of combined cannabis experience. Forward positioning: taking cannabinoid-free terpene oils into
the traditional flavor and fragrance world.

Voice: confident, earthy, premium, heritage-proud, a little maverick. Vintages are noted as Season V and
Season VI (Roman numerals).

Visual direction: agricultural premium meets fragrance-house luxury. Warm, natural, refined, editorial.
Anchor on a forest green #3b6b2b over a warm off-white paper (#f8f7f4) with near-black ink (#0c0b0a). Use
terroir and vintage cues. Restrained and quiet, not techy-neon. You may refine the palette but keep the
green and the warm-paper base. Use the Fresh Never Frozen® mark correctly (with the registered symbol on
first use).

FUNCTIONS TO INTERACTIVELY MANAGE
1. Workflow runner. A left nav lists TBF's content and marketing automations: Four Surfaces, Full Content
   Stack, Sample-Pack Triage, Blog Splinter, Competitor Ad Watcher, UGC Ad Generator. Selecting one shows
   its input form, including catalog-aware pickers: aroma family, SKU, Season vintage, and audience. A Run
   button starts a simulated run.
2. Live run experience. On Run, show a progress stepper (Queued, Loading brain, Generating, Rendering,
   Done) with live elapsed time, then render structured mock output: social posts, SEO/AEO/GEO snippets,
   or a 9:16 UGC ad card depending on the workflow. Each output card has Approve, Edit, and Regenerate
   actions that change its visible state.
3. Monitoring overview. KPI tiles (Runs today, Success rate, Avg latency, Content shipped, Spend), an
   agent/automation status list (name, status dot for healthy/running/error/paused, last run, success
   rate), and a simple runs-over-time chart (inline SVG, no chart library).
4. Run history and reports. A filterable table of past runs (workflow, SKU, started, duration, status),
   plus a Reports view that rolls up content shipped per surface and per aroma family.
5. Alerts. Surface failures that need attention, each with Retry and Resolve actions.

CATALOG AWARENESS (use this real data in pickers, mock runs, and reports)
- 8 aroma families: Fruit, Gas, Pine, Dessert, Sweet, Citrus/Sour, Savory, Purple.
- Real SKUs (format Category-Number): Gas-707, Pine-37, Sweet-16, Fruit-9, Dessert-109, Citrus-78.
- Sample packs: Flavor Profile Oils Sampler, Exclusive Oils Sampler, Standard Oils Sampler, Premium Oils
  Sampler, NEU Bag Flavor Sampler.
- Product tiers: Native Cannabis Terpenes (flagship, Fresh Never Frozen®), Enhanced Natural / Botanical
  Blends, Type III Genetics Exclusive Oils (limited vintage releases).
- Vintages: Season V, Season VI.

INTERACTIVITY REQUIREMENTS
- Clicking the nav switches the active workflow and its form.
- Run shows the stepper, then mock output; Regenerate re-runs; Approve marks a card approved (clear visual
  state); Edit makes the card's text editable.
- Tabs (Run, Output, History) switch correctly.
- A command palette (Cmd+K / Ctrl+K) jumps between workflows.
- The history table filters work.
- Persist approvals and run history in localStorage so the tool feels real across reloads.

QUALITY GUARDRAILS (non-negotiable)
- WCAG AA contrast: body text at least 4.5:1 against its background.
- Real loading (skeletons, not spinners in content), empty, and error states for every async area.
- Semantic HTML: exactly one h1, logical heading order, landmarks. ARIA on the tabs, the command-palette
  dialog (role=dialog, focus trap, return focus), and a live region for run status. Full keyboard
  operability with visible focus rings.
- Do NOT use: gradient text, decorative glassmorphism, colored left/right side-stripe borders on cards, or
  a layout that is just one repeated identical-card grid.
- Typography: Inter (or a clean system sans) for UI, a monospace (e.g., JetBrains Mono) for IDs,
  timestamps, durations, and counts. Use tabular numerals for all numbers.
- Respect prefers-reduced-motion.
- No em dashes anywhere in the copy. Use commas, colons, periods, or parentheses.

OUTPUT
- Return ONE complete, self-contained HTML file, starting with <!doctype html>. Ship the full thing with
  no placeholder comments and the mock data already populated.
- After the file, add a short 3-bullet summary of your key design decisions.

---

# IMAGE PROMPT (paste this to generate a visual mockup instead of code)

Create a single high-fidelity UI design mockup, a realistic product screenshot of a desktop web app, in
16:9 landscape at high resolution. It is the operations dashboard for Terpene Belt Farms (TBF), a premium
California hemp-essential-oil and cannabis-terpene company ("Purveyors of Hemp Essential Oil," fragrance
farming, Fresh Never Frozen®). The aesthetic is agricultural premium meets fragrance-house luxury: calm,
editorial, expensive, not techy or neon. Think Linear or Stripe quality, but warm and earthy.

Color and type: warm off-white paper background (#f8f7f4), pure white cards, near-black ink text, and a
deep forest green (#3b6b2b) as the single accent for the logo, active states, and small status dots.
Subtle hairline borders, soft low shadows, rounded 10px corners, generous whitespace. Clean modern sans
typography for labels with a monospace for numbers and timestamps. A faint botanical or oil-droplet motif
in the small square logo.

Layout, left to right, top to bottom:
- A slim top bar: a small green logo square with the wordmark "Terpene Belt Farms" and a lighter
  "Operations" label, a search field in the middle, a green "Live" status pill, and a round user avatar on
  the right.
- A left sidebar with a grouped navigation list of workflow names (Four Surfaces, Full Content Stack,
  Sample-Pack Triage, Blog Splinter, Competitor Ad Watcher, UGC Ad Generator), each with a tiny green
  status dot.
- A main area with: a row of four or five KPI stat tiles at the top (large numbers with small labels like
  Runs today, Success rate, Avg latency, Content shipped); a wide line chart titled "Runs over time" with
  a soft green area fill; below it a panel of generated-content cards (an Instagram caption card, a
  LinkedIn post card, and a vertical 9:16 video ad thumbnail) with small Approve and Regenerate buttons;
  and a status list of automations with green and amber dots.
- A right rail "Activity" feed: short timeline rows each with a small colored dot and a timestamp.

Show realistic but tasteful placeholder content referencing terpene oils and SKUs like Gas-707 and
Season VI. Make headings crisp and legible; fine print can be softly suggested. Polished, premium,
pixel-clean, screenshot-realistic, no people, no photo of a real screen or device frame, just the UI
itself filling the canvas.
