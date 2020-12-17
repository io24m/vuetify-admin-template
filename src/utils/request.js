import axios from 'axios'
import settings from '@/settings.js'
import {
    getToken
} from '@/utils/auth.js'

import Vue from 'vue'

// import {
//     message
// } from 'ant-design-vue'


const configFn = function (config) {
    config.headers['Admin-Token'] = getToken()
    return config;
}

const responseFn = function (response) {
    const { data } = response
    if (data && data.success) {
        return data
    }
    console.log("error message")
    return Promise.reject(response);
}

const responseErrorFn = function (error) {
    //console.error(error)
    if (error.response) {
        switch (error.response.status) {
            case 401: {
                Vue.$messageBox({
                    title: "无权限",
                    message: "请重新登录",
                    cb: function () {
                        window.location = '/'
                    },
                })
                return
            }
            //confirm('过期')
        }
    }
    return Promise.reject(error);
}

const request = axios.create(settings.axios)

// 添加请求拦截器
request.interceptors.request.use(configFn, (error) => Promise.reject(error));

// 添加响应拦截器
request.interceptors.response.use(responseFn, responseErrorFn);
// request.interceptors.response.eject

export function newRequest() {
    const instance = axios.create(settings.axios)
    instance.interceptors.request.use(configFn, (error) => Promise.reject(error));
    return instance
}

export default request