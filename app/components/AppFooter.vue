<script setup lang="ts">
const date = new Date().getFullYear();
</script>

<template>
  <footer
    class="text-center py-4 border-t border-slate-200 dark:border-slate-700"
  >
    <p class="text-sm text-slate-700 dark:text-slate-400">
      &copy;Copyright {{ date }}
    </p>
  </footer>
</template>
