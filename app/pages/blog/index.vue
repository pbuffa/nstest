<script setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

useSeoMeta({
  title: 'Blog',
  description: 'Latest posts'
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
  <div class="mx-auto max-w-3xl px-5 py-10">
    <header class="mb-10">
      <h1 class="text-3xl font-bold tracking-tight">Blog</h1>
      <p class="mt-2 text-stone-600">
        Notes, guides, and field reports.
      </p>
    </header>

    <ul class="space-y-8">
      <li
        v-for="post in posts"
        :key="post.path"
        class="border-b border-stone-200 pb-8 last:border-0"
      >
        <NuxtLink :to="post.path" class="group block">
          <img
            v-if="post.image?.src"
            :src="post.image.src"
            :alt="post.image.alt || post.title"
            class="mb-4 aspect-[16/9] w-full rounded-lg object-cover"
          >
          <p class="text-sm text-stone-500">
            <time>{{ formatDate(post.date) }}</time>
            <span v-if="post.author"> · {{ post.author }}</span>
          </p>
          <h2 class="mt-1 text-2xl font-bold group-hover:underline">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="mt-2 text-stone-600">
            {{ post.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
