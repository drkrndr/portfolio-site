<script lang="ts">
  import Navigation from './lib/components/Navigation.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import ServicesSection from './lib/components/ServicesSection.svelte';
  import PortfolioSection from './lib/components/PortfolioSection.svelte';
  import TestimonialsSection from './lib/components/TestimonialsSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import Footer from './lib/components/Footer.svelte';
  
  // Import global styles
  import './app.css';
</script>

<div class="min-h-screen bg-background text-foreground">
  <Navigation />
  <main class="container mx-auto px-4 py-8">
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
  <Footer />
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
