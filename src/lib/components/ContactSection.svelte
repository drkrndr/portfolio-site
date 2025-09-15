<script lang="ts">
  import { Mail, MessageSquare, Clock, CheckCircle, AlertTriangle, Loader2 } from 'lucide-svelte';
  
  // Import type definition
  import type { ContactFormData } from '../types/contact';

  // Initialize form data
  let formData: ContactFormData = {
    name: '',
    email: '',
    project: '',
    message: ''
  };

  // Form state
  let loading = false;
  let success = false;
  let error = '';

  // Define the API response type
  interface ApiResponse {
    success: boolean;
    message?: string;
    [key: string]: unknown;
  }

  const handleSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    
    if (loading) return;
    
    loading = true;
    success = false;
    error = '';

    try {
      // In a real app, replace with your actual form submission endpoint
      const response = await fetch('https://smartforms.dev/submit/YOUR_FORM_ID', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message
        })
      });

      const result: ApiResponse = await response.json();
      
      if (response.ok) {
        success = true;
        formData = { 
          name: '', 
          email: '', 
          project: '', 
          message: '' 
        };
      } else {
        error = result.message || 'An error occurred while sending your message.';
      }
    } catch (err: unknown) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      error = `Failed to send message: ${errorMessage}. Please try again later.`;
    } finally {
      loading = false;
    }
  };
</script>

<section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your business with AI and automation? Let's discuss your project and explore the possibilities.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center">
                        <MessageSquare size={20} class="mr-2 text-primary" />
                        Send a Message
                    </h3>
                    <p class="text-sm text-muted-foreground">Tell me about your project and I'll get back to you within 24 hours.</p>
                </div>
                <div class="p-6 pt-0">
                    {#if success}
                        <div class="text-center py-8 space-y-4">
                            <div class="flex justify-center">
                                <CheckCircle size={48} class="text-green-500" />
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-lg font-semibold">Message Sent!</h3>
                                <p class="text-muted-foreground">Thank you for reaching out. I'll respond within 24 hours.</p>
                            </div>
                            <button 
                                on:click|preventDefault={() => success = false} 
                                class="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                                Send another message
                            </button>
                        </div>
                    {:else}
                        <form on:submit={handleSubmit} class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label for="name" class="text-sm font-medium">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        bind:value={formData.name}
                                        required
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div class="space-y-2">
                                    <label for="email" class="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        bind:value={formData.email}
                                        required
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label for="project" class="text-sm font-medium">Project Type</label>
                                <select
                                    id="project"
                                    bind:value={formData.project}
                                    required
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled selected>Select project type</option>
                                    <option value="web">Web Application</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="ai">AI/ML Solution</option>
                                    <option value="consulting">Technical Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label for="message" class="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    bind:value={formData.message}
                                    required
                                    rows={4}
                                    class="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <div class="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    class="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4 py-2"
                                >
                                    {#if loading}
                                        <div class="flex items-center">
                                            <Loader2 size={16} class="mr-2 animate-spin" />
                                            Sending...
                                        </div>
                                    {:else}
                                        Send Message
                                    {/if}
                                </button>
                            </div>

                            {#if error}
                                <div class="flex items-center text-sm text-destructive">
                                    <AlertTriangle size={16} class="mr-2 flex-shrink-0" />
                                    <span>{error}</span>
                                </div>
                            {/if}
                        </form>
                    {/if}
                </div>
            </div>

        <!-- Contact Info -->
        <div class="space-y-8">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="p-6">
                    <div class="flex items-start space-x-4">
                        <div class="bg-primary/10 p-3 rounded-lg">
                            <Mail size={20} class="mr-3 text-primary" />
                        </div>
                        <div>
                            <h3 class="font-semibold mb-2">Direct Email</h3>
                            <p class="text-muted-foreground mb-3">Prefer email? Send me a message directly.</p>
                            <a 
                                href="mailto:nyjaiwalls@proton.me" 
                                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                                nyjaiwalls@proton.me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="p-6">
                    <div class="flex items-start space-x-4">
                        <div class="bg-primary/10 p-3 rounded-lg">
                            <Clock size={20} class="mr-3 text-primary" />
                        </div>
                        <div>
                            <h3 class="font-semibold mb-2">Response Time</h3>
                            <p class="text-muted-foreground">
                                I typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-muted/50 p-6 rounded-lg">
                <h3 class="font-semibold mb-4">What Happens Next?</h3>
                <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                        <div class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                        <span class="text-sm">I'll review your project details</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                        <span class="text-sm">We'll schedule a discovery call</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                        <span class="text-sm">I'll provide a detailed proposal</span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
</section>
