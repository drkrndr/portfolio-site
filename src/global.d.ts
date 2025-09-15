// Reference SvelteKit types
/// <reference types="@sveltejs/kit" />

// Global type declarations for Svelte
import type { ComponentType } from 'svelte';

declare global {
  // JSX namespace for Svelte
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
  type SvelteComponent = ComponentType<Record<string, any>>;
}

// Type declarations for lucide-svelte icons
declare module 'lucide-svelte' {
  import type { SvelteComponent } from 'svelte';
  
  interface IconProps {
    class?: string;
    size?: string | number;
    color?: string;
    fill?: string;
    [key: string]: any;
  }
  
  export class ExternalLink extends SvelteComponent<IconProps> {}
  export class Github extends SvelteComponent<IconProps> {}
  export class Star extends SvelteComponent<IconProps> {}
  export class Mail extends SvelteComponent<IconProps> {}
  export class MessageSquare extends SvelteComponent<IconProps> {}
  export class Clock extends SvelteComponent<IconProps> {}
  export class CheckCircle extends SvelteComponent<IconProps> {}
  export class AlertTriangle extends SvelteComponent<IconProps> {}
  export class Loader2 extends SvelteComponent<IconProps> {}
}
