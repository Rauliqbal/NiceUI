<script setup lang="ts">
const isSidebarOpen = useState<boolean>("sidebarOpen", () => false);

function showHide() {
  isSidebarOpen.value = false;
}

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const navlinks = [
  { label: "Docs", url: "/getting-started" },
  { label: "Blog", url: "/blog" },
];
</script>

<template>
  <header
    class="sticky top-0 z-30 py-4 border-b bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 transition-all"
  >
    <div
      class="w-full container mx-auto flex items-center justify-between gap-4 px-4"
    >
      <!-- Logo -->
      <div class="flex items-center gap-1.5 lg:flex-1">
        <NuxtLink class="flex items-center gap-2" to="/">
          <NuxtImg
            width="40"
            height="40"
            src="/images/logo.png"
            alt="NiceUI Tailwind Component"
          />
          <h1 class="font-alatsi text-3xl font-semibold dark:text-slate-100">
            NiceUI
          </h1>
        </NuxtLink>
      </div>

      <!-- Search Desktop -->
      <div class="hidden lg:flex flex-1">
        <button
          type="button"
          class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-sm gap-1.5 text-default bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 hover:dark:bg-gray-600 active:bg-gray-200 focus:outline-none focus-visible:bg-gray-200 disabled:bg-elevated aria-disabled:bg-elevated w-full"
        >
          <i class="ai-search dark:text-slate-400"></i>
          <span class="truncate dark:text-slate-400">Search…</span>
          <div class="hidden lg:flex items-center gap-0.5 ms-auto">
            <kbd
              class="inline-flex items-center text-slate-500 dark:text-slate-400 justify-center px-1 rounded-sm font-medium font-sans h-5 min-w-[20px] text-[11px] ring ring-inset ring-slate-700 dark:ring-slate-500 text-default bg-elevated"
              >Ctrl</kbd
            ><kbd
              class="inline-flex items-center text-slate-500 dark:text-slate-400 justify-center px-1 rounded-sm font-medium font-sans h-5 min-w-[20px] text-[11px] ring ring-inset ring-slate-700 dark:ring-slate-500 text-default bg-elevated"
              >K</kbd
            >
          </div>
        </button>
      </div>

      <!-- Desktop Nav -->
      <div class="flex items-center justify-end lg:flex-1">
        <ul
          class="hidden md:flex items-center px-7 space-x-8 bg-transparent dark:bg-transparent"
        >
          <li v-for="link in navlinks" :key="link.url">
            <NuxtLink
              @click="showHide"
              class="dark:text-slate-400 capitalize tracking-wide hover:text-slate-500 transition ease-out duration-200 text-gray-800"
              :to="link.url"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="text-slate-600 dark:text-slate-400 hidden md:block">|</li>
        </ul>

        <!-- Right buttons -->
        <div class="flex items-center gap-2">
          <!-- Search button -->
          <button class="block lg:hidden">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              <i
                class="text-xl ai-search text-slate-700 dark:text-slate-400"
              ></i>
            </div>
          </button>

          <!-- Theme toggle -->
          <div class="flex flex-row items-center justify-center">
            <button
              v-show="colorMode.preference === 'light'"
              @click="toggleTheme"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-all"
              >
                <i
                  class="text-xl ai-sun text-slate-700 dark:text-slate-400"
                ></i>
              </div>
            </button>
            <button
              v-show="colorMode.preference === 'dark'"
              @click="toggleTheme"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
              >
                <i
                  class="text-xl ai-moon text-slate-700 dark:text-slate-400"
                ></i>
              </div>
            </button>
          </div>

          <!-- Github -->
          <NuxtLink to="https://github.com/Rauliqbal/NiceUI" target="_blank">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              <i
                class="text-xl ai-github-fill text-slate-700 dark:text-slate-400"
              ></i>
            </div>
          </NuxtLink>

          <!-- Mobile Hamburger -->
          <button
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            @click="isSidebarOpen = !isSidebarOpen"
          >
            <i
              v-if="!isSidebarOpen"
              class="ai-three-line-horizontal text-xl text-slate-700 dark:text-slate-400"
            ></i>
            <i
              v-else
              class="ai-x-small text-xl text-slate-700 dark:text-slate-400"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
