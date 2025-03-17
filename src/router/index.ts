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

router.beforeEach(async () => {
  const cookies = document.cookie
  const values = cookies.split(';')
  let token
  values.forEach((value) => {
    if (value.includes('authToken')) {
      token = value.split('=').pop()
    }
  })
  console.log(token)
  axios
    .post(globalVariables.API_URL + '/verifyToken', {
      token,
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log('UnAuthorized')
        return { name: 'login' }
      }
    })
})
export default router
