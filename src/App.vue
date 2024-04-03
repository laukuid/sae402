<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

// Heure de départ à partir de laquelle l'horloge commencera à avancer
const startTime = new Date();
startTime.setHours(8, 0, 0, 0);

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
      <RouterLink to="/notes">About</RouterLink>
      <p> {{ formattedTime  }} </p>
      <div class="HeaderIcon">
        <img src="../src/assets/reseau.svg">
        <img src="../src/assets/ios-wifi.svg">
        <img src="../src/assets/battery.svg">
      </div>
    </nav>
  </header>

  <RouterView />
  <footer>
    <RouterLink to="/"><span></span></RouterLink>
  </footer>
</template>

<style scoped lang="scss">
header{
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
footer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    span{
      display: inline-block;
      width: 155px;
      height: 6px;
      border-radius: 5px;
      background-color: black;
    }
  }
}
</style>
