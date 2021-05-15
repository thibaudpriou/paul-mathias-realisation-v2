
<!-- // TODO stream video -->
<video
  class="demo"
  loop
  muted
  autoplay
  preload="metadata"
  poster="imgs/demo_poster.jpeg"
>
  <source
    src="video/demo_v4.mp4"
    type="video/mp4"
  />
  <!-- WEBM file is 50.8MB -->
  <!-- <source src="video/demo_v4.webm" type="video/webm"> -->
  <!-- MOV file is 95.9MB -->
  <!-- <source src="video/demo_v4.mov" type="video/quicktime"> -->
  <!-- MP4 file is 99.0MB -->
  <source src="video/demo_v4.mp4" type="video/mp4" />
  <!-- OGV file is 39.7MB but it doesn't loop nicely : som black frame can be seen -->
  <!-- <source src="video/demo_v4.ogv" type="video/ogg"> -->
  Votre navigateur ne supporte pas la lecture vidéo HTML5.
</video>

<style>
  .demo {
    width: 100%;
  }
</style>