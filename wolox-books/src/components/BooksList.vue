<template lang='pug'>
.books-container
  router-link.books-list(v-for='book in allBooks' :key='book.id' to='/')
    img.book-image(:src='book.image_url' :alt='book.title')
    span.bold.text-ending
      | {{book.title}}
    span.text-ending
      | {{book.author}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['bringBooks']),
    getBooks() {
      this.bringBooks()
    }
  },
  computed: {
    ...mapGetters(['allBooks'])
  },
  beforeMount() {
    this.getBooks()
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.books-container {
  display: grid;
  grid-auto-rows: 250px;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 200px);
  max-width: 800px;
  margin: 30px auto;
  width: 100%;
}

.books-list {
  padding: 20px;
  background: $light-gray;
  display: flex;
  flex-direction: column;
}

</style>
