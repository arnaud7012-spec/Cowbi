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
      <Cta type="submit">Ajouter</Cta>
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
    import Cta from './components/cta.vue'
    

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
  max-width: 480px;
  padding: 24px;
  background: #A67A60;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Titres */
h1 {
  text-align: center;
  font-size: 22px;
  color: #F2F2F0;
  margin-top: 20%;
}

h2 {
  font-size: 18px;
  color: #F2F2F0;
  margin-top: 12px;
}

/* Formulaire */
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
select,
textarea {
  padding: 12px 14px;
  font-size: 14px;
  border-radius: 999px;
  border: 1px solid #d4d4d4;
  outline: none;
  background: white;
}

textarea {
  border-radius: 16px;
  resize: none;
  min-height: 80px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #b8c85a;
}

/* Bouton */
.cta-button { /* si tu veux ajuster le bouton */
  margin-top: 16px; /* espace au-dessus du bouton */
  margin-left: 27%;
}

/* Liste des vaches */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  background: white;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 14px;
  color: #2f3b1f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

</style>