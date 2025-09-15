// Add type declarations for Svelte files
declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}

// Add type declarations for Lucide icons
declare module 'lucide-svelte' {
  import { SvelteComponentTyped } from 'svelte';
  
  export class Mail extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }> {}
  
  export class MessageSquare extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }> {}
  
  export class Clock extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }> {}
  
  export class CheckCircle extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }> {}
  
  export class AlertTriangle extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
  }> {}
  
  export class Loader2 extends SvelteComponentTyped<{
    class?: string;
    size?: string | number;
    strokeWidth?: string | number;
    classList?: any;
  }> {}
}

// Add type declarations for Svelte components
declare module '*.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType;
  export default component;
}
