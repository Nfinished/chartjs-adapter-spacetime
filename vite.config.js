// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'chartjs-adapter-spacetime',
      fileName: 'chartjs-adapter-spacetime',
    },
    rollupOptions: {
      external: ['chart.js', 'spacetime'],
      output: {
        globals: {
          'chart.js': 'Chart',
          spacetime: 'spacetime',
        },
      },
    },
  },
})
