import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base for GitHub Pages deployment
export default defineConfig({
  base: '/recipe-maker-/',
  plugins: [react()],
});
