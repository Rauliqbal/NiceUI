<script setup>
function showHide() {
  document.getElementById("hamburger").checked = false;
}

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const navlinks = [
  {
    label: "Docs",
    url: "/getting-started",
  },
  {
    label: "Blog",
    url: "/blog",
  },
];
</script>

<template>
  <header
    class="sticky top-0 z-20 py-4 border-b bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 transition-all"
  >
    <div
      class="w-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full"
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
      <!-- Search -->
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

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <div class="md:hidden mr-4">
          <div class="flex flex-row items-center justify-center">
            <button
              v-show="colorMode.preference === 'light'"
              class="transition-transform duration-100"
              @click="toggleTheme"
            >
              <i class="text-xl ai-sun text-slate-700 dark:text-slate-400"></i>
            </button>
            <button
              v-show="colorMode.preference === 'dark'"
              class="transition-transform duration-100"
              @click="toggleTheme"
            >
              <i class="text-xl ai-moon text-slate-700 dark:text-slate-400"></i>
            </button>
          </div>
        </div>
        <input
          type="checkbox"
          class="peer hidden"
          name="hamburger"
          id="hamburger"
        />
        <label
          for="hamburger"
          class="relative peer-checked:hamburger z-30 block cursor-pointer md:hidden"
        >
          <span
            class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black dark:bg-slate-400 dark:after:bg-slate-400 dark:before:bg-slate-400 rounded-xl after:rounded-xl before:rounded-xl"
          ></span>
        </label>
        <div
          @click="showHide"
          class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
        ></div>
        <div
          class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out"
        >
          <div class="flex flex-col md:items-center md:flex-row h-full">
            <ul
              class="bg-white dark:bg-slate-800 dark:md:bg-transparent md:bg-transparent flex items-center px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-10 md:pt-0"
            >
              <li v-for="link in navlinks">
                <NuxtLink
                  @click="showHide"
                  class="dark:text-slate-400 capitalize tracking-wide hover:text-slate-500 transition ease-out duration-200 text-gray-800"
                  :to="link.url"
                  >{{ link.label }}</NuxtLink
                >
              </li>
              <li class="text-slate-600 dark:text-slate-400 hidden md:block">
                |
              </li>
              <li class="flex items-center gap-2">
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

                <NuxtLink
                  to="https://github.com/Rauliqbal/NiceUI"
                  target="_blank"
                >
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
                  >
                    <i
                      class="text-xl ai-github-fill text-slate-700 dark:text-slate-400"
                    ></i>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
