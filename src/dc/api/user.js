/*
 * @Author: xixi
 * @Date: 2018-06-05 17:23:21
 * @Last Modified by:   xixi
 * @Last Modified time: 2018-06-05 17:23:21
 */
import fnPureProcessResourceData from '../util';
import BaseAPI from '../base';

// 用户登录数据实体
class UserLogin extends BaseAPI {
  constructor() {
    super();
    this.sUpdateUrl = '';
    this.sValidateUrl = '/mc-auth/auth/login';
  }
  update(option = {}) {
    return fnPureProcessResourceData({
      url: this.sUpdateUrl,
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      ...option,
    });
  }
  validate(option = {}) {
    return fnPureProcessResourceData({
      url: this.sValidateUrl,
      method: 'post',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      ...option,
    });
  }
}

// 用户信息数据实体
class User extends BaseAPI {
  constructor() {
    super();
    this.sRetrieveUrl = '';
    this.sUpdateUrl = '';
  }
  retrieve(option = {}) {
    return fnPureProcessResourceData({
      url: this.sRetrieveUrl,
      method: 'get',
      ...option,
    });
  }
  update(option = {}) {
    return fnPureProcessResourceData({
      url: this.sUpdateUrl,
      method: 'post',
      ...option,
    });
  }
}

export default {
  user: new User(),
  userLogin: new UserLogin(),
};

