<script>
  import { ArrowRight, Zap, Code, BarChart3 } from 'lucide-svelte';
</script>

<section id="home" class="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-4xl mx-auto">
      <div class="flex justify-center mb-6">
        <a href="#contact" class="flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
          <Zap class="h-4 w-4 text-primary" />
          <span class="text-sm font-medium">AI-Powered Solutions</span>
        </a>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Automate Your Business with <span class="text-primary">AI & Web Solutions</span>
      </h1>

      <p class="text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        I help businesses streamline operations and boost productivity through custom AI automation, intelligent web
        applications, and data-driven dashboards.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="#contact"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Start Your Project
          <ArrowRight class="ml-2 h-4 w-4" />
        </a>
        <a
          href="#portfolio"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
        >
          View My Work
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-lg mb-3">
            <Code class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-1">Custom Development</h3>
          <p class="text-sm text-muted-foreground text-center">
            Tailored web applications built for your specific needs
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-lg mb-3">
            <Zap class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-1">AI Automation</h3>
          <p class="text-sm text-muted-foreground text-center">
            Intelligent workflows that save time and reduce errors
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="bg-primary/10 p-3 rounded-lg mb-3">
            <BarChart3 class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-semibold mb-1">Data Insights</h3>
          <p class="text-sm text-muted-foreground text-center">
            Interactive dashboards that turn data into decisions
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
