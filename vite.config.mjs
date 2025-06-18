import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/asap/',
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/CNAME', dest: '.' },
        { src: 'style.css', dest: '.' },
        { src: 'initial.html', dest: '.' },
        { src: 'daily.html', dest: '.' },
        { src: 'downloads.html', dest: '.' },
        { src: 'impressum.html', dest: '.' }
      ]
    })
  ]
})