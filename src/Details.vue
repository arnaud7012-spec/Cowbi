<template>
  <div v-if="cow" class="cow-detail">
    <img :src="cow.image" :alt="cow.nom" />
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const cow = ref(null)

onMounted(async () => {
  const res = await fetch('/data.json')
  const cows = await res.json()

  cow.value = cows.find(c => c.id === Number(route.params.id))
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

/* Image principale */
.cow-detail img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 24px;
  background-color: #e0e0e0;
}

/* Nom */
.cow-detail h1 {
  font-size: 28px;
  letter-spacing: 2px;
  margin-bottom: 6px;
  text-transform: uppercase;
}

/* Race + âge */
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