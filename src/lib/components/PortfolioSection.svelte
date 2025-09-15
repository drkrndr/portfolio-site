<script lang="ts">
    import { ExternalLink, Github } from 'lucide-svelte';
    import type { Project } from '../types/project';
    
    // Handle image loading errors
    function handleImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        if (target) {
            target.src = '/placeholder.svg?height=200&width=400';
        }
    }

    const projects: Project[] = [
        {
            title: "Cryptocurrency Trading Bot",
            description:
                "Real-time token sniping bot that identified high-potential trades with risk scoring, improving trade decision speed and reducing exposure to high-risk tokens by 60%.",
            image: "/drkrndrs-memecoin-trading-bot.svg",
            fit: false,
            fill: true,
            tags: ["AI/ML", "JavaScript", "Node.js", "APIs"],
            metrics: [
                "24/7 Real-Time Monitoring",
                "Auto/Manual Buy Toggle",
                "CSV & JSON Data Export",
            ],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "ISO 20022 Compliant XML Validation API (Aegis)",
            description:
                "Critical ISO 20022 validator that instantly detects message errors to prevent costly transaction failures. Ensure compliance and secure uninterrupted financial operations before errors escalate.",
            image: "/aegis.svg",
            fit: true,
            fill: false,
            tags: ["Node.js", "Express.js", "libxmljs2", "REST"],
            metrics: [
                "35% ↓ Projected Transaction Errors",
                "Real-time Compliance Checks",
                "99.9% Uptime (designed for near-continuous availability)",
            ],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Document Processing System",
            description:
                "Automated invoice processing system that reduced manual work by 80% and improved accuracy.",
            image: "/document-automation-ai.svg",
            fit: false,
            fill: true,
            tags: ["Python", "OCR", "Machine Learning", "AWS"],
            metrics: [
                "80% ↓ Manual Work",
                "99.5% Accuracy",
                "10x Faster Processing",
            ],
            liveUrl: "#",
            githubUrl: "#"
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project (project.title)}
                <div 
                    class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                    <div class="relative h-48 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            on:error={handleImageError}
                            class="w-full h-full {project.fit ? 'object-contain' : 'object-cover'} {project.fill ? 'p-4' : ''} transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-foreground">{project.title}</h3>
                            <div class="flex space-x-2">
                                {#if project.liveUrl}
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                        aria-label={`View ${project.title} live demo`}
                                        title="Live Demo"
                                    >
                                        <ExternalLink class="w-5 h-5" />
                                    </a>
                                {/if}
                                {#if project.githubUrl}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                        aria-label="View on GitHub"
                                        title="View Code"
                                    >
                                        <Github class="w-5 h-5" />
                                    </a>
                                {/if}
                            </div>
                        </div>
                        <p class="text-muted-foreground mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.tags as tag}
                                <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                    {tag}
                                </span>
                            {/each}
                        </div>
                        {#if project.metrics && project.metrics.length > 0}
                            <div class="mt-4 pt-4 border-t border-border">
                                <h4 class="text-sm font-medium text-muted-foreground mb-2">Key Results:</h4>
                                <ul class="space-y-1">
                                    {#each project.metrics as metric}
                                        <li class="flex items-center text-sm">
                                            <span class="text-primary mr-2">•</span>
                                            <span>{metric}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
