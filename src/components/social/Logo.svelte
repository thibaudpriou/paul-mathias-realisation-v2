<script lang="ts">
    export let background: boolean = false;
    export let href: string;
    export let imgSrc: string;
    export let imgAlt: string;
    export let bgSrc: string;
    export let bgAlt: string;

  </script>
  
  <span class="container">
    <a
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <img class="social-logo" src={imgSrc} alt={imgAlt} />
    </a>
    {#if background}
      <img
        class="social-logo-bg"
        src={bgSrc}
        alt={bgAlt}
      />
    {/if}
  </span>
  
  <style>
    .container {
      position: relative;
      display: inline-flex;
    }
  
    .social-link:after {
      content: "";
      position: absolute;
      top: -0.25em;
      left: -0.25em;
      width: calc(100% + 0.5em);
      height: calc(100% + 0.5em);
    }
  
    .social-logo {
      width: 100%;
      height: 100%;
    }
  
    .social-logo-bg {
      position: absolute;
      top: -75%;
      left: -75%;
      width: 250%;
      height: 250%;
      z-index: -1;
    }
  </style>
  