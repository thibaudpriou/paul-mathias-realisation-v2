<script context="module" lang="ts">
  import { assets } from '$app/paths';
  import categories from "../config";

  export async function load({ page }) {
    return { props: {segment: page.path} };
	}

  const SITE_URL = "http://paul-mathias-realisation.com/";
</script>

<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import Page from "../components/Page.svelte";

  export let segment: string;
  let blackNavVariant = false;

  $: {
    // reset "blackNavVariant" data on "segment" prop change
    blackNavVariant = segment === '/';
  }

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function adaptNavColor(scrollPos: number) {
    if (segment !== '/') return;

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


<svelte:head>
  <meta
    name="keywords"
    content="Réalisation, Court-métrage, Pub, Clip, Fiction"
  />
  <meta
    name="google-site-verification"
    content="nUD7H3E87xDUaik5mFLa1QF7-XY1ZQyJC6cRxCWm4gY"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={SITE_URL} />
  <meta name="twitter:title" content="Paul & Mathias" />
  <meta
    name="twitter:description"
    content="Réalisateurs français de fictions, de clips et de films publicitaires. Notre vocation : créer de l’émotion."
  />
  <meta name="twitter:creator" content="Paul & Mathias" />
  <meta
    name="twitter:image"
    content={`${assets}/imgs/vignette-fb.png`}
  />
  <!-- TODO vignette-fb.png -->
  <meta property="og:title" content="Paul & Mathias" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_URL} />
  <meta
    property="og:image"
    content={`${assets}/imgs/vignette-fb.png`}
  />
  <!-- TODO vignette-fb.png -->
  <meta
    property="og:description"
    content="Réalisateurs français de fictions, de clips et de films publicitaires. Notre vocation : créer de l’émotion."
  />
  <meta property="og:site_name" content="Paul & Mathias" />
  <meta property="fb:admins" content="100000548772365,1552087045" />

  <!-- Favicons -->
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href={`${assets}/favicon/apple-touch-icon.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href={`${assets}/favicon/favicon-32x32.png`}
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href={`${assets}/favicon/favicon-16x16.png`}
  />
  <link rel="manifest" href={`${assets}/favicon/site.webmanifest`} />
  <link
    rel="mask-icon"
    href={`${assets}/favicon/safari-pinned-tab.svg`}
    color="#000000"
  />
  <meta name="msapplication-TileColor" content="#f3f3f3" />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<svelte:window on:scroll={onScroll} />

<header class="navbar-container">
  <Nav {segment} blackVariant={blackNavVariant} {categories} />
</header>
<Page refresh={segment} transitionDuration={10}>
  <main class:inverted={segment === "/about"}>
    <slot />
    {#if segment !== "/about"}
      <img class="banner-pre-footer" src={`${assets}/imgs/footer-banner.png`} alt="" />
    {/if}
  </main>
  {#if segment !== "/about"}
    <footer class="footer" class:inverted={segment === "/about"}>
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
    min-height: calc(100vh - var(--navbar-height));
  }

  .inverted {
    background-color: #ececec;
  }

  .navbar-container {
    position: fixed;
    top: 0px;
    z-index: 2;
    color: black;
    stroke: black;
    fill: black;
    width: 100%;
  }

  .banner-pre-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
  }

  .footer {
    display: none;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    main {
      min-height: 100vh;
    }

    .navbar-container {
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
      display: unset;
    }

    .footer {
      display: flex;
    }
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
