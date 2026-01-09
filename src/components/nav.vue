<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">MonApp</router-link>
      </div>
      <button class="burger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
        <li><router-link to="/liste" @click="closeMenu">Liste</router-link></li>
        <li><router-link to="/formulaire" @click="closeMenu">Formulaire</router-link></li>
        <li><router-link to="/minijeu" @click="closeMenu">Mini-Jeu</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
/* NAVBAR GLOBALE */
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100px;
  z-index: 1000; /* AU-DESSUS DE TOUT */
}


/* CONTENEUR */
.nav-container {
  position: relative;
  width: 100%;
  height: 100%;
}


/* LOGO (optionnel, discret) */
.logo {
  position: absolute;
  top: 24px;
  left: 20px;
  pointer-events: auto;
}

.logo a {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
}

/* TACHE MENU */
.nav-container::after {
  content: "";
  position: absolute;
  top: -20px;
  right: -20px;
  width: 220px;
  height: 160px;
  background-image: url('@/assets/tachemenu.svg'); /* ou .png */
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  pointer-events: none; /* déco seulement */
}


/* BURGER */
.burger {
  position: absolute;
  top: 36px;
  right: 44px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2; /* AU-DESSUS DE LA TACHE */
}


.burger span {
  width: 26px;
  height: 3px;
  background-color: #a67a60;
  border-radius: 2px;
  transition: 0.3s;
}

/* Animation burger */
.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* LIENS */
.nav-links {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  max-width: 260px;
  padding: 120px 24px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: #402921;
  background-image: url('/assets/tachemenu.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 80%;

  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 90;
}

/* Menu ouvert */
.nav-links.open {
  transform: translateX(0);
}

/* Liens */
.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nav-links li a.router-link-active {
  font-weight: bold;
}

/* Desktop (menu caché si besoin plus tard) */
@media (min-width: 769px) {
  .nav-links {
    display: none;
  }
}

</style>
