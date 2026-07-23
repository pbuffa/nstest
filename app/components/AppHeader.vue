<script setup>
const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/blog', label: 'Blog', exact: false }
]
</script>

<template>
  <nav class="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
    <NuxtLink
      to="/"
      class="text-base font-semibold tracking-tight text-stone-900"
    >
      nstest
    </NuxtLink>

    <ul class="flex items-center gap-1">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="rounded-md px-3 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
          :active-class="link.exact ? '' : 'bg-stone-100 text-stone-900'"
          exact-active-class="bg-stone-100 text-stone-900"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
