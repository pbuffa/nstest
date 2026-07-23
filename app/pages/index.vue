<script setup>
const { data: page } = await useAsyncData('home', () =>
  queryCollection('content').path('/').first()
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 py-10">
    <ContentRenderer v-if="page" :value="page" />
    <p v-else>Home not found</p>
  </div>
</template>
