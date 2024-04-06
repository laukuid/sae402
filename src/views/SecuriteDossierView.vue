<script>
export default {
  data() {
    return {
      code: '',
      error: false
    }
  },
  methods: {
    checkCode() {
      if (this.code.toString() === '5271') { // Convertissez this.code en chaîne de caractères
        this.$router.push('/sousPage');
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<template>
<main>
  <div class="chiffre">
    <h1>Entrez le premier mot de passe à 4 chiffres</h1>
    <input v-model="code" type="number" min="0" max="9999" />
    <button @click="checkCode">Valider</button>
    <p v-if="error">Le code est incorrect</p>
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
    overflow: hidden;
    .chiffre{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      h1{
        color: #e4af0b;
        font-size: 25px;
        margin-bottom: 20px;
      }
      input{
        width: 100px;
        height: 40px;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
      button{
        width: 100px;
        height: 40px;
        background-color: #e4af0b;
        color: #193c76;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      p{
        color: red;
        font-size: 20px;
      }
    }
    }

  }
</style>