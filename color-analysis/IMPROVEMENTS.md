# Improvements

This directory contains the Color Analysis website (a 12-season personal
color-analysis tool: season explorer, "Find My Season" wizard, photo draping,
and per-user saved analyses), imported here and then improved.

## Pass 2 — decouple from Manus, ship on Vercel

The app was generated on the Manus platform: it booted as an Express server,
authenticated through Manus OAuth, stored photos in S3, saved analyses in
MySQL, and depended on `vite-plugin-manus-runtime` plus a platform-injected
`client/src/_core`. None of that runs off-platform. This pass turns it into a
self-contained static SPA that deploys to Vercel with **zero external services
to provision**.

- **Local-first data layer.** New `client/src/lib/analysisStore.ts` persists
  analyses in `localStorage` and inlines uploaded photos as data URLs. The tRPC
  client (`client/src/lib/trpc.ts`) is rewritten as a thin TanStack Query shim
  over that store, exposing the exact `trpc.analysis.*` / `useUtils()` surface
  the pages already used (including optimistic `getData`/`setData`) — so the
  pages did not have to change.
- **Auth removed.** `_core/hooks/useAuth` is now a local stub (every visitor is
  a local user); the non-functional sign-in/out controls are gone.
- **Backend deleted.** Removed `server/`, `drizzle/`, the DB/S3/OAuth glue, and
  the unused Manus template scaffolding (`Map`, `AIChatBox`, `ManusDialog`,
  `DashboardLayout`, `ComponentShowcase`, `references/`, `template.json`).
- **Missing imagery handled.** The hero/illustration images came from the Manus
  storage proxy. A bundled `placeholder-portrait.svg` backs the default draping
  photo, and a new `ImageWithFallback` component degrades missing images to a
  styled placeholder instead of showing broken images.
- **Build/deploy.** Clean `vite.config.ts` (no Manus plugins), Vite-only build
  scripts, `vercel.json` (Vite preset + SPA rewrite), and fonts moved from a
  CSS `@import` to a `<link>` so they aren't reordered out by Tailwind.
- **Tests.** Relocated the pure tests to `tests/` and added coverage for the
  local store.

### Verification (pass 2)

```
pnpm check    # clean — the whole project typechecks (no _core errors)
pnpm test     # 54 passing
pnpm build    # succeeds -> dist/ (no warnings)
```

A headless (Playwright) smoke test of the production build confirmed all four
routes render, and the create → reload flow persists to `localStorage`. The
only blocked network request in the sandbox is the external Google Fonts
stylesheet, which loads normally on Vercel.

## Pass 1 — accessibility & color science

The app was feature-complete but painted every palette color as a bare `<div>`
with an inline `background-color`. That had three concrete problems:

1. **Inaccessible** — swatches had no accessible name, so screen readers
   announced nothing and the color was the only carrier of meaning.
2. **Illegible edges** — a fixed `border-white` made pale swatches (cream,
   ivory, warm oatmeal) disappear against the white cards behind them.
3. **No color math at all** — nothing validated the hand-authored hex data or
   could derive a readable label/among the 350+ swatches across 12 seasons.

### 1. A tested color-science layer — `shared/color.ts`

Pure, dependency-free utilities: `isValidHex`, `hexToRgb`, `relativeLuminance`
(WCAG), `contrastRatio`, `readableTextColor`, and `swatchBorderColor`. Fully
unit-tested in `server/color.test.ts` (parsing, luminance ordering, symmetric
contrast, and a check that the chosen text color always clears WCAG AA 4.5:1).

### 2. An accessible, reusable swatch — `client/src/components/ColorSwatch.tsx`

Replaces the ad-hoc swatch markup. Each chip now:

- exposes an accessible name (`aria-label` + `title`) with the color name and hex;
- is a real keyboard-focusable `<button>` with a visible focus ring;
- draws a **contrast-aware hairline** so pale swatches stay visible on white;
- overlays the hex in a **legible** color (black/white chosen by contrast) on
  hover/focus; and
- **copies the hex to the clipboard** on click/Enter with a toast confirmation.

Wired into the palette grids on the Seasons explorer (`pages/Seasons.tsx`) and
the Home page (`pages/Home.tsx`), collapsing four copies of duplicated swatch
markup down to the shared component.

### 3. Data-integrity tests — `server/seasonsData.test.ts`

Guards the hand-authored palette data: asserts exactly 12 seasons, three per
family, every season has complete non-empty palettes, **every hex is valid**,
and every season has drape colors. A single mistyped hex now fails CI instead
of silently rendering a broken swatch.

### 4. Hermetic test config — `vitest.config.ts`

Pinned an inline (empty) PostCSS config so Vite's config search can't climb out
of this project and load an unrelated parent `postcss.config.*`.

### Verification (pass 1)

At the time of this pass the suite went from 32 to 63 tests. (Pass 2 later
removed the backend-specific tests and added store coverage; the current count
is 54 — see above.) The color layer and accessible swatch component are
unchanged and still in use.
