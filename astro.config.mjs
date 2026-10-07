import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://tonedev.org',
  server: {
    host: true, // bind 0.0.0.0 → ให้ Docker container เปิดรับ connection ได้
    port: 4321,
  },
});
