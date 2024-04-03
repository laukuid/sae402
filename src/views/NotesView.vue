<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <main>
    <div class="top"><router-link class="retour" to="/dossierNote"><img src="/public/fleche_jaune.svg"><p>Dossiers</p></router-link>
      <img src="/public/rond_point.svg" alt="rond point"></div>
    <h1>Notes</h1>
    <h2>Epinglées</h2>
    <div class="content">
      <router-link to="/note">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/note">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/note">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
    </div>
    <h2>Hier</h2>
    <h2>Mars</h2>

  </main>
</template>
<style scoped lang="scss">
body{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #F5F5F5;
  main{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;

    .top {
      a{
        text-decoration: none;
        color: #e4af0b !important;
        padding: 0 !important;
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
    .content{
      display: flex;
      flex-direction: column;
      color: #181818 !important;
      gap: 10px;
      h3{
        font-size: 21px;
        font-weight: 500;
      }
      p{
        font-size: 15px;
        font-weight: 300;
      }
    }
    height: 932px;
    width: 430px;
    background-color: #F3F2F8;
    color: #181818;
  }

}

</style>