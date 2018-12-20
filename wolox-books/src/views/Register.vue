<template lang="pug">
.container
  form.form-container(@submit.prevent="onSubmit")
    img(src="../assets/wolox.png" alt="Wolox" class="wolox-image")
    .input-container
      label.input-label
        | First name
      input.input-field(type="text" v-model="firstName" required)
    .input-container
      label.input-label
        | Last name
      input.input-field(type="text" v-model="lastName" required)
    .input-container
      label.input-label
        | Email
      input.input-field(type="email" v-model="email" required)
    .input-container
      label.input-label
        | Password
      input.input-field(type="password" v-model="password" required)
    .input-container
      label.input-label
        | Confirm password
      input.input-field(type="password" v-model="confirmPassword" required)
    .green-button
      button.submit-button(type="submit")
        | Sign up
    .green-button
      button.login-button
        | Log in
</template>

<style lang="scss">
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.form-container {
  background-color: #F4F4F4;
  border-top: 5px solid #0FAAEB;
  grid-template-rows: repeat(8, 100px);
  grid-template-columns: 400px;
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  max-width: 400px;
  width: 100%;
}

.wolox-image {
  align-items: center;
  display: flex;
  margin: auto;
}

.input-container {
  padding: 20px;
}

.input-label {
  padding-left: 10px;
}

.input-field {
  border: 0;
  border-radius: 8px;
  height: 30px;
  margin-top: 10px;
  max-width: 350px;
  width: 100%;
}

.login-button {
  background-color: #F4F4F4;
  border: 2px solid #A4CC54;
  border-radius: 8px;
  color: #A4CC54;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}

.submit-button {
  background-color: #A4CC54;
  border: 2px solid #A4CC54;
  border-radius: 8px;
  color: #FFF;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}
</style>

<script>
export default {
  name: 'register',
  components: {},
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      console.log(productReview)
      this.firstName = null
      this.lastName = null
      this.email = null
      this.password = null
      this.confirmPassword = null
    }
  }
}
</script>
