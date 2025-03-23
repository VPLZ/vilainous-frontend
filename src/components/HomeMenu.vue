<template>
  <div class="buttonsContainer">
    <button>Hosting Game</button>
    <button>Joining Game</button>
    <button>Tutorial</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<style>
.buttonsContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
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

export default {
  methods: {
    logout,
  },
}
</script>
