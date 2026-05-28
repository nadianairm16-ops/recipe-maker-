import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base for GitHub Pages deployment
export default defineConfig({
  // Use relative base so assets work when serving from `docs/` or root
  base: './',
  plugins: [react()],
});
