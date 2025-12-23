<template>
  <div class="cow-list">
    <div
      v-for="cow in cows"
      :key="cow.id"
      class="cow-card"
    >
      <img
        :src="cow.image"
        :alt="cow.name"
        class="cow-image"
      />

      <div class="overlay">
        <h2>{{ cow.nom }}</h2>
        <p>{{ cow.race }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cows = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    cows.value = await response.json()
  } catch (err) {
    console.error('Erreur chargement JSON', err)
  }
})
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
    background-size: cover  ;
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