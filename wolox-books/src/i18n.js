import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const messages = {
  en: {
    signInForm: {
      email: 'Email',
      password: 'Password'
    }
  },
  es: {
    signInForm: {
      email: 'Correo electrónico',
      password: 'Contraseña'
    }
  }
}

export const Locales = new VueI18n({
  locale: 'es',
  messages
})
