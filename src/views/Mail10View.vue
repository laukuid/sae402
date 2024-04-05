<script setup>

</script>

<template>
  <main>
    <div class="top">
      <router-link class="retour" to="/reception"><img src="@/assets/flecheB.svg">
        <p>Réception</p></router-link>
      <p>Modifier</p></div>
    <span></span>
    <div class="headMail">
      <div class="headImage"><img src="@/assets/profil.svg" alt="profil"></div>
      <div class="headEnTete"><h2>Vercel</h2><p>à: pierre.legras@etudia... et 1 de plus ></p></div><div><p>hier</p></div>
    </div>
    <span></span>
    <div class="container">
      <h1>Vercel’s improved infrastructure pricing</h1>
      <p>Hey there,

We're updating our pricing structure based on feedback from our developer community to lower the cost of essentials like bandwidth and functions.

Your Vercel hobby account remains free and doesn’t require a payment method.
We’re introducing new metrics like Edge Requests. You’re getting free included usage of these in proportion to previously included bandwidth and functions.
If you happen to exceed these new metrics in the next 6 months, we’ll make sure you are notified and that your projects are unaffected during this period.
We encourage you to learn more about these metrics, which will in turn help you understand how Vercel’s infrastructure works and scale better with it.

Have questions? Post in our community, open a case, ask questions live, or shoot me a DM on X.
</p>
    </div>

  </main>
</template>

<style scoped lang="scss">
body {
  background-color: #F5F5F5;

  main {
    display: flex;
    flex-direction: column;
    padding: 35px 15px;
    height: calc(100vh - 70px);
    width: calc(430px - 30px);
    background-color: #F3F2F8;
    color: #181818;

    #content {
      display: flex;
      flex-direction: column;
      overflow: auto;

      width: 100%;

      span {
        width: 95%;
        height: 1px;
        background: #bdbdbd;
      }
    }

    a {
      text-decoration: none;
      color: #181818;
      padding: 0;
      font-size: 21px;
    }

    h1 {
      margin-top: 25px;
      margin-bottom: 10px;
    }

    h2 {
      margin-left: 5px;
      margin-top: 20px;
      font-size: 19px;
      font-weight: 700;
      color: #181818;
    }
    .container{
      width: 95%;
      padding-top: 10px;
      padding-left: 15px;

      h1 {
        font-size: 20px;
        font-weight: 700;

        color: #181818;
      }

      p {
        font-size: 15px;
        line-height: 1.8em;
        color: black;
        font-weight: 500;
      }
    }
    .top {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        text-decoration: none;
        color: #007aff;
        padding: 0;
        font-size: 15px;
      }

      p {
        color: #007aff;
        font-weight: 500;
        margin-left: 5px;
        font-size: 15px;
      }

      img {
        width: 10px;
        height: 10px;
      }

      .retour {
        display: flex;
        align-items: center;

        img {
          width: 17px;
          height: 17px;
        }
      }
    }

    .headMail {
      display: flex;
      align-items: center;
      padding-top: 10px;
      width: 100%;
      height: 70px;

      .headImage {
        margin-left: 15px;

        img {
          width: 40px;
          height: 40px;
        }
      }
      .headEnTete {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        h2 {
          font-size: 15px;
          font-weight: 700;
          color: #181818;
        }

        p {
          font-size: 15px;
          color: gray;
        }
      }
    }

    .content {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      padding-top: 10px;
      padding-left: 15px;

      span {
        width: 95%;
        height: 1px;
        background: #bdbdbd;
        overflow: visible !important;
      }

      .text {
        font-size: 15px;
        width: 95%;
        height: 30px;
        color: gray;

      }

      .object {
        h4 {
          font-size: 10px;
          font-weight: 700;
          color: #181818;
        }
      }

      .intitule {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-size: 17px;
          font-weight: 700;
          color: #181818;
        }

        p {
          font-size: 17px;
          color: grey;

          img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }

  }

  span {
    width: 95%;
    height: 1px;
    background: #bdbdbd;
  }
}
</style>