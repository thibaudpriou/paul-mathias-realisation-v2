<script context="module" lang="ts">
    import {allRealisations, homePageSamples} from "$config";

    let mobileSamples = homePageSamples.sort((s1, s2) => s1.rank - s2.rank);
</script>

<script lang="ts">
    import AutoCarousel from "$components/carousel/AutoCarousel.svelte";
    import Realisation from "$components/Realisation.svelte";
    import Showreel from "$components/Showreel.svelte";
</script>

<svelte:head>
    <title>Paul & Mathias</title>
    <meta name="keywords" content="Réalisation, Court-métrage, Pub, Clip, Fiction" />
    <meta
        name="description"
        content="Réalisateurs français de fictions, de clips et de films publicitaires. Notre vocation : créer de l’émotion."
    />
</svelte:head>

<div class="desktop">
    <Showreel />
    {#each allRealisations as realisation}
        <Realisation {realisation} />
    {/each}
</div>
<div class="mobile">
    <AutoCarousel samples={mobileSamples} fullscreen intervalDuration={2500} />
</div>

<style>
    .desktop {
        display: none;
    }


    .mobile {
        height: calc(100vh - var(--navbar-height));
    }

    @media (min-width: 1100px) {
        .desktop {
            display: block;
        }

        .mobile {
            display: none;
        }
    }
</style>