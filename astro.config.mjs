import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourportfolio.dev',
  server: {
    host: true, // bind 0.0.0.0 → ให้ Docker container เปิดรับ connection ได้
    port: 4321,
  },
});
