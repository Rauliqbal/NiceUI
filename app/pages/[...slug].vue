<script setup lang="ts">
const route = useRoute();

const path = computed(() => {
  const slug = route.params.slug;
  const fullPath = Array.isArray(slug)
    ? slug.join("/")
    : slug
    ? slug
    : "getting-started/index";

  return "/" + fullPath;
});

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(path.value).first();
});

const activeId = ref<string | null>(null);

onMounted(async () => {
  await nextTick();

  // Ambil semua heading yang bisa muncul di TOC
  const headings = document.querySelectorAll(
    "article h2, article h3, article h4"
  );

  if (!headings.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      });
    },
    {
      root: null, // body scroll
      rootMargin: "0px 0px -70% 0px",
      threshold: [0, 1],
    }
  );

  headings.forEach((el) => observer.observe(el));
  onBeforeUnmount(() => observer.disconnect());
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <template v-if="page">
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
      <!-- BODY:CONTENT -->
      <div class="lg:col-span-8 px-4">
        <article class="prose dark:prose-invert container">
          <ContentRenderer :value="page" />
        </article>
      </div>

      <!-- BODY:TABLE OF CONTENT -->
      <aside
        v-if="page.body?.toc?.links?.length"
        class="hidden lg:block lg:col-span-2 sticky top-20 self-start h-[calc(100vh-6rem)] overflow-y-auto p-4 border-l border-gray-200 dark:border-gray-800 text-sm"
      >
        <h3 class="font-semibold text-slate-700 dark:text-slate-200 mb-3">
          ON THIS PAGE
        </h3>

        <nav>
          <ul class="space-y-2">
            <li v-for="link in page.body.toc.links" :key="link.id">
              <!-- Parent link -->
              <NuxtLink
                :to="`#${link.id}`"
                class="block py-1 pl-2 border-l border-transparent text-slate-700 dark:text-slate-400 hover:border-primary hover:text-primary transition-colors"
                :class="{
                  '!text-primary font-semibold border-l !border-l-primary dark:border-l-primary':
                    activeId === link.id ||
                    link.children?.some((child) => child.id === activeId),
                }"
              >
                {{ link.text }}
              </NuxtLink>

              <!-- Child links -->
              <ul v-if="link.children?.length" class="ml-4 space-y-1">
                <li v-for="child in link.children" :key="child.id">
                  <NuxtLink
                    :to="`#${child.id}`"
                    class="block py-1 pl-2 border-l border-transparent text-sm text-slate-700 dark:text-slate-400 hover:border-primary hover:text-primary transition-colors"
                    :class="{
                      '!text-primary font-medium border-l !border-l-primary dark:border-l-primary':
                        activeId === child.id,
                    }"
                  >
                    {{ child.text }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </template>
  <template v-else>
    <div class="min-h-screen flex items-center justify-center">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>

<style>
article :is(h1, h2, h3, h4, h5, h6) {
  scroll-margin-top: 6rem;
}
.prose a {
  text-decoration: none !important;
}
</style>
