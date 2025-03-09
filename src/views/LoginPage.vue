<template>
  <div>
    <form class="loginForm centered">
      <label for="username">Enter your username :</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Enter your password :</label>
      <input type="text" id="password" name="password" />
      <br />
      <div class="centered" style="display: flex; justify-content: space-around">
        <button @click="submitForm">Login</button>
        <button @click="toRegisterPage">Register</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { globalVariables } from '@/stores/global_variables'
import { defineComponent } from 'vue'
function submitForm(event: Event) {
  event.preventDefault()

  fetch(globalVariables.API_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        router.push('/homePage')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

function toRegisterPage(event: Event) {
  event.preventDefault()
  router.push('/register')
}

export default defineComponent({
  setup() {
    return {
      submitForm,
      toRegisterPage,
    }
  },
})
</script>

<style scoped>
.centered {
  text-align: center;
}

.loginForm {
  margin: 0 auto;
  width: 70%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  * {
    margin-bottom: 1rem;
  }
}
</style>
