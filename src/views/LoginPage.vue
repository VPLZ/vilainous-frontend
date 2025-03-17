<template>
  <div>
    <form class="loginForm centered">
      <label for="email">Enter your email :</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label for="password">Enter your password :</label>
      <input type="password" id="password" name="password" required />
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
import axios from 'axios'
import { defineComponent } from 'vue'
function submitForm(event: Event) {
  event.preventDefault()
  const email = (document.getElementById('email') as HTMLInputElement).value
  const password = (document.getElementById('password') as HTMLInputElement).value

  axios
    .post(globalVariables.API_URL + '/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response)
        document.cookie = 'authToken=' + response.data
        router.push('/')
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
