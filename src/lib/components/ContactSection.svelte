<script lang="ts">
  import { Mail, MessageSquare, Clock, CheckCircle, AlertTriangle, Loader2 } from 'lucide-svelte';

  let formData = {
    name: '',
    email: '',
    project: '',
    message: ''
  };

  let loading = false;
  let success = false;
  let error = '';

  async function handleSubmit() {
    loading = true;
    success = false;
    error = '';

    try {
      const response = await fetch('https://smartforms.dev/submit/YOUR_FORM_ID', { // <-- IMPORTANT: Replace with your Smart Forms endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        success = true;
        formData = { name: '', email: '', project: '', message: '' }; // Reset form
      } else {
        const result = await response.json();
        error = result.error || 'An unknown error occurred.';
      }
    } catch (e) {
      error = 'Failed to send message. Please try again later.';
    }

    loading = false;
  }
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
            <MessageSquare class="h-5 w-5 mr-2 text-primary" />
            Send a Message
          </h3>
          <p class="text-sm text-muted-foreground">Tell me about your project and I'll get back to you within 24 hours.</p>
        </div>
        <div class="p-6 pt-0">
          {#if success}
            <div class="text-center py-8">
              <CheckCircle class="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 class="text-lg font-semibold mb-2">Message Sent!</h3>
              <p class="text-muted-foreground">Thank you for reaching out. I'll respond within 24 hours.</p>
			  <button on:click={() => success = false} class="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
				Send Another Message
			  </button>
            </div>
          {:else}
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <fieldset disabled={loading}>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-medium mb-2">Name</label>
                    <input bind:value={formData.name} id="name" placeholder="Your name" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium mb-2">Email</label>
                    <input bind:value={formData.email} id="email" type="email" placeholder="your@email.com" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                </div>

                <div>
                  <label for="project" class="block text-sm font-medium mb-2">Project Type</label>
                  <select bind:value={formData.project} id="project" required class="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="web-app">Web Application</option>
                    <option value="workflow">Workflow Optimization</option>
                    <option value="dashboard">Data Dashboard</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium mb-2">Project Details</label>
                  <textarea bind:value={formData.message} id="message" placeholder="Tell me about your project, goals, and any specific requirements..." rows="5" required class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                </div>

                {#if error}
                  <div class="flex items-center p-4 text-sm text-destructive border border-destructive/50 rounded-lg bg-destructive/10">
                    <AlertTriangle class="h-4 w-4 mr-2" />
                    <p>{error}</p>
                  </div>
                {/if}

                <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                  {#if loading}
                    <Loader2 class="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  {:else}
                    Send Message
                  {/if}
                </button>
              </fieldset>
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
                <Mail class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold mb-2">Direct Email</h3>
                <p class="text-muted-foreground mb-3">Prefer email? Send me a message directly.</p>
                <a href="mailto:nyjaiwalls@proton.me" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
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
                <Clock class="h-6 w-6 text-primary" />
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
