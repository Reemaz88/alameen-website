import { defineConfig } from 'vite';

// مسارات نسبية حتى يعمل الموقع على GitHub Pages (/alameen-website/) وعلى أي استضافة أخرى
// Relative asset paths so the built site works on GitHub Pages (/alameen-website/) and any other host
export default defineConfig({ base: './' });
