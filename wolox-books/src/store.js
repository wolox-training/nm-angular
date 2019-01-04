import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false
  },
  mutations: {
    setUserStatus(state, status) {
      state.loginStatus = status
    }
  },
  actions: {
    userLogged(context) {
      context.commit('setUserStatus', true)
    },
    userLoggedOut(context) {
      context.commit('setUserStatus', false)
    }
  }
})
