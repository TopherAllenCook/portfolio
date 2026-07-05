# Improvements

This directory contains the Color Analysis website (a 12-season personal
color-analysis tool: season explorer, "Find My Season" wizard, photo draping,
and per-user saved analyses), imported here and then improved.

## What changed in this pass

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

## Verification

```
pnpm test     # 63 tests pass (was 32)
pnpm check    # no new type errors from these changes*
```

\* `pnpm check` still reports `Cannot find module '@/_core/hooks/useAuth'` in
six pre-existing files. `client/src/_core` is injected by the Manus platform
runtime (`vite-plugin-manus-runtime`) at dev/build time and is intentionally
not part of this source export, so a fully-clean standalone `tsc` isn't
possible here. None of the errors come from the code added in this pass.
