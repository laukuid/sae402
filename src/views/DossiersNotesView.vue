<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <main>
    <div class="top"><router-link class="retour" to="/dossierNote"><p class="dossier">Dossiers</p></router-link>
      <p class="modifier">Modifier</p></div>
    <h2>Sur mon iPhone</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <span></span>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>

    </div>

  </main>
</template>
<style scoped lang="scss">
body{
  background-color: #F5F5F5;
  main{
    display: flex;
    flex-direction: column;
    padding: 35px 15px;
    height: calc(100vh - 70px);
    width: calc(430px - 30px);
    background-color: #F3F2F8;
    color: #181818;
    h1{
      margin-top: 25px;
    }
    h2{
      margin-left: 5px;
      margin-top: 20px;
      font-size: 19px;
      font-weight: 700;
      color: #181818 !important;
    }
    .top {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 37%;

      font-size: 19px;
      .modifier{
        color: #e4af0b;
        font-weight: 500;
      }
      .dossier{
        color: #181818;
        font-weight: 700;
      }
      a{
        text-decoration: none;
        color: #181818;
        padding: 0


      }


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
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      background-color: white;
      color: #181818;
      gap: 10px;
      a {
        text-decoration: none;
        h3 {
          font-size: 17px;
          font-weight: 700;
          color: #181818
        }

        p {
          font-size: 15px;
          font-weight: 300;
          color: #8a898e;
        }
      }
    }
  }
}
span{
  width: 95%;
  height: 1px;
  background: gray;
}
</style>