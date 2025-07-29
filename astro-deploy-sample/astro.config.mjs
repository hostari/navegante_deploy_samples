// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    assets: '_astro'
  },
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: '0.0.0.0'
  }
});
