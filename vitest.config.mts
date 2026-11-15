import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'jsdom',
    // Playwright owns tests/e2e; keep Vitest out of it.
    exclude: [...configDefaults.exclude, 'tests/e2e/**'],
  },
});
