<template>
  <button @click="$emit('click')" class="cta-button">
    <!-- SVG importé depuis Figma -->
    <svg width="158" height="35" viewBox="0 0 158 35" xmlns="http://www.w3.org/2000/svg">
      <path
        :fill="color"
        d="M127.165 0C127.573 0 127.803 0.62005 127.575 0.958008C127.01 1.79554 126.716 2.88407 126.688 3.94922C126.66 5.0134 126.895 6.11242 127.454 6.96191C128.025 7.83042 128.932 8.42565 130.16 8.42578C131.817 8.4258 132.793 8.85432 133.369 9.3877C133.831 9.81538 134.077 10.3504 134.189 10.896C134.241 11.1501 134.237 11.4116 134.231 11.671C134.199 13.1832 134.517 14.2987 135.105 15.083C135.755 15.9494 136.678 16.3359 137.607 16.4521C138.529 16.5673 139.485 16.4221 140.279 16.2031C141.045 15.9918 141.707 15.6977 142.084 15.4551C143.809 14.4965 145.646 14.5823 147.136 14.9795C147.878 15.1775 148.523 15.4502 149.005 15.6973C149.245 15.8206 149.443 15.9359 149.589 16.0303C149.662 16.0775 149.72 16.1189 149.764 16.1514C149.785 16.1675 149.802 16.1803 149.814 16.1904C149.824 16.1988 149.83 16.2038 149.831 16.2051L149.84 16.2139L149.849 16.2217C150.948 17.2207 151.455 18.0826 151.658 18.8203C151.86 19.554 151.775 20.2225 151.583 20.8721C151.486 21.2005 151.363 21.5187 151.235 21.8408C151.111 22.1553 150.978 22.4845 150.88 22.8037C150.682 23.447 150.586 24.1674 151.008 24.8701C152.446 27.2666 154.268 28.2296 156.126 28.1758C156.877 28.1539 157.684 29.2265 157.129 29.7332C154.088 32.5125 150.04 34.208 145.596 34.208H17.1045C7.65814 34.208 0.000257712 26.5508 0 17.1045C0.000253383 7.6582 7.65814 0 17.1045 0H127.165Z"
      />
    </svg>
    <span class="button-text"><slot>Découvrir</slot></span>
  </button>
</template>

<script setup>
defineProps({
  color: { type: String, default: "#BCBF5A" } // couleur du SVG
})
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/comiccat'); /* ComicCAT */

.cta-button {
  position: relative;
  width: 158px;   /* largeur du SVG */
  height: 35px;   /* hauteur du SVG */
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center; /* texte centré */
  transition: transform 0.2s ease, filter 0.2s ease;
}

.cta-button:hover {
  transform: scale(1.05); /* léger effet hover */
  filter: brightness(1.1);
}

.cta-button svg {
  position: absolute;
  top: 0;
  left: 0;
}

.button-text {
  position: relative; /* superposé sur le SVG */
  font-family: 'ComicCAT', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #F2F2F0; 
  pointer-events: none; /* pour que le clic passe au bouton */
  z-index: 1;
}
</style>
