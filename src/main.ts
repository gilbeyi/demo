import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

import i18nUtils from './api/i18n.js'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = i18nUtils.messages

const i18n = new VueI18n({
  locale: 'ja',
  messages: messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
