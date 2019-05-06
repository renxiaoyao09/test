<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="aaaaa"
          router
          class="el-menu-vertical-demo">
          <el-menu-item class="tl" v-for="(item,index) in messageListDate" :index="item.path" :key='index'>
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
  name: 'meaasge',
  data() {
    return {
      aaaaa:''
    }
  },
  computed: {
    ...mapGetters([
      'messageListDate'
    ])
  },
  created () {
    this.aaaaa = this.$route.path;
  },
  watch: {
    $route(){
      this.aaaaa = this.$route.path;
    }
  },
}
</script>
<style lang='less' scoped>

.tl{
  text-align: left;
}

</style>
