// @ts-check
import { defineConfig } from 'astro/config';

// Kendi domain'ini aldığında `site`'ı ona çevir (ör. https://beyzanurkilic.com)
// ve public/CNAME dosyasına aynı domain'i yaz.
export default defineConfig({
  site: 'https://l4ngel.github.io',
  trailingSlash: 'ignore',
});
