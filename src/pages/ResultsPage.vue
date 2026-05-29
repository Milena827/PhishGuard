<template>
  <div class="p-6 ml-64 mt-16">
    <div class="max-w-6xl mx-auto">
      <!-- Карточка вердикта -->
      <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" :class="verdictBgColor">
          <svg class="w-8 h-8" :class="verdictIconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="verdict === 'ФИШИНГ'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-4xl font-bold mb-2" :class="verdictTextColor">
          {{ verdict }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Анализ выполнен {{ timestamp }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Левая колонка -->
        <div class="space-y-6">
          <!-- Уверенность модели -->
          <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">Уверенность модели</h3>
            <div class="flex justify-center">
              <div class="relative inline-flex items-center justify-center">
                <svg class="transform -rotate-90 w-48 h-48">
                  <circle cx="96" cy="96" r="88" fill="none" stroke="#E5E7EB" stroke-width="12" />
                  <circle cx="96" cy="96" r="88" fill="none" :stroke="confidenceColor" stroke-width="12" stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="strokeDashOffset" class="transition-all duration-1000 ease-out" />
                </svg>
                <div class="absolute text-center">
                  <div class="text-4xl font-bold" :style="{ color: confidenceColor }">
                    {{ confidence }}<span class="text-xl">%</span>
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">Уверенность</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Ключевые факторы риска -->
          <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ключевые факторы риска</h3>
            <div class="space-y-3">
              <div v-for="factor in factors" :key="factor.name" class="mb-4">
                <div class="flex justify-between mb-1 text-sm">
                  <span class="text-gray-600 dark:text-gray-400">{{ factor.name }}</span>
                  <span :class="factor.influence >= 70 ? 'text-red-500' : factor.influence >= 50 ? 'text-yellow-500' : 'text-cyan-500'" class="font-medium">{{ factor.influence }}%</span>
                </div>
                <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div :style="{ width: `${factor.influence}%` }" :class="factor.influence >= 70 ? 'bg-red-500' : factor.influence >= 50 ? 'bg-yellow-500' : 'bg-cyan-500'" class="h-full rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="space-y-6">
          <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Детали анализа URL</h3>
            <div class="space-y-3">
              <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-gray-500 dark:text-gray-400">URL</span>
                <span class="text-gray-900 dark:text-white font-mono text-sm">{{ analyzedUrl }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-gray-500 dark:text-gray-400">Возраст домена</span>
                <span class="text-gray-900 dark:text-white">12 дней</span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-gray-500 dark:text-gray-400">HTTPS</span>
                <span :class="httpsValid ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'" class="px-2 py-1 rounded-full text-xs font-medium">
                  {{ httpsValid ? 'Действителен' : 'Недействителен' }}
                </span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-gray-500 dark:text-gray-400">SSL эмитент</span>
                <span class="text-gray-900 dark:text-white">Let's Encrypt</span>
              </div>
              <div class="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span class="text-gray-500 dark:text-gray-400">Перенаправления</span>
                <span class="text-gray-900 dark:text-white">3 перенаправления</span>
              </div>
              <div class="flex justify-between py-2">
                <span class="text-gray-500 dark:text-gray-400">IP репутация</span>
                <span class="px-2 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">Подозрительный</span>
              </div>
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="flex gap-4">
            <button @click="$router.push('/')" class="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Новый анализ
            </button>
            <button class="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-cyan-600 text-white hover:bg-cyan-700">
              Экспорт отчёта
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const analyzedUrl = ref('')
const verdict = ref('ФИШИНГ')
const confidence = ref(96)
const httpsValid = ref(false)

const factors = ref([
  { name: 'Подозрительная длина URL', influence: 78 },
  { name: 'Множественные перенаправления', influence: 64 },
  { name: 'Молодой возраст домена', influence: 58 },
  { name: 'Отсутствие HTTPS', influence: 52 },
  { name: 'Избыточные спецсимволы', influence: 49 }
])

const radius = 88
const circumference = 2 * Math.PI * radius
const strokeDashOffset = computed(() => circumference - (confidence.value / 100) * circumference)

const confidenceColor = computed(() => verdict.value === 'ФИШИНГ' ? '#EF4444' : '#10B981')

const timestamp = computed(() => new Date().toLocaleString('ru-RU'))

const verdictBgColor = computed(() => verdict.value === 'ФИШИНГ' ? 'bg-red-100 dark:bg-red-900/30' : 'bg-green-100 dark:bg-green-900/30')
const verdictIconColor = computed(() => verdict.value === 'ФИШИНГ' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400')
const verdictTextColor = computed(() => verdict.value === 'ФИШИНГ' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400')

onMounted(() => {
  analyzedUrl.value = route.query.url || 'unknown-url.com'
  
  if (analyzedUrl.value.includes('github') || analyzedUrl.value.includes('google')) {
    verdict.value = 'БЕЗОПАСНЫЙ'
    confidence.value = 98
    httpsValid.value = true
    factors.value = [
      { name: 'Возраст домена', influence: 15 },
      { name: 'SSL сертификат действителен', influence: 8 },
      { name: 'Нет перенаправлений', influence: 5 }
    ]
  }
})
</script>