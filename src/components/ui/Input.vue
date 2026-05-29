<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium mb-2" :class="labelClass">
      {{ label }}
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full px-4 py-2 rounded-lg transition-all duration-200',
        'bg-[var(--bg-secondary)] border border-[var(--border-color)]',
        'focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent',
        'text-[var(--text-primary)] placeholder:text-[var(--text-muted)]',
        error ? 'border-[var(--error)]' : ''
      ]"
    />
    <p v-if="error" class="mt-1 text-sm text-[var(--error)]">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: [String, Number],
  placeholder: String,
  error: String,
  disabled: Boolean,
  labelClass: String
})

defineEmits(['update:modelValue'])
</script>