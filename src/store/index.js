import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: null,
      isAuthenticated: false,
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = true
    },
    LOGOUT(state) {
      state.user = null
      state.isAuthenticated = false
    },
  },

  actions: {
    // login now returns a Promise
    login({ commit }, payload) {
      return new Promise((resolve) => {
        // 🔹 Fake login logic
        if (payload.email === 'admin@test.com' && payload.password === '1234') {
          commit('SET_USER', payload)
          resolve(true) // login success
        } else {
          resolve(false) // login failed
        }
      })
    },

    signup({ commit }, payload) {
      return new Promise((resolve) => {
        // 🔹 Fake signup
        commit('SET_USER', payload)
        resolve(true)
      })
    },

    logout({ commit }) {
      commit('LOGOUT')
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
})
