import { createRouter, createWebHistory } from 'vue-router'

// Pages
import CowList from '../Liste.vue'
import CowDetail from '../Details.vue'
import Accueil from '../Accueil.vue'
import Formulaire from '../Formulaire.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/liste',
      name: 'CowList',
      component: CowList
    },
    {
      path: '/cows/:id',
      name: 'CowDetail',
      component: CowDetail
    },
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/formulaire',
      name: 'Formulaire',
      component: Formulaire
    }
  ]
})
export default router