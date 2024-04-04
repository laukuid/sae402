<template>
  <div class="navbar">
    <div class="status-bar">
      <div class="left-icons">
        <img src="" alt="Signal" class="icon signal">
        <img src="" alt="WiFi" class="icon">
      </div>
      <div class="time">10:21</div>
      <div class="right-icons">
        <img src="" alt="" class="icon battery">
      </div>
    </div>
  </div>

  <div class="message-screen">
    <div class="time">Aujourd'hui 10:17</div>
    <div class="message sender">Salut beaux gosse</div>
    <div class="message sender">Salut beauté</div>
    <div class="message receiver">Bien le bonjour jeune farfadet malicieux</div>
    <div class="message receiver">Ouais mon gars tu vas bien ou quoi?</div>
    <div class="message receiver">Je t'écris ce texte long pour voir ce que cela donne sur plusieurs lignes mon bébou sucré</div>
  </div>

  <div class="input-bar">
    <input type="text" placeholder="Message" class="input-field">
    <button class="send-button">Envoyer</button>
  </div>
</template>

<style>
.navbar {
  background-color: #f9f9f9;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #d1d1d6;
  padding-top: 45px;
}
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
}
.left-icons, .right-icons {
  display: flex;
}
.icon {
  width: 20px;
  height: 20px;
}
.signal {
  margin-right: 5px;
}
.battery {
  margin-left: 5px;
}
.message-screen {
  background: white;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
}
.message {
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 70%;
}
.sender {
  background-color: #e5e5ea;
  margin-right: auto;
}
.receiver {
  background-color: #18e441;
  color: white;
  margin-left: auto;
}
.time {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin: 5px 0;
}
.input-bar {
  display: flex;
  padding: 10px;
  background: #f9f9f9;
  position: fixed;
  bottom: 0;
  width: calc(100% - 40px);
  align-items: center;
}
.input-field {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 20px;
  border: 1px solid #d1d1d6;
}
.send-button {
  padding: 10px 20px;
  background-color: #18e441;
  color: white;
  border-radius: 20px;
}
</style>
