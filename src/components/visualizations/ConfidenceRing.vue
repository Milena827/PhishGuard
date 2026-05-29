<template>
  <div class="relative inline-flex items-center justify-center">
    <svg class="transform -rotate-90 w-48 h-48">
      <circle
        cx="96"
        cy="96"
        r="88"
        fill="none"
        stroke="var(--bg-muted)"
        stroke-width="12"
      />
      <circle
        cx="96"
        cy="96"
        r="88"
        fill="none"
        :stroke="computedColor"
        stroke-width="12"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashOffset"
        class="transition-all duration-1000 ease-out"
      />
    </svg>
    <div class="absolute text-center">
      <div class="text-4xl font-bold" :style="{ color: computedColor }">
        {{ confidence }}<span class="text-xl">%</span>
      </div>
      <div class="text-sm text-[var(--text-muted)] mt-1">Confidence</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  confidence: {
    type: Number,
    required: true,
    validator: (v) => v >= 0 && v <= 100
  },
  verdict: {
    type: String,
    default: 'phishing'
  }
})

const computedColor = computed(() => {
  if (props.verdict === 'phishing') {
    return '#EF4444'
  }
  return '#10B981'
})

const radius = 88
const circumference = 2 * Math.PI * radius
const strokeDashOffset = computed(() => {
  return circumference - (props.confidence / 100) * circumference
})
</script>