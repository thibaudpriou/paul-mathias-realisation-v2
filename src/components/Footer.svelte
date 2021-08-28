<script lang="ts">
  import Copyright from "./Copyright.svelte";
  import InstagramLogo from "./social/InstagramLogo.svelte";
  import MailLink from "./social/MailLink.svelte";
  import VimeoLogo from "./social/VimeoLogo.svelte";
</script>

<div class="container">
  <span><MailLink /></span>
  <span><Copyright /></span>
  <span class="social-link"><VimeoLogo /></span>
  <span class="social-link"><InstagramLogo /></span>
</div>

<style>
  .container {
    padding: 1.25em 0;
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

  .social-link {
    width: 1em;
    height: 1em;
    display: inline-flex;
    flex-shrink: 0;
  }
</style>
