import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/REgisterView.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router