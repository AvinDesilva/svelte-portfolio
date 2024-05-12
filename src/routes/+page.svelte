<script>
  import Header from '../components/header.svelte';
  import { theme } from '../themeStore.ts';

  // Subscribe to theme changes and update the CSS variables globally
  $: {
    document.documentElement.style.setProperty('--primary-color', $theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', $theme.secondaryColor);
  }
</script>

<style>
  :global(body) {
    background-color: var(--primary-color);
  }
</style>

<div>
  <Header />
  <!-- Additional page content can go here -->
</div>
