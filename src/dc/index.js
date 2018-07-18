/*
 * @Author: changge
 * @Date: 2018-06-05 10:37:25
 * @Last Modified by: changge
 * @Last Modified time: 2018-06-05 16:39:43
 */
import oUser from './api/user';

const oDC = {};
const oDataCenter = {
  ...oUser,
};
oDC.install = function (Vue, options) {
  Vue.prototype.$dataCenter = oDataCenter;
};

export default oDC;
