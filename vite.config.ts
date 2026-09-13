import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

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
