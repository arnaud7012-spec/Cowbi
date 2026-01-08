<script setup>
  import { ref } from 'vue'
  import Liste from './Liste.vue'
  import NavBar from './components/nav.vue'
</script>

<template>
  <NavBar />
  <div class="main-content">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: 'Comic CAT';
  src: url('./assets/font/Comic_CAT.otf') format('opentype');
}

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Comic CAT', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    overflow: auto;
  }
</style>
