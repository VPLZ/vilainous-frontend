<template>
  <div>
    <form id="registerForm" class="registerForm centered" @submit.prevent="register">
      <p class="alert" hidden></p>
      <label for="username">Enter your username :</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="email">Enter your email :</label>
      <input type="text" id="email" name="email" />
      <br />
      <label for="password">Enter your password :</label>
      <input type="password" id="password" name="password" />
      <br />
      <label for="confirm password">Confirm your password :</label>
      <input type="password" id="confirmPassword" name="confirm password" />
      <br />
      <div class="centered" style="display: flex; justify-content: space-around">
        <button @click="toLogin">Go Back</button>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { globalVariables } from '@/stores/global_variables'
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    async register() {
      const alert = document.querySelector('.alert') as HTMLParagraphElement
      const username = (document.getElementById('username') as HTMLInputElement).value
      const password = (document.getElementById('password') as HTMLInputElement).value
      const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value
      const email = (document.getElementById('email') as HTMLInputElement).value

      if (password !== confirmPassword) {
        alert.hidden = false
        alert.innerText = 'Les mots de passe ne correspondent pas.'
        return
      }

      alert.hidden = true

      try {
        const response = await axios.post(globalVariables.API_URL + '/register', {
          username,
          password,
          email,
        })

        if (response.status === 201) {
          router.push('/login')
        } else {
          alert.hidden = false
          alert.innerText = "Une erreur s'est produite lors de la requête."
        }
      } catch (error) {
        console.error(error)
        alert.hidden = false
        alert.innerText = 'Erreur de connexion au serveur.'
      }
    },
    toLogin() {
      router.push('/login')
    },
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

.alert {
  color: red;
}
</style>
