<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/form">表单</router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HomePages from "./pages/HomePages/HomePages";
// import Form from "./components/Form";

export default {
  name: 'App',
  components: {
    // HomePages,
    // Form,
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
