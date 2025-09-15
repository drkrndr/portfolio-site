<script lang="ts">
    import { Star } from "lucide-svelte";
    
    import type { Testimonial } from '$lib/types';

    const testimonials: Testimonial[] = [
        {
            name: "Sarah Chen",
            role: "CTO, TechFlow Solutions",
            content:
                "The AI automation system transformed our customer service. Response times dropped from hours to seconds, and our team can now focus on strategic work instead of repetitive tasks.",
            rating: 5,
            avatar: "/placeholder.svg?height=48&width=48"
        },
        {
            name: "Marcus Rodriguez",
            role: "Operations Director, LogiCorp",
            content:
                "Our supply chain dashboard provides insights we never had before. The real-time tracking and predictive analytics have saved us thousands in operational costs.",
            rating: 5,
            avatar: "/placeholder.svg?height=48&width=48"
        },
        {
            name: "Emily Watson",
            role: "Founder, GreenLeaf Consulting",
            content:
                "Working with Richard was exceptional. He understood our complex requirements and delivered a solution that exceeded expectations. Highly recommended!",
            rating: 5,
            avatar: "/placeholder.svg?height=48&width=48"
        },
    ];
</script>

<section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">
                What Clients Say
            </h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take my word for it. Here's what business leaders say
                about working with me.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each testimonials as testimonial}
                <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300"
                >
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            {#each Array(testimonial.rating) as _}
                                <Star
                                    class="h-4 w-4 fill-primary text-primary"
                                />
                            {/each}
                        </div>

                        <blockquote
                            class="text-muted-foreground mb-6 leading-relaxed"
                        >
                            "{testimonial.content}"
                        </blockquote>

                        <div>
                            <div>
                                <div class="font-semibold">
                                    {testimonial.name}
                                </div>
                                <div class="text-sm text-muted-foreground">
                                    {testimonial.role}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
