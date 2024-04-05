<script setup>
import { RouterLink, RouterView, useRouter  } from 'vue-router'
</script>
<template>
  <div class="gallery">

    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image"onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image" onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image" onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image" onclick="openModal(this)">
    </div>
    <div class="photo">
      <img src="../assets/safari.png" alt="Description for image" onclick="openModal(this)">
    </div>
  </div>
  <div class="bottom-bar">
    <button><img src="../assets/phototheque.png" alt="Photo Icon">Photothèque</button>
    <button><img src="../assets/vous.png" alt="You Icon">Pour vous</button>
    <button id="photo"><img src="../assets/albums.png" alt="Album Icon">Albums</button>
    <button><img src="../assets/rechercher.png" alt="Search Icon">Rechercher</button>
  </div>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <img id="modalImage" src="" style="width: 100%">
    </div>
  </div>

</template>
<style scoped lang="scss">
.status-bar {
  background-color: #f8f8f7;
  padding: 5px 10px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.date {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px 0;
}
.gallery {
  padding-top: 35px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 110px;
  overflow: auto;
}
.photo {
  width: calc(33.333% - 4px);
  margin: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  width: 100%;
  height: auto;
  display: block;
  background-color: grey;
}

.photo label {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 5px;
  font-size: 0.8em;
  box-sizing: border-box;
}
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
}
.bottom-bar button {
  background: none;
  border: none;
  padding: 10px;
  font-size: 1em;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
.modal-content {
  margin: 10% auto; /* 10% from the top and centered */
  padding: 20px;
  width: 80%; /* Could be more or less, depending on screen size */
  max-width: 700px; /* Maximum width */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#photo{
  color: blue;
}
.date-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  z-index: 10;
}
</style>
<script>
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modalImg.src = img.src;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
</script>