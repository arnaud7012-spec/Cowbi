<template>
  <div class="accueil">

    <!-- Contenu central -->
    <div class="content">
      <p class="subtitle">AU COEUR DES PRAIRIES</p>

      <h1>
        L'APPLICATION QUI rassemble,<br />
        explore ET célèbre<br />
        TOUTES VOS VACHES.
      </h1>

        <Cta @click="goToCowLis">
            Découvrir
        </Cta>
    </div>
  </div>
</template>


<script setup>
    import { useRouter } from 'vue-router'
    import Cta from './components/cta.vue'

    const router = useRouter()

    function goToCowLis() {
    router.push({ name: 'CowList' }) // ou router.push('/liste')
    }
</script>

<style scoped>
.accueil {
  min-height: 100vh;
  background-image: url('/img/accueil.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  padding: 24px;
  display: flex;
  align-items: center;
}

/* Overlay léger pour lisibilité */
.accueil::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

/* Burger */
.burger {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 2;
}

.burger span {
  display: block;
  width: 24px;
  height: 3px;
  background: #c08b6a;
  margin-bottom: 5px;
  border-radius: 2px;
}

/* Contenu */
.content {
  position: relative;
  z-index: 1;
  max-width: 320px;
}

.subtitle {
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 16px;
  opacity: 0.9;
}

h1 {
  font-size: 22px;
  line-height: 1.4;
  margin-bottom: 24px;
  text-transform: uppercase;
}


</style>

