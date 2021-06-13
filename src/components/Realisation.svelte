<script lang="ts">
  import EmblaCarousel from "embla-carousel";
  import { onMount } from "svelte";

  import type IRealisation from "../types/realisation";
  import CarouselControl from "./CarouselControl.svelte";
  import CarouselIndicator from "./CarouselIndicator.svelte";

  export let realisation: IRealisation;

  $: samples = realisation.samples
    .sort((s1, s2) => s1.rank - s2.rank)
    .map((s) => {
      const attrs = getSampleImgAttributes(s);
      return { ...s, src: attrs.src, srcset: attrs.srcset };
    });

  function getSampleImgAttributes(sample: IRealisation["samples"][0]): {
    src: string;
    srcset: string;
  } {
    return {
      src: sample.defaultImagePath,
      srcset: sample.images.map((i) => `${i.path} ${i.breakpoint}`).join(","),
    };
  }

  let emblaNode;
  let embla;
  let canScrollPrev: boolean = false;
  let canScrollNext: boolean = false;
  let activeSampleIdx: number = 0;

  onMount(() => {
    const options = { loop: false, speed: 8 };
    embla = EmblaCarousel(emblaNode as HTMLElement, options);
    embla.on("init", updateControls);
    embla.on("select", updateControls);

    // lazy-loading of hidden images
    setTimeout(() => {
      for (const img of emblaNode.querySelectorAll('.lazy-loaded') as HTMLElement[]) {
       img.setAttribute('src', img.getAttribute('data-src'))
       img.setAttribute('srcset', img.getAttribute('data-srcset'))
      }
    }, 1000)
  });

  function scrollPrev() {
    embla.scrollPrev();
  }

  function scrollNext() {
    embla.scrollNext();
  }

  function updateControls() {
    activeSampleIdx = embla.selectedScrollSnap();
    canScrollPrev = activeSampleIdx > 0;
    canScrollNext = activeSampleIdx < samples.length - 1;
  }

  function scrollTo(index: number) {
    embla.scrollTo(index);
  }
</script>

<section class="container">
  <div class="description">
    <h2 class="title">{realisation.title}</h2>
    <span class="subtitle">{realisation.type}</span>
    <a
      class="seeVideoLink"
      href={realisation.videoUrl}
      rel="noopener noreferer"
      target="_blank">Voir</a
    >
  </div>
  <div class="embla" bind:this={emblaNode}>
    <div class="embla__container">
      {#each samples as sample, i}
        <div class="embla__slide">
          <!-- hidden carousel images's loading is deferred (custom JS coupled w/ native lazy-loading) -->
          <img
            class="img"
            class:lazy-loaded={i !== 0}
            src={i === 0 ? sample.src : ""}
            srcset={i === 0 ? sample.srcset : ""}
            data-src={sample.src}
            data-srcset={sample.srcset}
            loading="lazy"
            alt={sample.alt}
          />
        </div>
      {/each}
    </div>
  </div>
  {#if canScrollPrev}
    <button class="control prev" on:click={scrollPrev}
      ><CarouselControl /></button
    >
  {/if}
  {#if canScrollNext}
    <button class="control next" on:click={scrollNext}
      ><CarouselControl invert /></button
    >
  {/if}
  <span class="indicators">
    {#each samples as _, i}
      <button class="indicator" on:click={() => scrollTo(i)}>
        <CarouselIndicator active={i === activeSampleIdx} />
      </button>
    {/each}
  </span>
</section>

<style>
  .container {
    position: relative;
    font-family: 'SourceSansPro-BlackIt';
    max-height: 100vh;
    overflow: hidden;
  }

  .description {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0.9;
  }
  
  .description > * {
    margin-top: .5em;
  }

  .description > *:first-child {
    margin-top: 0;
  }

  .title {
    font-size: 3vw;
    text-align: center;
    font-weight: 700;
    font-style: italic;
    margin: 0;
  }

  .subtitle {
    font-size: 1.5vw;
  }

  .seeVideoLink {
    text-decoration: none;
    font-size: 1.5vw;
    padding: 0 1.5em 0 1.5em;
    border: 1px solid #fff;
    font-style: italic;
    box-sizing: border-box;
    margin-top: 1em;
  }

  .seeVideoLink:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.5);
  }

  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    font-size: 0; /* to remove gap under element caused by line-breaks or whitespaces */
  }

  .img {
    max-width: 100%;
  }

  .control {
    position: absolute;
    top: 0;
    height: 100%;
    width: 3em;
    background: none;
    border: none;
    fill: white;
    z-index: 1;
    padding: 0 4em;
    cursor: pointer;
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
  }

  .indicator::after {
    content: "";
    position: absolute;
    top: calc(50% - 1.5em);
    left: -1em;
    width: 10em;
    height: 3em;
    z-index: -1;
  }
</style>
