<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { ref, computed } from 'vue';

// Route actuelle
const route = useRoute();

// Couleur du texte
const textColor = computed(() => {
  // Si la route actuelle est "/notes", retourne "black", sinon "white"
  return route.path === '/notes' ? 'black' : 'white';
});

// Heure de départ à partir de laquelle l'horloge commencera à avancer
const startTime = new Date();
startTime.setHours(10, 32, 0, 0);

// Formatage de l'heure
const formattedTime = ref(getFormattedTime(startTime));

// Mettre à jour l'heure chaque seconde
setInterval(() => {
  startTime.setSeconds(startTime.getSeconds() + 1);
  formattedTime.value = getFormattedTime(startTime);
}, 1000);

// Fonction pour formater l'heure
function getFormattedTime(time) {
  const hours = time.getHours() < 10 ? time.getHours().toString().padStart(2, ' ') : time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
</script>

<template>
  <header>
    <nav>
      <p> {{ formattedTime  }} </p>
      <div class="HeaderIcon">
        <img src="../../src/assets/reseau.svg">
        <img src="../../src/assets/battery.svg">
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 35px;
  width: calc(100% - 40px);
  padding: 0 20px;
  color: white;
  nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .HeaderIcon{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }
}
</style>