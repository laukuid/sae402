<script setup>

import {RouterLink} from "vue-router";

</script>

<template>

  <div class="Home">

    <RouterLink to="/erreurReseau">
      <img src="../assets/facetime.svg" alt="">
      <p>FaceTime</p>
    </RouterLink>

    <RouterLink to="/erreurCrash">
      <img src="../assets/calendar.svg" alt="">
      <p>Calendrier</p>
    </RouterLink>

    <RouterLink to="/gallery">
      <img src="../assets/photos.svg" alt="">
      <p>Photos</p>
    </RouterLink>

    <RouterLink to="/camera">
      <img src="../assets/camera.svg" alt="">
      <p>Caméra</p>
    </RouterLink>

    <RouterLink to="/mail">
      <img src="../assets/mail.svg" alt="">
      <p>Mail</p>
    </RouterLink>

    <RouterLink to="/erreurCrash">
      <img src="../assets/clock.svg" alt="">
      <p>Horloge</p>
    </RouterLink>

    <RouterLink to="/erreurGPS">
      <img src="../assets/maps.svg" alt="">
      <p>Maps</p>
    </RouterLink>

    <RouterLink to="/erreurReseau">
      <img src="../assets/meteo.svg" alt="">
      <p>Météo</p>
    </RouterLink>

    <RouterLink to="/notes">
      <img src="../assets/note.svg" alt="">
      <p>Notes</p>
    </RouterLink>

    <RouterLink to="/erreurReseau">
      <img src="../assets/news.svg" alt="">
      <p>News</p>
    </RouterLink>

    <RouterLink to="/bible">
      <img src="../assets/bible.png" alt="">
      <p>Bible</p>
    </RouterLink>

    <RouterLink to="/erreurReseau">
      <img src="../assets/appstore.svg" alt="">
      <p>App Store</p>
    </RouterLink>

    <RouterLink to="/erreurReseau">
      <img src="../assets/tv.svg" alt="">
      <p>TV</p>
    </RouterLink>

    <RouterLink to="/erreurCrash">
      <img src="../assets/health.svg" alt="">
      <p>Health</p>
    </RouterLink>

    <RouterLink to="/erreurReseau">
      <img src="../assets/wallet.svg" alt="">
      <p>Wallet</p>
    </RouterLink>

    <RouterLink to="/securiteDossier">
      <img src="../assets/dossiersecu.jpg" alt="">
      <p>Privé</p>
    </RouterLink>
    <div class="NavAcueil">

      <RouterLink to="/erreurCrash">
        <img src="../assets/appelle.svg" alt="">
      </RouterLink>

      <RouterLink to="/safari">
        <img src="../assets/safari.svg" alt="">
      </RouterLink>

      <RouterLink to="/messages">
        <img src="../assets/message.svg" alt="">
      </RouterLink>

      <RouterLink to="/erreurReseau">
        <img src="../assets/musique.svg" alt="">
      </RouterLink>

    </div>

  </div>

</template>

<style scoped lang="scss">
.Home{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 45px;
  padding: 25px;
  padding-bottom: 330px;
  overflow-y: hidden;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 25%;
    height: 110px;
    text-decoration: none;
    color: white;
    img{
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .NavAcueil{
    position: absolute;
    bottom: 18px;
    width: 396px;
    height: 83px;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    background-color: rgb(96, 96, 96, 38%);
    border-radius: 15px;
  }
}
</style>
