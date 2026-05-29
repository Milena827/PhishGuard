<template>
  <header class="fixed right-0 top-0 left-64 h-16 bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-700 px-6 flex items-center justify-between z-10">
    <div class="flex items-center gap-4">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Поиск URL..."
          class="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-80"
        />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 relative">
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <ThemeToggle />
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-sm font-medium text-gray-900 dark:text-white">Аналитик</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">SOC Team</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
          <span class="text-white font-medium">А</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>