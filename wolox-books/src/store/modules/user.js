export const moduleUser = {
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
}
