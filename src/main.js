s/*
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
import router from './router';
import oDC from './dc';


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (from.path !== to.path) {
    document.title = to.name || '捷思致诚  执信以越';
  }
  next();
});

Vue.use(oDC);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
