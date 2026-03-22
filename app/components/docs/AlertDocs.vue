<script setup lang="ts">
const variants = [
  {
    name: 'Info',
    color: 'blue',
    description: 'alert 1',
    code: `<div class="p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <p class="text-blue-800 dark:text-blue-200 font-medium">This is an informational alert message.</p>
  </div>
</div>`
  },
  {
    name: 'Success',
    color: 'green',
    description: 'alert 2',
    code: `<div class="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800">
  <div class="flex items-center gap-3">
    <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <p class="text-green-800 dark:text-green-200 font-medium">Success! Your changes have been saved.</p>
  </div>
</div>`
  },
  {
    name: 'Warning',
    color: 'yellow',
    description: 'alert 1',
    code: `<UAlert
  title="Warning"
  description="Be careful with this action"
  color="yellow"
/>`
  },
  {
    name: 'Error',
    color: 'red',
    description: 'alert 1',
    code: `<UAlert
  title="Error"
  description="Something went wrong"
  color="red"
/>`
  }
]
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-xl font-semibold">Alert</h2>

    <div v-for="variant in variants" :key="variant.name" class="space-y-2">

      <h3 class="font-medium">{{ variant.name }}</h3>
      <p>{{ variant.description }}</p>

      <PreviewCode :code="variant.code">
        <template #preview>
          <div v-html="variant.code"></div>
        </template>
      </PreviewCode>

    </div>
  </div>
</template>