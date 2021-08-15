<script lang="ts">
  import VimeoLogo from "../components/social/VimeoLogo.svelte";
  import InstagramLogo from "../components/social/InstagramLogo.svelte";

  const FOUNDING_YEAR = 2016;

  let foundingAge: number = new Date().getFullYear() - FOUNDING_YEAR;
</script>

<svelte:head>
  <title>Paul & Mathias - À Propos</title>
  <meta
    name="keywords"
    content="Audiovisuel, Expérience, Réaliser, Univers atypiques, Créer de l'émotion, Contact"
  />
  <meta
    name="description"
    content="Découvrir Paul & Mathias, deux réalisateurs français passionnés. Nous contacter."
  />
</svelte:head>

<div class="container">
  <section class="about-content">
    <div class="images-container">
      <div class="images-subcontainer-left">
        <img
          class="img"
          src="imgs/about-1.jpg"
          alt="Paul et Mathias sur le tournage de l'Horloger"
        />
      </div>
      <div class="images-subcontainer-right">
        <img
          class="img"
          src="imgs/about-2.jpg"
          alt="Paul et Mathias sur le tournage de Et c'était le monde"
        />
        <img
          class="img"
          src="imgs/about-3.jpg"
          alt="Paul et Mathias sur le tournage de Et c'était le monde"
        />
      </div>
    </div>
    <div class="about-text-container">
      <hr class="hr-sizein" />
      <p class="about-text">
        Rencontrés durant nos études, cela fait un peu
        <strong>plus de {foundingAge} ans</strong> que Paul Gojecki et Mathias
        Priou réalisent ensemble divers projets audiovisuels. Motivés par les
        mêmes références, ils aiment créer des
        <strong>univers atypiques</strong>
        dans lesquels évoluent des personnages
        <strong>hauts en couleur</strong>. Leur passion pour la technique les
        amène à s'intéresser à
        <strong>des méthodes de réalisation dans l'air du temps</strong>. Ils
        mettent leur expérience et leurs compétences en exergue afin d’atteindre
        leur objectif principal&nbsp;:
        <strong>créer de l’émotion</strong> dans le cœur des spectateurs.
      </p>
    </div>
  </section>
  <hr class="hr-sizein hr-full" />
  <!-- <VimeoLogo background /> -->
  <InstagramLogo background />
</div>

<style>
  .container {
    padding: 10%;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    box-sizing: border-box;
  }

  .about-content {
    display: flex;
    font-family: SourceSansPro-Regular;
  }

  .images-container {
    display: flex;
    min-width: 40%;

    -webkit-animation: fadein 1s ease;
    -moz-animation: fadein 1s ease;
    -ms-animation: fadein 1s ease;
    -o-animation: fadein 1s ease;
    animation: fadein 1s ease;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .images-subcontainer-left {
    flex-basis: 132%;
  }

  .images-subcontainer-right {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    flex-basis: 100%;
  }

  .images-subcontainer-right > *:last-child {
    margin-top: 5px;
  }

  .about-text-container {
    margin-left: 2em;
  }

  .about-text {
    font-size: 1.2em;
    line-height: 1.7;
    text-align: justify;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    margin-top: 1em;

    -webkit-animation: fadein 0.5s ease 1s;
    -moz-animation: fadein 0.5s ease 1s;
    -ms-animation: fadein 0.5s ease 1s;
    -o-animation: fadein 0.5s ease 1s;
    animation: fadein 0.5s ease 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .about-text strong {
    color: rgba(0, 0, 0, 1);
  }

  .img {
    width: 100%;
  }

  .hr-sizein {
    -webkit-animation: sizein 1s ease 0.5s;
    -moz-animation: sizein 1s ease 0.5s;
    -ms-animation: sizein 1s ease 0.5s;
    -o-animation: sizein 1s ease 0.5s;
    animation: sizein 1s ease 0.5s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    margin: 0;
  }

  .hr-full {
    margin-top: 1em;
    animation-delay: 1.5s;
  }

  @keyframes sizein {
    from {
      width: 0.01%;
    }
    to {
      width: 100%;
    }
  }

  @-moz-keyframes sizein {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @-webkit-keyframes sizein {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @-ms-keyframes sizein {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @-o-keyframes sizein {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
</style>
