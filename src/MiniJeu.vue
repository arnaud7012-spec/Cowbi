<template>
  <section class="Jeu">
    <h1 class="MiniJeu">Trouvez l'intru</h1>

    <!-- Si le jeu n'a pas commencé -->
    <div v-if="!jeuEnCours" class="ecran-demarrage">
      <Cta @click="commencer">Commencer</Cta>
    </div>

    <!-- Jeu actif -->
    <div v-else>
      <!-- Chrono -->
      <p class="chrono">Temps restant : {{ secondes }}</p>
      <p class="chances">Chances restantes : {{ chances }}</p>

      <div class="regle">
        <div
          v-for="(tache, index) in taches"
          :key="index"
          class="tache"
          :class="{ intrus: tache.etat === true, faux: tache.etat === false }"
          @click="verifier(index)"
        >
          <img
            :src="tacheVache"
            :style="{ transform: tache.transform }"
            alt="tache de vache"
          />
        </div>
      </div>

      <!-- Bouton Rejouer seulement à la fin -->
    <div v-if="jeuTermine" class="rejouer">
        <Cta @click="rejouer">Rejouez</Cta>
    </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Cta from '@/components/cta.vue'
import tacheVache from '@/assets/tachevache.svg'

const NB_TACHES = 54
const taches = ref([])
const intrusIndex = ref(null)
const chances = ref(3)
const jeuTermine = ref(false)
const jeuEnCours = ref(false)

const secondes = ref(30)
let timer = null

function genererJeu() {
  intrusIndex.value = Math.floor(Math.random() * NB_TACHES)

  taches.value = Array.from({ length: NB_TACHES }, (_, i) => {
    const isIntrus = i === intrusIndex.value
    return {
      etat: null,
      transform: isIntrus
        ? `rotate(${Math.random()*360}deg) scale(${0.8 + Math.random()*0.4}) skew(${-15 + Math.random()*30}deg, ${-15 + Math.random()*30}deg)`
        : 'none'
    }
  })
}

function verifier(index) {
  if (jeuTermine.value) return
  if (taches.value[index].etat !== null) return

  if (index === intrusIndex.value) {
    taches.value[index].etat = true
    finJeu()
  } else {
    taches.value[index].etat = false
    chances.value--
    if (chances.value <= 0) finJeu()
  }
}

function finJeu() {
  jeuTermine.value = true
  clearInterval(timer)
}

function commencer() {
  clearInterval(timer) // Nettoyer l'ancien timer si présent
  jeuEnCours.value = true
  chances.value = 3
  secondes.value = 30
  jeuTermine.value = false
  genererJeu()

  // lancer le chrono
  timer = setInterval(() => {
    if (!jeuTermine.value) {
      secondes.value--
      if (secondes.value <= 0) {
        finJeu()
      }
    }
  }, 1000)
}

function rejouer() {
  clearInterval(timer) // Arrêter le timer avant de revenir à l'accueil
  jeuEnCours.value = false
  jeuTermine.value = false
  chances.value = 3
  secondes.value = 30
}

// Nettoyer le timer si on quitte la page
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
h1{
  margin-top: 20%;
}
.Jeu {
  width: 100%;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  background-color: #A67A60;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.MiniJeu {
  text-align: center;
  color: #F2F2F0;
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.chrono, .chances {
  text-align: center;
  color: #F2F2F0;
  margin-bottom: 8px;
}

.regle {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 8px;
  justify-items: center;
  flex: 1;
}

.tache {
  width: 50px;
  height: 50px;
  background-color: #F2F2F0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 1;
}

.tache img {
  width: 30px;
  height: 30px;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.tache.intrus {
  background-color: #BCBF5A;
}

.tache.faux {
  background-color: #402921;
}

.rejouer {
  display: flex;
  justify-content: center; /* centre horizontalement */
  align-items: flex-start; /* haut du conteneur, laisse un espace */
  margin-top: 24px;        /* espace au-dessus */
  flex-shrink: 0;
}

.ecran-demarrage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style>
