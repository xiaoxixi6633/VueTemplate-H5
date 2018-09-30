import types from "./mutation-types";
export default {
  async saveUserid({commit},payload){
    commit(types.SAVE_USERID,payload)
  },
  async saveDeviceinfo({commit},payload){
    commit(types.SAVE_DEVICEInfO,payload)
  },
}

