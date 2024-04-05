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
      <p>Lisa</p>
    </div>

  </div>

  <div class="message-screen">
    <div class="time">13 juin 10:17</div>
    <div class="message sender">Hello ^-^, c’est Lisa, on s’est échangés nos numéros à la soirée de Karl, tu te souviens de moi ? On s'était bien amusés et je voulais pas qu’on se perde de vue hihi.</div>
    <div class="message receiver">Ahh oui Lisa, oui oui je me souviens ahahah. T’étais bien torchée à un moment quand même quand tu t’es mise à danser sur la table.</div>
    <div class="message sender">Ouiiiii je sais, je deviens un peu crazyyyyyyy quand je bois trop</div>
    <div class="message receiver">Je peux pas dire le contraire, je suis un peu pareil, mais moi c’est surtout les trous de mémoire après.</div>
    <div class="message sender">Moi c’est mes copines qui finissent par me ramener chez moi à chaque fois, je suis trop bourrée pour rentrer toute seule.</div>
    <div class="message receiver">Ptdrrr t’as des potes en or, on peux pas dire pareil des miens :p .</div>
    <div class="message sender">Ahahah ouais on se soutient dans nos galères. Du coup je voulais savoir si t’avais envie qu’on se revoit… ? </div>
    <div class="message receiver">Ouais carrément ! On pourrait se faire un Netflix chez moi ou un truc du genre ? J’ai mon propre appart on sera tranquilles héhé.</div>
    <div class="message sender">Ça me va alors, on se fixe ça pour quand  ?</div>
    <div class="message receiver">Disons pour le 21 juin ?</div>
    <div class="message sender">Allez ! On se voit le 21 alors hihi.</div>
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