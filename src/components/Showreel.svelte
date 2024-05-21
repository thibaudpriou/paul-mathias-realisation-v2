<script lang="ts">
    import {assets} from "$app/paths";
    let container: HTMLElement;

    function scrollPastShowreel() {
        if (!container) return;
        window.scrollTo({left: 0, top: container.offsetHeight, behavior: "smooth"});
    }
</script>

<div class="container" bind:this={container} id="showreel">
    <!-- TODO fix video url -->
    <video autoplay class="demo" loop muted preload="metadata" poster={`${assets}/imgs/demo_poster_2023.jpg`}>
        <!-- MP4 file is 80MB -->
        <source src={`${assets}/videos/demo_20244.mp4`} type="video/mp4" />
        <!-- WEBM file is 81MB -->
        <source src={`${assets}/videos/demo_2024.webm`} type="video/webm" />
        <!-- MOV file is 871MB + colors are poorly rendered -->
        <source src={`${assets}/videos/demo_2024.mov`} type="video/quicktime" />
        Votre navigateur ne supporte pas la lecture vidéo HTML5.
        <!-- tl;dr: your browser is utter shit -->
    </video>

    <div class="scroll-me-container">
        <button on:click={scrollPastShowreel} class="scroll-me" aria-label="voir réalisations">
            <p class="scroll-me-text">Faire défiler</p>
            <svg
                class="chevron-down-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 93 54"
            >
                <rect
                    transform="translate(-51.93199 -23.282294)translate(-1.8708867 -9.3544335)rotate(-45)"
                    y="121.6"
                    x="9.7"
                    height="10.6"
                    width="65.8"
                />
                <rect
                    transform="translate(-51.93199 -23.282294)translate(-1.8708867 -9.3544335)rotate(-135)"
                    y="9.7"
                    x="-132.2"
                    height="10.6"
                    width="65.8"
                />
            </svg>
        </button>
    </div>
</div>

<style>
    .container {
        position: relative;
        font-family: "SourceSansPro-BlackIt";
        display: none;
    }

    @media (min-width: 600px) {
        .container {
            display: flex;
        }
    }

    .demo {
        min-width: 100%;
        display: block; /* to remove gap under element caused by line-breaks or whitespaces */
        height: 100vh;
        object-fit: cover;
    }

    .scroll-me-container {
        position: absolute;
        bottom: 0.5em;

        display: flex;
        justify-content: center;
        width: 100%;

        opacity: 0.6;
        color: white;
        fill: white;
        stroke: white;
        text-transform: uppercase;
    }

    button.scroll-me {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        text-transform: inherit;
        position: relative;
    }

    button.scroll-me:after {
        content: "";
        position: absolute;
        top: -1em;
        left: -1em;
        width: calc(100% + 2em);
        height: calc(100% + 2em);
    }

    .scroll-me-text {
        padding: 0;
        margin: 0;
    }

    .chevron-down-icon {
        margin-top: 0.25em;
        width: 1em;
        height: 1em;
        fill: #fff;
    }
</style>
