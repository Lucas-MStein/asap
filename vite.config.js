import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/asap/', // Falls dein GitHub Repo so heißt
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'initial.html', dest: '.' },
        { src: 'daily.html', dest: '.' },
        { src: 'downloads.html', dest: '.' },
        { src: 'impressum.html', dest: '.' }
      ]
    })
  ]
})