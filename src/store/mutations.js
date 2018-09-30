import types from "./mutation-types";

export default {
  [types.SAVE_USERID](state,res){
   state.userid = res;
   localStorage.setItem('userid',res)
  },
  [types.SAVE_DEVICEInfO](state,res){
   state.deviceinfo = res;
  }
  
}
