import axios from 'axios'
import settings from '@/settings.js'
import { getToken, setToken } from '@/utils/auth.js'
import qs from 'qs'

import Vue from 'vue'

const request = axios.create(Object.assign(settings.axios, {
    method: 'post',
    headers: { post: { 'Content-Type': 'application/x-www-form-urlencoded' } }
}))

request.interceptors.request.use(function (config) {
    config.headers['Admin-Token'] = getToken()
    if (config.method.toLocaleLowerCase() === 'post') {
        const ct = config.headers.post['Content-Type']
        if (ct && ct.indexOf('application/x-www-form-urlencoded') !== -1) {
            config.data = qs.stringify(config.data)
        }
    }
    return config;
}, (error) => Promise.reject(error));

request.interceptors.response.use(function (response) {
    const { data } = response
    if (data && data.success) {
        return data
    }
    return Promise.reject(response);
}, function (error) {
    if (error.response) {
        switch (error.response.status) {
            case 401: {
                Vue.$messageBox({
                    title: "无权限",
                    message: "请重新登录",
                    cb: function () {
                        setToken()
                        window.location = '/'
                    },
                })
                return
            }
        }
    }
    return Promise.reject(error);
});

export default request