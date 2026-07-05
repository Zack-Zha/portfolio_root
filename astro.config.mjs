import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://zack-zha.github.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    '/about.html': '/about',
    '/gallery.html': '/gallery',
    '/wechat_store.html': '/work/wechat-store',
    '/byme.html': '/work/byme',
    '/Podcast.html': '/work/podcast',
  },
});
