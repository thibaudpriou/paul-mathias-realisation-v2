<script lang="ts">
    import Copyright from "./Copyright.svelte";
    import InstagramLogo from "./social/InstagramLogo.svelte";
    import MailLink from "./social/MailLink.svelte";
    import VimeoLogo from "./social/VimeoLogo.svelte";
</script>

<div class="container">
    <span><MailLink /></span>
    <span class="social-links">
        <span class="social-link"><VimeoLogo background /></span>
        <span class="social-link"><InstagramLogo background /></span>
    </span>
    <span><Copyright /></span>
</div>

<style>
    .container {
        padding: 1.25em 0;
        font-size: clamp(0.5em, 1.25vw, 1em);
        display: inline-flex;
        align-items: center;
        flex-direction: column;
    }

    .container > * {
        margin-top: 1em;
    }

    .container > *:first-child {
        margin-top: 0;
    }

    .social-links {
        display: inline-flex;
    }

    .social-links > * {
        margin-left: 1em;
    }

    .social-links > *:first-child {
        margin-left: 0;
    }

    .social-link {
        width: 1.5em;
        height: 1.5em;
        display: inline-flex;
        flex-shrink: 0;
    }
</style>
