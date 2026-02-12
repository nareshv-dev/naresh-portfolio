import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://naresh-v.dev',
  integrations: [tailwind()],
  output: 'static',
});
