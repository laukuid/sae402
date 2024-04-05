<script setup>

</script>

<template>
  <main>
    <div class="top">
      <router-link class="retour" to="/mail"><img src="@/assets/flecheB.svg">
        <p>Boîtes</p></router-link>
      <p>Modifier</p></div>
    <h1>Réception</h1>
    <div id="content">

      <div class="content">
        <span></span>
        <router-link to="/mail1">
          <div class="intitule"><h3>Unity Asset Store</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Changement d'état de votre stage : Saisie autorisée...</h4>
          <p class="text">Bonjour pierre,  Nous avons bien reçu ta proposition de stage signé. tu peux
            maintenant ... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail2">
          <div class="intitule"><h3>Spotify</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Recommandations de concerts personnalisées près de chez vous : Luidji, Ninho et bien plus encore</h4>
          <p class="text">Découvez de nouveaux artistes près de chez vous...</p>
        </router-link>
        <span></span>
      </div>
      <div class="content">
        <span></span>
        <router-link to="/mail3">
          <div class="intitule"><h3>App Store</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">La Puzzle Week est de retour</h4>
          <p class="text">Bonjour, Des offres spéciales vous attendent dans ces jeux ... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail4">
          <div class="intitule"><h3>Linkedin</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Voici les meilleures recommandations pour votre fil d’actualité</h4>
          <p class="text">Ajoutez du contenu intéressant à votre fil d'actualité... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail5">
          <div class="intitule"><h3>Paypal</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">10 € de bons d'achat = plus de fun</h4>
          <p class="text">gagnez un bon d'achat de 10 € si un proche ouvre un compte PayPal et dépense 5 €... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail6">
          <div class="intitule"><h3>Metricool</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">-> Votre récapitulatif de Mars...</h4>
          <p class="text">Votre blog ou site Web n’est pas connecté à Metricool... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail7">
          <div class="intitule"><h3>Sony</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Notification de changement du mot de passe</h4>
          <p class="text">Ce message a été envoyé depuis une adresse ne gérant que les env... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail8">
          <div class="intitule"><h3>Brawl Stars</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Une nouvelle saison du Pass Brawl commence !</h4>
          <p class="text">Certains prétendent que le Ragnarok est la fin du monde... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail9">
          <div class="intitule"><h3>Linkedin</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Merci de compter parmi nos membres</h4>
          <p class="text">Pour vous remercier de compter parmi les membres de LinkedIn, nous aimerions... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">
        <span></span>
        <router-link to="/mail10">
          <div class="intitule"><h3>Vercel</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Vercel’s improved infrastructure pricing</h4>
          <p class="text">Hey there, We're updating our pricing structure based on feedback... </p>
        </router-link>
        <span></span>
      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
body {
  background-color: #F5F5F5;

  main {
    display: flex;
    flex-direction: column;
    padding: 35px 15px;
    height: calc(100vh - 70px);
    width: calc(430px - 30px);
    background-color: #F3F2F8;
    color: #181818;

    #content {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overflow-x: hidden;
      width: 100%;

      span {
        width: 95%;
        height: 1px;
        background: #bdbdbd;
      }
    }

    a {
      text-decoration: none;
      color: #181818;
      padding: 0;
      font-size: 21px;
    }

    h1 {
      margin-top: 25px;
      margin-bottom: 10px;
    }

    h2 {
      margin-left: 5px;
      margin-top: 20px;
      font-size: 19px;
      font-weight: 700;
      color: #181818;
    }

    .top {
      a {
        text-decoration: none;
        color: #007aff;
        padding: 0;
        font-size: 21px;
      }

      p {
        color: #007aff;
        font-size: 21px;
      }

      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }

      .retour {
        display: flex;
        align-items: center;

        img {
          width: 22px;
          height: 22px;
        }
      }
    }

    .content {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      padding-top: 10px;
      padding-left: 15px;

      span {
        width: 95%;
        height: 1px;
        background: #bdbdbd;
        overflow: visible !important;
      }

      .text {
        font-size: 15px;
        width: 95%;
        height: 30px;
        color: gray;

      }

      .object {

        font-size: 15px;
        font-weight: 500;
        color: #181818;

      }

      .intitule {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-size: 17px;
          font-weight: 700;
          color: #181818;
        }

        p {
          font-size: 17px;
          color: grey;

          img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }

  }

  span {
    width: 95%;
    height: 1px;
    background: #bdbdbd;
  }
}
</style>