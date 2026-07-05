# Personal Color Analysis

A static web app for 12-season personal color analysis: explore all twelve
seasonal palettes, run the "Find My Season" wizard, drape colors against a
photo, and save analyses locally in your browser.

Built with **Vite + React 19 + TypeScript + Tailwind v4**, deployed to
**Vercel** as a fully static single-page app — no server, no database, no
external accounts to provision.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Other scripts:

```bash
pnpm build      # production build -> dist/
pnpm preview    # serve the production build
pnpm check      # typecheck (tsc --noEmit)
pnpm test       # unit tests (vitest)
```

## Deploy to Vercel

This app lives in the `color-analysis/` subdirectory of the repo, so point
Vercel at it:

1. Import the repo in Vercel.
2. Set **Root Directory** to `color-analysis`.
3. Framework preset **Vite** is auto-detected; `vercel.json` already pins the
   build command, output directory (`dist`), and the SPA rewrite that routes
   every path to `index.html` (needed for client-side routing via `wouter`).

No environment variables are required.

## Architecture

- **`client/`** — the React SPA (pages, components, palette data).
- **`shared/`** — framework-agnostic logic (`color.ts` WCAG utilities,
  `seasonInference.ts` wizard mapping) shared by the app and tests.
- **`tests/`** — vitest unit tests for the color math, season data integrity,
  season inference, and the local analysis store.

### Local-first data

There is no backend. Saved analyses persist in `localStorage` and uploaded
photos are inlined as data URLs (see `client/src/lib/analysisStore.ts`). The
`client/src/lib/trpc.ts` module is a thin TanStack Query shim that presents the
same call surface the pages already used, so the UI is backend-agnostic.

To graduate to real accounts / cross-device sync later, swap that shim for a
real API (e.g. a Vercel serverless function + Postgres + Blob storage) — the
pages won't need to change.

See [`IMPROVEMENTS.md`](./IMPROVEMENTS.md) for the full change history.
