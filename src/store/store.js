import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isStudent: false,
    signIn: false,
    isMobile: false,
    isAdmin: false,
    dataUsers: {},
    dataUser: {}
  },
  mutations: {
    setStudent (state, payload) {
      state.isStudent = payload
    },

    setSignIn (state, payload) {
      state.signIn = payload
    },

    setMobile(state, payload) {
      state.isMobile = payload
    },

    setAdmin(state, payload) {
      state.isAdmin = payload
    },

    setDataUsers(state, payload) {
      state.dataUsers = payload
    },

    setDataUser(state, payload) {
      state.dataUser = payload
    },
  }
})