<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <header class="py-4 border-b border-gray-200 dark:border-gray-700 mb-10">
    <div class="max-w-4xl mx-auto px-0 py-3">
      <!-- Judul -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        {{ props.title }}
      </h1>

      <p v-if="props.description" class="mb-0 mt-0 text-gray-600 dark:text-gray-400">
        {{ props.description }}
      </p>
    </div>
  </header>
</template>
