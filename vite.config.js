import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sr-api/',
  define: {
    'process.env': {},
  },
});