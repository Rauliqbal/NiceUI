<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'NiceUI - Plug & Play Tailwind Components'
const description = 'Build stunning web interfaces faster with NiceUI. A comprehensive collection of modern UI components.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://niceui.my.id/og-image.webp',
  twitterImage: 'https://niceui.my.id/og-image.webp',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UiNavbar/>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UiFooter/>
  </UApp>
</template>
