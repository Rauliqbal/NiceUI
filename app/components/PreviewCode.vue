<script setup lang="ts">
import { useShiki } from '~/composable/useShiki';


const props = defineProps<{
  code: string
}>()

const colorMode = useColorMode()
const { highlight } = await useShiki()

const html = computed(() =>
  highlight(props.code, 'html', colorMode.value === 'dark')
)

const items = [
  { label: 'Preview', slot: 'preview' },
  { label: 'Code', slot: 'code' }
]
</script>

<template>
  <UTabs :items="items">
    
    <!-- Preview -->
    <template #preview>
      <div class="p-4 border rounded-lg">
        <slot name="preview" />
      </div>
    </template>

    <!-- Code -->
    <template #code>
      <div
        class="rounded-xl overflow-hidden text-sm"
        v-html="html"
      />
    </template>

  </UTabs>
</template>