<template>
  <div class="accueil">
    <div id="logo">
        <img src="" alt="Logo de Cowbi">
    </div>
    <!-- Contenu central -->
    <div class="texte">
      <p class="subtitle">AU COEUR DES PRAIRIES</p>

      <h2>
        L'APPLICATION QUI rassemble,<br />
        explore ET célèbre<br />
        TOUTES VOS VACHES.
      </h2>

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
    display: flex;
    justify-content: center;
    height: 100vh;
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
    texte: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
}

#logo {
  position: absolute;
    top: 25%;
    width: 120px;
    height: auto;
    z-index: 1;
}

/* Contenu */
.texte {
  position: relative;
  z-index: 1;
  max-width: 320px;
  display: flex;
  flex-direction: column; /* empile les éléments verticalement */
  align-items: center;    /* centre horizontalement tout le contenu */
  text-align: center;     /* centre le texte */
  gap: 16px;              /* espace entre subtitle, h2 et bouton */
}

.subtitle {
  font-size: 12px;
  letter-spacing: 2px;
  opacity: 0.9;
  margin: 0;
}

h2 {
  font-size: 19px;
  line-height: 1.4;
  text-transform: uppercase;
  margin: 0;
}

.cta-button { /* si tu veux ajuster le bouton */
  margin-top: 16px; /* espace au-dessus du bouton */
}



</style>

