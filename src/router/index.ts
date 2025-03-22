import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'
import axios from 'axios'
import { globalVariables } from '@/stores/global_variables'

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
  if (!token && to.name !== 'login' && to.name !== 'register') return { name: 'login' }
  try {
    const response = await axios.get(globalVariables.API_URL + '/authenticate', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status !== 200) {
      console.warn('Token invalide, redirection vers login.')
      return { name: 'login' }
    }
  } catch (error) {
    console.log("Erreur d'authentification:", error)
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    if (to.name !== 'login' && to.name !== 'register') return { name: 'login' }
  }
})
export default router
