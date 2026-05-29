<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
  >
    <svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg v-else class="w-5 h-5 text-gray-700 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  console.log('Toggle theme clicked') // Для отладки
  isDark.value = !isDark.value
  
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    console.log('Dark mode ON')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    console.log('Dark mode OFF')
  }
}

onMounted(() => {
  console.log('ThemeToggle mounted')
  const savedTheme = localStorage.getItem('theme')
  console.log('Saved theme:', savedTheme)
  
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
    console.log('Dark mode applied from saved')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    console.log('Light mode applied from saved')
  } else {
    // Проверяем системные настройки
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      isDark.value = true
      document.documentElement.classList.add('dark')
      console.log('Dark mode applied from system')
    }
  }
})
</script>