<template>
  <!-- BOUTON RETOUR STYLE APP -->
  <button class="back-button" @click="goBack" aria-label="Retour">
    <span class="arrow">
      <span></span>
      <span></span>
    </span>
  </button>

  <!-- DÉTAIL DE LA VACHE -->
  <div v-if="cow" class="cow-detail">
    <img
      :src="`/public/img/${cow.race}.jpg`"
      :alt="cow.nom"
      class="cow-image"
    />
    <div>
      <h1>{{ cow.nom }}</h1>
      <div class="ligne">
        <p>{{ cow.race }}.</p>
        <p>{{ cow.age }} ans</p>
      </div>
      <p>{{ cow.description }}</p>
    </div>
  </div>

  <!-- TEXTE CHARGEMENT -->
  <p v-else>Chargement...</p>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import initialVaches from '../public/data.json'

const route = useRoute()
const router = useRouter()
const cow = ref(null)

// Fonction pour le bouton retour
function goBack() {
  router.push('/liste')
}

// Charger la vache depuis ID
function loadCow() {
  const saved = localStorage.getItem('cows')
  const localCows = saved ? JSON.parse(saved) : []
  const allCows = [...initialVaches, ...localCows]

  const found = allCows.find(c => c.id === Number(route.params.id))

  if (!found) {
    router.replace('/liste') // redirection si la vache n’existe pas
  } else {
    cow.value = found
  }
}

// Recharger si l’ID change
watchEffect(() => {
  loadCow()
})
</script>

<style scoped>
/* BOUTON RETOUR STYLE APP */
.back-button {
  position: fixed;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 9999;
  pointer-events: auto;
}

/* FLÈCHE 2 LIGNES */
.arrow {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
}

.arrow span {
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: white;
  top: 50%;
  left: 0;
  transform-origin: left center;
}

.arrow span:first-child {
  transform: rotate(45deg) translateY(-50%);
}

.arrow span:last-child {
  transform: rotate(-45deg) translateY(-50%);
}

.back-button:hover .arrow span {
  background-color: #f2f2f0;
}

/* RESTE DU DETAIL */
.cow-detail {
  min-height: 100vh;
  background-color: #a67a60;
  padding: 190px 20px 40px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cow-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 28px 28px 20px 20px; /* forme plus organique */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
}

.cow-detail > div {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 16px 18px 18px;
}

.cow-detail h1 {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.ligne {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.ligne p {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
}

.cow-detail > div > p {
  font-size: 14px;
  line-height: 1.55;
  opacity: 0.88;
}

p {
  color: white;
  text-align: center;
  margin-top: 40px;
  opacity: 0.8;
}
</style>
