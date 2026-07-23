<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Chris Cook portfolio

A statically-oriented personal portfolio site for Chris Cook (brand manager & storyteller), deployed on Vercel at `chriscook.co`.

## Stack

- **Next.js 16.2.6**, App Router — see the Next.js rule above; verify APIs against `node_modules/next/dist/docs/` before writing.
- **React 19.2.4**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) — theme is defined with `@theme inline` in `app/globals.css`, not a `tailwind.config`.
- **TypeScript 5**, ESLint 9 (`eslint-config-next`).
- Path alias: **`@/*` → repo root** (e.g. `@/components/Nav`, `@/lib/works`).

## Commands

- `npm run dev` — dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint

## Layout & conventions

- **`app/`** — App Router pages. Root `app/layout.tsx` wires fonts + metadata.
- **`components/`** — PascalCase `.tsx` components (e.g. `Hero.tsx`, `Works.tsx`, per-case-study `*CaseBody.tsx` / `*PitchBody.tsx`).
- **`lib/`** — data layer. `lib/works.ts` exports the typed `works: Work[]` array that drives the portfolio; `lib/brands.ts` holds brand data. Add/edit case studies here, not by hand-writing markup.
- **`public/`** — static assets.

## Case-study routing (important)

`app/work/[slug]/page.tsx` is a **catch-all** that renders any `Work` from `lib/works.ts`. Some slugs have a **dedicated page directory** (e.g. `app/work/nexus-marketing-engineer/`) which takes precedence over the dynamic route. When a slug has its own directory it MUST be listed in the `DEDICATED_PAGES` set inside `app/work/[slug]/page.tsx`, or it'll double-render. Keep that set in sync when adding dedicated pages.

## Theme tokens (from `app/globals.css`)

Dark theme. Use the Tailwind tokens, not raw hex:
- Backgrounds: `bg-bg` (#151515), `bg-bg-elev`, `bg-bg-panel`
- Text: `text-ink` (#f5f5f5), `text-ink-2`, `text-muted`
- Accent: `accent` (#0000ee — classic hyperlink blue, intentional)
- Fonts: `font-sans` = Inter (body), `font-display` = Archivo (headings, run heavy/expanded via the `wdth` axis)

## Gotchas

- `next.config.ts` sets `dangerouslyAllowSVG: true` (sandboxed) because two case-study previews (Sabrina, Nexus) are SVGs served through `next/image`. Don't remove it without checking those images.
- `.gitignore` intentionally excludes root-level scratch artifacts (`/*.png`, `/*.html`, `/*.txt`, scrape/automation dirs). Don't commit QA screenshots or scraping working dirs.
