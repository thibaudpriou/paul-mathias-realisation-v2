<script context="module" lang="ts">
  import categories from '../config';
</script>

<script lang="ts">
  import Footer from "../components/Footer.svelte";
import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<header class="navbar-container">
  <Nav {segment} {categories} />
</header>
<main>
  <slot />
</main>
<footer>
  <Footer/>
</footer>

<style>
  main {
    position: relative;
    box-sizing: border-box;
    z-index: 0;
    width: 100%;
  }

  .navbar-container {
    position: fixed;
    top: 0px;
    z-index:1;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    width: 100%;


    -webkit-animation: slidedown 1s ease 1s;
    -moz-animation: slidedown 1s ease 1s;
    -ms-animation: slidedown 1s ease 1s;
    -o-animation: slidedown 1s ease 1s;
    animation: slidedown 1s ease 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  footer {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  @keyframes slidedown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0); 
    }
  }

  @-moz-keyframes slidedown {
    from {
      transform: translateY(-100%); 
    }
    to {
      transform: translateY(0); 
    }
  }

  @-webkit-keyframes slidedown {
    from {
      transform: translateY(-100%); 
    }
    to {
      transform: translateY(0); 
    }
  }

  @-ms-keyframes slidedown {
    from {
      transform: translateY(-100%); 
    }
    to {
      transform: translateY(0); 
    }
  }

  @-o-keyframes slidedown {
    from {
      transform: translateY(-100%); 
    }
    to {
      transform: translateY(0); 
    }
  }
</style>
