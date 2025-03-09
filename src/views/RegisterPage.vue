<template>
  <div>
    <form class="registerForm centered">
      <label for="username">Enter your username :</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Enter your password :</label>
      <input type="text" id="password" name="password" />
      <br />
      <label for="confirm password">Confirm your password :</label>
      <input type="text" id="confirm password" name="confirm password" />
      <br />
      <div class="centered" style="display: flex; justify-content: space-around">
        <button @click="register">Register</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { globalVariables } from '@/stores/global_variables'
import { defineComponent } from 'vue'
function register(event: Event) {
  event.preventDefault()
  fetch(globalVariables.API_URL + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
      confirmPassword: (document.getElementById('confirm password') as HTMLInputElement).value,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        router.push('/login')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
export default defineComponent({
  setup() {
    return {
      register,
    }
  },
})
</script>

<style scoped>
.centered {
  text-align: center;
}
.registerForm {
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
