<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from "@/views/HeaderView.vue";
</script>

<template>
  <header-view />

  <RouterView />

  <footer>
    <RouterLink to="/"><span></span></RouterLink>
  </footer>

</template>

<style scoped lang="scss">

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
