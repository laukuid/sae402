<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="espace"></div>
    <div class="container">
      <div class="popup">
        <div class="text">
          <h3>Erreur GPS</h3>
          <p>Le programme Maps n'arrive pas à accéder à votre position.</p>
        </div>
        <span></span>
        <RouterLink to="/">OK</RouterLink>
      </div>
    </div>

</template>

<style scoped lang="scss">
.espace{
  height: 35px;
  background-color: white;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
    height: 140px;
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

</style>
