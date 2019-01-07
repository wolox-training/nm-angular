import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import { Locales } from './i18n.js'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  Locales,
  render: h => h(App)
}).$mount('#app')
