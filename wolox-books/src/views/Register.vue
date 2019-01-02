<template lang='pug'>
.container
  form.form-container(@submit.prevent='onSubmit' novalidate)
    img.wolox-image(src='../assets/wolox.png' alt='Wolox')
    .input-container
      label.input-label
        | First name
      input.input-field(type='text' v-model='firstName')
      span.error-message(v-if='$v.firstName.$invalid && submitted')
        | Invalid field.
    .input-container
      label.input-label
        | Last name
      input.input-field(type='text' v-model='lastName')
      span.error-message(v-if='$v.lastName.$invalid && submitted')
        | Invalid field.
    .input-container
      label.input-label
        | Email
      input.input-field(type='email' v-model='email')
      span.error-message(v-if='$v.email.$invalid && submitted')
        | Invalid field.
    .input-container
      label.input-label
        | Password
      input.input-field(type='password' v-model='password')
      span.error-message(v-if='$v.password.$invalid && submitted')
        | Invalid field. Upper letters and numbers are required.
    .input-container
      label.input-label
        | Confirm password
      input.input-field(type='password' v-model='confirmPassword')
      span.error-message(v-if='$v.confirmPassword.$invalid && submitted')
        | password do not match.
    button.green-button(type='submit')
      | Sign up
    router-link(to='/login')
      button.grey-button(type='button')
        | Log in
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { registerUser } from '../services/user-services'
import { validatePassword } from '../config/helpers'

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
        const newUserData = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          locale: 'en',
          confirm_password: this.confirmPassword
        }
        registerUser(newUserData).then(() => {
          this.$router.push('/login')
        })
        this.firstName = null
        this.lastName = null
        this.email = null
        this.password = null
        this.confirmPassword = null
        this.submitted = false
      }
    }
  },
  validations: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    password: { required, validatePassword },
    confirmPassword: { samePassword: sameAs('password') }
  }
}
</script>

<style lang='scss'>
</style>
