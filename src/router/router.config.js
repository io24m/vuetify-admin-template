import router from "./index.js"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import store from '@/store/index.js'

NProgress.configure({
    showSpinner: false
})
// let i = 0;
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    next()
    // if (i !== 0) {
    //     next()
    //     return
    // }
    // i = i + 1
    // const r = [{
    //     icon: "mail",
    //     name: "邮件",
    //     path: "/mail",
    //     component: () => import("@/components/layout/Layout"),
    //     // redirect: "/mail",
    //     children: [{
    //         icon: "mail",
    //         name: "h1",
    //         path: "/mail",
    //         component: () => import("@/views/index/Index"),
    //     }, ],
    // }, ]
    // store.dispatch('permission/addRouter', r)
    // router.addRoutes(r);
    // next()
});
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})