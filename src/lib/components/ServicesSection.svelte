<script>
    import {
        Zap,
        Laptop,
        GitBranch,
        BarChart3 as Chart,
        ArrowRight,
    } from "lucide-svelte";

    const services = [
        {
            icon: Zap,
            title: "AI Automation",
            description:
                "Intelligent chatbots, document processing, and automated decision-making systems that work 24/7.",
            features: [
                "Custom Models",
                "Natural Language Processing",
                "Automated Workflows",
                "Smart Data Processing",
            ],
        },
        {
            icon: Laptop,
            title: "Web Applications",
            description:
                "Modern, responsive web apps built with cutting-edge technologies for optimal performance.",
            features: [
                "React, Next.js, Node.js, Svelte, Vite",
                "Real-time Features",
                "API Integration",
                "Web-First Design",
            ],
        },
        {
            icon: GitBranch,
            title: "Workflow Optimization",
            description:
                "Streamline your business processes with custom automation tools and integrations.",
            features: [
                "Process Analysis",
                "Custom Integrations",
                "Automation Scripts",
                "Efficiency Monitoring",
            ],
        },
        {
            icon: Chart,
            title: "Data Dashboards",
            description:
                "Interactive dashboards that transform complex data into actionable business insights.",
            features: [
                "Real-time Analytics",
                "Custom Visualizations",
                "KPI Tracking",
                "Automated Reports",
            ],
        },
    ];
</script>

<section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">
                Services That Drive Results
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                From AI-powered automation to custom web solutions, I deliver
                technology that transforms your business operations.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each services as service}
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all duration-300 border-border/50"
                >
                    <div class="flex flex-col space-y-1.5 p-6">
                        <div class="flex items-center space-x-4">
                            <div
                                class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors"
                            >
                                <svelte:component
                                    this={service.icon}
                                    class="h-6 w-6 text-primary"
                                />
                            </div>
                            <div class="text-left">
                                <h3
                                    class="text-2xl font-semibold leading-none tracking-tight text-left"
                                >
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                        <p
                            class="text-sm text-muted-foreground text-base leading-relaxed"
                        >
                            {service.description}
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <ul class="space-y-2">
                            {#each service.features as feature}
                                <li
                                    class="flex items-center text-sm text-muted-foreground"
                                >
                                    <ArrowRight
                                        class="h-3 w-3 text-primary mr-2 flex-shrink-0"
                                    />
                                    {feature}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
