/*
 * @Author: changge
 * @Date: 2018-06-01 09:30:38
 * @Last Modified by: changge
 * @Last Modified time: 2018-06-06 14:40:40
 */
import Promise from 'promise';
import Vue from 'vue';

// 用法：https://github.com/axios/axios#request-config
import axios from 'axios';

// 用法：https://github.com/pillarjs/path-to-regexp
import pathToRegExp from 'path-to-regexp';

const vm = new Vue();
/**
 * option: {
 *  bNotCommonError: // true：不采用/false：采用，是否采用通用错误处理，默认 false，也就是采用
 * }
 */


function fnPureProcessResolveData(resolve, fnArgModel, oData) {
  let anyResult = oData;
  if (typeof fnArgModel === 'function') {
    anyResult = fnArgModel(oData);
  }
  resolve(anyResult);
}


function fnPureProcessResourceData(option, fnArgModel) {
  return new Promise(function (resolve, reject) {
    if (option.oNoneRESTful) {
      let toPath = pathToRegExp.compile(option.url);
      try {
        option.url = toPath(option.oNoneRESTful);
      } catch (e) {
        console.error(e);
        return;
      }
    }
    axios(option)
      .then((oRes) => {
        let fnBsnHandleCommonError = (oError = {}) => {
          // 错误处理
        };
        if (!oRes.code || oRes.code === 0) {
          fnBsnHandleCommonError(oRes.data);
        }
        if (fnArgModel && typeof fnArgModel === 'function') {
          fnPureProcessResolveData(resolve, fnArgModel, oRes.data);
        } else {
          resolve(oRes.data);
        }
      })
      .catch((oError) => {
        if (oError && oError.response && oError.response.status === 404) {
          oError.code = 404;
          oError.message = '服务器异常';
        } else if (!option.bNotCommonError && oError && oError.response && oError.response.status === 403) {
          location.href = '/auth/login';
        } else if (!option.bNotCommonError && oError.message) {
          console.error(oError.message || '未知错误');
        }
        reject(oError);
      });
  });
}

export default fnPureProcessResourceData;
