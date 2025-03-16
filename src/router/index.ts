import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'

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
      component: RegisterPage,
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage,
    },
  ],
})

router.beforeEach(async (to) => {
  const cookies = document.cookie
  const values = cookies.split(';')
  let token
  values.forEach((value) => {
    if (value.includes('authToken')) {
      token = value.split('=').pop()
    }
  })
  console.log(token)
  if (token !== '1234' && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' }
  }
})
export default router
