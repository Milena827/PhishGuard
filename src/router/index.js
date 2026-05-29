import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/Dashboard.vue') },
  { path: '/results', component: () => import('../pages/ResultsPage.vue') },
  { path: '/history', component: () => import('../pages/HistoryPage.vue') },
  { path: '/metrics', component: () => import('../pages/ModelMetrics.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router