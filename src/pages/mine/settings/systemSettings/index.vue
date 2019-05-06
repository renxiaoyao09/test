<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="aaaaa"
          class="el-menu-vertical-demo">
          <el-menu-item class="tl" v-for="(item,index) in systemSettingListDate" :index="item.path" :key='index'>
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'systemSettings',
  data() {
    return {
      aaaaa:''
    }
  },
  computed: {
    ...mapGetters([
      'systemSettingListDate'
    ])
  },
  created () {
    this.aaaaa = this.$route.path;
  },
  watch: {
    $route(){
      this.aaaaa = this.$route.path;
      console.log(this.aaaaa);
    }
  },
}
</script>

<style lang='less' scoped>
.tl{
  text-align: left;
}
</style>
