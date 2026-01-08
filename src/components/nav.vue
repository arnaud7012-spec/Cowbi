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
.navbar {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: 0.3s;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
}

.nav-links li a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 10;
    flex-direction: column;
    background-color: #333;
    width: 200px;
    padding: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateX(0);
  }
}
</style>
