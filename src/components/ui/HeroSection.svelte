<script>
  import Button from './ui/Button.svelte'
  import { ArrowRight, Zap, Code, BarChart3 } from 'lucide-svelte'
</script>

<section id="home" class="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-4xl mx-auto">
      <div class="flex justify-center mb-6">
        <div class="flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
          <Zap class="h-4 w-4 text-primary" />
          <span class="text-sm font-medium">AI-Powered Solutions</span>
        </div>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Automate Your Business with <span class="text-primary">AI & Web Solutions</span>
      </h1>

      <p class="text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        I help businesses streamline operations and boost productivity through custom AI automation, intelligent web
        applications, and data-driven dashboards.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button size="lg">
          <a href="#contact" class="flex items-center">
            Start Your Project
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="lg">
          <a href="#portfolio">View My Work</a>
        </Button>
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
