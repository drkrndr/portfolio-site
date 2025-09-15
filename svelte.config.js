import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default {
  // Enable TypeScript with preprocessors
  preprocess: [
    sveltePreprocess({
      typescript: {
        // Enable type checking in the preprocessor
        tsconfigFile: './tsconfig.json',
        compilerOptions: {
          // Ensure consistent module resolution
          moduleResolution: 'bundler',
          // Enable strict type checking
          strict: true,
          // Allow JS files to be compiled
          allowJs: true,
          // Allow importing from .svelte files
          resolveJsonModule: true,
          // Use ES modules
          module: 'ESNext',
          // Use the latest JS features
          target: 'ESNext',
        },
      },
    }),
    vitePreprocess(),
  ],
  
  // Configure compiler options
  compilerOptions: {
    // Enable TypeScript in Svelte files
    typescript: true,
    // Enable run-time checks in development
    dev: process.env.NODE_ENV !== 'production',
    // Enable CSS source maps in development
    css: true,
  },
  
  // Configure warning handling
  onwarn: (warning, handler) => {
    // Ignore certain warnings
    if (warning.code === 'a11y-click-events-have-key-events') return;
    if (warning.code === 'a11y-no-static-element-interactions') return;
    if (warning.code.startsWith('a11y-')) return; // Ignore all a11y warnings for now
    
    // Let Rollup handle all other warnings normally
    handler(warning);
  },
  
  // Disable SvelteKit features
  kit: false,
  
  // Enable TypeScript in Svelte files
  extensions: ['.svelte', '.ts'],
};
