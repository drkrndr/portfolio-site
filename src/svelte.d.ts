// Type definitions for Svelte

// Declare the svelte module
declare module 'svelte' {
  import type { ComponentType } from 'svelte';
  
  export interface SvelteComponent<Props = any> {
    $on(event: string, callback: (event: CustomEvent) => void): () => void;
    $set(props: Partial<Props>): void;
    $destroy(): void;
  }

  export type ComponentType<Props = any> = new (options: {
    target: Element | Document | ShadowRoot;
    anchor?: Element;
    props?: Props;
    context?: Map<any, any>;
    hydrate?: boolean;
    intro?: boolean;
    $$inline?: boolean;
  }) => SvelteComponent<Props>;
}

// Declare the svelte module with default export
declare module 'svelte' {
  const SvelteComponent: typeof import('svelte').SvelteComponent;
  export default SvelteComponent;
}

// Global type declarations
declare global {
  namespace svelte.JSX {
    interface HTMLProps<T> {
      [key: string]: any;
    }
    
    interface SVGProps<T> {
      [key: string]: any;
    }
  }

  // Declare the svelteHTML namespace
  namespace svelteHTML {
    type HTMLAttributes<T = HTMLElement> = {
      [key: string]: any;
    };
    
    type SVGAttributes<T = SVGElement> = {
      [key: string]: any;
    };
  }

  // Type for Svelte components
  type SvelteComponent = import('svelte').SvelteComponent;
}

export {};
