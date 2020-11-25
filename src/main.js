import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VuetifyToast from 'vuetify-toast-snackbar'



import router from "./router"
import './router/router.config.js'
import './utils/axiosPlugin.js'

Vue.config.productionTip = false

Vue.use(VuetifyToast)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')