<script>
    import { Github, Linkedin, Twitter } from "lucide-svelte";
</script>

<footer class="bg-muted/30 border-t border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
                <div class="font-mono font-semibold text-lg mb-4">
                    Richard Nyjai Walls
                </div>
                <p class="text-muted-foreground mb-6 max-w-md">
                    Transforming businesses through intelligent automation and
                    custom web solutions. Let's build the future together.
                </p>
                <div class="flex space-x-4">
                    <a
                        href="https://github.com/drkrndr"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <Github class="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/richard-walls-70a01a271/"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin class="h-5 w-5" />
                    </a>
                    <a
                        href="https://twitter.com"
                        class="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter class="h-5 w-5" />
                    </a>
                </div>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Services</h3>
                <ul class="space-y-2 text-muted-foreground">
                    <li>
                        <a
                            href="#services"
                            class="hover:text-foreground transition-colors"
                            >AI Automation</a
                        >
                    </li>
                    <li>
                        <a
                            href="#services"
                            class="hover:text-foreground transition-colors"
                            >Web Applications</a
                        >
                    </li>
                    <li>
                        <a
                            href="#services"
                            class="hover:text-foreground transition-colors"
                            >Workflow Optimization</a
                        >
                    </li>
                    <li>
                        <a
                            href="#services"
                            class="hover:text-foreground transition-colors"
                            >Data Dashboards</a
                        >
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2 text-muted-foreground">
                    <li>
                        <a
                            href="#home"
                            class="hover:text-foreground transition-colors"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            class="hover:text-foreground transition-colors"
                            >Portfolio</a
                        >
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            class="hover:text-foreground transition-colors"
                            >Testimonials</a
                        >
                    </li>
                    <li>
                        <a
                            href="#contact"
                            class="hover:text-foreground transition-colors"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="border-t border-border mt-12 pt-8 text-center text-muted-foreground"
        >
            <p>&copy; 2025 Richard Nyjai Walls. All rights reserved.</p>
        </div>
    </div>
</footer>
