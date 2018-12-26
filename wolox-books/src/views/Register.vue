<template lang="pug">
.container
  form.form-container(@submit.prevent="onSubmit" novalidate)
    img.wolox-image(src="../assets/wolox.png" alt="Wolox")
    .input-container
      label.input-label
        | First name
      input.input-field(type="text" v-model="firstName")
    .input-container
      label.input-label
        | Last name
      input.input-field(type="text" v-model="lastName")
    .input-container
      label.input-label
        | Email
      input.input-field(type="email" v-model="email")
    .input-container
      label.input-label
        | Password
      input.input-field(type="password" v-model="password")
    .input-container
      label.input-label
        | Confirm password
      input.input-field(type="password" v-model="confirmPassword")
    button.green-button.submit-button(type="submit")
      | Sign up
    button.green-button.login-button
      | Log in
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      locale: "en"
    }
  },
  methods: {
    onSubmit() {
      const productReview = {
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

<style lang="scss">
@import '../scss/aplication.scss';

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.form-container {
  background-color: $light-gray;
  border-top: 5px solid $blue-wolox;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
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
  background-color: $light-gray;
  border: 2px solid $green-wolox;
  border-radius: 8px;
  color: $green-wolox;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}

.submit-button {
  background-color: $green-wolox;
  border: 2px solid $green-wolox;
  border-radius: 8px;
  color: $white;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}
</style>
