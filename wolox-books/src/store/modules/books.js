import { getListOfBooks, getBookDetails } from '@/services/bookService'

export const moduleBooks = {
  state: {
    booksList: [],
    lastBookViewed: {}
  },
  getters: {
    allBooks: state => state.booksList,
    selectedBook: state => state.lastBookViewed
  },
  mutations: {
    setBooks(state, books) {
      state.booksList = books
    },
    setLastBookViewed (state, book) {
      state.lastBookViewed = book
    }
  },
  actions: {
    bringBooks(context) {
      getListOfBooks().then(response => {
        context.commit('setBooks', response.data)
      })
    },
    bringSingleBook(context, bookId) {
      getBookDetails(bookId).then(response => {
        context.commit('setLastBookViewed', response.data)
      })
    }
  }
}
