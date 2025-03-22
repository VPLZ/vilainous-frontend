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
import axios from 'axios'
async function logout(event: Event) {
  event.preventDefault()
  const response = await axios.post(globalVariables.API_URL + '/logout')
  console.log(response)
}
async function apiTest(event: Event) {
  event.preventDefault()
  const response = await axios.get(globalVariables.API_URL + '/')
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
