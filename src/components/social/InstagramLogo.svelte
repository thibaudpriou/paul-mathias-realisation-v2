<script lang="ts">
  import Logo from "./Logo.svelte";

  export let background: boolean = false;

  const href = "https://www.instagram.com/paulmathias.realisation/";
  const imgSrc = "/imgs/logo.instagram.png";
  const imgAlt = "Logo Instagram";
  const bgSrc = "/imgs/logo-bg.instagram.png";
  const bgAlt = "Fond pour logo Instagram";
</script>

<Logo {href} {imgSrc} {imgAlt} {bgSrc} {bgAlt} {background} />
