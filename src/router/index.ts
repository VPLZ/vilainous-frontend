import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterPage.vue'),
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('@/views/HomePage.vue'),
    },
  ],
})

export default router
