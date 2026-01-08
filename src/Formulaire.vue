<template>
  <div class="form-container">
    <h1>Ajouter une vache</h1>
    <form @submit.prevent="addVache">
        <input v-model="nouvelleVache.nom" placeholder="Nom" required />
        <select v-model="nouvelleVache.race" required>
        <option disabled value="">Sélectionner une race</option>
        <option v-for="race in races" :key="race">{{ race }}</option>
      </select>
      <input v-model.number="nouvelleVache.age" type="number" placeholder="Âge" required />
      <textarea v-model="nouvelleVache.description" placeholder="Description"></textarea>
      <button type="submit">Ajouter</button>
    </form>

    <h2>Liste des vaches</h2>
    <ul>
      <li v-for="vache in vaches" :key="vache.id">
        {{ vache.nom }} - {{ vache.race }} - {{ vache.age }} ans
      </li>
    </ul>
  </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue'
    import initialVaches from '../public/data.json'  // JSON initial
    import { useRouter } from 'vue-router'
    

    const router = useRouter()
    const vaches = ref([])  // tableau des vaches affichées
    const races = ['brangus', 'charolaise', 'montbeliarde', 'Limousine']
    const nouvelleVache = reactive({ nom: '', race: '', age: null, description: '' })

    // Charger les vaches depuis localStorage au montage du composant
    onMounted(() => {
    const savedCows = localStorage.getItem('cows')
    if (savedCows) {
        vaches.value = JSON.parse(savedCows)
    } else {
        vaches.value = [...initialVaches]  // copie du JSON initial
    }
    })

    function addVache() {
    const vache = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        nom: nouvelleVache.nom,
        race: nouvelleVache.race,
        age: nouvelleVache.age,
        description: nouvelleVache.description,
        image: '/img/default.jpg', // si besoin pour ta page Liste
        added: true,
        
    }

    vaches.value.push(vache)

    // sauvegarder les nouvelles vaches dans localStorage pour que Liste.vue les voie
    localStorage.setItem('cows', JSON.stringify(vaches.value))

    // reset formulaire
    nouvelleVache.nom = ''
    nouvelleVache.race = ''
    nouvelleVache.age = null
    nouvelleVache.description = ''

    router.push('/liste')
    }
    
</script>

<style scoped>
    .form-container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #A67A60;
    padding: 20px;
    border-radius: 12px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

input, select, textarea {
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
    border-radius: 8px;
    border: none;
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

h1, h2 {
    margin: 0 0 10px 0;
}
</style>