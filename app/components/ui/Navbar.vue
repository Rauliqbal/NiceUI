<script setup lang="ts">
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 z-[60] h-20 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Nice UI Tailwind Component" class="h-10">
          <span class="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            NiceUI
          </span>
        </NuxtLink>

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-500 dark:text-gray-400">
          <NuxtLink to="#features" class="hover:text-primary">Features</NuxtLink>
          <NuxtLink to="/components" class="hover:text-primary">Components</NuxtLink>
          <NuxtLink to="#docs" class="hover:text-primary">Docs</NuxtLink>
          <NuxtLink to="#community" class="hover:text-primary">Community</NuxtLink>
        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-3 md:gap-4">
          <UColorModeButton />
          <NuxtLink to="/components" class="hidden md:block w-full bg-primary text-black px-6 py-4 rounded-2xl text-center font-bold">
            Get Started
          </NuxtLink>

          <button
            @click="toggleMenu"
            class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span class="w-6 h-0.5 bg-zinc-900 dark:bg-white"></span>
            <span class="w-6 h-0.5 bg-zinc-900 dark:bg-white"></span>
            <span class="w-6 h-0.5 bg-zinc-900 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- MOBILE MENU -->
    <div
      class="fixed inset-0 z-50 overflow-hidden transition-all duration-300"
      :class="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <!-- BACKDROP -->
      <div
        @click="closeMenu"
        class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        :class="isOpen ? 'opacity-100' : 'opacity-0'"
      ></div>

      <!-- PANEL -->
      <div
        class="absolute right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-[#0A0A0A] shadow-2xl transition-transform duration-300 flex flex-col p-8 pt-24"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col gap-6 text-lg font-bold">
          <a href="#features" @click="closeMenu">Features</a>
          <a href="#showcase" @click="closeMenu">Components</a>
          <a href="#docs" @click="closeMenu">Docs</a>
          <a href="#community" @click="closeMenu">Community</a>
        </div>

        <div class="mt-auto pb-8">
          <a href="#" class="w-full bg-primary text-black px-6 py-4 rounded-2xl text-center font-bold block">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</template>