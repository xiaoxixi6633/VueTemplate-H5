/*
 * @Author: changge
 * @Date: 2018-06-05 17:24:17
 * @Last Modified by: changge
 * @Last Modified time: 2018-06-06 10:47:24
 */
<template>
  <div id="app">
    <img src="./assets/images/common/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
