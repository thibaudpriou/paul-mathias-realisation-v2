<script>
  export let active;
</script>

<span class="carousel-indicator carousel-indicator-dash" class:active />
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="carousel-indicator carousel-indicator-dot"
  width="100%"
  height="100%"
  class:active
  viewBox="0 0 10 10"
  fill="inehrit"
  stroke="none"
>
  <circle r="5" cx="5" cy="5" />
</svg>

<style>
  .carousel-indicator {
    background-color: #aaa;
    fill: #aaa;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    display: block;
  }

  .active {
    opacity: 0.8;
    background-color: #fff;
    fill: #fff;
  }

  .carousel-indicator-dot {
    width: 200%;
    height: 200%;
  }

  .carousel-indicator-dash {
    display: none;
  }
  .carousel-indicator-dot {
    background: none;
    display: block;
  }

  @media (min-width: 800px) {
    .carousel-indicator-dash {
      display: block;
    }
    .carousel-indicator-dot {
      display: none;
    }
  }
</style>
