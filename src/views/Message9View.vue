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
      <p>Prof d'art</p>
    </div>

  </div>

  <div class="message-screen">
    <div class="time">10 juin 10:30</div>
    <div class="message receiver">Bonjour Madame, je tenais encore à vous remercier pour le cours que vous avez dispensé aujourd’hui, le sujet choisi était passionnant ! </div>
   <div class="message sender">Bonjour Isaac, je suis ravie de l’entendre ! Le Préraphaélisme est un mouvement artistique encore trop peu étudié à mon goût, je cherche à le rendre plus populaire. N’oubliez pas d’ailleurs de procéder à l’analyse iconographique de Proserpine par Rossetti, c’est le tableau dont nous parlerons lors du colloque le mois prochain. D’ailleurs n’hésitez pas à faire votre proposition pour le cours de la semaine prochaine, je n’ai pas encore reçu de proposition des autres élèves, donc si vous avez une idée je suis preneuse.</div>
    <div class="message receiver">C’est justement aussi de cela que je voulais vous parler, vous pensez que l’on pourrait étudier l’art chrétien ? Je trouve que ça peut-être un sujet intéressant, et en lien avec le Préraphaélisme.</div>
    <div class="message sender">Oh c’est une idée fabuleuse effectivement ! Le lien avec notre cours précédent est tout trouvé, c’est d’accord ! Y a-t-il une peinture d’un artiste en particulier que vous souhaitez que nous étudions ?</div>
    <div class="message receiver">Oui, je pensais à “Les Quatres Cavaliers de l’Apocalypse”, par Viktor Vasnetsov. C’est une peinture qui a un très fort intérêt iconographique je trouve.</div>
    <div class="message sender">C’est un excellent choix Isaac, c’est une œuvre d’art extrêmement détaillée, je suis persuadée que nous aurons énormément de choses à dire dessus.</div>
    <div class="message receiver">J’aurais une dernière question si cela ne vous dérange pas, selon-vous, est-ce pertinent de cacher des chiffres ou des symboles dans une œuvre d’art ?</div>
    <div class="message sender">C’est une pratique très répandue dans l’histoire de l’art, qui conduit parfois à des spéculations ou à des théories. De plus, de nombreuses œuvres sont réputées pour leurs messages cachés. Pourquoi cette question ?</div>
    <div class="message receiver">Eh bien, disons que je cherche à cacher un mot de passe ou quelque chose du genre, comment pourrais-je le faire sur une peinture ? Si je cherchais, disons à cacher un chiffre dans une peinture.Par exemple en seconde couche de sécurité pour un dossier ou un journal intime ?</div>
    <div class="message sender">Ah je vois ce que vous voulez dire, eh bien vous pourriez prendre la peinture de Waterhouse, La Dame de Shalott, vous savez celle où une femme triste est assise dans une barque ? Effectivement il peut être intéressant de le cacher dans une peinture que vous gardez en image dans votre galerie photo, disons que la plupart des gens ne pensent pas forcément à aller regarder une photo aléatoire pour trouver un mot de passe, encore moins sur une peinture.</div>
    <div class="message receiver">Oui je vois tout à fait de quelle peinture vous voulez parler, merci beaucoup je ferais ça, passez une très bonne fin de journée ! Et merci pour tous ces précieux conseils.</div>
    <div class="message sender">Vous de même, ravi d’avoir pu vous aider !</div>
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