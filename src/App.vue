<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './pages/layout';
export default {
  name: 'App',
  components:{
    Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  padding: 0;
  margin: 0;
  background: #fff;
}
</style>
