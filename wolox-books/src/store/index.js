import Vue from 'vue'
import Vuex from 'vuex'

import { moduleUser } from '@/store/modules/user'
import { moduleBooks } from '@/store/modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: moduleUser,
    books: moduleBooks
  }
})
