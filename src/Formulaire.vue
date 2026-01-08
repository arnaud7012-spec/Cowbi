<template>
  <div class="form-container">
    <h1>Ajouter une vache</h1>
    <form @submit.prevent="addVache">
      <!-- Nom -->
      <label for="nom">Nom </label>
      <input id="nom" v-model="nouvelleVache.nom" type="text" required />

      <!-- Race -->
      <label for="race">Race </label>
      <select id="race" v-model="nouvelleVache.race" required>
        <option disabled value="">Sélectionnez une race</option>
        <option v-for="race in races" :key="race" :value="race">{{ race }}</option>
      </select>

      <!-- Âge -->
      <label for="age">Âge </label>
      <input id="age" v-model.number="nouvelleVache.age" type="number" min="0" required />

      <!-- Description -->
      <label for="description">Description </label>
      <textarea id="description" v-model="nouvelleVache.description"></textarea>

      <button type="submit">Ajouter</button>
    </form>

    <h2>Liste des vaches</h2>
    <ul>
      <li v-for="vache in vaches" :key="vache.id">
        <strong>{{ vache.nom }}</strong> - {{ vache.race }} - {{ vache.age }} ans
        <p>{{ vache.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Tableau JSON local
const vaches = ref([])

// Races disponibles
const races = ['Holstein', 'Charolaise', 'Montbéliarde', 'Limousine']

// Objet pour stocker la nouvelle vache
const nouvelleVache = reactive({
  nom: '',
  race: '',
  age: null,
  description: ''
})

// Fonction pour générer un id unique
function genererId() {
  return Date.now() + Math.floor(Math.random() * 1000)
}

// Fonction pour ajouter une vache
function addVache() {
  const vache = {
    id: genererId(),
    nom: nouvelleVache.nom,
    race: nouvelleVache.race,
    age: nouvelleVache.age,
    description: nouvelleVache.description
  }

  vaches.value.push(vache)

  // Reset du formulaire
  nouvelleVache.nom = ''
  nouvelleVache.race = ''
  nouvelleVache.age = null
  nouvelleVache.description = ''
}
</script>

<style scoped>

.body {
  margin: 0;
  padding: 0;
}

.form-container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #A67A60;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 15px;
}

input, select, textarea {
  padding: 0.5rem;
  font-size: 1rem;
  width: 60%;
  border-radius: 8px;
  border: none
}

button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}

label {
    margin-top: 20px;
}
</style>