// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Chính xác cho custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});