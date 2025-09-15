// Type definitions for Svelte 4.x

// Import the actual Svelte types
import type { SvelteComponent as SvelteComponentType, ComponentType } from 'svelte';

declare global {
  // Declare the svelteHTML namespace
  namespace svelteHTML {
    type Props<T> = T & {
      [key: string]: any;
      class?: string;
    };
    
    interface HTMLAttributes<T> extends Props<T> {
      [key: string]: any;
    }
    
    interface SVGAttributes<T> extends Props<T> {
      [key: string]: any;
    }
    
    interface IntrinsicElements {
      [elemName: string]: Record<string, any>;
    }
  }

  // Declare global Svelte types
  namespace svelte {
    type Component<Props = any> = new (options: {
      target: Element | Document | ShadowRoot;
      anchor?: Element;
      props?: Props;
      hydrate?: boolean;
      intro?: boolean;
      $$inline?: boolean;
    }) => any;

    interface SvelteComponent<Props = any> {
      $$prop_def: Props;
    }

    interface SvelteComponentTyped<Props = any> extends SvelteComponent<Props> {
      $on(event: string, callback: (event: CustomEvent) => void): () => void;
    }
  }

  // Global type for Svelte components
  type SvelteComponent = ComponentType<Record<string, any>>;

  // Declare svelteHTML as a value to prevent 'used as a value' errors
  const svelteHTML: {
    [key: string]: any;
  };
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
