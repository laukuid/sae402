<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <main>
    <div class="top"><router-link class="retour" to="/dossierNote"></router-link>
      <p class="modifier">Modifier</p></div>
    <h2>Boîtes</h2>
    <div class="content">
      <router-link to="/reception">
        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/reception.svg" alt=""> <h3>Reception</h3></div><div class="content-sous"><p>8</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>

      </router-link>
      <span></span>

        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/etoile.svg" alt=""><h3>VIP</h3></div><div class="content-sous"><p>1</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>




    </div>
    <h3 class="gmail">
      Gmail
    </h3>
    <div class="content">

        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/brouillon.svg" alt=""> <h3>Brouillon</h3></div><div class="content-sous"><p>8</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>


      <span></span>

        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/envoye.svg" alt=""><h3>Envoyé</h3></div></div>

      <span></span>
      <router-link to="/indesirable">
        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/indésirable.svg" alt=""><h3>Indésirable</h3></div><div class="content-sous"><p>1</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>
      </router-link>
      <span></span>
      <router-link to="/corbeil">
        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/poubelleB.svg" alt=""><h3>Corbeille</h3></div><div class="content-sous"><p>1</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>
      </router-link>
      <span></span>

        <div class="sous-content"><div class="sous-sous-content"><img src="@/assets/tousmail.svg" alt=""><h3>Tous les mails</h3></div><div class="content-sous"><p>1</p>
          <img src="@/assets/flecheG.svg" alt="fleche gris"></div></div>

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
      font-size: 30px;
      font-weight: 800;
      color: #181818 !important;
    }
    .gmail{
      margin-top: 20px;
      margin-left: 10px;
      font-size: 21px;
      font-weight: 600;
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

      .sous-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        .content-sous{
          display: flex;
          align-items: center;
          gap: 10px;
          p{
            font-size: 17px;
            font-weight: 700;
            color: #8a898e;
          }
          img{
            width: 13px;
            height: 13px;
          }
        }
        .sous-sous-content{
          display: flex;
          align-items: center;
          gap: 10px;
          img{
            width: 24px;
            height: 24px;
          }
          h3{
            font-size: 17px;
            font-weight: 700;
            color: #181818
          }
        }
      }
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