<template>
  <div id="app">
    <h2>hello qiankun</h2>
    <br>
    <router-link to="/">首页</router-link>
    <br>
    <router-link to="/vue">vue应用</router-link>
    <br>
    <router-link to="/react">react应用</router-link>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
