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
          <div class="intitule"><h3>Intranet IUT de Troyes</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">Changement d'état de votre stage : Saisie autorisée...</h4>
          <p class="text">Bonjour pierre,  Nous avons bien reçu ta proposition de stage signé. tu peux
            maintenant ... </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
        </router-link>
        <span></span>
      </div>
      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
          <span></span>
        </router-link>
      </div>
      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
          <span></span>
        </router-link>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
          </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
        </router-link>
        <span></span>
      </div>

      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
        </router-link>
        <span></span>
      </div>
      <div class="content">

        <router-link to="/notesIndice">
          <div class="intitule"><h3>nom comptenu</h3>
            <p>10:16 <img src="@/assets/flecheG.svg"></p></div>
          <h4 class="object">object</h4>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi dolor eos error maxime
            rerum
            sunt! </p>
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