<template>
  <!-- MODE NAVIGATION -->
  <router-link
    v-if="type === 'link'"
    :to="{ name: 'CowDetail', params: { id } }"
    class="button-list link"
  >
    <!-- SVG DETAIL -->
    <svg width="36" height="36" viewBox="0 0 49 36" fill="none">
      <path
        d="M30.9707 0.5C40.4172 0.5 48.0752 8.15798 48.0752 17.6045C48.0749 27.0508 40.4171 34.708 30.9707 34.708H17.6045C8.15814 34.708 0.500258 27.0508 0.5 17.6045C0.5 8.15798 8.15798 0.5 17.6045 0.5H30.9707Z"
        fill="#BCBF5A"
      />
      <path
        d="M30.397 11.9879V23.4813M30.397 11.9879H18.9036M30.397 11.9879L16.988 25.3969"
        stroke="#D9D9D9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </router-link>

  <!-- MODE SUPPRESSION -->
<button
  v-else
  class="button-list delete"
  @click="$emit('delete')"
>
  <svg
    width="36"
    height="36"
    viewBox="0 0 49 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- FOND -->
    <path
      d="M17.6045 0.5C8.15798 0.5 0.5 8.15798 0.5 17.6045C0.500258 27.0508 8.15814 34.708 17.6045 34.708H30.9707C40.4171 34.708 48.0749 27.0508 48.0752 17.6045C48.0752 8.15798 40.4172 0.5 30.9707 0.5H17.6045Z"
      fill="#BF5A5C"
    />

    <!-- CONTOUR -->
    <path
      d="M0.5 17.6045L0 17.6045V17.6045H0.5ZM48.0752 17.6045H48.5752V17.6045L48.0752 17.6045Z"
      fill="#BF5A5C"
    />

    <!-- ICÔNE POUBELLE -->
    <path
      d="M31.7917 9.5H27.5417V8.375C27.5417 7.87772 27.3551 7.40081 27.023 7.04917C26.6909 6.69754 26.2405 6.5 25.7708 6.5H22.2292C21.7595 6.5 21.3091 6.69754 20.977 7.04917C20.6449 7.40081 20.4583 7.87772 20.4583 8.375V9.5H16.2083C16.0205 9.5 15.8403 9.57902 15.7075 9.71967C15.5746 9.86032 15.5 10.0511 15.5 10.25C15.5 10.4489 15.5746 10.6397 15.7075 10.7803C15.8403 10.921 16.0205 11 16.2083 11H16.9609L17.8021 25.2931C17.8649 26.5517 18.776 27.5 19.9271 27.5H28.0729C29.2297 27.5 30.1227 26.5728 30.1979 25.2969L31.0391 11H31.7917C31.9795 11 32.1597 10.921 32.2925 10.7803C32.4254 10.6397 32.5 10.4489 32.5 10.25C32.5 10.0511 32.4254 9.86032 32.2925 9.71967C32.1597 9.57902 31.9795 9.5 31.7917 9.5Z"
      fill="#F2F2F0"
    />
  </svg>
</button>

</template>

<script setup>
defineProps({
  id: Number,
  type: {
    type: String,
    default: 'link' // 'link' | 'delete'
  }
})

defineEmits(['delete'])
</script>

<style scoped>
.button-list {
  position: absolute;
  bottom: 14px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 5;
}

.link {
  left: 14px;
}

.delete {
  right: 14px;
}
</style>
