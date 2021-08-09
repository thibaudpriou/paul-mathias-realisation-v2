<script lang="ts">
  let copyrightYear = new Date().getFullYear();
</script>

<section class="contact-content">
  <a class="mail-link" href="mailto:paulmathias.realisation@gmail.com"
    >paulmathias.realisation@gmail.com</a
  >
</section>
<span class="copyright-container">©{copyrightYear}</span>

<style>
  .mail-link {
    font-family: "SourceSansPro-Regular";
    color: black;
    width: 100%;
    -webkit-animation: fadein 1s ease 2s;
    -moz-animation: fadein 1s ease 2s;
    -ms-animation: fadein 1s ease 2s;
    -o-animation: fadein 1s ease 2s;
    animation: fadein 1s ease 2s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    font-weight: bold;
  }

  .contact-content {
    margin-top: 3em;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .copyright-container {
    width: 100%;
    text-align: center;
    font-family: "SourceSansPro-Semibold";
    margin-top: auto;
    padding-bottom: 2em;
    margin-top: 2em;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
</style>
