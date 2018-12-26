<template lang="pug">
.container
  form.form-container(@submit.prevent="onSubmit" novalidate)
    img.wolox-image(src="../assets/wolox.png" alt="Wolox")
    .input-container
      label.input-label
        | First name
      input.input-field(type="text" v-model="firstName")
      span.errorMessage(v-if="$v.firstName.$invalid && submitted")
        | Invalid field.
    .input-container
      label.input-label
        | Last name
      input.input-field(type="text" v-model="lastName")
      span.errorMessage(v-if="$v.lastName.$invalid && submitted")
        | Invalid field.
    .input-container
      label.input-label
        | Email
      input.input-field(type="email" v-model="email")
      span.errorMessage(v-if="$v.email.$invalid && submitted")
        | Invalid field.
    .input-container
      label.input-label
        | Password
      input.input-field(type="password" v-model="password")
      span.errorMessage(v-if="$v.password.$invalid && submitted")
        | Invalid field. Upper letters and numbers are required.
    .input-container
      label.input-label
        | Confirm password
      input.input-field(type="password" v-model="confirmPassword")
      span.errorMessage(v-if="$v.confirmPassword.$invalid && submitted")
        | password do not match.
    button.green-button.submit-button(type="submit")
      | Sign up
    button.green-button.login-button
      | Log in
</template>

<script>
import { required, email, sameAs, helpers } from 'vuelidate/lib/validators'
const validatePassword = helpers.regex('validatePassword', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/)

export default {
  name: 'register',
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      locale: 'en',
      submitted: false
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true
      if (!this.$v.$invalid) {
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
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      validatePassword
    },
    confirmPassword: {
      samePassword: sameAs('password')
    }
  }
}
</script>

<style scoped lang="scss">
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

.errorMessage {
  padding: 5px 10px 0;
}
</style>
