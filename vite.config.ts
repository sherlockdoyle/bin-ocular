import minifyHTML from 'rollup-plugin-minify-html-literals';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bin-ocular',
  plugins: [
    // @ts-ignore the default export is not exported in the type definitions
    minifyHTML.default(),
  ],
});
