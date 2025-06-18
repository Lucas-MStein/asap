import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // wichtig bei eigener Domain – kein Subverzeichnis

  build: {
    outDir: 'dist',         // Zielordner für GitHub Pages
    emptyOutDir: true       // optional: leert das Zielverzeichnis vor jedem Build
  }
})