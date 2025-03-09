<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>Here you can see all the posts</p>
    <button @click="apiTest">Test API</button>
  </div>
</template>

<script lang="ts">
import { globalVariables } from '@/stores/global_variables'

function apiTest(event: Event) {
  event.preventDefault()
  fetch(globalVariables.API_URL + '/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('API is working')
      }
    })
    .catch((error) => {
      console.error('Problem with api' + error)
    })
}

export default {
  methods: {
    apiTest,
  },
}
</script>
