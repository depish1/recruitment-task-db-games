import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: [
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Helpers', replacement: path.resolve(__dirname, 'src/helpers') },
      { find: 'Icons', replacement: path.resolve(__dirname, 'src/icons') },
      { find: 'Styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'Types', replacement: path.resolve(__dirname, 'src/types') },
      { find: 'Hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'Slices', replacement: path.resolve(__dirname, 'src/store/slices') },
      { find: 'Api', replacement: path.resolve(__dirname, 'src/store/api') },
      { find: 'Store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'Selectors', replacement: path.resolve(__dirname, 'src/store/selectors') },
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
