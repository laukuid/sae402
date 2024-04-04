<script setup>

import {RouterLink} from "vue-router";

</script>

<template>

  <div class="Home">

    <RouterLink to="/">
      <img src="../assets/facetime.svg" alt="">
      <p>FaceTime</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/calendar.svg" alt="">
      <p>Calendrier</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/photos.svg" alt="">
      <p>Photos</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/camera.svg" alt="">
      <p>Caméra</p>
    </RouterLink>

    <RouterLink to="/mail">
      <img src="../assets/mail.svg" alt="">
      <p>Mail</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/clock.svg" alt="">
      <p>Horloge</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/maps.svg" alt="">
      <p>Maps</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/meteo.svg" alt="">
      <p>Météo</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/memorie.svg" alt="">
      <p>Mémorie</p>
    </RouterLink>

    <RouterLink to="/notes">
      <img src="../assets/note.svg" alt="">
      <p>Notes</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/stocks.svg" alt="">
      <p>Stocks</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/news.svg" alt="">
      <p>News</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/bible.png" alt="">
      <p>Sainte Bible</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/appstore.svg" alt="">
      <p>App Store</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/podcast.svg" alt="">
      <p>Podcast</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/tv.svg" alt="">
      <p>TV</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/health.svg" alt="">
      <p>Health</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/maison.svg" alt="">
      <p>Maison</p>
    </RouterLink>

    <RouterLink to="/">
      <img src="../assets/wallet.svg" alt="">
      <p>Wallet</p>
    </RouterLink>

    <div class="NavAcueil">

      <RouterLink to="/appelle">
        <img src="../assets/appelle.svg" alt="">
      </RouterLink>

      <RouterLink to="/messages">
        <img src="../assets/message.svg" alt="">
      </RouterLink>

      <RouterLink to="/messages">
        <img src="../assets/message.svg" alt="">
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
  padding-bottom: 312px;
  overflow-y: hidden;
  gap: 25px;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 70px;
    height: 100px;
    text-decoration: none;
    color: white;
    img{
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
  .NavAcueil{
    position: absolute;
    bottom: 18px;
    width: 396px;
    height: 83px;
    display: flex;
    background-color: rgb(96, 96, 96, 38%);
    border-radius: 15px;
  }
}
</style>
