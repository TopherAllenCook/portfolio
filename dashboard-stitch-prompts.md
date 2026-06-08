# Nexus Dashboard — Stitch / v0 prompts (SaaS-product redesign)

Goal: make it feel like a real, commercial **SaaS product**, not a portfolio demo.
The lever for that is STRUCTURE: a full app shell (global product nav, workspace switcher,
plan + usage chrome, an Overview home with charts, Integrations, Settings) plus polish on every state.

Workflow: generate directions in **Google Stitch** (stitch.withgoogle.com), pick a winner,
then `impeccable` ports it into `public/dashboard.html` (vanilla HTML, no React).
Generate Prompts 1 and 2 in the SAME Stitch project so the screens share one design system.

Brand tokens (baked in so output is portable):
- Background warm off-white #f8f7f4, surfaces #ffffff
- Ink #0c0b0a, muted #86827b
- Accents: forest green #3b6b2b (Terpene Belt Farms) + plum purple #6a4d80 (Dr. Romanoff)
- Live #16a34a, warn #b65a26, error #c53b1f
- Inter for UI, JetBrains Mono for data/IDs/timestamps. Tight heading tracking. Tabular numerals.
- Soft low shadows, 8 to 10px radii, hairline borders rgba(12,11,10,0.09).

What "SaaS product" means here (apply to every prompt):
- A persistent app shell, not a one-off page.
- Global left nav with product sections: Overview, Workflows, Runs, Brain (Knowledge), Analytics,
  Integrations, Settings.
- Top bar: workspace/org switcher ("Nexus Agriscience ▾"), global search / Cmd+K, a plan badge ("Pro"),
  a usage meter (e.g., "428 / 1,000 runs"), notifications bell, user avatar menu.
- Every state designed: empty, loading (skeleton), success, error/fallback, and an onboarding nudge.
- Reference grade: Linear, Vercel, Retool, Stripe dashboard. Calm, dense, premium.

---

## Prompt 1 — OVERVIEW (the home screen that sells the SaaS feel)

Design the Overview home screen of a commercial SaaS product called "Nexus · Marketing Engineer," an
AI marketing-automation platform that runs autonomous content workflows for brands. High-fidelity,
desktop, about 1480px.

Make it feel like a real product you pay for (reference Linear, Vercel, Retool, Stripe).

App shell:
- Persistent left global nav with sections: Overview (active), Workflows, Runs, Brain, Analytics,
  Integrations, Settings. Product logo (gradient square) at top, collapsible.
- Top bar: workspace switcher "Nexus Agriscience ▾", global search with Cmd+K hint, a "Pro" plan badge,
  a usage meter "428 / 1,000 runs this month", notifications bell, round user avatar.

Overview content:
- A row of 4 KPI cards with sparklines: Runs this month, Success rate %, Avg run time, Content pieces shipped.
- A primary "Runs over time" area chart (last 30 days), with a success/error split.
- A "Workflows" summary grid: cards for the 9 workflows, grouped by brand (6 Terpene Belt Farms in green,
  3 Dr. Romanoff showcase in plum), each card showing last-run status, success rate, and a Run button.
- A right rail "Recent activity" feed: rows with brand color dot, workflow name, elapsed, 200/error chip,
  relative timestamp.
- A subtle "Connect more" / onboarding strip if appropriate.

Visual system: warm off-white #f8f7f4 background, white surfaces, ink #0c0b0a, muted #86827b, forest
green #3b6b2b and plum purple #6a4d80 accents, success #16a34a. Inter + JetBrains Mono (mono for numbers,
IDs, timestamps). Soft shadows, 8 to 10px radii, hairline borders. Tabular numerals. Calm and dense.

---

## Prompt 2 — WORKFLOW RUN (the core working surface, mid-run)

Same SaaS product and same design system as the Overview screen. Now design the Workflow detail +
run screen for the "UGC Ad Generator" workflow.

Keep the app shell (left global nav with "Workflows" active, the same top bar with workspace switcher,
Cmd+K, Pro badge, usage meter, notifications, avatar). Add a breadcrumb "Workflows / Terpene Belt Farms /
UGC Ad Generator".

Workflow surface:
- A workflow header card: brand chip (Terpene Belt Farms, green), workflow title, a status pill, icon
  actions (copy webhook, open in n8n, settings), a short description, and a meta grid (webhook path,
  expected run time, renderer, last run).
- An input panel: preset chips, form fields, and a primary Run button.
- The hero: a real AI run-state experience replacing the spinner ->
  1. A run-progress stepper: "Queued -> Loading brain -> Generating -> Rendering -> Done", current stage
     animating, per-stage elapsed time in mono, total elapsed counter.
  2. The generated output: a rendered 9:16 video card, a Seedance text-to-video prompt, a voiceover script,
     captions, and a hook breakdown.
  3. Provenance: chips listing which "brain" source files fed the result (brand-canon.md, voice-manual.md,
     harvest-vintages.md) plus a confidence pill (high / medium / low).
- A right rail "Run history" for this workflow: compact rows, elapsed, 200/error chip, timestamp.
- Show a calm fallback/error state variant too: names exactly what failed ("Webhook timed out after 45s")
  with a Retry button and a "view run log" link.

Same warm tokens, Inter + JetBrains Mono, soft shadows, premium and dense.

---

## Prompt 3 — DARK VARIANT (optional contrast: "Mission Control")

Same SaaS product and screens as Prompts 1 and 2, but a dark command-center theme for contrast.
Near-black background #0c0b0a, charcoal surfaces, hairline borders, forest green #3b6b2b and plum purple
#6a4d80 accents glowing against the dark, mono-forward labels, denser grid, aerospace-console feeling.
Keep the same app shell and information architecture. Show the Overview screen.

---

## v0 alternative (if you'd rather try v0.dev)

Paste Prompt 1 into v0. v0 outputs React + Tailwind + shadcn, which will NOT drop into our single-file
dashboard.html, so use it for visual ideas only. We lift the look, not the code.

---

## After you generate

Send me screenshots of the direction you like (Overview + Run screen, plus any tweaks). I'll run
`impeccable` to rebuild `public/dashboard.html` in that key, keeping it deployable vanilla HTML.
If a name like Linear / Vercel / Retool / Stripe is the exact feel you want, tell me and I'll tune to it.
