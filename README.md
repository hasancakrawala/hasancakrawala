# Hasan's Strategic Portfolio

Single-page personal portfolio for **Muhammad Hasan Fikri** — Brand & Marketing Strategist.

**Live app (Lovable):** https://portfolio-hasan-cakrawala.lovable.app

For the full design brief (copy, layout spec, content per section), see [docs/DESIGN-BRIEF.md](docs/DESIGN-BRIEF.md).

---

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** (React 19 + SSR/prerender) on **[TanStack Router](https://tanstack.com/router)** (file-based routing in `src/routes`)
- **Vite 7** as build tool/dev server
- **Tailwind CSS v4** + **shadcn/ui** (Radix UI primitives) for styling/components
- **TanStack Query**, **React Hook Form** + **Zod** for data/forms
- **Cloudflare** (`wrangler.jsonc`, `@cloudflare/vite-plugin`) as the SSR deploy target
- **Bun** as the original package manager (`bun.lock`) — npm also works
- Scaffolded with **[Lovable](https://lovable.dev)** (`@lovable.dev/vite-tanstack-config` wraps the Vite plugin setup — see the comment in `vite.config.ts` before adding plugins manually)
- **Google Tag Manager** (`GTM-KJ2V5NKL`) wired into the root shell (`src/routes/__root.tsx`)

## Project structure

```
src/
  routes/         # TanStack Router file-based routes (__root.tsx, index.tsx)
  components/
    portfolio/    # Page sections (Hero, About, Case studies, Contact, ...)
    ui/           # shadcn/ui primitives
  hooks/, lib/, assets/
public/           # Static files copied as-is (favicon, etc.)
docs/             # Design brief and other project docs
```

## Development

Requires Node.js + npm (or Bun).

```sh
npm install
npm run dev       # start dev server (vite dev)
```

Other scripts:

```sh
npm run build      # production build → dist/
npm run build:dev  # build in development mode
npm run preview    # preview the production build locally
npm run lint        # eslint .
npm run format       # prettier --write .
```

## Build & deploy

### Static export (GitHub Pages)

`vite.config.ts` enables TanStack Start's built-in prerender (`prerender: { enabled: true, crawlLinks: true }`), so `npm run build` crawls every route and writes fully static HTML/CSS/JS into `dist/client/` — no server runtime needed to host it.

`.github/workflows/deploy-pages.yml` builds and publishes `dist/client/` to GitHub Pages automatically on every push to `main` (via `actions/upload-pages-artifact` + `actions/deploy-pages`). To enable it on GitHub:

1. Repo **Settings → Pages → Source → GitHub Actions**.
2. Push to `main` — the workflow builds and deploys.

If the site is served from a sub-path (a project page like `username.github.io/repo-name/`) rather than the domain root, set `base: "/repo-name/"` in `vite.config.ts` — asset paths in the current build are root-absolute (`/assets/...`).

### SSR (Cloudflare)

The project can alternatively run with full SSR on Cloudflare Workers via `wrangler.jsonc` + `@cloudflare/vite-plugin` (the original Lovable/Cloudflare deploy path). This is unrelated to the static export above and requires no additional config.

## Continue in Lovable

Changes made in the [Lovable editor](https://lovable.dev/projects/7948b7b3-d000-4d29-8fdf-1f5cbe09f55f) sync straight to this repository, and pushes to `main` sync back into Lovable.
