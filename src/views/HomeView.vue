<script setup>

import {RouterLink} from "vue-router";



</script>

<template>

  <div class="Home">
    <RouterLink to="/notes"><img src="../assets/note.svg" alt=""></RouterLink>
    <RouterLink to="/notes"><img src="../assets/message.svg" alt=""></RouterLink>
    <RouterLink to="/notes"><img src="../assets/photos.svg" alt=""></RouterLink>
  </div>

</template>

<style scoped lang="scss">
.Home{
  height: calc(100% - 80px);
  display: flex;
  margin-top: 45px;
  padding: 25px;
  a{
    display: flex;
    width: 100px;
    height: 100px;
    img{
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
}
</style>
