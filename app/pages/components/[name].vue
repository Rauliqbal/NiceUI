<script setup lang="ts">
import { componentRegistry } from '~/constant/components';

const route = useRoute()
const name = route.params.name as string

const item = componentRegistry[name]
</script>

<template>
  <div v-if="item">
    <div class="flex items-center gap-3 mb-6">
      <component :is="item.icon" class="w-6 h-6" />
      <h1 class="text-2xl font-bold">
        {{ item.title }}
      </h1>
    </div>

    <component :is="item.component" />
  </div>

  <div v-else>
    <h1>Component not found</h1>
  </div>
</template>