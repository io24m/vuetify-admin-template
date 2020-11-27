import Vue from 'vue'
import store from './store/index'
import router from "./router"

import vuetify from './plugins/vuetify';
import './plugins/axios.js'

import App from './App.vue'

import Mock from './mock/index.js'
Vue.config.productionTip = false

Mock.bootstrap()

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')