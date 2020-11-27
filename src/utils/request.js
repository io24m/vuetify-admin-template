import axios from 'axios'
import settings from '@/settings.js'
import {
    getToken
} from '@/utils/auth.js'

// import {
//     message
// } from 'ant-design-vue'
const request = axios.create(settings.axios)

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    config.headers['Admin-Token'] = getToken()
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // message.error('请求失败！')
    console.error(error)
    return Promise.reject(error);
});

export default request