import Vue from "vue"
import Router from "vue-router"
import constantRouter from './constantRouter.js'
import request from '@/utils/request'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth.js'

import settings from '@/settings.js'

// import { newRequest } from '@/utils/request'

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
    document.title = to.meta && to.meta.title || settings.app.title
    const token = getToken()
    if (!token) {
        if (to.path === '/login') {
            next()
        } else {
            next(`/login`)
            NProgress.done()
        }
        return
    }
    if (to.path === '/login') {
        next()
        // next("/")
        NProgress.done()
        return
    }
    //auth
    request({
        url: '/auth/data'
    }).then(() => {
        //authData
        next()
    }).catch(( ) => { 
        next(`/login`)
        return
        // console.log(err)
        // if (err.response.status === 401) {
        //     next(`/login`)
        // }
        //next(`/login`)
    })
});
router.afterEach(() => {
    NProgress.done()
})

export default router