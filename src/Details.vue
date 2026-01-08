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
  background-color: #A67A60;
  padding: 24px;
  color: white;
  font-family: sans-serif;
}

.cow-detail img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 24px;
  background-color: #e0e0e0;
}

.cow-detail h1 {
  font-size: 28px;
  letter-spacing: 2px;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.cow-detail p {
  font-size: 14px;
  opacity: 0.9;
}

.ligne {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
</style>