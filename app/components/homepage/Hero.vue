<script setup></script>
<template>
  <section class="container pt-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
      <div>
        <h1
          class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-snug md:leading-snug xl:leading-snug tracking-wide font-bold text-slate-900 dark:text-white"
        >
          Build Faster with lightweight
          <span
            class="inline-block shadow-lg bg-white dark:bg-slate-800 rounded-lg px-4 -rotate-1"
          >
            <p
              class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500"
            >
              Tailwind
            </p>
          </span>
          Components
        </h1>
        <p class="mt-8 mb-4 md:text-xl text-gray-600">
          Nice UI gives you clean, production-ready building blocks, perfect for
          admin panels, internal tools, and client projects. No setup. Just
          paste and ship.
        </p>

        <ui-button to="/getting-started" variant="primary" class="mt-4">
          Get started
        </ui-button>
      </div>
      <div class="mx-auto">
        <div class="relative">
          <NuxtImg
            class="px-5"
            src="/images/hero-img.png"
            alt="Level-up your coding skill with design handoff"
            width="672"
            height="506"
          />
          <div
            class="top-28 animate-floating animation-delay-300 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5"
          >
            <img
              class="w-6 sm:w-8 md:w-12"
              alt="HTML"
              src="/images/html.svg"
              width="40"
              height="40"
            />
          </div>
          <div
            class="-top-6 left-48 animate-floating animation-delay-100 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5"
          >
            <img
              class="w-6 sm:w-8 md:w-12"
              alt="CSS"
              src="/images/html.svg"
              width="40"
              height="40"
            />
          </div>
          <div
            class="bottom-12 right-20 animate-floating animation-delay-200 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5"
          >
            <img
              class="w-6 sm:w-8 md:w-12"
              alt="javascript"
              src="/images/html.svg"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
