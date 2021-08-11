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
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>
