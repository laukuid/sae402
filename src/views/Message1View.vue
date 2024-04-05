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
      <p>Nicolas Spaiz</p>
    </div>

  </div>

  <div class="message-screen">
    <div class="time">16 juin 20:17</div>
    <div class="message sender">Hello ^-^, c’est Lisa, on s’est échangés nos numéros à la soirée de Karl, tu te souviens de moi ? On s'était bien amusés et je voulais pas qu’on se perde de vue hihi.</div>
    <div class="message receiver">Nan déso bro, je teste Darksiders 2 ce soir.</div>
    <div class="message sender">Connaît pas, ça parle de quoi le jeu ?</div>
    <div class="message receiver">En gros, t’es un Cavalier de l’Apocalypse qui s'appelle Mort, et tu es envoyé sur Terre pour sauver un autre Cavalier, Guerre, et aussi sauver l’humanité. J’ai regardé un peu le jeu avant et ça me tente bien donc je me le suis payé tout à l’heure.
    </div>
    <div class="message sender">Le truc de cavalier machin, c’est pas dans la religion chrétienne de base ?</div>
    <div class="message receiver">Si si ! Précisément, c’est une sorte de réinterprétation de l’histoire des 4 cavaliers du Nouveau Testament.</div>
    <div class="message sender">Ouais je comprends que ça te plaise, t’es obsédé avec ces histoire de Cavaliers, d’Apocalypse et tout, tu parles que de ça depuis deux semaines, va faire ton catéchisme mec ptdrrrr.</div>
    <div class="message receiver">Ouais ouais, moque toi si tu veux…</div>
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