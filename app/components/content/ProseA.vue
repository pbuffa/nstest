<template>
  <a
    :href="href"
    class="font-medium text-stone-900 underline underline-offset-2 hover:text-stone-600"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true }
})
</script>
