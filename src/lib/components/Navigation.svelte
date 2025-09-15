<script>
    import { onMount } from "svelte";
    import { Menu, X } from "lucide-svelte";
    import ThemeToggle from "./ThemeToggle.svelte";

    let isOpen = false;
    let isScrolled = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" },
    ];

    function closeMenu() {
        isOpen = false;
    }
</script>

<nav
    class={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
    }`}
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <div class="font-mono font-semibold text-lg">
                Richard Nyjai Walls
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                {#each navItems as item}
                    <a
                        href={item.href}
                        class="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                        {item.label}
                    </a>
                {/each}
                <ThemeToggle />
                <a
                    href="#contact"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    Get Started
                </a>
            </div>

            <!-- Mobile Navigation Button -->
            <div class="md:hidden">
                <button
                    on:click={() => (isOpen = !isOpen)}
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3"
                >
                    {#if isOpen}
                        <X class="h-5 w-5" />
                    {:else}
                        <Menu class="h-5 w-5" />
                    {/if}
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        {#if isOpen}
            <div class="md:hidden bg-background border-t border-border">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <div class="px-3 py-2 flex justify-end">
                        <ThemeToggle />
                    </div>
                    {#each navItems as item}
                        <a
                            href={item.href}
                            on:click={closeMenu}
                            class="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    {/each}
                    <div class="px-3 py-2">
                        <a
                            href="#contact"
                            on:click={closeMenu}
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</nav>
