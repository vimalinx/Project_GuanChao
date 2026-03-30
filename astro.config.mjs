// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://www.boenke.cn',
  base: process.env.PUBLIC_BASE_PATH ?? '/',
  integrations: [react()]
});
