<template>
  <div class="cow-list">
    <h2>Nos vaches</h2>
    <div
      v-for="cow in cows"
      :key="cow.id"
      class="cow-card"
    >
      <!-- Image cliquable -->
      <router-link :to="`/cows/${cow.id}`">
        <img
          :src="`/public/img/${cow.race}.jpg`"
          :alt="cow.nom"
          class="cow-image"
        />
      </router-link>

      <!-- Overlay -->
      <div class="overlay">
        <h2>{{ cow.nom }}</h2>
        <p>{{ cow.race }}</p>
      </div>

      <!-- Bouton détail -->
      <ButtonList :id="cow.id" />

      <!-- Bouton suppression (uniquement si ajoutée) -->
      <ButtonList
        v-if="cow.added"
        type="delete"
        @delete="removeCow(cow.id)"
      />

    </div>
  </div>

  <!-- CTA Ajouter -->
  <Cta class="cta" @click="goToFormulaire">Ajouter</Cta>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Cta from './components/cta.vue'
import ButtonList from './components/buttonlist.vue'

const router = useRouter()
const cows = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    const initialCows = await response.json()

    const savedCows = localStorage.getItem('cows')
    const addedCows = savedCows ? JSON.parse(savedCows) : []

    const filteredAddedCows = addedCows.filter(ac =>
      !initialCows.some(ic => ic.id === ac.id)
    )

    cows.value = [...initialCows, ...filteredAddedCows]
  } catch (err) {
    console.error('Erreur chargement JSON', err)
  }
})

function goToFormulaire() {
  router.push({ name: 'Formulaire' })
}

function removeCow(id) {
  cows.value = cows.value.filter(c => c.id !== id)

  const saved = localStorage.getItem('cows')
  const localCows = saved ? JSON.parse(saved) : []

  const updatedLocalCows = localCows.filter(c => c.id !== id)
  localStorage.setItem('cows', JSON.stringify(updatedLocalCows))
}
</script>

<style scoped>
  h2 {
  text-align: center;
  font-size: 22px;
  color: #F2F2F0;
  margin-top: -15%;
}
/* Fond général */
.cow-list {
  min-height: 100vh;
  padding: 135px 20px 140px;
  background-color: #a67a60;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* Carte */
.cow-card {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 160px;
  border-radius: 20px;
  overflow: hidden;
}

/* Image */
.cow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Tache */
.overlay {
  position: absolute;
  top: 0;
  right: -6px;
  width: 40%;
  height: 100%;
  background-image: url('/public/img/tache_liste.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  color: white;
  z-index: 2;
}

/* Texte */
.overlay h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.overlay p {
  margin-top: 6px;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.9;
}

/* Bouton supprimer */
.delete-btn {
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #e74c3c;
  border: none;
  cursor: pointer;
  z-index: 3;
}

/* CTA */
.cta {
  position: fixed;
  bottom: 32px;
  left: 30%;
  z-index: 10;
}

</style>
