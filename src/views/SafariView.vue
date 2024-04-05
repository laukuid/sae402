<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>

<div class="app-container">
<div class="app-window">
  <div class="app-header">Centre Hospitalier...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Google</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Favoris</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Démarrage</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Nous mettons à jour...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Stage développeur We...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Inscription Crée t...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Redirection</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Merci pour votre ach...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Sac à Dos Homme...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">FANDARE Antivol...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Nous trouvez</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Track My Order</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Suivez votre col...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Track My Order</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Track My Order</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Track My Order</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">SpaizTwitch...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">SaykoTwitch...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">air up Tracking</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">webapp.gls...</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
<div class="app-window">
  <div class="app-header">Twitch</div>
  <div class="app-content"><img src="img/safari.png" alt="App content" style="width: 100%; height: auto;"></div>
</div>
</div>

<div class="bottom-bar">
<button>Privée</button>
<span>127 onglets</span>
<button>OK</button>
</div>

<style scoped lang="scss">

body {
margin: 0;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
background: #e0e0e0;
}
.time-bar {
position: fixed;
top: 0;
width: 100%;
background: #000;
color: white;
text-align: center;
padding: 10px 0;
font-size: 1.2rem;
z-index: 10;
}
.app-container {
display: flex;
flex-wrap: wrap;
padding-top: 50px;
justify-content: space-evenly;
margin-bottom: 50px;
}
.app-window {
width: calc(50% - 20px);
margin: 10px;
background: #fff;
border-radius: 20px;
box-shadow: 0 4px 8px rgba(0,0,0,0.2);
overflow: hidden;
position: relative;
}
.app-header {
background: #f9f9f9;
padding: 8px;
border-bottom: 1px solid #ccc;
text-align: center;
position: absolute;
width: 100%;
top: 0;
}
.app-content {
padding: 10px;
height: 200px;
overflow-y: auto;
margin-top: 40px;
}
.bottom-bar {
position: fixed;
bottom: 0;
width: 100%;
padding: 10px 0;
background: #f9f9f9;
border-top: 1px solid #ccc;
text-align: center;
z-index: 10;
}
.bottom-bar button, .bottom-bar span {
margin: 0 5px;
padding: 5px 10px;
background: #ddd;
border: none;
border-radius: 5px;
}
</style>