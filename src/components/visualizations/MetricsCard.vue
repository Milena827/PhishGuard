<template>
  <div class="card hover:card-hover">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-[var(--text-muted)] mb-1">{{ title }}</p>
        <p class="text-3xl font-bold text-[var(--text-primary)]">{{ value }}</p>
      </div>
      <div :class="['p-2 rounded-lg', iconBgColor]">
        <component :is="iconComponent" :class="['w-5 h-5', iconColor]" />
      </div>
    </div>
    <div v-if="trend" class="mt-3 flex items-center gap-1 text-xs">
      <TrendingUp v-if="trend > 0" class="w-3 h-3 text-[var(--success)]" />
      <TrendingDown v-else class="w-3 h-3 text-[var(--error)]" />
      <span :class="trend > 0 ? 'text-[var(--success)]' : 'text-[var(--error)]'">
        {{ Math.abs(trend) }}% from last week
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { TrendingUp, TrendingDown, Activity, Target, Shield, Zap } from 'lucide-vue-next'

const props = defineProps({
  title: String,
  value: String,
  icon: {
    type: String,
    default: 'Activity'
  },
  trend: Number
})

const iconMap = {
  Activity, Target, Shield, Zap
}

const iconComponent = computed(() => iconMap[props.icon] || Activity)

const iconBgColor = computed(() => {
  if (props.icon === 'Shield') return 'bg-[var(--success)]/10'
  if (props.icon === 'Zap') return 'bg-[var(--warning)]/10'
  return 'bg-[var(--color-secondary)]/10'
})

const iconColor = computed(() => {
  if (props.icon === 'Shield') return 'text-[var(--success)]'
  if (props.icon === 'Zap') return 'text-[var(--warning)]'
  return 'text-[var(--color-secondary)]'
})
</script>