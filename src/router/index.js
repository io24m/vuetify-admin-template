import Vue from "vue"
import Router from "vue-router"
import constantRouter from './constantRouter.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {
    getToken
} from '@/utils/auth.js'

NProgress.configure({
    showSpinner: false
})

Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: constantRouter
})

const router = createRouter()

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = to.meta.title
    const token = getToken()
    if (token) {
        if (to.path === '/login') {
            next("/")
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next(`/login`)
            NProgress.done()
        }
    }

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

export default router