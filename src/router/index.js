/*
 * @Author: changge
 * @Date: 2018-06-05 17:24:04
 * @Last Modified by:   changge
 * @Last Modified time: 2018-06-05 17:24:04
 */
import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/pages/auth/route';
import home from '@/pages/home/route';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/auth/login',
    },
    ...auth,
    ...home,
  ],
});
