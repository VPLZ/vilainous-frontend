<template>
  <div class="buttonsContainer">
    <button @click="hosting">Hosting Game</button>
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
import router from '@/router'
async function logout(event: Event) {
  event.preventDefault()
  const response = await api.post(globalVariables.API_URL + '/logout')
  if (response.status == 200) {
    console.log(response)
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.reload()
  }
}
function hosting(event: Event) {
  event.preventDefault()
  router.push('/hosting')
}

export default {
  methods: {
    logout,
    hosting,
  },
}
</script>
