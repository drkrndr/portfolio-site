<script>
    import { ExternalLink, Github } from "lucide-svelte";

    const projects = [
        {
            title: "Cryptocurrency Trading Bot",
            description:
                "Real-time token sniping bot that identified high-potential trades with risk scoring, improving trade decision speed and reducing exposure to high-risk tokens by 60%.",
            image: "drkrndrs-memecoin-trading-bot.svg",
            fit: false,
            fill: true,
            tags: ["AI/ML", "JavaScript", "Node.js", "APIs"],
            metrics: [
                "24/7 Real-Time Monitoring",
                "Auto/Manual Buy Toggle",
                "CSV & JSON Data Export",
            ],
        },
        {
            title: "ISO 20022 Compliant XML Validation API (Aegis)",
            description:
                "Critical ISO 20022 validator that instantly detects message errors to prevent costly transaction failures. Ensure compliance and secure uninterrupted financial operations before errors escalate.",
            image: "aegis.svg",
            fit: true,
            tags: ["Node.js", "Express.js", "libxmljs2", "REST"],
            metrics: [
                "35% ↓ Projected Transaction Errors",
                "Real-time Compliance Checks",
                "99.9% Uptime (designed for near-continuous availability)",
            ],
        },
        {
            title: "Document Processing System",
            description:
                "Automated invoice processing system that reduced manual work by 80% and improved accuracy.",
            image: "document-automation-ai.svg",
            tags: ["Python", "OCR", "Machine Learning", "AWS"],
            metrics: [
                "80% ↓ Manual Work",
                "99.5% Accuracy",
                "10x Faster Processing",
            ],
        },
    ];
</script>

<section id="portfolio" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">Recent Projects</h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real solutions that delivered measurable results for businesses
                across different industries.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {#each projects as project}
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                    <div class={`aspect-video overflow-hidden ${project.fit && !project.fill ? 'bg-white flex items-center justify-center' : ''}`}>
                        <img
                            src={project.image ? `/${project.image}` : '/placeholder.svg?height=200&width=400'}
                            alt={project.title}
                            class={`${project.fill ? 'w-full h-full object-cover' : project.fit ? 'max-h-full h-full w-auto object-contain p-6' : 'w-full h-full object-cover'} group-hover:scale-105 transition-transform duration-300`}
                            on:error={(e) => e.target.src = '/placeholder.svg?height=200&width=400'}
                        />
                    </div>
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3
                            class="text-2xl font-semibold leading-none tracking-tight"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-sm text-muted-foreground leading-relaxed"
                        >
                            {project.description}
                        </p>
                    </div>
                    <div class="p-6 pt-0 mt-auto">
                        <div class="space-y-4">
                            <div class="flex flex-wrap gap-2">
                                {#each project.tags as tag}
                                    <span
                                        class="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>

                            <div class="space-y-1">
                                {#each project.metrics as metric}
                                    <div
                                        class="text-sm font-medium text-primary"
                                    >
                                        {metric}
                                    </div>
                                {/each}
                            </div>

                            <div class="flex gap-2 pt-2">
                                <button
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-3 flex-1"
                                >
                                    <ExternalLink class="h-3 w-3 mr-1" />
                                    Live Demo
                                </button>
                                <button
                                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-3 flex-1"
                                >
                                    <Github class="h-3 w-3 mr-1" />
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
