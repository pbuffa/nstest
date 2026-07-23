<template>
  <img
    :src="src"
    :alt="alt"
    class="mb-6 w-full max-w-3xl rounded-lg object-cover"
  >
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' }
})
</script>
