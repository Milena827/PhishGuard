<template>
  <span :class="['px-2 py-1 rounded-full text-xs font-medium', badgeClasses[variant]]">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'success', 'warning', 'error', 'info'].includes(v)
  }
})

const badgeClasses = {
  default: 'bg-[var(--bg-muted)] text-[var(--text-secondary)]',
  success: 'bg-[var(--success)]/10 text-[var(--success)]',
  warning: 'bg-[var(--warning)]/10 text-[var(--warning)]',
  error: 'bg-[var(--error)]/10 text-[var(--error)]',
  info: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
}
</script>