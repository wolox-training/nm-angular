import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import { messages } from './config/i18n.js'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Vuelidate)

const i18n = new VueI18n({
  locale: 'es',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
