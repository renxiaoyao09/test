<template>
  <div>
    <el-menu v-if="token" class="el-menu-demo" :default-active="aaaaa" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">发现</el-menu-item>
      <el-menu-item index="/attention">关注</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          消息
        </template>
        <el-menu-item v-for="item in messageListDate" :index="item.path" :key="item.index">
          <i :class="item.icon"></i>{{item.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="search">
        <el-input
          placeholder="搜索"
          suffix-icon="el-icon-search"
          v-model="input2"
          class='searchInput'>
        </el-input>
      </el-menu-item>
    </el-menu>
    <el-menu v-else class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/downloadApp">下载App</el-menu-item>
      <el-menu-item index="search">
        <el-input
          placeholder="搜索"
          suffix-icon="el-icon-search"
          v-model="input2"
          class='searchInput'>
        </el-input>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: '',
  data() {
    return {
      input2:'',
      aaaaa:''
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'messageListDate'
    ])
  },
  watch: {
    $route(){
      this.aaaaa = this.$route.path;
    }
  },
  methods: {
    handleSelect(key, keyPath){
      if (key != 'search') {
        this.$router.push({path:key});
      }else{
        alert(key);
      }
    },
  },
}
</script>
<style lang='less' scoped>
.searchInput{
  border-radius: 80px!important;
  width: 150px;
  transition: width 2s;
    .searchInput .el-input__inner:focus{
      .searchInput{

        width:250px;
      }
    }
}
</style>
