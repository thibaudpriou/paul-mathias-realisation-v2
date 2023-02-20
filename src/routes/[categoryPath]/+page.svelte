<script lang="ts">
    import Realisation from "$components/Realisation.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
    $: category = data.category
</script>

<svelte:head>
    <title>Paul & Mathias - {category.title}</title>
    <meta name="keywords" content="Audiovisuel, Réalisation, {category.title}" />
</svelte:head>

<ul class="container-realisation">
    {#each category.realisations as realisation}
        <li class="fucking-subpixels">
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

    .fucking-subpixels {
        background-color: black;
    }
</style>
