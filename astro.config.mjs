import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});