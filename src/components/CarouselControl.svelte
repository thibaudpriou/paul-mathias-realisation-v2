<script>
  export let invert = false;
</script>

<style>
    svg {
        width: 1em;
        height: auto;
        opacity: 0.6;
    }

    .invert {
        transform: rotateZ(180deg);
    }
</style>

<svg
  width="100%"
  height="100%"
  class:invert
  viewBox="0 0 45 200"
  xmlns="http://www.w3.org/2000/svg"
  fill="inehrit"
  stroke="none"
  ><path
    d="M38.846 0L.053 99.818l-.055.048 40.16 98.752 4.886-4.251L6.593 99.819 43.785 4.113 38.843.003z"
  /></svg
>