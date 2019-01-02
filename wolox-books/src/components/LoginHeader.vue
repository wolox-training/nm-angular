<template lang='pug'>
  header.header-container
    img(src='../assets/wolox.png' alt='Wolox')
    button.bold.logout(v-on:click='logout')
      | Logout
</template>

<script>
import { logoutUser } from '../services/user-services'

export default {
  name: 'LoginHeader',
  data () {
    return {}
  },
  methods: {
    logout() {
      logoutUser()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors.scss';

.header-container {
  background: $light-gray;
  border: none;
  border-top: 5px solid $blue-wolox;
  box-shadow: 0 3px 5px $invalid-gray;
  display: flex;
  height: 100%;
  justify-content: space-around;
  max-height: 80px;
  width: 100%;
}

.logout {
  background: $light-gray;
  border: none;
  font-size: 20px;
}

.bold {
  font-weight: bold;
}
</style>
