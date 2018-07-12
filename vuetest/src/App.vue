<template>
  <div id="app">

    <p>这可以看做是导航栏</p>
    <router-link to="/index">播放界面</router-link>
   
    <router-link to="/logins">登录界面</router-link>
     <router-link to="/My">我的</router-link>
     <router-link to="/searchPage">搜索界面</router-link>
      <router-link to="/searchAnswer">搜索结果</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
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