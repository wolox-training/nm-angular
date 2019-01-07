<template lang='pug'>
  header.header-container
    img(src='../assets/wolox.png' alt='Wolox')
    button.bold.logout(type='button' @click='logout')
      | Logout
</template>

<script>
import { logoutUser } from '@/services/UserServices'
import { routes } from '@/constants'
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    ...mapActions(['userLoggedOut']),
    logout() {
      logoutUser()
      this.$router.push(routes.login)
      this.userLoggedOut()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colors';

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
</style>
