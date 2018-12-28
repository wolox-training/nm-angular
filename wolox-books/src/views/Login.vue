<template lang='pug'>
.container
  form.form-container(@submit.prevent='onSubmit' novalidate)
    img.wolox-image(src='../assets/wolox.png' alt='Wolox')
    .input-container
      label.input-label
        | Email
      input.input-field(type='email' v-model='email')
      span.errorMessage(v-if='$v.email.$invalid && submitted')
        | Invalid field.
    .input-container
      label.input-label
        | Password
      input.input-field(type='password' v-model='password')
      span.errorMessage(v-if='$v.password.$invalid && submitted')
        | Invalid field. Upper letters and numbers are required.
    button.green-button(type='submit')
      | Log in
    routerLink(to='/signup')
      button.grey-button(type='button')
        | Sign up
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { loginUser } from '../services/user-services'
import validatePassword from '../config/helpers'

export default {
  name: 'register',
  data () {
    return {
      email: null,
      password: null,
      locale: 'en',
      submitted: false
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true
      if (!this.$v.$invalid) {
        const userData = {
          email: this.email,
          password: this.password
        }
        loginUser(userData)
        this.email = null
        this.password = null
        this.submitted = false
      }
    }
  },
  validations: {
    email: { required, email },
    password: { required, validatePassword }
  }
}
</script>

<style scoped lang='scss'>
</style>
