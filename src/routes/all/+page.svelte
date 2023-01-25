<script context="module" lang="ts">
    import {allRealisations} from "$config";
</script>

<script lang="ts">
    import Realisation from "$components/Realisation.svelte";
    import Showreel from "$components/Showreel.svelte";
</script>

<svelte:head>
    <title>Paul & Mathias - Tout voir</title>
    <meta name="keywords" content="Réalisation, Court-métrage, Pub, Clip, Fiction" />
</svelte:head>

<Showreel />
{#each allRealisations as realisation}
    <Realisation {realisation} />
{/each}
