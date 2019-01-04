<template lang='pug'>
.book-container.row.back-grey
</template>

<script>
export default {
  data() {
    return {
      bookId: this.$route.params.id,
      book: {}
    }
  },
  methods: {
    getBookInformation() {
      this.book = this.$store.getters.oneBook(this.bookId)
    }
  },
  beforeMount() {
    this.getBookInformation()
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

.row {
  flex-direction: row;
}

.pad-5 {
  padding: 5px;
}

.pad-20 {
  margin: 20px 10px;
  padding: 10px 0;
}

.pad-right-5 {
  padding-right: 5px;
}

.under-green-line {
  border-bottom: 2px solid $green-wolox;
}

.column {
  flex-direction: column;
}

.width-100 {
  width: 100%;
}

.margin-20 {
  margin: 20px;
}

.book-container {
  display: flex;
  max-width: 800px;
  margin: 30px auto;
  width: 100%;
  background-color: $white;
  height: 200px;
}

.back-grey {
  background-color: $light-gray;
}
</style>
