<template>
  <div class="top-bar">
    <h1>Messages</h1>
  </div>

  <ul class="message-list">
    <!-- Exemple pour le premier message audio -->
    <RouterLink to="/message1" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Nicolas Spaiz</div>
        <div class="message-preview">Ouais ouais, moque toi si tu veux…</div>
      </div>
      <div class="message-date">16/06/2024</div>
    </RouterLink>
    <!-- Exemple pour Papa -->
    <RouterLink to="/message2" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Papa</div>
        <div class="message-preview">où es-tu ?...</div>
      </div>
      <div class="message-date">16/06/2024</div>
    </RouterLink>
    <!-- Exemple pour Orange -->
    <RouterLink to="/message3" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Orange</div>
        <div class="message-preview">Orange : La facture du 06 00 00 00...</div>
      </div>
      <div class="message-date">15/06/2024</div>
    </RouterLink>
    <!-- Exemple pour 888 -->
    <router-link to="/message4" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">888</div>
        <div class="message-preview">"888" messagerie Orange : ...</div>
      </div>
      <div class="message-date">15/06/2024</div>
    </router-link>
    <!-- Exemple pour PASSAGEBLEU -->
    <router-link to="/message5" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Karl Ledungbud</div>
        <div class="message-preview"> Cool, à ce soir pour Content Warning...</div>
      </div>
      <div class="message-date">14/06/2024</div>
    </router-link>
    <!-- Exemple pour Optic 2000 -->
    <router-link to="/message6" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Jean Leroux</div>
        <div class="message-preview">Vous : ...</div>
      </div>
      <div class="message-date">14/06/2024</div>
    </router-link>
    <!-- Exemple pour 36105 -->
    <router-link to="/message7" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">lisa</div>
        <div class="message-preview">Allez ! On se voit le 21 alors hihi.</div>
      </div>
      <div class="message-date">13/06/2024</div>
    </router-link>
    <!-- Exemple pour 38644 -->
    <RouterLink to="/message8" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Amazon</div>
        <div class="message-preview">PayPal : 715217 est votre code de connexion. Ne partagez pas ce code.</div>
      </div>
      <div class="message-date">11/06/2024</div>
    </RouterLink>
    <!-- Exemple pour l'adresse email -->
    <router-link to="/message9" class="message-item">
      <div class="avatar"></div>
      <div class="message-content">
        <div class="message-title">Prof d'art</div>
        <div class="message-preview">Vous de même, ravi d’avoir pu vous aider !</div>
      </div>
      <div class="message-date">10/01/2024</div>
    </router-link>
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