<script setup>
import {RouterLink} from "vue-router";
</script>
<template>
  <div class="top">
    <RouterLink to="/messages" class="retour">
      <img src="/src/assets/flecheB.svg" alt="">
    </RouterLink>
    <div class="profil">
      <img src="/src/assets/profil.png" alt="">
      <p>Groupe Agnus Dei</p>
    </div>

  </div>

  <div class="message-screen">
    <div class="time">05 juin 20:17</div>
    <div class="message sender">Salve , que chaque Cavalier grave son Sceau ici, peu importe l’ordre, le fidèle saura les remettre à leur juste place, si peu qu’il lise notre récit originel.</div>
    <div class="message sender">Famine : Dans le sillage de sa moisson pâle, les récoltes fanent. Après la perte de son 1er enfant, la mère sanglote.</div>
    <div class="message sender">Guerre : Au bruit de son éperon, le palefroi roux s’élance et  les armées s’embrasent. Quand sa 2ème lame frappe, le monde tremble.</div>
    <div class="message sender">Mort : Dans l’ombre de son long manteau noir, les empires fléchissent. A la 7ème lune de son règne, elle annonce notre venue.</div>
    <div class="message sender">Conquête : Après la charge de son destrier blanc, les Hommes fléchissent. Au 5ème souffle du cor, le roi capitule.</div>

  </div>

  <div class="input-bar">
    <img src="/src/assets/joindre.png" alt="">
    <input type="text" placeholder="Message" class="input-field">
  </div>
  
</template>

<style scoped lang="scss">
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 140px;
  border-bottom: 1px solid #B2B2B2;
  .retour{
    position: absolute;
    left: 18px;
    top: 70px;
    display: flex;
    align-items: center;
    img{
      width: 22px;
      height: 22px;
    }
  }
  .profil{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    img{
      width: 55px;
      height: 55px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
.message-screen {
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 60vh;
}
.message {
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 70%;
}
.sender {
  background-color: #e5e5ea;
  margin-right: auto;
}
.receiver {
  background-color: #18e441;
  color: white;
  margin-left: auto;
}
.time {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin: 20px 0;
}
.input-bar {
  width: calc(100% - 20px);
  display: flex;
  padding: 10px;
  background: #f9f9f9;
  position: absolute;
  bottom: 0;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;
  z-index: -1;
  img{
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
  }
}
.input-field {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #d1d1d6;
}
</style>