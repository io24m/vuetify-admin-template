import Vue from 'vue'
import store from './store/index'
import router from "./router"

import vuetify from './plugins/vuetify';
import './plugins/axios.js'

import App from './App.vue'

import settings from './settings.js'

import Mock from './mock/index.js'
if (settings.mock) {
  Mock.bootstrap()
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')