<script lang="ts">
  import NavDivider from "../components/NavDivider.svelte";
  import type ICategory from "../types/category";
  import NavLink from "./NavLink.svelte";

  export let segment: string;
  export let categories: ICategory[];
  export let blackVariant: boolean;
</script>

<ul class="nav-links" class:black-variant={blackVariant}>
  <li>
    <NavLink
      href="all"
      {blackVariant}
      isAriaCurrent={segment === "all"}
      on:nav-link
    >
      Tout voir
    </NavLink>
  </li>
  <li class="nav-divider"><NavDivider /></li>
  {#each categories.sort((c1, c2) => c1.rank - c2.rank) as category}
    <li>
      <NavLink
        href={category.path}
        {blackVariant}
        isAriaCurrent={segment === category.path}
        on:nav-link
      >
        {category.title}
      </NavLink>
    </li>
    <li class="nav-divider"><NavDivider /></li>
  {/each}
  <li>
    <NavLink
      href="about"
      {blackVariant}
      isAriaCurrent={segment === "about"}
      on:nav-link
    >
      À Propos
    </NavLink>
  </li>
</ul>

<style>
  .nav-links {
    margin: 0;
    padding: 0;
    flex-direction: row;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: inherit;
  }

  li {
    text-transform: uppercase;
  }

  .nav-divider {
    width: 0.25em;
    height: 0.25em;
    margin: 0 2em;
    display: none;
  }

  @media (min-width: 1100px) {
    .nav-divider {
      display: flex;
    }

    li {
      font-weight: bold;
    }
  }
</style>
