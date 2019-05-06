<template>

  <el-row class="el-row"  type="flex"  justify="space-between">
    <el-col :span="2">
      <router-link to='/'>
        <img src="@/assets/home.png" style="width:100px;" >
      </router-link>
    </el-col>
    <el-col :span="12">
      <search-part></search-part>
    </el-col>
    <el-col :span="8" class="el-col1">
      <setting-lists></setting-lists>
    </el-col>
  </el-row>

</template>

<script>
import settingLists from './settingLists';
import searchPart from './searchPart';
export default {
  name: 'headers',
  data(){
    return {

    }
  },
  components:{
    settingLists,
    searchPart
  },
  created () {

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
  background: #fff;
  border-bottom:1px solid #ccc;
  padding: 0;
  line-height: 60px;
  height: 60px;
}
.el-row{
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;
  margin: 0;
  height: 60px;
}
.el-col1{
  display: flex;
  justify-content:space-between;
}

</style>
