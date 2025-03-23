<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>Here you can see all the posts</p>
    <button @click="apiTest">Test API</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { globalVariables } from '@/stores/global_variables'
import api from '../router/axios'
async function logout(event: Event) {
  event.preventDefault()
  const response = await api.post(globalVariables.API_URL + '/logout')
  if (response.status == 200) {
    console.log(response)
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.reload()
  }
}
async function apiTest(event: Event) {
  event.preventDefault()
  const response = await api.get(globalVariables.API_URL + '/')
  if (response.status == 200) {
    console.log(response.data)
  }
}

export default {
  methods: {
    apiTest,
    logout,
  },
}
</script>
