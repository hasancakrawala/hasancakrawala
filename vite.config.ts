// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// GitHub Pages serves this repo at /hasancakrawala/ (a project page, not a
// user/org root page), so every asset URL and route must be prefixed to match.
const GH_PAGES_BASE = "/hasancakrawala/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: GH_PAGES_BASE },
    // Prerender every route to static HTML so the build output can be hosted
    // as plain static files (e.g. GitHub Pages) with no server runtime.
    // `filter` skips crawled hrefs that point at a static asset (PDFs, images, …)
    // instead of a page — without it the crawler "prerenders" those URLs too,
    // reading the binary file as text and overwriting it with corrupted output.
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: (page) => !/\.[a-z0-9]+$/i.test(page.path),
    },
  },
  vite: { base: GH_PAGES_BASE },
});
