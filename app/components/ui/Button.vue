<script setup lang="ts">
const props = defineProps<{
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}>();

const baseClass =
  "btn";

const variantClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "btn-secondary";
    case "outline":
      return "btn-outline";
    default: 
      return "bg-primary font-semibold hover:bg-yellow-600";
  }
});
</script>

<template>
  <!-- Mode NuxtLink -->
  <NuxtLink v-if="to" :to="to" :class="[baseClass, variantClass]">
    <span class="inline-flex items-center gap-2">
      <slot name="icon" />
      <slot />
    </span>
  </NuxtLink>

  <!-- Mode Button -->
  <button
    v-else
    :type="type || 'button'"
    :disabled="disabled"
    :class="[baseClass, variantClass]"
  >
    <span class="inline-flex items-center gap-2">
      <slot name="icon" />
      <slot />
    </span>
  </button>
</template>