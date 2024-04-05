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
      <p>Jean Leroux</p>
    </div>

  </div>

  <div class="message-screen">
    <div class="time">15/06/2024 10:17</div>
    <div class="message sender"> Salve, discipulus, je vous envoie ce message pour vous prévenir que notre organisation
      aura bientôt fini les préparatifs pour ce weekend, aurez-vous ce qu’il faut de votre côté ?
    </div>
    <div class="message receiver">Salve, Dux Bellorum. Ne vous inquiétez pas, tout sera prêt comme prévu, j’ai trouvé
      une… opportunité intéressante dirons-nous.
    </div>
    <div class="message sender">Parfait ! N’oubliez pas que l’offrande doit encore être en bon état au moment où nous
      “l’offrons”, sinon nous faisons tout cela pour rien. D’ailleurs j’ai demandé à faire traduire le passage que vous
      aviez demandé pour que cela n’attire pas l’attention, vous devrez donc écrire : Ἡ Καινὴ Διαθήκη’
    </div>
    <div class="message receiver">Merci beaucoup, d’ailleurs est-ce que vous avez finalement pu réunir nos frères et
      sœurs dans un groupe de messagerie ? Cela serait plus pratique pour communiquer.
    </div>
    <div class="message sender">Bien sûr, le groupe a déjà été créé, je vous envoie le lien d’invitation :
      https://onlinechat/group/join/agnus-dei/chataway.com

      Attention, vous aurez un mot de passe à remplir, c’est “ 1572”, en rapport à vous savez quoi, nous n’oublions
      jamais. Pensez bien à utiliser votre nom d’emprunt dans cette messagerie, le même que celui inscrit sur votre
      figurine.
      Agnus Dei, frater meus.
    </div>
    <div class="message receiver">Agnus Dei, frater meus</div>
  </div>

  <div class="input-bar">
    <img src="/src/assets/joindre.png" alt="">
    <input type="text" placeholder="Message" class="input-field">
  </div>

</template>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 140px;
  border-bottom: 1px solid #B2B2B2;

  .retour {
    position: absolute;
    left: 18px;
    top: 70px;
    display: flex;
    align-items: center;

    img {
      width: 22px;
      height: 22px;
    }
  }

  .profil {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    img {
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

  img {
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