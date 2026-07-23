<template>
  <div class="flex min-h-screen flex-col bg-stone-50 text-stone-900">
    <header class="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <AppHeader />
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
