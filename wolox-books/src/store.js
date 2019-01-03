import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: 'not logged'
  },
  mutations: {
    SET_USER_STATUS(state, status) {
      state.userStatus = status
    }
  },
  actions: {
    userLogged(context) {
      context.commit('SET_USER_STATUS', 'logged')
    },
    userLoggedOut(context) {
      context.commit('SET_USER_STATUS', 'not logged')
    }
  }
})
