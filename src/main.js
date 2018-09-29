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
import router from './router';
import oDC from './dc';


Vue.config.productionTip = false;


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
