<script lang="ts">
  import type IRealisation from "../types/realisation";
  import Carousel from "./Carousel.svelte";

  export let realisation: IRealisation;
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
  <Carousel samples={realisation.samples}/>
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
    font-size: clamp(.5em, 1.25vw, 1em);
  }
  
  .description > * {
    margin-top: .5em;
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
