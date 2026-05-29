<template>
  <div class="p-6 ml-64 mt-16">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Метрики модели</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8">MLP-модель обнаружения фишинга</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Точность (Accuracy)</p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white">92.8%</p>
            </div>
            <div class="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Полнота (Recall)</p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white">94.1%</p>
            </div>
            <div class="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">Точность (Precision)</p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white">91.4%</p>
            </div>
            <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-1">F1-мера (F1 Score)</p>
              <p class="text-3xl font-bold text-gray-900 dark:text-white">92.7%</p>
            </div>
            <div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Матрица ошибок (Confusion Matrix)</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-center">
            <thead>
              <tr>
                <th class="p-3"></th>
                <th class="p-3 text-gray-700 dark:text-gray-300">Предсказан БЕЗОПАСНЫЙ</th>
                <th class="p-3 text-gray-700 dark:text-gray-300">Предсказан ФИШИНГ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 font-medium text-gray-700 dark:text-gray-300">Реально БЕЗОПАСНЫЙ</td>
                <td class="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium rounded-l">4 821</td>
                <td class="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-r">137</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-gray-700 dark:text-gray-300">Реально ФИШИНГ</td>
                <td class="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-l">94</td>
                <td class="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium rounded-r">2 948</td>
              </tr>
            </tbody>
          </table>
        </div>  
        <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            <strong>Низкий уровень ложных тревог:</strong> Всего 137 ложных срабатываний (2.8%)<br>
            <strong>Высокий уровень обнаружения:</strong> 96.9% фишинговых сайтов успешно идентифицированы
          </p>
        </div>
      </div>
    </div>
  </div>
</template>