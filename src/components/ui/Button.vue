<template>
  <button
    :type="type"
    :disabled="loading || disabled"
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses[variant],
      loading || disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-0.5'
    ]"
  >
    <div class="flex items-center justify-center gap-2">
      <div v-if="loading" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      <slot />
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'danger', 'outline'].includes(v)
  },
  type: {
    type: String,
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const variantClasses = {
  primary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90 focus:ring-[var(--color-secondary)]',
  secondary: 'bg-[var(--bg-muted)] text-[var(--text-primary)] hover:bg-[var(--bg-muted)]/80',
  danger: 'bg-[var(--error)] text-white hover:bg-[var(--error)]/90',
  outline: 'border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-muted)]'
}
</script>