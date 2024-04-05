<script setup>

</script>

<template>
  <main>
    <div class="solution">
      <h1>bravo vous avez trouvez la solution</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
body {
  background-color: #193c76;

  main {
    display: flex;
    flex-direction: column;
    padding: 35px 15px;
    height: calc(100vh - 70px);
    width: calc(430px - 30px);
    background-color: #193c76;
    color: #181818;
  }
  .solution {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    h1 {
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>