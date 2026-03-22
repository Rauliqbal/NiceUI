<script setup lang="ts">
import { componentRegistry } from '~/constant/components';

const route = useRoute()
const name = route.params.name as string

const item = componentRegistry[name]
</script>

<template>
  <div class="relative pt-24 pb-20 px-6 max-w-7xl mx-auto z-10">
    <NuxtLink to="/components" id="back-to-library-link"
      class="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
      <Icon name="lucide:chevron-left" /> Back to Library
    </NuxtLink>

    <h2 class="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tight mb-3">
      {{ item.title }} Components
    </h2>
    <p class="text-zinc-600 dark:text-gray-400 font-medium leading-relaxed">{{ item.description }}</p>

    <div v-if="item">
      <div class="mt-10">
        <component :is="item.component"  />
      </div>
    </div>

    <div v-else>
      <h1>Component not found</h1>
    </div>
  </div>
</template>


<!-- <main>
      <div class="mb-10">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="max-w-2xl">

          
          </div>
          <div class="flex gap-3"><span
              class="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">Stable
              V1.0</span><span
              class="px-4 py-1.5 rounded-full bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-zinc-600 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Native
              CSS</span></div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 space-y-8">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-sm font-bold text-zinc-400 uppercase tracking-widest">Preview Area</h2>
              <div
                class="flex items-center gap-2 bg-zinc-100 dark:bg-white/5 p-1 rounded-lg border border-zinc-200 dark:border-white/10">
                <button id="preview-light"
                  class="p-1.5 rounded-md bg-white dark:bg-white/10 shadow-sm text-black dark:text-white"><iconify-icon
                    icon="lucide:sun" class="text-lg"></iconify-icon></button><button id="preview-dark"
                  class="p-1.5 rounded-md text-zinc-400 hover:text-black dark:hover:text-white"><iconify-icon
                    icon="lucide:moon" class="text-lg"></iconify-icon></button>
              </div>
            </div>
            <div id="preview-canvas"
              class="relative w-full aspect-video rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center preview-grid overflow-hidden">
              <button id="component-preview-btn"
                class="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">Click
                Me <iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
            </div>
          </div>
          <div class="bg-white dark:bg-[#121212] rounded-[32px] border border-zinc-200 dark:border-white/5 p-8">
            <h2 class="text-xl font-bold text-black dark:text-white mb-6 uppercase tracking-tight">Customization</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div><label class="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Variant</label>
                <div class="flex flex-wrap gap-2"><button
                    class="prop-control active px-4 py-2 bg-primary text-black rounded-lg text-sm font-bold"
                    data-prop="variant" data-value="primary">Solid</button><button
                    class="prop-control px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-gray-400 rounded-lg text-sm font-bold border border-zinc-200 dark:border-white/10"
                    data-prop="variant" data-value="outline">Outline</button><button
                    class="prop-control px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-gray-400 rounded-lg text-sm font-bold border border-zinc-200 dark:border-white/10"
                    data-prop="variant" data-value="ghost">Ghost</button></div>
              </div>
              <div><label class="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Size</label>
                <div class="flex flex-wrap gap-2"><button
                    class="prop-control px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-gray-400 rounded-lg text-sm font-bold border border-zinc-200 dark:border-white/10"
                    data-prop="size" data-value="sm">Small</button><button
                    class="prop-control active px-4 py-2 bg-primary text-black rounded-lg text-sm font-bold"
                    data-prop="size" data-value="md">Medium</button><button
                    class="prop-control px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-gray-400 rounded-lg text-sm font-bold border border-zinc-200 dark:border-white/10"
                    data-prop="size" data-value="lg">Large</button></div>
              </div>
              <div><label class="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Options</label>
                <div class="space-y-3"><label class="flex items-center gap-3 cursor-pointer group"><input
                      type="checkbox"
                      class="prop-checkbox w-5 h-5 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary"
                      data-prop="iconRight"><span
                      class="text-sm font-bold text-zinc-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">Right
                      Icon</span></label><label class="flex items-center gap-3 cursor-pointer group"><input
                      type="checkbox"
                      class="prop-checkbox w-5 h-5 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary"
                      data-prop="disabled"><span
                      class="text-sm font-bold text-zinc-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">Disabled</span></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5">
          <div class="sticky top-28 space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-sm font-bold text-zinc-400 uppercase tracking-widest">HTML Markup</h2>
              <button
                id="copy-code-btn"
                class="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-xs font-bold text-zinc-600 dark:text-gray-400 hover:text-primary transition-all active:scale-95"><iconify-icon
                  icon="lucide:copy"></iconify-icon> Copy Code</button>
            </div>
            <div
              class="relative rounded-[32px] overflow-hidden border border-zinc-200 dark:border-white/10 bg-[#0A0A0A] shadow-2xl">
              <div class="flex items-center gap-1.5 p-4 border-b border-white/5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div><span
                  class="ml-2 text-[10px] font-bold text-white/30 tracking-widest uppercase">niceui-button.html</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> -->