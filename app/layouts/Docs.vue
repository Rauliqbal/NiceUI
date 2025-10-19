<script lang="ts" setup>
const { data: link } = await useAsyncData("content", () =>
  queryCollection("content").all()
);

const route = useRoute();

// const { data: navigation } = await useAsyncData('docs-navigation', () => useContentNavigation())
const { data: navigation } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content");
});
</script>

<template>
  <div>
    <!-- HEADER -->
    <AppNavbar />

    <!-- MAIN -->
    <main class="min-h-screen">
      <div class="w-full max-w-[90rem] mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
          <!-- SIDEBAR -->
          <aside
            class="hidden md:block lg:col-span-2 border-r border-slate-200 dark:border-slate-800"
          >
            <div
              class="sticky top-24 h-[calc(100vh-5rem)] overflow-y-auto pb-10"
            >
              <nav class="space-y-8">
                <div v-for="section in navigation" :key="section.path">
                  <h2
                    class="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3 flex items-center gap-2"
                  >
                    <Icon
                      v-if="section.icon"
                      :name="section.icon"
                      class="w-4 h-4"
                    />
                    {{ section.title }}
                  </h2>

                  <ul class="pl-3">
                    <li v-for="link in section.children" :key="link.path">
                      <NuxtLink
                        :to="link.path"
                        class="block py-1.5 pr-2 pl-3 border-l border-slate-300 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        :class="{
                          '!text-primary font-medium border-l border-l-primary dark:border-l-primary':
                            route.path === link.path,
                        }"
                      >
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          <!-- BODY -->
          <div class="lg:col-span-8">
            <slot />
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
