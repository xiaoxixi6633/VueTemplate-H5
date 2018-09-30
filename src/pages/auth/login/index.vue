/*
 * @Author: xixi
 * @Date: 2018-06-05 17:23:31
 * @Last Modified by: xixi
 * @Last Modified time: 2018-06-06 14:42:05
 */
<template lang="pug">
div.login_main
  div.username
    span 用户名：
    input.username_input(v-model="sUserName")
  div.password 
    span 密码：
    input.password_input(v-model="sPassWord")
  div.loginBtn
    button(@click="fnClickLogin") 登录

</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      sUserName: '',
      sPassWord: '',
    };
  },
  methods: {
      ...mapActions(['saveUserid','saveDeviceinfo']),
    fnClickLogin() {
      if (!this.sUserName || !this.sPassWord) {
        this.$vux.toast.text('请输入账号或密码！', 'center');
        return;
      }
      this.$vux.loading.show({
        text: '登录中...',
      });
      let _data = {
        phone: this.sUserName,
        pwd: this.sPassWord,
      }
      this.$dataCenter.userLogin
        .validate({
          data: _data,
        })
        .then(res => {
          this.$vux.loading.hide();
          res.code = 200;
          let token = '23787474sdf'
          if(res.code ===200){
            this.saveUserid(token);
            this.saveDeviceinfo(12);
            this.$router.push('/home');
          } else {
            this.$vux.toast.text(res.msg, 'center');
          }
        })
        .catch(oError => {
          if (oError) {
            this.$vux.loading.hide();
            this.$vux.toast.text(oError.message, 'center');
            // 错误处理
          }
        });
    },
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './index.scss';
</style>

