// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tibo1786.github.io',
  base: '/hijasunicas',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});