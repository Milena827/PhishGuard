<template>
  <div class="p-6 ml-64 mt-16">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Анализатор безопасности URL</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8">Введите URL для проверки на фишинговые угрозы</p>

      <!-- Главная карточка анализатора -->
      <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div class="space-y-6">
          <!-- Поле ввода URL -->
          <div>
            <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">URL для анализа</label>
            <input
              v-model="url"
              type="text"
              placeholder="https://example.com/login"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <p v-if="urlError" class="mt-1 text-sm text-red-500">{{ urlError }}</p>
          </div>

          <!-- Примеры URL -->
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Попробуйте примеры:</p>
            <div class="flex gap-2 flex-wrap">
              <span 
                v-for="example in examples" 
                :key="example"
                class="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-pointer hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition"
                @click="url = example"
              >
                {{ example }}
              </span>
            </div>
          </div>

          <!-- Кнопка анализа -->
          <button 
            @click="analyzeUrl" 
            :disabled="loading"
            class="w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div class="flex items-center justify-center gap-2">
              <div v-if="loading" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{{ loading ? 'Анализ...' : 'Анализировать URL' }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Быстрая статистика -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Проверок сегодня</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">147</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Фишинг обнаружен</p>
              <p class="text-2xl font-bold text-red-600 dark:text-red-400">23</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Безопасные сайты</p>
              <p class="text-2xl font-bold text-green-600 dark:text-green-400">124</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const url = ref('')
const urlError = ref('')
const loading = ref(false)

const examples = [
  'secure-paypal-verification-login.net',
  'github.com',
  'google.com',
  'bank-of-america-secure.com'
]

const analyzeUrl = () => {
  if (!url.value) {
    urlError.value = 'Пожалуйста, введите URL'
    return
  }
  
  urlError.value = ''
  loading.value = true
  
  setTimeout(() => {
    loading.value = false
    router.push(`/results?url=${encodeURIComponent(url.value)}`)
  }, 2000)
}
</script>