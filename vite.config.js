const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Products: resolve(__dirname, 'products.html'),
        detail: resolve(__dirname, 'detail.html')
      }
    }
  }
})