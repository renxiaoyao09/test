<template>
  <div class="layout">
    <el-container class="el-container">
      <el-header class="el-header">
        <Headers></Headers>
      </el-header>
      <!-- <el-aside class="el-aside">2</el-aside> -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- <el-footer class="el-footer">4</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import Headers from './headers';
export default {
  name: 'layout',
  data(){
    return {
      logined:false
    }
  },
  components:{
    Headers
  },
  methods: {

  },
}
</script>

<style>
.el-container{
  padding: 0;
  margin: 0;
}
.el-header{
  width: 100%;
  background: #F0F2F5;
  padding: 0;
  line-height: 60px;
  height: 60px;
}
.el-main{
  width: 80%!important;
  padding: 0;
  margin: 0 auto;
}
</style>
