import { getListOfBooks } from '@/services/bookService'

export const moduleBooks = {
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
