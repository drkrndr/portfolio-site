import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  // Enable TypeScript
  preprocess: vitePreprocess(),
  
  // Add type checking
  onwarn: (warning, handler) => {
    // Ignore certain warnings
    if (warning.code === 'a11y-click-events-have-key-events') return;
    if (warning.code === 'a11y-no-static-element-interactions') return;
    
    // Let Rollup handle all other warnings normally
    handler(warning);
  },
  
  // Disable SvelteKit features
  kit: false
};
