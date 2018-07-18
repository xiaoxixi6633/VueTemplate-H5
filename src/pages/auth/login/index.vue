/*
 * @Author: changge
 * @Date: 2018-06-05 17:23:31
 * @Last Modified by: changge
 * @Last Modified time: 2018-06-06 14:42:05
 */
<template lang="pug">
div
  div 用户名：
    input(v-model="sUserName")
  div 密码：
    input(v-model="sPassWord")
  div
    button(@click="fnClickLogin") login

</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      sUserName: '',
      sPassWord: '',
    };
  },
  methods: {
    fnClickLogin() {
      if (!this.sUserName || !this.sPassWord) {
        this.$vux.toast.text('请输入账号密码！', 'center');
        return;
      }
      this.$vux.loading.show({
        text: 'login',
      });
      this.$dataCenter.userLogin
        .validate({
          data: {
            userName: this.sUserName,
            passWord: this.sPassWord,
          },
        })
        .then(res => {
          this.$vux.loading.hide();
          this.$router.replace('/home');
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
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './index.scss';

</style>

