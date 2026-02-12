import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nareshv-dev.github.io',
  base: '/naresh-portfolio',
  integrations: [tailwind()],
  output: 'static',
  devToolbar: {
    enabled: false
  }
});
