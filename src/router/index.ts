import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'
import axios from 'axios'
import { globalVariables } from '@/stores/global_variables'
import HostingGame from '@/views/HostingGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/hosting',
      name: 'hostingGame',
      component: HostingGame,
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
  if (!token && to.name !== 'login' && to.name !== 'register') return { name: 'login' }
  try {
    await axios.get(globalVariables.API_URL + '/authenticate')
  } catch (error) {
    console.log(error)
  }
})
export default router
