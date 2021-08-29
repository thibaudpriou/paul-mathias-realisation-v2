<script>
  export let invert = false;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="auto"
  class:invert
  viewBox="0 0 45 200"
  fill="inehrit"
  stroke="none"
  ><path
    d="M38.846 0L.053 99.818l-.055.048 40.16 98.752 4.886-4.251L6.593 99.819 43.785 4.113 38.843.003z"
  /></svg
>

<style>
  svg {
    opacity: 0.6;
  }

  .invert {
    transform: rotateZ(180deg);
  }
</style>
