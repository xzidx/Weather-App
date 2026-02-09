<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const agreeToTerms = ref(false)
const error = ref('')

const store = useStore()
const router = useRouter()

const signup = async () => {
  if (!agreeToTerms.value) {
    error.value = "Please agree to the terms."
    return
  }
  // Signup logic...
  await store.dispatch('signup', {
    name: name.value,
    email: email.value,
    password: password.value,
  })
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f8fafc] p-6 font-sans">
    <div class="max-w-7xl h-180 w-full bg-white flex flex-col md:flex-row rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
      
      <div class="w-full md:w-1/2 p-10 lg:p-20">
        <div class="mb-12 flex items-center gap-3 text-blue-500">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a3.5 3.5 0 0 0 .5-7c0-1.5-1-3.5-3-3.5-1.5 0-2.5 1-3 2.5-1 0-2 .5-2.5 1.5a3.5 3.5 0 0 0 1 6.5h7z"/></svg>
           <span class="font-bold text-sm tracking-wide text-gray-900">Nimbus Travel</span>
        </div>

        <div class="max-w-md mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Welcome Back!</h1>
          <p class="text-gray-500 mb-10 leading-relaxed">
            Join our community of weather enthusiasts.
          </p>

          <form @submit.prevent="signup" class="flex flex-col gap-4 pt-5">
            
            <div class="mb-6"> 
              <label class="block text-sm font-semibold text-gray-400 mb-2 ml-2">
                Full Name
              </label>
              <input 
                v-model="name" 
                type="text" 
                placeholder="Enter your name" 
                class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all outline-none text-gray-600 placeholder:text-gray-300" 
                required 
              />
            </div>
            
            <div class="mb-6"> 
              <label class="block text-sm font-semibold text-gray-400 mb-2 ml-2">
                Email Address
              </label>
              <input 
                v-model="email" 
                type="email" 
                placeholder="email@example.com" 
                class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all outline-none text-gray-600 placeholder:text-gray-300" 
                required 
              />
            </div>

            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-400 mb-2 ml-2">
                Password
              </label>
              <input 
                v-model="password"
                type="password" 
                placeholder="Create a password" 
                class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all outline-none text-gray-600 placeholder:text-gray-300" 
                required 
              />
            </div>

            <div class="flex items-center gap-3 mb-8 ml-2">
              <input type="checkbox" v-model="agreeToTerms" id="terms" class="w-5 h-5 rounded border-gray-200 text-blue-600 cursor-pointer" required />
              <label for="terms" class="text-sm text-gray-400 font-medium cursor-pointer">
                I accept the terms
              </label>
            </div>

            <button class="w-full bg-[#90E0EF] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:brightness-105 transition-all active:scale-[0.98]">
              Sign Up
            </button>
          </form>

          <p class="text-center text-sm mt-10 text-gray-400 pt-3">
            Already have an account? 
            <RouterLink to="/Signup" class="text-blue-600 font-bold hover:underline ml-1">Create Account</RouterLink>
          </p>
        </div>
      </div>

      <div class="hidden md:block md:w-1/2 p-6">
        <div class="h-full w-full bg-[#1e293b] rounded-[32px] relative overflow-hidden flex flex-col justify-between p-16 text-white">
          <div class="absolute inset-0 opacity-20">
             <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" fill="white" />
             </svg>
          </div>
          
          <div class="relative z-10">
             <h2 class="text-5xl font-light leading-[1.2] tracking-tight mb-8">
               Real-time <br/>
               <span class="font-bold">Atmospheric</span> <br/>
               Intelligence.
             </h2>
             <p class="text-gray-400 max-w-xs leading-relaxed">
               Access high-resolution radar data and satellite imagery in one click.
             </p>
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-6">
               <div>
                 <p class="text-xs font-semibold text-gray-400 mb-1">Current</p>
                 <p class="text-3xl font-bold tracking-tighter">72°F</p>
               </div>
               <div class="w-[1px] h-10 bg-gray-700"></div>
               <div>
                 <p class="text-xs font-semibold text-gray-400 mb-1">Condition</p>
                 <p class="text-lg font-medium">Clear Skies</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>