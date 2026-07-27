import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true, // Allows all trycloudflare.com / public tunnel hosts
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  }
});
