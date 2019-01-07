<template lang='pug'>
.container
  form.form-container(@submit.prevent='onSubmit' novalidate)
    img.wolox-image(src='../assets/wolox.png' alt='Wolox')
    .input-container
      label.input-label
        | {{ $t('signUpForm.firstName') }}
      input.input-field(type='text' v-model='firstName')
      span.error-message(v-if='$v.firstName.$invalid && submitted')
        | {{ $t('errors.invalidField') }}
    .input-container
      label.input-label
        | {{ $t('signUpForm.lastName') }}
      input.input-field(type='text' v-model='lastName')
      span.error-message(v-if='$v.lastName.$invalid && submitted')
        | {{ $t('errors.invalidField') }}
    .input-container
      label.input-label
        | {{ $t('signUpForm.email') }}
      input.input-field(type='email' v-model='email')
      span.error-message(v-if='$v.email.$invalid && submitted')
        | {{ $t('errors.invalidField') }}
    .input-container
      label.input-label
        | {{ $t('signUpForm.password') }}
      input.input-field(type='password' v-model='password')
      span.error-message(v-if='$v.password.$invalid && submitted')
        | {{ $t('errors.invalidPassword') }}
    .input-container
      label.input-label
        | {{ $t('signUpForm.confirmPassword') }}
      input.input-field(type='password' v-model='confirmPassword')
      span.error-message(v-if='$v.confirmPassword.$invalid && submitted')
        | {{ $t('errors.passwordMissmatch') }}
    button.green-button(type='submit')
      | {{ $t('buttons.signUp') }}
    router-link.display-center.grey-button(to='/login')
      | {{ $t('buttons.logIn') }}
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { registerUser } from '@/services/UserServices'
import { validatePassword } from '@/config/helpers'
import { routes } from '@/constants'

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
          this.$router.push(routes.login)
        })
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
