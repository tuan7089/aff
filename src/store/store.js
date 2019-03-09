import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isStudent: false,
    signIn: false
  },
  mutations: {
    setStudent (state, payload) {
      state.isStudent = payload
    },

    setSignIn (state, payload) {
      state.signIn = payload
    }
  }
})