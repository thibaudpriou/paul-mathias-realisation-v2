<script lang="ts">
  let container: HTMLElement;

  function scrollPastShowreel() {
    if (!container) return;
    window.scrollTo({ left: 0, top: container.offsetHeight, behavior: "smooth" });
  }
</script>

<svelte:head>
  <script
    defer
    preload
    src="http://cdn.dashjs.org/latest/dash.all.min.js"></script>
</svelte:head>

<div class="container" bind:this={container} id="showreel">
  <!-- TODO fix video url -->
  <video
    data-dashjs-player
    src="https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
    autoplay
    class="demo"
    loop
    muted
    preload="metadata"
    poster="imgs/demo_poster.jpeg"
  >
    <!-- Fallback: Dash video not supported -->
    <!-- WEBM file is 50.8MB -->
    <source src="video/demo_v4.webm" type="video/webm" />
    <!-- MOV file is 95.9MB -->
    <source src="video/demo_v4.mov" type="video/quicktime" />
    <!-- MP4 file is 99.0MB -->
    <source src="video/demo_v4.mp4" type="video/mp4" />
    <!-- OGV file is 39.7MB but it doesn't loop nicely: some black frame can be seen -->
    <source src="video/demo_v4.ogv" type="video/ogg" />
    Votre navigateur ne supporte pas la lecture vidéo HTML5.
    <!-- tl;dr: your browser is utter shit -->
  </video>

  <div class="scroll-me-container">
    <button on:click={scrollPastShowreel} class="scroll-me" aria-label="voir réalisations">
      <p class="scroll-me-text">Faire défiler</p>
      <svg
        class="chevron-down-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 93 54"
      >
        <rect
          transform="translate(-51.93199 -23.282294)translate(-1.8708867 -9.3544335)rotate(-45)"
          y="121.6"
          x="9.7"
          height="10.6"
          width="65.8"
        />
        <rect
          transform="translate(-51.93199 -23.282294)translate(-1.8708867 -9.3544335)rotate(-135)"
          y="9.7"
          x="-132.2"
          height="10.6"
          width="65.8"
        />
      </svg>
    </button>
  </div>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    font-family: "SourceSansPro-BlackIt";
  }

  .demo {
    min-width: 100%;
    display: block; /* to remove gap under element caused by line-breaks or whitespaces */
    height: 100vh;
    object-fit: cover;
  }

  .scroll-me-container {
    position: absolute;
    bottom: 0.5em;

    display: flex;
    justify-content: center;
    width: 100%;

    opacity: 0.6;
    color: white;
    fill: white;
    stroke: white;
    text-transform: uppercase;
  }

  button.scroll-me {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-transform: inherit;
    position: relative;
  }

  button.scroll-me:after {
    content: "";
    position: absolute;
    top: -1em;
    left: -1em;
    width: calc(100% + 2em);
    height: calc(100% + 2em);
  }

  .scroll-me-text {
    padding: 0;
    margin: 0;
  }

  .chevron-down-icon {
    margin-top: 0.25em;
    width: 1em;
    height: 1em;
    fill: #fff;
  }
</style>
