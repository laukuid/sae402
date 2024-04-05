<script setup>
import {RouterLink, RouterView, useRouter} from 'vue-router'
</script>

<template>
 <div class="bible">
   <div class="lieu">
     <p class="ppremier">Apocalypse</p>
     <p class="pdexieme">Chap. 6, 1-8</p>
   </div>
   <div class="text">
    <h3>Jésus-Christ est la Parole qui vien de Dieu</h3>
     <p><span></span></p>
   </div>

 </div>
</template>
<style scoped lang="scss">
.bible{
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  height: calc(100vh - 45px);
  background-color: white;
  .lieu{
    width: 100%;
    padding: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    gap: 5px;
    font-weight: bold;
    color: #414141;
    .ppremier{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #E7E7E7;
      padding: 10px 15px;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
    }
    .pdexieme{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #E7E7E7;
      padding: 10px 15px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
  .text{
    display: flex;
    flex-direction: column;
    h3{
      font-size: 21px;
      padding: 50px 30px;
      color: #414141;
    }
  }
}
</style>