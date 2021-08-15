<script lang="ts">
  import InstagramLogo from "./social/InstagramLogo.svelte";
  import VimeoLogo from "./social/VimeoLogo.svelte";

  let copyrightYear = new Date().getFullYear();
</script>

<div class="container">
  <!-- <div> -->
  <a class="mail-link" href="mailto:paulmathias.realisation@gmail.com"
    >paulmathias.realisation@gmail.com</a
  >
  <span class="copyright-container">©{copyrightYear}</span>
  <!-- </div> -->
  <span class="social-link"><VimeoLogo /></span>
  <span class="social-link"><InstagramLogo /></span>
</div>

<style>
  .container {
    margin: 1.25em 0;
    font-size: clamp(0.5em, 1.25vw, 1em);
    display: inline-flex;
    align-items: center;
  }

  .container > * {
    margin-left: 1em;
  }

  .container > *:first-child {
    margin-left: 0;
  }

  .mail-link {
    font-family: "SourceSansPro-Regular";
    width: 100%;
    font-weight: bold;
  }

  .copyright-container {
    width: 100%;
    text-align: center;
    font-family: "SourceSansPro-Semibold";
  }

  .social-link {
    width: 1em;
    height: 1em;
    display: inline-flex;
    flex-shrink: 0;
  }
</style>
