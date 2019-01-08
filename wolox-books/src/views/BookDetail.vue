<template lang='pug'>
.book-container.row.back-grey
  img.book-image.margin-20(:src='selectedBook.image_url' :alt='selectedBook.title')
  .column.width-100
    .row.pad-20.under-green-line
      span.bold.text-ending.pad-right-5
        | {{selectedBook.title}}
      span.text-ending.pad-right-5
        | ({{selectedBook.genre}})
    .border
      .row.pad-5
        span.text-ending.bold
          | Book Author:
        span.text-ending
          | {{selectedBook.author}}
      .row.pad-5
        span.text-ending.bold
          | Publisher:
        span.text-ending
          | {{selectedBook.publisher}}
      .row.pad-5
        span.text-ending.bold
          | Year of publication:
        span.text-ending
          | {{selectedBook.year}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['bringSingleBook']),
    getBooks() {
      this.bringSingleBook()
    }
  },
  computed: {
    ...mapGetters(['selectedBook'])
  },
  beforeMount() {
    this.getBookInformation()
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.under-green-line {
  border-bottom: 2px solid $green-wolox;
}

.book-container {
  display: flex;
  max-width: 800px;
  margin: 30px auto;
  width: 100%;
  background-color: $white;
  height: auto;
}

.back-grey {
  background-color: $light-gray;
}

.border {
  margin: 20px 10px;
  padding: 10px 0;
}
</style>
