<script lang="ts">
    import {assets} from "$app/paths";
    import {fade} from "svelte/transition";
    import CarouselControl from "./CarouselControl.svelte";
    import CarouselIndicator from "./CarouselIndicator.svelte";
    import type Sample from "../../types/sample";
    import {ImageRatio} from "../../types/realisation";

    // --- props
    export let imageRatio: ImageRatio = ImageRatio["16/9"];
    export let samples: Sample[];
    export let transitionDuration: number = 600;
    export let controls: boolean = true;
    export let indicators: boolean = true;
    export let fullscreen: boolean = false;

    // --- data
    let activeSlideIdx: number = 0;

    // --- reactive
    $: slides = samples
        .sort((s1, s2) => s1.rank - s2.rank)
        .map((s, idx) => ({...s, idx}))

    // --- methods
    export function goPrev() {
        let to = activeSlideIdx - 1;
        if (to < 0) to = slides.length - 1;
        goTo(to);
    }

    export function goNext() {
        let to = activeSlideIdx + 1;
        if (to > slides.length - 1) to = 0;
        goTo(to);
    }

    function goTo(index: number) {
        activeSlideIdx = index;
    }

    function customFadeIn(node: Element, {delay = 0, duration = 400}) {
        const o = +getComputedStyle(node).opacity;

        return {
            delay,
            duration,
            css: (t: number) => `
        opacity: ${t * o};
        z-index: 1;
      `,
        };
    }
</script>

<div
    class="slides-container"
    class:fullscreen
    class:ratio-16-9={imageRatio === ImageRatio["16/9"]}
    class:ratio-235-1={imageRatio === ImageRatio["2.35/1"]}
    class:ratio-238-1={imageRatio === ImageRatio["2.38/1"]}
    class:ratio-25-1={imageRatio === ImageRatio["2.5/1"]}
>
    {#each slides as slide}
        {#if slide.idx === activeSlideIdx}
            <picture
                class="slide"
                in:customFadeIn={{duration: transitionDuration}}
                out:fade={{delay: transitionDuration, duration: 0}}
                data-idx={slide.idx}
            >
                {#each slide.images as image}
                    <source srcset={`${assets}/${image.path}`} type={image.type}/>
                {/each}
                <img src={`${assets}/${slide.defaultImagePath}`} alt={slide.alt} />
            </picture>
        {/if}
    {/each}
</div>
{#if controls}
    <button class="control prev" on:click={goPrev} aria-label="image suivante">
        <span class="control-icon"><CarouselControl /></span></button
    >
    <button class="control next" on:click={goNext} aria-label="image précédente"
        ><span class="control-icon"><CarouselControl invert /></span></button
    >
{/if}
{#if indicators}
    <span class="indicators">
        {#each slides as _, idx}
            <button class="indicator" on:click={() => goTo(idx)} aria-label="voir image précise">
                <CarouselIndicator active={idx === activeSlideIdx} />
            </button>
        {/each}
    </span>
{/if}

<style>
    .control {
        position: absolute;
        top: 0;
        height: 100%;
        width: 10vw;
        background: none;
        border: none;
        fill: white;
        z-index: 1;
        cursor: pointer;
        padding: 0;
    }

    .control-icon {
        display: inline-block;
        width: 7.5%;
    }

    .control.prev {
        left: 0;
    }

    .control.next {
        right: 0;
    }

    .indicators {
        position: absolute;
        bottom: 2.5vw;
        width: 100%;
        z-index: 1;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }

    .indicator {
        cursor: pointer;
        margin: 0 3vw;
        width: 10vw;
        background: none;
        border: none;
        height: 0.45em;
        position: relative;
        display: inline-flex;
    }

    .indicator::after {
        content: "";
        position: absolute;
        top: -200%;
        left: -25%;
        width: 150%;
        height: 400%;
        z-index: -1;
    }

    .ratio-16-9 {
        --ratio-numerator: 16;
        --ratio-denominator: 9;
    }

    .ratio-235-1 {
        --ratio-numerator: 2.35;
        --ratio-denominator: 1;
    }

    .ratio-238-1 {
        --ratio-numerator: 2.38;
        --ratio-denominator: 1;
    }

    .ratio-25-1 {
        --ratio-numerator: 2.5;
        --ratio-denominator: 1;
    }

    .slides-container {
        width: 100%;
        height: calc(100vw * var(--ratio-denominator) / var(--ratio-numerator));
        position: relative;
        z-index: 0; /* stacking context creation for extra-safety */
    }

    .fullscreen {
        height: 100%;
    }

    .slide>* {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .slide {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1100px) {
        .slides-container {
            height: calc(100vw * var(--ratio-denominator) / var(--ratio-numerator));
        }

        .fullscreen {
            height: 100%;
        }
    }
</style>
