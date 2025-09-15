<script>
    import { onMount } from "svelte";
    import Button from "./ui/Button.svelte";
    import { Menu, X } from "lucide-svelte";

    let isOpen = $state(false);
    let isScrolled = $state(false);

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
    class="fixed top-0 w-full z-50 transition-all duration-300 {isScrolled
        ? 'bg-background/95 backdrop-blur-sm border-b border-border'
        : 'bg-transparent'}"
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
                <Button>
                    <a href="#contact">Get Started</a>
                </Button>
            </div>

            <!-- Mobile Navigation Button -->
            <div class="md:hidden">
                <Button
                    variant="ghost"
                    size="sm"
                    onclick={() => (isOpen = !isOpen)}
                >
                    {#if isOpen}
                        <X class="h-5 w-5" />
                    {:else}
                        <Menu class="h-5 w-5" />
                    {/if}
                </Button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        {#if isOpen}
            <div class="md:hidden bg-background border-t border-border">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    {#each navItems as item}
                        <a
                            href={item.href}
                            class="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                            onclick={closeMenu}
                        >
                            {item.label}
                        </a>
                    {/each}
                    <div class="px-3 py-2">
                        <Button class="w-full">
                            <a href="#contact" onclick={closeMenu}
                                >Get Started</a
                            >
                        </Button>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</nav>
