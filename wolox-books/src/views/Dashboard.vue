<template lang='pug'>
div
  navbar
  books-list
</template>

<script>
import Navbar from '@/components/Navbar'
import BooksList from '@/components/BooksList'

export default {
  name: 'dashboard',
  components: { Navbar, BooksList }
}
</script>
