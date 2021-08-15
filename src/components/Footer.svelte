<script lang="ts">
  let copyrightYear = new Date().getFullYear();
</script>

<div class="container">
  <!-- <div> -->
  <a class="mail-link" href="mailto:paulmathias.realisation@gmail.com"
    >paulmathias.realisation@gmail.com</a
  >
  <span class="copyright-container">©{copyrightYear}</span>
  <!-- </div> -->
  <a
    href="https://vimeo.com/user72935796"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
  >
    <img class="social-logo" src="imgs/logo.vimeo.png" alt="Logo Vimeo" />
  </a>
  <a
    href="https://www.instagram.com/paulmathias.realisation/"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
  >
    <img
      class="social-logo"
      src="imgs/logo.instagram.png"
      alt="Logo Instagram"
    />
  </a>
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
    position: relative;
    flex-shrink: 0;
  }

  .social-link:after {
    content: "";
    position: absolute;
    top: -0.25em;
    left: -0.25em;
    width: calc(100% + 0.5em);;
    height: calc(100% + 0.5em);;
  }

  .social-logo {
    width: 100%;
    height: 100%;
  }
</style>
