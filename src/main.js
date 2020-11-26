import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// import VuetifyToast from 'vuetify-toast-snackbar'

import store from './store/index'
import router from "./router"
import './utils/axiosPlugin.js'

Vue.config.productionTip = false

// Vue.use(VuetifyToast)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')