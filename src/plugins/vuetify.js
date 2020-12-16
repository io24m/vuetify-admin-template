import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans'
// import VSnackbarQueue from '@tozd/vue-snackbar-queue';
import MessageBox from '@/components/messageBox'

Vue.use(Vuetify);
// Vue.use(VSnackbarQueue);
Vue.use(MessageBox);


export default new Vuetify({
    lang: {
        locales: {
            zhHans
        },
        current: 'zhHans'
    },
    icons: {
        // iconfont: 'fa4',
    },
});