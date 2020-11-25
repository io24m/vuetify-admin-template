import Vue from "vue"
import Router from "vue-router"
import constantRouter from './constantRouter.js'
Vue.use(Router)

const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes: constantRouter
})

const router = createRouter()

export default router