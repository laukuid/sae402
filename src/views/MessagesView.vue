<template>
  <div class="top-bar">
    <h1>Messages</h1>
  </div>

  <ul class="message-list">
    <!-- Exemple pour le premier message audio -->
    <RouterLink to="/message1" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">+33 6 19 36 44 63</div>
        <div class="message-preview">1 message audio</div>
      </div>
      <div class="message-date">10:22</div>
    </RouterLink>
    <!-- Exemple pour Papa -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Papa</div>
        <div class="message-preview">Cool</div>
      </div>
      <div class="message-date">vendredi</div>
    </li>
    <!-- Exemple pour Orange -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Orange</div>
        <div class="message-preview">Votre RDV téléphonique prévu le 28/03...</div>
      </div>
      <div class="message-date">26/03/2024</div>
    </li>
    <!-- Exemple pour 888 -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">888</div>
        <div class="message-preview">"888" messagerie Orange : La sécurité de la messagerie évolue avec un code sec...</div>
      </div>
      <div class="message-date">13/03/2024</div>
    </li>
    <!-- Exemple pour PASSAGEBLEU -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">PASSAGEBLEU</div>
        <div class="message-preview">PROLONGATION EXCEPTIONNELLE -30% sur les ÉPILATIONS visage et corps jusqu'au...</div>
      </div>
      <div class="message-date">01/03/2024</div>
    </li>
    <!-- Exemple pour Optic 2000 -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Optic 2000</div>
        <div class="message-preview">Envie de nouvelles lunettes ? Chez Optic 2000, profitez de remises exceptionnelle...</div>
      </div>
      <div class="message-date">20/02/2024</div>
    </li>
    <!-- Exemple pour 36105 -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">36105</div>
        <div class="message-preview">Aujourd'hui, #JeVoteCrous ! Vous avez jusqu'au 8/02 à 17h pour faire...</div>
      </div>
      <div class="message-date">07/02/2024</div>
    </li>
    <!-- Exemple pour 38644 -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">38644</div>
        <div class="message-preview">PayPal : 715217 est votre code de connexion. Ne partagez pas ce code.</div>
      </div>
      <div class="message-date">23/01/2024</div>
    </li>
    <!-- Exemple pour l'adresse email -->
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">lahoangduy0306@gmail.com</div>
        <div class="message-preview">Bonjour, je suis Sophie. Pouvez-vous me dire si...</div>
      </div>
      <div class="message-date">10/01/2024</div>
    </li>
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Chronopost</div>
        <div class="message-preview">Votre colis GC598321560FR...</div>
      </div>
      <div class="message-date">03/01/2024</div>
    </li>
    <li class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Florian</div>
        <div class="message-preview">Pièce jointe : 1 vidéo</div>
      </div>
      <div class="message-date">14/12/2023</div>
    </li>
  </ul>
</template>

<style scoped>

.top-bar {
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding-top: 80px;
}

.message-list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: calc(100vh - 129px);
  background: white;
}

.message-item {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
}

.message-content {
  flex-grow: 1;
}

.message-title {
  font-weight: bold;
}

.message-preview {
  color: #666;
}

.message-date {
  color: #999;
}

.message-item {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.avatar {
  width: 40px; /* Taille fixe pour la largeur */
  height: 40px; /* Taille fixe pour la hauteur */
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0; /* Empêche le rétrécissement */
}

.message-content {
  flex-grow: 1;
  min-width: 0; /* Ajouté pour gérer correctement le débordement de texte */
}

.message-title {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.message-preview {
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-date {
  color: #999;
  white-space: nowrap;
  flex-shrink: 0; /* Empêche le rétrécissement */
}
</style>
<script setup>
import {RouterLink} from "vue-router";
</script>