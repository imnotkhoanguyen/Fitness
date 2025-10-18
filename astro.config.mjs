// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5000,
      strictPort: true,
    }
  }
});
