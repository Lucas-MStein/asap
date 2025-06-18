import { defineConfig } from 'vite'

export default defineConfig({
  base: '/asap/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        initial: 'initial.html',
        daily: 'daily.html',
        downloads: 'downloads.html',
        impressum: 'impressum.html',
      },
    },
  },
})