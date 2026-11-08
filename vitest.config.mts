import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    // Playwright owns tests/e2e; keep Vitest out of it.
    exclude: [...configDefaults.exclude, 'tests/e2e/**'],
  },
});
