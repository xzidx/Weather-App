<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')

const store = useStore()
const router = useRouter()

const signup = async () => {
  await store.dispatch('signup', {
    name: name.value,
    email: email.value,
    password: password.value,
  })

  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="signup" class="w-80 p-6 shadow rounded">
      <h1 class="text-xl font-bold mb-4">Sign Up</h1>

      <input v-model="name" placeholder="Name" class="w-full mb-3 border p-2" />
      <input v-model="email" placeholder="Email" class="w-full mb-3 border p-2" />
      <input v-model="password" type="password" placeholder="Password" class="w-full mb-4 border p-2" />

      <button class="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
    </form>
  </div>
</template>
