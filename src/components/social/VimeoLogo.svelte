<script lang="ts">
    import Logo from "./Logo.svelte";

    export let background: boolean = false;

    const href = "https://vimeo.com/user72935796";
    const imgSrc = "imgs/logo.vimeo.png";
    const imgAlt = "Logo Vimeo";
    const bgSrc = "imgs/logo-bg.vimeo.png";
    const bgAlt = "Fond pour logo Vimeo";
</script>

<Logo {href} {imgSrc} {imgAlt} {bgSrc} {bgAlt} {background} />
