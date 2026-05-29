<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B1120]">
    <Sidebar />
    <Topbar />
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './components/ui/Sidebar.vue'
import Topbar from './components/ui/Topbar.vue'
</script>