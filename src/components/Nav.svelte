<script lang="ts">
    import type ICategory from "../types/category";
    import IconHambuger from "./icons/IconHambuger.svelte";
    import NavLink from "./NavLink.svelte";
    import NavLinks from "./NavLinks.svelte";
    import InstagramLogo from "./social/InstagramLogo.svelte";
    import VimeoLogo from "./social/VimeoLogo.svelte";

    export let segment: string;
    export let blackVariant: boolean; // ! ignored for mobile version
    export let greyVariant: boolean;
    export let categories: ICategory[];

    let collapsed: boolean = false;

    function closeMenu() {
        collapsed = false;
    }
</script>

<nav class:black-variant={blackVariant} class:grey-variant={greyVariant} class:collapsed>
    <span class="main">
        <span class="logo-link">
            <NavLink logo isAriaCurrent={segment === "/"} href="/" {blackVariant} on:nav-link={closeMenu}>
                <span class="navbar-brand">Paul <span class="fine-text">X</span> Mathias</span>
            </NavLink>
        </span>
        <span class="directors">Directors</span>

        <button class="collapser" on:click={() => (collapsed = !collapsed)} aria-label="afficher menu">
            <IconHambuger />
        </button>
    </span>

    <span class="links">
        <NavLinks {categories} {segment} {blackVariant} on:nav-link={closeMenu} />
        <div class="social-links">
            <span class="social-link"><VimeoLogo background /></span>
            <span class="social-link"><InstagramLogo background /></span>
        </div>
    </span>
</nav>
<span class="overlay" on:click={closeMenu} on:keypress={closeMenu} />

<style>
    nav {
        font-weight: 300;
        padding: 0 calc(var(--wpadding-text) / 2 - 1.25em); /* to "center" hamburger icon in mobile */
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255);
        box-sizing: border-box;

        transition: background-color 0.5s;
    }

    .grey-variant {
        background-color: #ECECEC;
    }

    .main {
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: var(--navbar-height);
        background-color: inherit;
    }

    .navbar-brand {
        font-family: "SourceSansPro-LightIt";
        display: inline-block;
        font-size: 1.25em;
        white-space: nowrap;
        user-select: none;
        text-transform: none;
    }

    .directors {
        margin-left: 1em;
        padding: 0 1.5em;
        font-family: "SourceSansPro-Regular";
        font-weight: lighter;
        border-left: solid 1px black;
    }

    .navbar-brand .fine-text {
        font-family: "SourceSansPro-ExtraLight";
        font-size: 65%;
    }

    .collapser {
        width: 1.5em;
        height: 1.5em;
        box-sizing: content-box;
        margin-left: auto;

        background: none;
        cursor: pointer;
        padding: 0.25em 0.75em;
        border: none;
        position: relative;
    }

    .collapser::after {
        content: "";
        position: absolute;
        top: -0.5em;
        left: -0.5em;
        width: calc(100% + 1em);
        height: calc(100% + 1em);
    }

    .links {
        /* display: none; */
        flex-grow: 1;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        height: 0;
        padding: 0;
        transition: opacity 0s;
        transform: translateY(-100vh); /* so that it doesn't invisibly sit on top of realisations */
    }

    .logo-link {
        margin-left: auto;
    }

    .collapsed .links {
        opacity: 1;
        height: auto;
        padding: 1em 0 1.5em 0;
        transition: opacity 0.5s;
        transform: none;
    }

    .overlay {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        background-color: black;
        opacity: 0.7;
    }

    .collapsed + .overlay {
        display: block;
    }

    .social-links {
        display: flex;
        justify-content: center;
        margin-top: 1em;
    }

    .social-link {
        width: 1.5em;
        height: 1.5em;
        display: inline-flex;
        margin-left: 1em;
        z-index: 0; /* to create stacking context */
    }

    .social-link:first-child {
        margin-left: 0;
    }

    @media (min-width: 1100px) {
        nav {
            flex-direction: row;
            background-color: rgba(255, 255, 255);
            padding: 0 2.5em;
        }

        .main {
            background: none;
        }

        .black-variant {
            /* only for desktop */
            color: white;
            fill: white;
            stroke: white;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .black-variant .directors {
            /* only for desktop */
            border-color: white;
        }

        .black-variant .collapser {
            /* only for desktop */
            border-color: white;
        }

        .collapser {
            display: none;
        }

        .links {
            display: flex;
            justify-content: flex-end;
            flex-direction: row;
            padding: 0;
            opacity: 1;
            height: auto;
            transform: none;
        }

        .logo-link {
            margin-left: 0;
        }

        .social-links {
            display: none;
        }
    }
</style>
