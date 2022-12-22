// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'chartjs-adapter-spacetime',
      // the proper extensions will be added
      fileName: 'chartjs-adapter-spacetime',
    },
    rollupOptions: {
      // // make sure to externalize deps that shouldn't be bundled
      // // into your library
      external: ['chart.js', 'spacetime'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      globals: {
        'chart.js': 'Chart',
        spacetime: 'spacetime',
      },
      // },
    },
  },
})
