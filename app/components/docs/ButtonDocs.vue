<script setup lang="ts">
useHead({
  title: 'Buttons - Nice UI'
})
</script>
<template>
  <div class="space-y-8">
    <div v-for="variant in buttonVariants" :key="variant.name" class="space-y-2">

      <h3 class="text-xl font-bold">{{ variant.name }}</h3>
      <p>{{ variant.description }}</p>
      
      <PreviewCode :code="variant.code">
        <template #preview>
          <div v-html="variant.code"></div>
        </template>
      </PreviewCode>
      <p class="text-sm text-gray-400">Contributed by <NuxtLink :to="variant.github" target="_blank" class="font-bold hover:underline">{{ variant.author }}</NuxtLink></p>
    </div>
  </div>
</template>