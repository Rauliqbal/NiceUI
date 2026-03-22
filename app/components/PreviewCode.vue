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

const copied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <UTabs :items="items">

    <!-- Preview -->
    <template #preview>
      <div class="card">
        <slot name="preview" />
      </div>
    </template>

    <!-- Code -->
    <template #code>
      <div class="relative group">
        <!-- Button Copy -->
        <button @click="copyCode"
          class="absolute top-2 right-2 flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-xs font-bold text-zinc-600 dark:text-gray-400 hover:text-primary transition-all active:scale-95">
          <Icon name="lucide:copy" />  {{ copied ? 'Copied!' : 'Copy' }}
        </button>

        <!-- Code -->
        <div class="text-sm">
          <div v-html="html" />
        </div>
      </div>
    </template>
  </UTabs>
</template>