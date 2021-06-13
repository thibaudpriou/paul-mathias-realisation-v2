<svelte:head>
  <script defer preload src="http://cdn.dashjs.org/latest/dash.all.min.js" />
</svelte:head>

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

<style>
  .demo {
    min-width: 100%;
    display: block; /* to remove gap under element caused by line-breaks or whitespaces */
    height: 100vh;
    object-fit: cover;
  }
</style>
