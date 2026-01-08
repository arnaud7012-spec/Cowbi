<script setup>
  import { ref } from 'vue'
  import Liste from './Liste.vue'
  import NavBar from './components/nav.vue'
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
