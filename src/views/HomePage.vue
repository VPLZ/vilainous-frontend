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
    .then(async (response) => {
      if (response.status === 200) {
        const jsonResponse = await response.json()

        console.log(jsonResponse)
      }
      if (response.status.toString().startsWith('4')) {
        console.log('Error in request')
      }
      if (response.status.toString().startsWith('5')) {
        console.log('Internal Server Error')
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
