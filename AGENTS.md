<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo: portfolio (Next.js 16 + React 19)

- **Package manager**: npm only (no pnpm/yarn lockfiles)
- **Dev**: `npm run dev` — port 3000
- **Lint**: `npm run lint` — ESLint v9 flat config (`eslint.config.mjs`), `eslint-config-next`
- **Build**: `npm run build`
- **No tests** — no test deps; add your own if needed

## Architecture

- **Route group** `app/(sections)/` holds all page files; root `app/page.tsx` redirects to `/about`
- **All pages statically rendered** — no dynamic functions, no SSR
- **No API routes** (`route.ts`), **no middleware**
- **Section components** (`components/sections/*.tsx`) use **named** exports (`export function About`)
- **Server action** in `lib/actions.ts`: `submitContact` logs to console (stub — no backend)
- **`@/*` path alias** maps to project root (`tsconfig.json` paths)
- **Component dirs**: `components/ui/` for shadcn, `components/` for app components

## Styling — Tailwind CSS v4

- Uses `@import "tailwindcss"` (not `@tailwind`), `@theme inline` for vars, `@utility` for custom utilities
- **No `tailwind.config`** — CSS is the config
- **Global CSS entry**: `app/globals.css` imports `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`
- **Dark mode default**: `.dark` class on `<html>` (`.dark` CSS variables override `:root`)
- **Section title cursor**: `.section-title::after` renders Unicode `█` with blink animation
- **Available CSS utilities**: `.section-title`, `.card-tv` (hover border), `.crt-screen` (scanline overlay), `animate-blink` (`@utility`)
- **Scrollbar** is custom dark (`#212529` background, `#495057` thumb)

## File conventions

- Background SVGs live at `public/` root per section: `fingerprint-bg.svg`, `road-bg.svg`, `tree-bg.svg`, `world-bg.svg`
- Tech icons under `public/icons/logo/` with fill `#25292C`
- Platform icons under `public/icons/`
- `"use client"` only where browser APIs are used: `sidebar.tsx` (`usePathname`), `skills.tsx` (`useState`, recharts), `error.tsx`

## Key deps

- `next`: 16.2.6, `react`: 19.2.4, `typescript`: ^5
- `radix-ui`, `class-variance-authority`, `lucide-react`, `tailwind-merge`, `tw-animate-css`
- `recharts` for radar charts (skills page)
- `shadcn` CLI (v4.8.3), `components.json` at root, style `radix-vega`, icon library `lucide`
- Fonts: `Orbitron` (headings, variable `--font-heading`), `Space_Grotesk` (body, variable `--font-sans`)
