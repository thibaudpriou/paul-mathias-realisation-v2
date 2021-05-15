<script context="module" lang="ts">
  import categories from "../config";
  import type IRealisation from "../types/realisation";

  let realisations = categories
    .reduce<IRealisation[]>((reals, cat) => [...reals, ...cat.realisations], [])
    .sort((r1, r2) => r1.globalRank - r2.globalRank);
</script>

<script>
  import Realisation from "../components/Realisation.svelte";
  import Showreel from "../components/Showreel.svelte";
</script>

<svelte:head>
  <title>Paul & Mathias</title>
  <meta
    name="keywords"
    content="Réalisation, Court-métrage, Pub, Clip, Fiction"
  />
  <meta
    name="description"
    content="Réalisateurs français de fictions, de clips et de films publicitaires. Notre vocation : créer de l’émotion."
  />
</svelte:head>

<Showreel />
{#each realisations as realisation}
  <Realisation {realisation} />
{/each}
