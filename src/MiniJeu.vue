<template>
  <section class="Jeu">
    <h1 class="MiniJeu">Trouvez l'intru</h1>

    <div class="regle">
      <div
        v-for="(tache, index) in taches"
        :key="index"
        class="tache"
        :class="{ intrus: tache.etat === true, faux: tache.etat === false }"
        @click="verifier(index)"
        >
        <img src="/img/tache-vache.svg" alt="tache de vache" />
      ></div>
    </div>

    <Cta @click="rejouez">
        Rejouez
    </Cta>

  </section>
</template>

<script setup>
    import { ref } from 'vue'
    import Cta from '@/components/cta.vue'


    const NB_TACHES = 20

    const taches = ref([])
    const intrusIndex = ref(null)

    function genererJeu() {
    intrusIndex.value = Math.floor(Math.random() * NB_TACHES)

    taches.value = Array.from({ length: NB_TACHES }, () => ({
        etat: null
    }))
    }

    function verifier(index) {
    if (taches.value[index].etat !== null) return

    if (index === intrusIndex.value) {
        taches.value[index].etat = true
    } else {
        taches.value[index].etat = false
    }
    }

    function rejouer() {
    genererJeu()
    }

    // random au chargement
    genererJeu()
</script>

<style scoped>
.Jeu {
  width: 375px;
  height: 812px;
  background-color: #A67A60;
  padding: 16px;
  box-sizing: border-box;
}

.MiniJeu {
  text-align: center;
  color: #F2F2F0;
  margin-bottom: 20px;
}

.regle {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  justify-items: center;
}

.tache {
  width: 50px;
  height: 50px;
  background-color: #F2F2F0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
   color: #F2F2F0;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.tache img {
  width: 30px;
  height: 30px;
}

.tache.intrus {
  background-color: #BCBF5A;
}

.tache.faux {
  background-color: #402921;
}

.rejouer {
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #F2F2F0;
  font-weight: bold;
  cursor: pointer;
}
</style>
