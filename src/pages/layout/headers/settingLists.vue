<template>
  <el-row class="el-row"  type="flex"  justify="end" :gutter="30">
    <!-- <el-col> -->
      <el-button class="padding0" type="text" style="padding:15px;">
        Aa
      </el-button>
      <el-button  class="padding0" type="text">
        <img src="@/assets/start.png" style="width:70px;height:30px;" alt="">
      </el-button>
      <el-menu
        v-if="token"
        class="el-menu-demo h60"
        background-color='#fff'
        mode="horizontal"
        active-text-color='#ccc'
        @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">
            <img :src="imageUrl" style="width:40px;height:40px;border-radius:50%;" alt="">
          </template>
          <el-menu-item v-for="item in settingListDate" :index="item.path" :key="item.index">
            <i :class="item.icon"></i>{{item.name}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <el-menu v-else class="el-menu-demo" mode="horizontal" router @select="handleSelect">
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="/register">
          <el-button round native-type='button' style="height:40px;">
            注册
          </el-button>
        </el-menu-item>
      </el-menu>
    <!-- </el-col>
    <el-col> -->
      <el-button type="danger" round native-type='button' style="height:40px;margin-top:10px;">
        <i class="el-icon-search"></i>写文章
      </el-button>
    <!-- </el-col> -->
  </el-row>
</template>

<script>
import {mapGetters} from 'vuex';
import {logout} from '@/api/base/login';
export default {
  name:'settingLists',
  data(){
    return {
      imageUrl:''
    }
  },
  computed: {
    ...mapGetters([
      'me',
      'token',
      'settingListDate'
    ])
  },
  watch:{
    me(){
      if(this.me.info.imageUrl){
        this.imageUrl = this.me.info.imageUrl;
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 'logout') {
        this.logout();
      } else {
        this.$router.push({path:key});
      }
    },
    login(){
      this.$router.push('/login');
    },
    register(){
      this.$router.push('/register');
    },
    logout(){
      const _this = this;
      logout().then((response)=>{
        if (response.status == 200) {
          this.$store.dispatch('Logout').then(()=>{
            _this.$message({
              message: '退出当前账号！',
              type: 'success'
            });
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-row{
  &.children{
    margin-right: 20px;
    padding: 0;
  }
}
.h60{
  height: 60px;
}
.padding0{
  padding: 0;
}
</style>
