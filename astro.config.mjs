// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://iammark.me',
  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements
  // (e.g. the space between a post's date and its relative time).
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
