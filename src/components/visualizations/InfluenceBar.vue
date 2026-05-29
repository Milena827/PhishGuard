<template>
  <div class="mb-4">
    <div class="flex justify-between mb-1 text-sm">
      <span class="text-[var(--text-secondary)]">{{ factor.name }}</span>
      <span :class="percentageColor" class="font-medium">{{ factor.influence }}%</span>
    </div>
    <div class="w-full h-2 bg-[var(--bg-muted)] rounded-full overflow-hidden">
      <div
        :class="barColor"
        :style="{ width: `${factor.influence}%` }"
        class="h-full rounded-full transition-all duration-500"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  factor: {
    type: Object,
    required: true
  }
})

const barColor = computed(() => {
  if (props.factor.influence >= 70) return 'bg-[var(--error)]'
  if (props.factor.influence >= 50) return 'bg-[var(--warning)]'
  return 'bg-[var(--color-secondary)]'
})

const percentageColor = computed(() => {
  if (props.factor.influence >= 70) return 'text-[var(--error)]'
  if (props.factor.influence >= 50) return 'text-[var(--warning)]'
  return 'text-[var(--color-secondary)]'
})
</script>