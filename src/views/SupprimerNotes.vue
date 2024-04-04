<script setup>

</script>

<template>
  <main>
    <div class="top"><router-link class="retour" to="/dossierNote"><img src="/public/fleche_jaune.svg"><p>Dossiers</p></router-link>
      <img src="/public/rond_point.svg" alt="rond point"></div>
    <h1>Notes</h1>
    <h2>Epinglées</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <span></span>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <span></span>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>

    </div>
    <h2>Hier</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
    </div>
    <h2>Mars</h2>
    <div class="content">
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <span></span>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>
      <span></span>
      <router-link to="/DossierNote">
        <h3>nom comptenu</h3>
        <p>00/00/2024 intitulé</p>
      </router-link>

    </div>
  </main>
</template>

<style scoped lang="scss">


</style>