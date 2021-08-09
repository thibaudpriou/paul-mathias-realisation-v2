<script lang="ts" context="module">
  import Realisation from "../components/Realisation.svelte";
  import categories from "../config";
  import type ICategory from "../types/category";
  
  export async function preload(page, ) {
    const { categoryPath } = page.params;
    const category: ICategory = categories.find((c) => c.path === categoryPath);
		return { category };
	}
</script>

<script lang="ts">
  export let category: ICategory;
  $: realisations = category.realisations.sort((r1, r2) => r1.rank - r2.rank);
</script>

<svelte:head>
  <title>Paul & Mathias - {category.title}</title>
  <meta
    name="keywords"
    content="Audiovisuel, Réalisation, {category.title}"
  />
</svelte:head>

<ul class="container-realisation">
  {#each realisations as realisation}
    <li>
      <Realisation {realisation} />
    </li>
  {/each}
</ul>

<style>
  .container-realisation {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
