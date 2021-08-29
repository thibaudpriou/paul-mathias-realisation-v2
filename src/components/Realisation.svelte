<script lang="ts">
  import { onMount } from "svelte";
  import swipeDetect from "../lib/swipe-detect";
  import type IRealisation from "../types/realisation";
  import Carousel from "./Carousel.svelte";

  // --- props
  export let realisation: IRealisation;

  // --- data
  let container: HTMLElement;
  let carousel: Carousel;
  const THRESHOLD_FOR_SWIPE = 50;

  function onSwipe(dir: "left" | "right" | "up" | "down") {
    if (dir === 'right') {
      return carousel.goPrev()
    }
    if (dir === 'left') {
      return carousel.goNext()
    }
  }

  onMount(() => {
    if (!container) return;
    swipeDetect(container, onSwipe, THRESHOLD_FOR_SWIPE);
  });
</script>

<section class="container" bind:this={container}>
  <div class="description">
    <h2 class="title">{realisation.title}</h2>
    <span class="subtitle">{realisation.type}</span>
    <a
      class="seeVideoLink"
      href={realisation.videoUrl}
      rel="noopener noreferer"
      target="_blank"
      title="Ouvrir la vidéo dans un nouvel onglet">Voir</a
    >
  </div>
  <Carousel samples={realisation.samples} bind:this={carousel} />
</section>

<style>
  .container {
    position: relative;
    font-family: "SourceSansPro-BlackIt";
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
    font-size: clamp(0.3em, 1.25vw, 1em);
  }

  .description > * {
    margin-top: 0.5em;
  }

  .description > *:first-child {
    margin-top: 0;
  }

  .title {
    font-size: 3em;
    text-align: center;
    font-weight: 700;
    font-style: italic;
    margin: 0;
  }

  .subtitle {
    font-size: 1.5em;
  }

  .seeVideoLink {
    text-decoration: none;
    font-size: 1.5em;
    padding: 0 1.5rem 0 1.5rem;
    border: 1px solid #fff;
    font-style: italic;
    box-sizing: border-box;
    margin-top: 1em;
  }

  .seeVideoLink:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.5);
  }
</style>
