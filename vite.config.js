import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      svelte({
        // Enable TypeScript in Svelte files
        preprocess: [
          sveltePreprocess({
            sourceMap: mode === 'development',
            typescript: {
              // Enable type checking in Svelte files
              tsconfigFile: './tsconfig.json',
              compilerOptions: {
                module: 'esnext',
                target: 'esnext',
                moduleResolution: 'bundler',
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
              },
            },
          }),
        ],
        // Enable run-time checks for props in development
        compilerOptions: {
          dev: mode !== 'production',
          // Enable type checking in the browser
          enableSourcemap: mode === 'development',
          // Enable CSS source maps in development
          css: mode === 'development',
        },
        // Enable hot module replacement in development
        hot: mode === 'development',
        // Emit CSS as a separate file in production
        emitCss: mode === 'production',
      }),
    ],
    base: '/portfolio-site/',
    publicDir: 'public',
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte']
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      assetsDir: 'assets',
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        },
      },
      // Enable minification in production
      minify: mode === 'production' ? 'terser' : false,
    },
    server: {
      port: 3000,
      open: true,
      // Enable HMR
      hmr: {
        overlay: true
      }
    },
    preview: {
      port: 3000,
      open: true,
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
    optimizeDeps: {
      include: ['svelte'],
      exclude: ['@sveltejs/kit']
    }
  };
});
