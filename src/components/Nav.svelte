<script lang="ts">
  import type ICategory from "../types/category";
  import IconHambuger from "./icons/IconHambuger.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLinks from "./NavLinks.svelte";
  import InstagramLogo from "./social/InstagramLogo.svelte";
  import VimeoLogo from "./social/VimeoLogo.svelte";

  export let segment: string;
  export let blackVariant: boolean;
  export let categories: ICategory[];

  let collapsed: boolean = false;

  function closeMenu() {
    collapsed = false;
  }
</script>

<nav class:black-variant={blackVariant} class:collapsed>
  <span class="main">
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
    <span class="directors">Directors</span>

    <button class="collapser" on:click={() => (collapsed = !collapsed)}>
      <IconHambuger />
    </button>
  </span>

  <span class="links">
    <NavLinks {categories} {segment} {blackVariant} on:nav-link={closeMenu} />
    <div class="social-links">
      <span class="social-link"><VimeoLogo /></span>
      <span class="social-link"><InstagramLogo /></span>
    </div>
  </span>
</nav>

<style>
  nav {
    font-weight: 300;
    padding: 0.2em 2.5em;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255);

    transition: background-color 0.5s;
  }

  .main {
    display: flex;
    flex-grow: 1;
    align-items: center;
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
    padding-left: 1.5em;
    font-family: "SourceSansPro-Regular";
    font-weight: lighter;
    border-left: solid 1px black;
  }

  .navbar-brand .fine-text {
    font-family: "SourceSansPro-ExtraLight";
    font-size: 65%;
  }

  .collapser {
    width: 1em;
    height: 1em;
    box-sizing: content-box;
    margin-left: auto;

    background: none;
    cursor: pointer;
    padding: 0.25em 0.75em;
    border-radius: 0.25em;
    border: 1px solid black;
  }

  .links {
    display: none;
    flex-grow: 1;
    display: none;
    justify-content: center;
    flex-direction: column;
    padding: 1em 0;
  }

  .collapsed .links {
    display: flex;
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
  }

  .social-link:first-child {
    margin-left: 0;
  }

  .black-variant {
    color: white;
    fill: white;
    stroke: white;
    background-color: rgba(0, 0, 0);
  }

  .black-variant .directors {
    border-color: white;
  }

  .black-variant .collapser {
    border-color: white;
  }

  @media (min-width: 1100px) {
    nav {
      flex-direction: row;
      background-color: rgba(255, 255, 255, 0.25);
    }

    .black-variant {
      background-color: rgba(0, 0, 0, 0.25);
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

    .social-links {
      display: none;
    }
  }
</style>
