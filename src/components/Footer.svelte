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
</div>

<style>
  .container {
    margin: 2em 0;
    text-align: center;
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
</style>
