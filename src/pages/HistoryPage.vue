<template>
  <div class="p-6 ml-64 mt-16">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">История проверок</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8">Все предыдущие анализы URL</p>

      <!-- Фильтры -->
      <div class="flex gap-4 mb-6 flex-wrap">
        <select v-model="verdictFilter" class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          <option value="all">Все результаты</option>
          <option value="phishing">Фишинг</option>
          <option value="safe">Безопасные</option>
        </select>
        <input type="date" v-model="dateFilter" class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
      </div>

      <!-- Таблица -->
      <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">URL</th>
              <th class="text-left py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">Вердикт</th>
              <th class="text-left py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">Уверенность</th>
              <th class="text-left py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">Дата</th>
              <th class="text-left py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="scan in filteredScans" :key="scan.id" class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
              <td class="py-3 px-4 text-gray-900 dark:text-white font-mono text-sm">{{ scan.url }}</td>
              <td class="py-3 px-4">
                <span :class="scan.verdict === 'phishing' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'" class="px-2 py-1 rounded-full text-xs font-medium">
                  {{ scan.verdict === 'phishing' ? 'ФИШИНГ' : 'БЕЗОПАСНЫЙ' }}
                </span>
              </td>
              <td class="py-3 px-4 text-gray-900 dark:text-white">{{ scan.confidence }}%</td>
              <td class="py-3 px-4 text-gray-500 dark:text-gray-400 text-sm">{{ scan.date }}</td>
              <td class="py-3 px-4">
                <button @click="viewDetails(scan)" class="text-cyan-600 dark:text-cyan-400 hover:underline text-sm">Открыть отчёт</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const scans = ref([
  { id: 1, url: 'secure-paypal-login.net', verdict: 'phishing', confidence: 97, date: '2024-01-15' },
  { id: 2, url: 'github.com', verdict: 'safe', confidence: 99, date: '2024-01-15' },
  { id: 3, url: 'bank-america-secure.com', verdict: 'phishing', confidence: 94, date: '2024-01-14' },
  { id: 4, url: 'google.com', verdict: 'safe', confidence: 99, date: '2024-01-14' },
  { id: 5, url: 'dropbox-verify.net', verdict: 'phishing', confidence: 96, date: '2024-01-13' }
])

const verdictFilter = ref('all')
const dateFilter = ref('')
const confidenceThreshold = ref('')

const filteredScans = computed(() => {
  return scans.value.filter(scan => {
    if (verdictFilter.value !== 'all' && scan.verdict !== verdictFilter.value) return false
    if (dateFilter.value && scan.date !== dateFilter.value) return false
    if (confidenceThreshold.value && scan.confidence < Number(confidenceThreshold.value)) return false
    return true
  })
})

const viewDetails = (scan) => {
  console.log('Детали:', scan)
}
</script>