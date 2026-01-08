import { ref } from 'vue'
import initialVaches from '../public/data.json'

// Tableau réactif de vaches
export const vaches = ref([])

// Charger les données initiales depuis JSON ou localStorage
const savedVaches = localStorage.getItem('vaches')
if (savedVaches) {
  vaches.value = JSON.parse(savedVaches)
} else {
  vaches.value = [...initialVaches] // copie du JSON
}

// Fonction pour ajouter une vache
export function addVache(vache) {
  vache.id = Date.now() + Math.floor(Math.random() * 1000)
  vaches.value.push(vache)
  // Sauvegarde dans localStorage
  localStorage.setItem('vaches', JSON.stringify(vaches.value))
}