import Vue from 'vue'
import BaseToast from './Toast.vue'

const ToastExtend = Vue.extend(BaseToast)

const Toast = function (config) {
    const toast = new ToastExtend({
        data: config
    });
    toast.$mount();
    // const appToast = document.getElementById('app')
    // appToast.appendChild(toast.$el);
    document.body.appendChild(toast.$el);
}
Toast.closeAll = function () {

}
export default Toast