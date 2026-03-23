<script setup lang="ts">
import { componentRegistry } from '~/constant/components';
const components = Object.entries(componentRegistry)
</script>

<template>
  <div>
    <section
      class="relative pt-48 pb-40 bg-[#F9F9F9] dark:bg-[#0A0A0A] text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-white/5">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] hero-glow pointer-events-none opacity-40">
      </div>
      <div class="container relative z-10 text-center">


        <h2 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black dark:text-white">
          COMPONENT
          <span class="text-primary">LIBRARY</span><br />
        </h2>

        <p
          class="max-w-2xl mx-auto text-zinc-600 dark:text-gray-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
          Koleksi elemen UI modular yang siap pakai. Didesain dengan presisi untuk membangun interface futuristik dalam
          hitungan detik.
        </p>

        <div class="max-w-3xl mx-auto space-y-8">
          <div class="relative">
            <div class="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Icon name="lucide:search" class="text-zinc-400 dark:text-zinc-500 text-xl" />
            </div>
            <input type="text" placeholder="Search components (e.g. Buttons, Modals, Navbar)..."
              class="w-full h-16 pl-14 pr-6 rounded-2xl bg-white dark:bg-surface border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-primary transition-all">
          </div>

          <div class="flex flex-wrap justify-center gap-2">
            <button class="px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-black transition-all">All</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">Buttons</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">Forms</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">Cards</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">Layouts</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all text-nowrap">Navigation</button>
            <button
              class="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">Modals</button>
          </div>
        </div>

      </div>
    </section>


    <section class="container py-14">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="card" v-for="[key, item] in components" :key="key">
          <NuxtLink :to="`/components/${key}`">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon :name="item.icon" size="24" class="text-primary" />
            </div>
            <div class="flex items-center justify-between gap-2">
              <h4 class="text-2xl font-bold font-cabinet"> {{ item.title }}</h4>
              <UBadge size="xl" class="rounded-full" variant="soft">{{ item.variants }} Components</UBadge>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- <ul class="grid grid-cols-2 gap-4">
      <li v-for="c in components" :key="c">
        <NuxtLink :to="`/docs/components/${c}`">
          <div class="p-4 border rounded hover:bg-gray-50">
            {{ c }}
          </div>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>