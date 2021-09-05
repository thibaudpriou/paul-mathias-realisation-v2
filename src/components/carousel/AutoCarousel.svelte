<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import type Sample from "../../types/sample";
    import {ImageRatio} from "../../types/realisation";
    import Carousel from "./Carousel.svelte";

    export let samples: Sample[];
    export let transitionDuration: number = 600;
    export let intervalDuration: number = 2000;
    export let imageRatio: ImageRatio = ImageRatio["16/9"];
    export let fullscreen: boolean = false;

    let carousel: Carousel | undefined;
    let intervalID: NodeJS.Timeout | undefined;

    onMount(() => {
        if (!carousel) return;
        intervalID = setInterval(carousel.goNext, intervalDuration);
    });

    onDestroy(() => {
        if (!intervalID) return;
        clearInterval(intervalID);
    });
</script>

<Carousel controls={false} indicators={false} {samples} {transitionDuration} {imageRatio} {fullscreen} bind:this={carousel} />
