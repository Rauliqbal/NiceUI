<template>
  <div class="space-y-8">
    <h2 class="text-xl font-semibold">Alert</h2>

    <div v-for="variant in alertVariants" :key="variant.name" class="space-y-2">

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