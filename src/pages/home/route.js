/*
 * @Author: changge
 * @Date: 2018-06-01 17:36:06
 * @Last Modified by: changge
 * @Last Modified time: 2018-06-04 17:37:16
 */
const home = () => import('@/pages/home/index');

export default [{
  path: '/home',
  name: 'home',
  component: home,
}];
