<template>
  <div :class="['card', hover ? 'card-hover' : '']">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: false
  }
})
</script>