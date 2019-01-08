export const moduleUser = {
  state: {
    isUserLogged: false
  },
  getters: {
    userStatus: state => state.isUserLogged
  },
  mutations: {
    setUserStatus(state, status) {
      state.isUserLogged = status
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
