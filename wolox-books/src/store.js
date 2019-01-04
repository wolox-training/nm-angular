import Vue from 'vue'
import Vuex from 'vuex'
import { getListOfBooks } from '@/services/bookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    booksList: []
  },
  mutations: {
    setUserStatus(state, status) {
      state.loginStatus = status
    },
    setBooks(state, books) {
      state.booksList = books
    }
  },
  actions: {
    userLogged(context) {
      context.commit('setUserStatus', true)
    },
    userLoggedOut(context) {
      context.commit('setUserStatus', false)
    },
    bringBooks(context) {
      getListOfBooks().then(response => {
        context.commit('setBooks', response.data)
      })
    }
  },
  getters: {
    allBooks(state) {
      return state.booksList
    },
    oneBook(state) {
      return id => state.booksList[id]
    }
  }
})
