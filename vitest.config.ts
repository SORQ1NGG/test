import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite';
// import VueTypeImports from 'vite-plugin-vue-type-imports';

export default defineConfig({
    plugins: [
        vue(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    },
})
