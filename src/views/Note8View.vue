<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <main>
    <div class="top"><router-link class="retour" to="/notes"><img src="/public/fleche_jaune.svg"><p>Notes</p></router-link>
      <p>Modifier</p></div>
    <h1>intitulé</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut, blanditiis deleniti doloremque expedita fugiat impedit iste minima nihil nobis nostrum omnis qui quia quisquam quod tempore, totam voluptates.</p>



  </main>
</template>
<style scoped lang="scss">
body{
  background-color: #F5F5F5;
  main{
    display: flex;
    flex-direction: column;
    padding: 35px 15px;
    height: calc(100vh - 70px);
    width: calc(430px - 30px);
    background-color: #F3F2F8;
    color: #181818;
    p{
      font-size: 15px;
      font-weight: 300;
      color: #454545;
      line-height: 1.5;
    }
    h1{
      margin-top: 25px;
    }
    h2{
      margin-left: 5px;
      margin-top: 20px;
      font-size: 19px;
      font-weight: 700;
      color: #181818;
    }
    .top {
      a{
        text-decoration: none;
        color: #e4af0b ;
        padding: 0;
        font-size: 17px;
      }
      p{
        color: #e4af0b ;
        font-size: 17px;
      }
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }

      .retour {
        display: flex;
        align-items: center;

        img {
          width: 22px;
          height: 22px;
        }
      }
    }
    .content{
      margin-top: 30px;
      padding-top: 10px;
      padding-left: 15px;
      padding-bottom: 10px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      background-color: white;
      color: #181818 ;
      gap: 10px;
      a {
        text-decoration: none;
        h3 {
          font-size: 17px;
          font-weight: 700;
          color: #181818
        }

        p {
          font-size: 15px;
          font-weight: 300;
          color: #8a898e
        }
      }
    }
  }
}
span{
  width: 95%;
  height: 1px;
  background: gray;
}

span{
  width: 95%;
  height: 1px;
  background: gray;
}
</style>