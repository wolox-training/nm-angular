<template lang='pug'>
.book-container.row.back-grey
  img.book-image.margin-20(:src='book.image_url' :alt='book.title')
  .column.width-100
    .row.pad-20.under-green-line
      span.bold.text-ending.pad-right-5
        | {{book.title}}
      span.text-ending.pad-right-5
        | ({{book.genre}})
    .border
      .row.pad-5
        span.text-ending.bold
          | Book Author:
        span.text-ending
          | {{book.author}}
      .row.pad-5
        span.text-ending.bold
          | Publisher:
        span.text-ending
          | {{book.publisher}}
      .row.pad-5
        span.text-ending.bold
          | Year of publication:
        span.text-ending
          | {{book.year}}
</template>

<script>
import { getBookDetails } from '@/services/bookService'

export default {
  data() {
    return {
      bookId: this.$route.params.id,
      book: {}
    }
  },
  methods: {
    getBookInformation() {
      getBookDetails(this.bookId).then(response => {
        this.book = response.data
      })
    }
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
