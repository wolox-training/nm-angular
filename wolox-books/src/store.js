import Vue from 'vue'
import Vuex from 'vuex'
import { getListOfBooks } from '@/services/bookService'

Vue.use(Vuex)

const moduleUser = {
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

const moduleBooks = {
  state: {
    booksList: []
  },
  getters: {
    allBooks: state => state.booksList
  },
  mutations: {
    setBooks(state, books) {
      state.booksList = books
    }
  },
  actions: {
    bringBooks(context) {
      getListOfBooks().then(response => {
        context.commit('setBooks', response.data)
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    user: moduleUser,
    books: moduleBooks
  }
})
