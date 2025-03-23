import axios from 'axios'
import router from '.'
import { globalVariables } from '@/stores/global_variables'

const api = axios.create({
  baseURL: globalVariables.API_URL,
})

api.interceptors.request.use(
  (config) => {
    const cookies = document.cookie
    const values = cookies.split(';')
    let token
    values.forEach((value) => {
      if (value.includes('authToken')) {
        token = value.split('=').pop()
      }
    })
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !document.URL.includes('/login') &&
      !document.URL.includes('/register')
    ) {
      router.push('/login')
    }
    return Promise.reject(error)
  },
)

export default api
