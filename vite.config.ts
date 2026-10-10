import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// A relative base works both at / and /repository/ with HashRouter.
export default defineConfig({ plugins: [react()], base: './', build: { target: 'es2022' } });
