import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

/**
 * GitHub Pages cannot rewrite deep links (e.g. /photography) to /index.html,
 * so hard-reloading or typing a route URL normally 404s.
 *
 * GitHub Pages has one escape hatch: if a `404.html` exists at the site root,
 * it serves that file for ANY missing path. By copying the built index.html
 * to dist/404.html, the SPA shell loads on every route and react-router
 * renders the matching page client-side. (Genually unknown routes still fall
 * through to the in-app `*` 404 route.)
 */
function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const indexHtml = join(rootDir, 'dist', 'index.html')
      const notFoundHtml = join(rootDir, 'dist', '404.html')
      if (existsSync(indexHtml)) {
        cpSync(indexHtml, notFoundHtml)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback404()],
  base: '/',
})
