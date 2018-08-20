import axios from 'axios'
import qs from 'qs'
import store from '../store/store'

// axios 配置
let root = process.env.API_ROOT
axios.defaults.timeout = 10000
// axios.defaults.baseURL = '/api/'
axios.defaults.baseURL = root

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(store.state.token) {
        config.headers.token = store.state.token;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

// GET 请求
export function get(url, params) {
    return axios.get(url, {
        params: params
    })
}

// POST 请求
export function post(url, params) {
    params = qs.stringify(params);
    return axios.post(url, params)
}