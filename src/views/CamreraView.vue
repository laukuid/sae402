<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <div class="container">
    <div class="nav-camera">
      <img src="../assets/parametrecam.png" alt="">
      <img src="../assets/ratio.png" alt="">
      <img src="../assets/filtre.png" alt="">
      <img src="../assets/disposition.png" alt="">
      <img src="../assets/flash.png" alt="">
    </div>
    <div class="erreurCam">
      <div class="popup">
        <div class="text">
          <h3>Erreur Caméra</h3>
          <p>Le programme n'arrive pas à accéder à votre caméra. La caméra de l'appareil semble endommagée.</p>
        </div>
        <span></span>
        <RouterLink to="/">OK</RouterLink>
      </div>
    </div>
    <div class="mode">
      <p>Panorama</p>
      <div class="select">
        <p>Photo</p>
        <img src="../assets/selectcam.png" alt="">
      </div>
      <p>Vidéo</p>
    </div>
    <div class="interaction">
      <RouterLink to="/"><img src="" alt=""></RouterLink>
      <img class="declancheur" src="../assets/declancheur.png" alt="">
      <img src="../assets/reverse.png" alt="">
    </div>
  </div>
</template>
<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  height: calc(100vh - 25px);
  background-color: black;
  .nav-camera{
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    img{
      width: 25px;
      object-fit: contain;
    }
  }
  .erreurCam{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background-color: #999999;
    .popup{
      position: relative;
      width: 300px;
      padding: 25px 20px;
      padding-bottom: 0;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      flex-direction: column;
      background-color: #d0cfcd;
      margin-bottom: 50px;
      margin: 20px;
      .text{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      span{
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: grey;
      }
      a{
        height: 50px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #0f81ff;
        text-decoration: none;
        font-size: 17px;
      }
    }
  }
  .mode{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: white;
    p{
      width: 80px;
      text-align: center;
    }
    .select{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      p{
        padding-top: 10px;
        color: #fefc00;
      }
      img{
        width: 10px;
      }
    }
  }
  .interaction{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
    a{
      width: 50px;
      height: 50px;
      background-color: grey;
    }
    .declancheur{
      width: 75px;
      height: 75px;
    }
  }
}
</style>