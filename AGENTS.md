<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo: portfolio (Next.js 16 + React 19)

- **Package manager**: npm only (no pnpm/yarn lockfiles)
- **Dev**: `npm run dev` — starts on port 3000
- **Lint**: `npm run lint` — uses ESLint v9 flat config (`eslint.config.mjs`) with `eslint-config-next`
- **Build**: `npm run build`
- **No tests configured** — no test deps in package.json; add your own framework if needed

## Architecture

- **App Router** (`app/` directory): `layout.tsx`, `page.tsx`, `globals.css`
- **Components**: `components/ui/` for shadcn/ui components; `components/` for app components
- **Utilities**: `lib/utils.ts` exports `cn()` (clsx + tailwind-merge)
- **Path alias**: `@/*` maps to project root (tsconfig paths)
- **shadcn config**: `components.json` at root — style `radix-vega`, icon library `lucide`

## Styling

- **Tailwind CSS v4**: uses `@import "tailwindcss"` syntax in CSS, not `@tailwind` directives
- **PostCSS plugin**: `@tailwindcss/postcss` (v4 native plugin)
- **CSS entry**: `app/globals.css` imports `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`
- **No `tailwind.config`** — v4 uses CSS-based config (`@theme`, `@custom-variant`)
- Dark mode via `.dark` class (`@custom-variant dark (&:is(.dark *))`)

## Key deps

- `next`: 16.2.6, `react`: 19.2.4, `typescript`: ^5
- `radix-ui`, `class-variance-authority`, `lucide-react`, `tailwind-merge`, `tw-animate-css`
- `shadcn` CLI installed as dependency (v4.8.3)
