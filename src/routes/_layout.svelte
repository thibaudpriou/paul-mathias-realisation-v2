<script context="module" lang="ts">
  import categories from "../config";
</script>

<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import Page from "../components/Page.svelte";

  export let segment: string;
  let blackNavVariant = false;

  $: {
    // reset "blackNavVariant" data on "segment" prop change
    blackNavVariant = segment === undefined;
  }

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function adaptNavColor(scrollPos) {
    if (segment !== undefined) return;

    const showreel: HTMLElement = document.getElementById("showreel");
    if (!showreel) return;

    blackNavVariant = scrollPos <= showreel.offsetHeight;
  }

  function onScroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        adaptNavColor(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }
</script>

<svelte:window on:scroll={onScroll} />

<header class="navbar-container">
  <Nav {segment} blackVariant={blackNavVariant} {categories} />
</header>
<Page refresh={segment} transitionDuration={10}>
  <main class:inverted={segment === "about"}>
    <slot />
    {#if segment !== "about"}
      <img class="banner-pre-footer" src="/imgs/footer-banner.png" alt="" />
    {/if}
  </main>
  {#if segment !== "about"}
    <footer class:inverted={segment === "about"}>
      <Footer />
    </footer>
  {/if}
</Page>

<style>
  main {
    position: relative;
    box-sizing: border-box;
    z-index: 0;
    width: 100%;
    min-height: 100vh;
  }

  .inverted {
    background-color: #ececec;
  }

  .navbar-container {
    position: fixed;
    top: 0px;
    z-index: 2;
    color: black;
    width: 100%;

    -webkit-animation: slidedown 1s ease 1s;
    -moz-animation: slidedown 1s ease 1s;
    -ms-animation: slidedown 1s ease 1s;
    -o-animation: slidedown 1s ease 1s;
    animation: slidedown 1s ease 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .banner-pre-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  @keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @-moz-keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @-ms-keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @-o-keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
