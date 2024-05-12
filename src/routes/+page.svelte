<script>
  import { onMount } from 'svelte';
  import Header from '../components/header.svelte';
  import { theme } from '../themeStore.ts';

  onMount(() => {
    const unsubscribe = theme.subscribe(($theme) => {
      document.documentElement.style.setProperty('--primary-color', $theme.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', $theme.secondaryColor);
    });

    // Cleanup function to unsubscribe when the component is destroyed
    return unsubscribe;
  });
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
