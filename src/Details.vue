<template>
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

  <p v-else>Chargement...</p>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import initialVaches from '../public/data.json'

const route = useRoute()
const router = useRouter()
const cow = ref(null)

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

// Surveille route.params.id pour recharger automatiquement si l’ID change
watchEffect(() => {
  loadCow()
})
</script>

<style scoped>
.cow-detail {
  min-height: 100vh;
  background-color: #a67a60;
  padding: 96px 20px 40px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* IMAGE PRINCIPALE */
.cow-detail {
  min-height: 100vh;
  background-color: #a67a60;
  padding: 96px 20px 40px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* IMAGE — forme plus organique */
.cow-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 28px 28px 20px 20px; /* asymétrique */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
}

/* BLOC TEXTE — plus discret */
.cow-detail > div {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 16px; /* différent de l’image */
  padding: 16px 18px 18px;
}

/* NOM — bien mis en avant */
.cow-detail h1 {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px; /* éloigne le reste sans excès */
}

/* RACE + ÂGE — plus compact */
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

/* DESCRIPTION — plus proche */
.cow-detail > div > p {
  font-size: 14px;
  line-height: 1.55;
  opacity: 0.88;
}

/* TEXTE CHARGEMENT */
p {
  color: white;
  text-align: center;
  margin-top: 40px;
  opacity: 0.8;
}

</style>