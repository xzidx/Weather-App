<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')

const store = useStore()
const router = useRouter()

const login = async () => {
  error.value = ''

  const ok = await store.dispatch('login', {
    email: email.value,
    password: password.value,
  })

  if (ok) {
    router.push('/') // go home after login
  } else {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <form
      @submit.prevent="login"
      class="w-80 p-6 bg-white shadow-lg rounded"
    >
      <h1 class="text-xl font-bold mb-4 text-center">Login</h1>

      <!-- Error message -->
      <p v-if="error" class="text-red-500 text-sm mb-3 text-center">
        {{ error }}
      </p>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-3 border p-2 rounded"
        required
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 border p-2 rounded"
        required
      />

      <button
        class="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
      >
        Login
      </button>

      <p class="text-sm mt-3 text-center">
        No account?
        <RouterLink to="/signup" class="text-blue-500 hover:underline">
          Sign up
        </RouterLink>
      </p>
    </form>
  </div>
</template>
