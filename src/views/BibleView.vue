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
     <q>[1] Alors je vis que l’Agneau avait ouvert un des sceaux, et j’entendis l’un des quatre animaux qui disait d’une voix de tonnerre : Viens et vois.</q>
     <q>[2] Je regardai donc, et je vis un cheval blanc, et celui qui était monté dessus avait un arc, et on lui donna une couronne, et il partit en vainqueur, pour remporter la victoire.</q>
     <q>[3] Et lorsque l’Agneau eut ouvert le second sceau, j’entendis le second animal qui disait : Viens, et vois.</q>
     <q>[4] Et il sortit un autre cheval qui était roux ; et celui qui le montait reçut le pouvoir de bannir la paix de la terre, et de faire que les hommes se tuassent les uns les autres ; et on lui donna une grande épée.</q>
     <q>[5] Et quand l’Agneau eut ouvert le troisième sceau, j’entendis le troisième animal, qui disait : Viens et vois. Et je regardai, et il parut un cheval noir, et celui qui était monté dessus avait une balance à la main.</q>
     <q>[6] Et j’entendis une voix qui venait du milieu des quatre animaux, et qui disait : La mesure de froment vaudra un denier, et les trois mesures d’orge vaudront un denier ; mais ne gâte point ni l’huile ni le vin.</q>
     <q>[7] Et quand l’Agneau eut ouvert le quatrième sceau, j’entendis la voix du quatrième animal, qui disait : Viens, et vois</q>
     <q>[8] Et je regardai, et je vis paraître un cheval de couleur pâle ; et celui qui était monté dessus se nommait la Mort, et l’Enfer le suivait ; et le pouvoir leur fut donné sur la quatrième partie de la terre, pour faire mourir les hommes par l’épée, par la famine, par la mortalité, et par les bêtes sauvages de la terre. »</q>
   </div>

 </div>
</template>
<style scoped lang="scss">
.bible{
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  height: calc(100vh - 45px);
  background-color: white;
  .lieu{
    width: calc(100vw - 10px);
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
    overflow: auto;
    h3{
      font-size: 21px;
      padding: 30px;
      padding-bottom: 20px;
      color: #414141;
    }
    q{
      padding: 0px 30px;
      color: #414141;
      margin-bottom: 20px;
    }
  }
}
</style>