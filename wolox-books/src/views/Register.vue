<template lang="pug">
.container
  img(src="../assets/wolox.png" alt="Wolox" class="wolox-image")
  h1
    | Hello world
</template>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
}

.container {
  align-items: center;
  background-color: #F4F4F4;
  border-top: 5px solid #0FAAEB;
  display: flex;
  flex-direction: column;
  grid-template-rows: repeat(8, 100px);
  grid-template-columns: 400px;
  margin: 50px 0px;
  max-width: 400px;
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'register',
  components: {}
}
</script>
