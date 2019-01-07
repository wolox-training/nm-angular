<template lang="pug">
  #app
    transition(name='efect' mode='out-in')
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

.efect-enter-active, .efect-leave-active {
  animation: 2s enetrAnim forwards;
}

.efect-leave-active {
  animation: 2s leavingAnim forwards;
}

@keyframes enetrAnim {
  from {
    opacity: 0;
    transform: translateY(-75px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leavingAnim {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-75px);
  }
}
</style>
