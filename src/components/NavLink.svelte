<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let isAriaCurrent: boolean;
  export let href: string;
  export let blackVariant: boolean = false;
  export let logo: boolean = false;

  const dispatch = createEventDispatcher();

  function forward() {
    dispatch("nav-link");
  }
</script>

<a
  class="link"
  class:logo
  class:black-variant={blackVariant}
  aria-current={isAriaCurrent ? "page" : undefined}
  {href}
  on:click={forward}
>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
  }

  .link {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  .link:after {
    content: "";
    background: black;
    width: 0;
    height: 1px;
    position: absolute;
    bottom: 0.25em;
    left: 0.5em;
  }

  .link:hover:after,
  .link[aria-current="page"]:not(.logo):after {
    width: calc(100% - 1em);
    transition: width 0.2s ease-in-out;
  }

  .link.black-variant:after {
    background: white;
  }
</style>
