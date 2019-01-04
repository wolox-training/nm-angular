import Vue from 'vue'
import Vuex from 'vuex'
import { getListOfBooks } from '@/services/bookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: 'not logged',
    booksList: []
  },
  mutations: {
    SET_USER_STATUS(state, status) {
      state.userStatus = status
    },
    SET_BOOKS(state, books) {
      state.booksList = books
    }
  },
  actions: {
    userLogged(context) {
      context.commit('SET_USER_STATUS', 'logged')
    },
    userLoggedOut(context) {
      context.commit('SET_USER_STATUS', 'not logged')
    },
    bringBooks(context) {
      getListOfBooks().then(response => {
        context.commit('SET_BOOKS', response.data)
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
