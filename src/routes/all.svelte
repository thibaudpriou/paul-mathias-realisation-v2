<script context="module" lang="ts">
    import {categories} from "../config";
    import type IRealisation from "../types/realisation";
  
    let realisations = categories
      .reduce<IRealisation[]>((reals, cat) => [...reals, ...cat.realisations], [])
      .sort((r1, r2) => r1.globalRank - r2.globalRank);
  </script>
  
  <script lang="ts">
    import Realisation from "../components/Realisation.svelte";
  </script>
  
  <svelte:head>
    <title>Paul & Mathias - Tout voir</title>
    <meta
      name="keywords"
      content="Réalisation, Court-métrage, Pub, Clip, Fiction"
    />
  </svelte:head>
  
  {#each realisations as realisation}
    <Realisation {realisation} />
  {/each}
  