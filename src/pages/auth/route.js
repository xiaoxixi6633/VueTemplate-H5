/*
 * @Author: changge
 * @Date: 2018-06-01 17:36:06
 * @Last Modified by:   changge
 * @Last Modified time: 2018-06-04 17:36:06
 */
const auth = () => import('@/pages/auth/index');
const login = () => import('@/pages/auth/login/index');
const register = () => import('@/pages/auth/register/index');

export default [{
  path: '/auth',
  name: 'auth',
  component: auth,
  redirect: '/auth/login',
  children: [
    {
      path: 'login',
      component: login,
    },
    {
      path: 'register',
      component: register,
    },
  ],
}];
