<template lang="pug">
  #app
    navbar(v-if='userStatus')
    router-view
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  computed: {
    ...mapGetters(['userStatus'])
  }
}
</script>

<style lang="scss">
@import 'scss/aplication';
</style>
