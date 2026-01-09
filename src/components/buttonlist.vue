<template>
  <router-link
    :to="{ name: 'CowDetail', params: { id } }"
    class="button-list"
  >
    <svg
      width="36"
      height="36"
      viewBox="0 0 49 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.9707 0.5C40.4172 0.5 48.0752 8.15798 48.0752 17.6045C48.0749 27.0508 40.4171 34.708 30.9707 34.708H17.6045C8.15814 34.708 0.500258 27.0508 0.5 17.6045C0.5 8.15798 8.15798 0.5 17.6045 0.5H30.9707Z"
        fill="#BCBF5A"
      />
      <path
        d="M30.397 11.9879V23.4813M30.397 11.9879H18.9036M30.397 11.9879L16.988 25.3969"
        stroke="#D9D9D9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </router-link>
</template>

<script setup>
defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})
</script>

<style scoped>
.button-list {
  position: absolute;
  bottom: 14px;
  left: 14px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 3;
}
</style>
