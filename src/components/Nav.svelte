<script lang="ts">
  import type ICategory from "../types/category";
  import NavDivider from "../components/NavDivider.svelte";

  export let segment: string;
  export let categories: ICategory[];
</script>

<nav
  class:nav-black={segment === "about"}
>
  <a
    class="link logo-link"
    aria-current={segment === undefined ? "page" : undefined}
    href="."
  >
    <span class="navbar-brand">Paul <span class="fine-text">X</span> Mathias</span>
  </a>
  <span class="directors">Directors</span>
  <ul class="container">
    {#each categories.sort((c1, c2) => c1.rank - c2.rank) as category}
      <li>
        <a
          class="link"
          aria-current={segment === category.path ? "page" : undefined}
          href={category.path}>{category.title}</a
        >
      </li>
      <li class="nav-divider"><NavDivider /></li>
    {/each}
    <li>
      <a
        class="link"
        aria-current={segment === "about" ? "page" : undefined}
        href="about">À Propos</a
      >
    </li>
    <li class="nav-divider"><NavDivider /></li>
  </ul>
</nav>

<style>
  nav {
    font-weight: 300;
    padding: 0 2.5em;
    min-height: 3.3em;
    display: flex;
    align-items: center;
  }

  .container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
  }

  li {
    text-transform: uppercase;
    font-weight: bold;
  }

  .link {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  .link:after {
    content: '';
    background: black;
    width: 0;
    height: 1px;
    position: absolute;
    bottom: .25em;
    left: 0.5em;
  }

  .link:hover:after,
  .link[aria-current="page"]:not(.logo-link):after {
    width: calc(100% - 1em);
    transition: width .2s ease-in-out;
  }

  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
  }
  .nav-divider {
    width: 0.25em;
    height: 0.25em;
    display: flex;
    margin: 0 2em;
  }
  .nav-divider:last-child {
    display: none;
  }

  .navbar-brand {
    font-family: 'SourceSansPro-LightIt';
    display: inline-block;
    font-size: 1.25em;
    white-space: nowrap;
    user-select: none;
    text-transform: none;
  }

  .directors {
    margin-left: 1em;
    padding-left: 1.5em;
    font-family: 'SourceSansPro-Regular';
    font-weight: lighter;
    border-left: solid 1px black;
  }

  .navbar-brand .fine-text {
    font-family: 'SourceSansPro-ExtraLight';
    font-size: 65%;
  }

  /* Black variant */
  .nav-black {
    background-color: rgba(0,0,0,.25);
    color: white;
    fill: white;
  }

  .nav-black .directors {
    border-color: white;
  }

  .nav-black  .link:after {
    background: white;
  }
</style>
