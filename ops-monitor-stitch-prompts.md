# Mission Control — agent + automation monitoring dashboard (Stitch / v0 prompts)

Goal: an internal operations console to monitor every AI agent and every automation across all
brands/clients, with live status, run history, alerts, cost, and reports.

Workflow: generate in **Google Stitch** (stitch.withgoogle.com), pick a direction, then
`impeccable` builds it. Generate Prompts 1 and 2 in the SAME project so the screens share one system.

Brand tokens (baked in so output is portable):
- Background warm off-white #f8f7f4, surfaces #ffffff, second panel layer #fafaf7
- Ink #0c0b0a, muted #6c6862 (AA-safe), hairline borders rgba(12,11,10,0.09)
- One restrained accent: ink for primary actions + a signal indigo #3b4ee6 for selection/links
- Status vocabulary (the real workhorse): healthy/idle #16a34a, running #2563eb, warning #b65a26,
  error #c53b1f, paused/muted #9b968d
- Inter for UI, JetBrains Mono for IDs, timestamps, durations, counts. Tabular numerals. Tight heading tracking.
- Soft low shadows, 8 to 10px radii. Calm, dense, premium. Reference: Linear, Vercel Observability,
  Datadog, Stripe (but warm, not cold gray).

---

## Prompt 1 — OVERVIEW (the operations command center)

Design the Overview screen of an internal SaaS operations console called "Mission Control." It monitors
a fleet of autonomous AI agents and a set of automations (n8n workflows, scheduled cron routines, social
publishers) running across multiple brands and clients. High-fidelity, desktop, about 1480px. Make it
feel like a real product an operator watches all day (reference Linear, Vercel Observability, Datadog).

App shell:
- Persistent left global nav: Overview (active), Agents, Automations, Runs, Reports, Alerts, Settings.
  Product logo (gradient square) top-left, collapsible.
- Top bar: workspace switcher "All brands ▾", global search with Cmd+K, a system-health summary pill
  ("14 healthy · 2 running · 1 error"), a notifications bell with a count, round user avatar.

Overview content (top to bottom):
- A KPI row of 6 compact stat tiles with sparklines: Agents active, Automations enabled, Runs today,
  Success rate %, Spend today (tokens / $), Open alerts. Use mono tabular numerals.
- A primary "Runs over time" area chart (last 24h or 30d toggle) with a healthy/error split.
- An "Agent fleet" grid of status cards. Each card: agent name, one-line role, a status dot
  (healthy / running / error / paused), last run relative time, success rate, current task or "idle",
  and tokens/cost. Example agents to populate it: Adam (Etherios practice manager), Amon (personal
  assistant), Angus (job applications), Brutus (job search), Camilla (UPC brand), Clover (Meta ads),
  Humphrey (VerveMD ops), Mara (CCP brand), Mercury (cron + autopilot), Rikki (home services),
  Squire Nutkin (competitive intel), and the Alora / Gwen / Soren ethics-and-verification trio.
- An "Automations" table: columns for name, type (n8n / cron / publisher), trigger or schedule, last run,
  next run, last duration, throughput (runs/day), and a status chip. Populate with the 9 "Nexus
  Agriscience" n8n workflows plus a few scheduled routines (e.g., a daily Dream review, a nightly
  prospect refresh, a social-post cron).
- A right rail "Live activity stream": real-time feed rows with a status dot, the agent or automation
  name, what happened ("posted 3 reels", "applied to 2 roles", "webhook 200 in 38s", "failed: timeout"),
  and a relative timestamp.
- An "Alerts" strip surfacing anything red: what failed, when, and a Resolve / Retry action. Calm,
  not alarming.

Visual system: warm off-white #f8f7f4 background, white surfaces, ink #0c0b0a, AA-safe muted #6c6862,
indigo #3b4ee6 selection accent, and the status colors above (green healthy, blue running, amber warning,
red error, gray paused). Inter + JetBrains Mono (mono for all numbers, IDs, durations, timestamps). Soft
shadows, hairline borders, 8 to 10px radii. Dense but quiet. Tabular numerals everywhere.

States to show: a couple of agents "running" with a subtle live pulse, one agent in "error", the rest
healthy or idle; one automation failing in the table; 2 open alerts.

---

## Prompt 2 — DETAIL + RUN LOG (the drill-down)

Same SaaS product and same design system as the Overview. Design the Agent detail screen for one agent
(use "Clover, Meta Ads Operator").

Keep the app shell (left global nav with "Agents" active, same top bar) and add a breadcrumb
"Agents / Clover". Content:
- A header card: agent name, role, status dot, a status pill, and quick actions (Pause, Run now,
  View config, Open logs). A meta grid: model, owner/reports-to, last run, success rate (30d), avg
  duration, total spend (30d).
- A "Runs over time" chart for this agent and a success/error split.
- A run-history table: each row a run with start time, trigger (manual / scheduled / chained), duration,
  status chip (200 / error), tokens, and cost. Clicking a row reveals a run-detail panel.
- A run-detail panel (expanded for one run): a step timeline ("Queued -> Loading context -> Tool calls ->
  Output -> Done") with per-step duration, a collapsible structured log, the tools/MCP calls it made,
  the artifacts it produced, and any error with a Retry action.
- A right rail "Dependencies": which automations or other agents this one triggers or is triggered by.

Same warm tokens, Inter + JetBrains Mono, status-color vocabulary, soft shadows, premium and dense.

---

## Prompt 3 — DARK VARIANT (optional: "night ops")

Same product and screens, dark command-center theme. Near-black #0c0b0a background, charcoal surfaces,
hairline borders, the status colors (green/blue/amber/red) glowing against the dark, indigo #3b4ee6
selection accent, mono-forward labels, denser grid, an aerospace-console feel. Keep the same app shell
and information architecture. Show the Overview screen.

---

## After you generate

Send me screenshots of the direction you like (Overview + Detail). I'll run `impeccable shape` then build
it. Note: if this should be a live tool (not just a mockup), tell me where the data comes from (a status
file, the Mission Control bridge on :9120, n8n's API, agent logs) and I'll wire it; otherwise I'll build
it against a realistic mock data layer first.
