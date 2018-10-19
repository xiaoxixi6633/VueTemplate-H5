/*
 * @Author: xixi
 * @Date: 2018-06-01 14:50:54
 * @Last Modified by:   xixi
 * @Last Modified time: 2018-06-05 10:50:54
 */
import Vue from 'vue';
import {
  AlertPlugin,
  ToastPlugin,
  LoadingPlugin,
} from 'vux';
import App from './App';
import store from './store';
import router from './router';
import oDC from './dc';
import 'babel-polyfill'; 


Vue.config.productionTip = false;


Vue.use(oDC);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
// http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//             config.headers.Authorization = `token ${store.state.token}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });

// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 返回 401 清除token信息并跳转到登录页面
//                     store.commit(types.LOGOUT);
//                     router.replace({
//                         path: 'login',
//                         query: {redirect: router.currentRoute.fullPath}
//                     })
//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     });
