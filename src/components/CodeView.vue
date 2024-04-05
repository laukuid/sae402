<script setup>

</script>

<template>
  <main>
    <div class="solution">
      <h1>bravo vous avez trouvez la solution</h1>
      <p>Agnus Dei : Livre des Sacrements <br><br>

        Sacrement 6 : Le Sacrement de l’Agneau <br><br>

        Chapitre I : Consécration par le Sang et la Chair : <br><br>

        Sous le regard omniscient de Dieu, la victime, impure et pécheresse, est choisie avec sagesse et discernement par un Cavalier. Le Haut-Prêtre doit procéder à l’expiation de la victime, en lui tranchant la gorge d’un geste ferme et adroit, le sang récolté dans un réceptacle de pierre et d’os. Tel le fermier qui fauche les blés, les Cavaliers récoltent les âmes impures, pour les sauver de la damnation.
        <br><br>

        “ Litanie du Sang versé” : <br><br>

        Que chaque goutte de sang versée soit une offrande de dévotion, chaque souffrance endurée un pas de plus vers la rédemption. Que la lame qui tranche soit guidée par la main de Dieu, et que l’offrande soit acceptée comme sainte et irrévocable. Que l’âme impure soit purifiée, et que son enveloppe charnelle serve de catalyseur à notre Oeuvre. Puisse le Cavalier s’abreuver et se gorger du sang réjuvénateur, et ainsi rester Eternel..
        <br><br>


        Chapitre II : Communion dans l’Extase <br><br>

        Les membres présents au moment de l’Expiation de l’offrande doivent réciter la Litanie trois fois, avant de procéder à la consommation du Sang et la Chair de l’offrande, afin qu’elle puisse être lavée de ses péchés. Les Cavaliers sont les premiers à pouvoir s’abreuver, et choisissent les morceaux de choix sur l’enveloppe charnelle, comme le cœur, le cerveau et les poumons. Les parties impures comme les reins, les mains et les yeux, sont jetées au feu. Les cendres sont ensuite répandues sur les cheveux des Cavaliers, afin que l’enveloppe entière serve. Rien ne doit être gâché.
        <br><br>


        *Note du Haut-Prêtre : <br><br>

        “Mes très chers frères, mes très chères soeurs, j’ai le regret de vous informer que la Moisson, et le Sacrement de l’Agneau qui s'ensuit, ne prendront désormais place qu'une fois par mois, et ce afin de préserver notre secret, afin de pouvoir continuer à accomplir notre Oeuvre.”
        <br><br>

        Saintement, <br><br>

        Jean Leroux, Haut-Prêtre de la Paroisse.” <br><br>
      </p>
      <img src="@/assets/FauxEnlevement.png" alt="">
    </div>
  </main>
</template>

<style scoped lang="scss">
body {
  background-color: #193c76;

  main {
    display: flex;
    flex-direction: column;
    overflow: auto;
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

    flex-direction: column;

    img{
      width: 320px;
      height: 720px;
    }
    p{
      color: #fff;
      font-size: 20px;
      text-align: center;
      display: flex;
      overflow: auto;
      height: 80vh;
    }
    h1 {
      color: #fff;
      font-size: 30px;
    }
  }
}
</style>