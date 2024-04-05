<script setup>

</script>

<template>
  <main>
  <video width="100%" height="100%" controls>
    <source src="@/assets/Introduction.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="skip">
    <router-link to="/">
      <button>Skip</button>
    </router-link>
  </div>
  </main>
</template>

<style scoped lang="scss">
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #193c76;
}
video {
  height: 80vh;

}
.skip {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  button {
    background-color: #e4af0b;
    color: #193c76;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
  }
}

</style>