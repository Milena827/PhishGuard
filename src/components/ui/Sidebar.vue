<template>
  <aside class="fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-700 z-20">
    <div class="p-6">
      <h2 class="text-xl font-bold text-cyan-600 dark:text-cyan-400">PhishGuard</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Антифишинговая система</p>
    </div>
    <nav class="mt-6">
      <router-link
        to="/"
        class="flex items-center gap-3 px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        active-class="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-r-2 border-cyan-600"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>Главная</span>
      </router-link>
      <router-link
        to="/history"
        class="flex items-center gap-3 px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        active-class="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-r-2 border-cyan-600"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>История проверок</span>
      </router-link>
      <router-link
        to="/metrics"
        class="flex items-center gap-3 px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        active-class="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-r-2 border-cyan-600"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Метрики модели</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
</script>