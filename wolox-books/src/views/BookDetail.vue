<template lang='pug'>
div
  navbar
  book-info
</template>

<script>
import Navbar from '@/components/Navbar'
import BookInfo from '@/components/BookInfo'

export default {
  name: 'BookDetail',
  components: { Navbar, BookInfo }
}
</script>
