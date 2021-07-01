import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import Notifications from 'vue-notification'
import VueMask from 'v-mask'



import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
require('@/assets/styles/main.css')

import {i18n} from '@/i18n/index'
import FlagIcon from 'vue-flag-icon'

import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
Vue.use(Notifications)
Vue.use(FlagIcon)
Vue.use(VueMask);
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
