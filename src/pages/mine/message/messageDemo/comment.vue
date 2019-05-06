<template>
  <div class="messages" ref="boxs" @mouseenter='inform=true' @mouseleave='inform=false' :ids='datas.id' :userId='datas.source.id' :messageId='datas.target.id' :articleId='datas.target.note.id' :parentId='datas.target.parent_id' :type='datas.type'>
    <div class="rows">
      <div class="cols img">
        <img class="head-portrait" :src="datas.source.avatar_source" alt="">
      </div>
      <div class="cols user-info">
        <p class="user">
          {{datas.source.nickname}} 在文章 《{{datas.target.note.title}}》 中写了一条新评论
        </p>
        <p class="time">
          {{new Date(datas.created_at).Format("yyyy.MM.dd hh:mm:ss")}}
        </p>
      </div>
      <div class="cols">

      </div>
    </div>
    <div class="rows"  v-html="datas.target.compiled_content"></div>
    <div class="rows btns">
        <el-button type="text" class="btn"><i class="el-icon-goods"></i>回复</el-button>
        <el-button type="text" class="btn"><i class="el-icon-goods"></i>查看对话</el-button>
        <el-button type="text" class="inform" v-if='inform'>举报</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {
      inform:false
    }
  },
  props: {
    datas:[Object]
  },
  created () {
    // console.log(this.datas);
  },
  mounted() {
    // console.log(this.$refs.boxs);
  },
  methods: {

  },
}
</script>
<style lang='less' scoped>
.messages{
  text-align-last: left;
  padding: 15px 10px 5px;
  border-top: 1px solid #ccc;
  .rows{
    margin: 10px 0;
    *{
      margin: 0;
      padding: 0;
    }
    .cols{
      vertical-align: top;
      display: inline-block;
    }
    .img{
      .head-portrait{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .user-info{
      padding: 0 10px;
      .user{
        font: 14px/20px 'Miscroft YaHei';
        margin-bottom: 3px;
      }
      .time{
        font: 10px/20px 'Miscroft YaHei';
      }
    }
  }
  .btns{
    .btn{
      margin: 0 20px 0 0;
    }
    .inform{
      float: right;
    }
    .el-button{
      color: #ccc;
      &:hover{
        color: #000;
      }
    }
  }
}

</style>
