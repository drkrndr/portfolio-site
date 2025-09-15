<script>
  import Navigation from './lib/components/Navigation.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import ServicesSection from './lib/components/ServicesSection.svelte';
  import PortfolioSection from './lib/components/PortfolioSection.svelte';
  import TestimonialsSection from './lib/components/TestimonialsSection.svelte';
  import ContactSection from './lib/components/ContactSection.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<main>
  <Navigation />
  <HeroSection />
  <ServicesSection />
  <PortfolioSection />
  <TestimonialsSection />
  <ContactSection />
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
