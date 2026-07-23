<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(
  () => `blog-${route.path}`,
  () => queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description
})

function formatDate(value) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <article class="mx-auto max-w-3xl px-5 py-10">
    <NuxtLink to="/blog" class="text-sm text-stone-500 hover:text-stone-900">
      ← All posts
    </NuxtLink>

    <header class="mt-6 mb-8">
      <p class="text-sm text-stone-500">
        <time>{{ formatDate(post.date) }}</time>
        <span v-if="post.author"> · {{ post.author }}</span>
      </p>
      <img
        v-if="post.image?.src"
        :src="post.image.src"
        :alt="post.image.alt || post.title"
        class="mt-4 aspect-[16/9] w-full rounded-lg object-cover"
      >
    </header>

    <ContentRenderer :value="post" />
  </article>
</template>
