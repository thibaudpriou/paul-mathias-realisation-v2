<script>
  import { fade } from "svelte/transition";
  export let refresh = "";
  export let transitionDuration = 200;

  $: duration = transitionDuration / 2;
</script>

{#key refresh}
  <div
    class="transition-container"
    in:fade={{ duration, delay: duration }}
    out:fade={{ duration }}
  >
    <slot />
  </div>
{/key}

<style>
  .transition-container {
    width: 100%;
    min-height: calc(100vh - var(--navbar-height));
    position: absolute;
    top: var(--navbar-height);
    left: 0;
    z-index: 1;
  }

  @media (min-width: 1100px) {
    .transition-container {
      top: 0;
      min-height: 100vh;
    }
  }
</style>
