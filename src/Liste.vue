<template>
  <div class="cow-list">
    <router-link
      v-for="cow in cows"
      :key="cow.id"
      :to="`/cows/${cow.id}`"
      class="cow-card"
    >
      <img
        :src="`/public/img/${cow.race}.jpg`"
        :alt="cow.nom"
        class="cow-image"
      />
      <div class="overlay">
        <h2>{{ cow.nom }}</h2>
        <p>{{ cow.race }}</p>
      </div>
      <button v-if="cow.added" @click="removeCow(cow.id)">Supprimer</button>
    </router-link>
    
  </div>
  <Cta @click="goToFormulaire">Ajouter</Cta>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cta from './components/cta.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const cows = ref([])

onMounted(async () => {
  try {
    // 1️⃣ Charger le JSON initial
    const response = await fetch('/data.json')
    const initialCows = await response.json()

    // 2️⃣ Charger les vaches ajoutées dans localStorage
    const savedCows = localStorage.getItem('cows')
    const addedCows = savedCows ? JSON.parse(savedCows) : []

    // 3️⃣ Ne garder que les nouvelles vaches (éviter doublons)
    const filteredAddedCows = addedCows.filter(ac => 
      !initialCows.some(ic => ic.id === ac.id)
    )

    // 4️⃣ Combiner initial + nouvelles
    cows.value = [...initialCows, ...filteredAddedCows]
  } catch (err) {
    console.error('Erreur chargement JSON', err)
  }
})

 function goToFormulaire() {
    router.push({ name: 'Formulaire' }) // ou router.push('/liste')
    }
function removeCow(id) {
  // 1️⃣ Filtrer le tableau local pour enlever la vache
  cows.value = cows.value.filter(c => c.id !== id)

  // 2️⃣ Mettre à jour localStorage
  const saved = localStorage.getItem('cows')
  const localCows = saved ? JSON.parse(saved) : []

  const updatedLocalCows = localCows.filter(c => c.id !== id)
  localStorage.setItem('cows', JSON.stringify(updatedLocalCows))
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

.cow-list {
    padding-top: 100px;
    background-color: #A67A60;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.cow-card {
    position: relative;
    overflow: hidden;
    width: 70%;
    border-radius: 12px;
}

.cow-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    right: -5px;
    padding: 12px;
    width: 50%;
    height: 100%;
    background-image: url('/public/img/tache_liste.png');
    background-size: cover;
    background-repeat: no-repeat;
    text-align: end;
    color: white;
}

h2 {
    margin: 0;
    font-size: 1.2rem;
}

p {
    margin: 4px 0 0;
    font-size: 0.9rem;
}
</style>