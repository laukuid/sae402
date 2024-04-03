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
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>

    </div>
    <h2>Hier</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
    </div>
    <h2>Mars</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <hr>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>

    </div>
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
  h2{
    margin-left: 5px;
    margin-top: 20px;
    font-size: 19px;
    font-weight: 700;
    color: #181818 !important;
  }
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
      margin-top: 10px;
      padding-top: 10px;
      padding-left: 15px;
      padding-bottom: 10px;
      width: 79%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      background-color: white;
      color: #181818 !important;
      gap: 10px;
      a {
        text-decoration: none;
        h3 {
          font-size: 17px;
          font-weight: 700;
          color: #181818 !important
        }

        p {
          font-size: 15px;
          font-weight: 300;
          color: #8a898e !important
        }
      }
    }
    height: 932px;
    width: 430px;
    background-color: #F3F2F8;
    color: #181818;
  }

}

</style>