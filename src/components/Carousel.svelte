<script lang="ts">
  import { fade } from "svelte/transition";
  import CarouselControl from "./CarouselControl.svelte";
  import CarouselIndicator from "./CarouselIndicator.svelte";
  import type IRealisation from "../types/realisation";

  // --- props
  export let samples: IRealisation["samples"];
  export let transitionDuration: number = 600;

  // ! remove embla-carousel from package.json

  // --- data
  let activeSlideIdx: number = 0;

  // --- reactive
  $: slides = samples
    .sort((s1, s2) => s1.rank - s2.rank)
    .map((s, idx) => {
      const attrs = getSampleImgAttributes(s);
      return { ...s, src: attrs.src, srcset: attrs.srcset, idx };
    });

  // --- methods
  interface ImgAttributes {
    src: string;
    srcset: string;
  }

  function getSampleImgAttributes(
    sample: IRealisation["samples"][0]
  ): ImgAttributes {
    return {
      src: sample.defaultImagePath,
      srcset: sample.images.map((i) => `${i.path} ${i.breakpoint}`).join(","),
    };
  }

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

  function customFadeIn(node, { delay = 0, duration = 400 }) {
    const o = +getComputedStyle(node).opacity;

    return {
      delay,
      duration,
      css: (t) => `
        opacity: ${t * o};
        z-index: 1;
      `,
    };
  }
</script>

<div class="slides-container">
  {#each slides as slide}
    {#if slide.idx === activeSlideIdx}
      <img
        in:customFadeIn={{ duration: transitionDuration }}
        out:fade={{ delay: transitionDuration, duration: 0 }}
        class="slide"
        src={slide.src}
        srcset={slide.srcset}
        alt={slide.alt}
      />
    {/if}
  {/each}
</div>
<button class="control prev" on:click={goPrev}>
  <span class="control-icon"><CarouselControl /></span></button
>
<button class="control next" on:click={goNext}
  ><span class="control-icon"><CarouselControl invert /></span></button
>
<span class="indicators">
  {#each slides as _, idx}
    <button class="indicator" on:click={() => goTo(idx)}>
      <CarouselIndicator active={idx === activeSlideIdx} />
    </button>
  {/each}
</span>

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
    width: 15%;
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

  .slides-container {
    width: 100%;
    height: min(calc(100vh - var(--navbar-height)), 100vw * 9 / 16);
    position: relative;
    z-index: 0; /* stacking context creation for extra-safety */
  }

  .slide {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  @media (min-width: 1100px) {
    .slides-container {
      height: min(100vh, 100vw * 9 / 16);
    }
  }
</style>
