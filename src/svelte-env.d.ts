/// <reference types="@sveltejs/kit" />

// Type definitions for Svelte
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
  interface SVGProps<T> {
    [key: string]: any;
  }
}

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
  interface SVGAttributes<T> {
    [key: string]: any;
  }
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
