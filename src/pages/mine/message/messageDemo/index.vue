<template>
  <div class="messageDemo">
    <h3>
      {{title}}
    </h3>
    <ul>
      <li v-for="item in Array.from(datas.notifications)">
        <comment v-if="type == '/message/comment'" :datas="item"></comment>
      </li>
    </ul>
  </div>
</template>
<script>
import comment from './comment';
import datas from './data';
export default {
  name: 'messageDemo',
  data() {
    return {
      datas:datas,
      type:(()=>{
        return this.$route.path
      })()
    }
  },
  components:{
    comment
  },
  props:{
    title:[String]
  },
  created () {
    console.log(this.type);
  }
}
</script>
<style lang='less' scoped>
.messageDemo{
  padding: 0 20px;
  h3{
    text-align: left;
  }
  ul{
    list-style: none;
  }
}
</style>
