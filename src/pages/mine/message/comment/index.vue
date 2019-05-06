<template>
  <div>
    <message-demo title='收到的评论'></message-demo>
  </div>
</template>

<script>
import messageDemo from '@/pages/mine/message/messageDemo';

export default {
  name: 'comment',
  data() {
    return {

    }
  },
  components:{
    messageDemo
  }
}
</script>

<style lang='less' scoped>

</style>
