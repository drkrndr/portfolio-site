<script>
  import { Moon, Sun } from 'lucide-svelte'
  import { onMount } from 'svelte'

  let isDark = true

  function applyTheme(dark) {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    isDark = dark
  }

  function toggleTheme() {
    applyTheme(!isDark)
  }

  onMount(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') applyTheme(false)
    else applyTheme(true) // default dark (reversed scheme)
  })
</script>

<button
  on:click={toggleTheme}
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-9 w-9"
  aria-label="Toggle theme"
  title="Toggle theme"
>
  {#if isDark}
    <Sun class="h-5 w-5" />
  {:else}
    <Moon class="h-5 w-5" />
  {/if}
</button>
