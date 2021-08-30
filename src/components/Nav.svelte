<script lang="ts">
  import type ICategory from "../types/category";
  import IconHambuger from "./icons/IconHambuger.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLinks from "./NavLinks.svelte";
  import InstagramLogo from "./social/InstagramLogo.svelte";
  import VimeoLogo from "./social/VimeoLogo.svelte";

  export let segment: string;
  export let blackVariant: boolean; // ! ignored for mobile version
  export let categories: ICategory[];

  let collapsed: boolean = false;

  function closeMenu() {
    collapsed = false;
  }
</script>

<nav class:black-variant={blackVariant} class:collapsed>
  <span class="main">
    <span class="logo-link">
      <NavLink
        logo
        isAriaCurrent={segment === undefined}
        href="."
        {blackVariant}
        on:nav-link={closeMenu}
      >
        <span class="navbar-brand"
          >Paul <span class="fine-text">X</span> Mathias</span
        >
      </NavLink>
    </span>
    <span class="directors">Directors</span>

    <button
      class="collapser"
      on:click={() => (collapsed = !collapsed)}
      aria-label="afficher menu"
    >
      <IconHambuger />
    </button>
  </span>

  <span class="links">
    <NavLinks {categories} {segment} {blackVariant} on:nav-link={closeMenu} />
    <div class="social-links">
      <span class="social-link"><VimeoLogo background /></span>
      <span class="social-link"><InstagramLogo background /></span>
    </div>
  </span>
</nav>
<span class="overlay" on:click={closeMenu} />

<style>
  nav {
    font-weight: 300;
    padding: 0 2.5em;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255);
    box-sizing: border-box;

    transition: background-color 0.5s;
  }

  .main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    min-height: var(--navbar-height);
  }

  .navbar-brand {
    font-family: "SourceSansPro-LightIt";
    display: inline-block;
    font-size: 1.25em;
    white-space: nowrap;
    user-select: none;
    text-transform: none;
  }

  .directors {
    margin-left: 1em;
    padding: 0 1.5em;
    font-family: "SourceSansPro-Regular";
    font-weight: lighter;
    border-left: solid 1px black;
  }

  .navbar-brand .fine-text {
    font-family: "SourceSansPro-ExtraLight";
    font-size: 65%;
  }

  .collapser {
    width: 1.5em;
    height: 1.5em;
    box-sizing: content-box;
    margin-left: auto;

    background: none;
    cursor: pointer;
    padding: 0.25em 0.75em;
    border: none;
    position: relative;
  }

  .collapser::after {
    content: "";
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    width: calc(100% + 1em);
    height: calc(100% + 1em);
  }

  .links {
    display: none;
    flex-grow: 1;
    display: none;
    justify-content: center;
    flex-direction: column;
    padding: 1em 0;
  }

  .logo-link {
    margin-left: auto;
  }

  .collapsed .links {
    display: flex;
  }

  .overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: black;
    opacity: 0.7;
  }

  .collapsed + .overlay {
    display: block;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  .social-link {
    width: 1.5em;
    height: 1.5em;
    display: inline-flex;
    margin-left: 1em;
    z-index: 0; /* to create stacking context */
  }

  .social-link:first-child {
    margin-left: 0;
  }

  @media (min-width: 1100px) {
    nav {
      flex-direction: row;
      background-color: rgba(255, 255, 255, 0.5);
    }

    .black-variant {
      /* only for desktop */
      color: white;
      fill: white;
      stroke: white;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .black-variant .directors {
      /* only for desktop */
      border-color: white;
    }

    .black-variant .collapser {
      /* only for desktop */
      border-color: white;
    }

    .collapser {
      display: none;
    }

    .links {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      padding: 0;
    }

    .logo-link {
      margin-left: 0;
    }

    .social-links {
      display: none;
    }
  }
</style>
