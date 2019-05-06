<template>
  <div>
    <el-row>
      <el-col :span="24">
123
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-form ref="form" style="text-align:left" :model="me" width='200px' label-position="top">
          <el-form-item label="姓名">
            <el-input v-model="me.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="email">
            <el-input v-model="me.email" ></el-input>
          </el-form-item>
          <!-- <el-form-item label="昵称">
            <el-input v-model="me.nickname"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="me.sex"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="me.phone"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="me.age"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存设置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">

      </el-col>
    </el-row>



  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'forms',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'me',
    ])
  },
  created() {

  },
  updated() {

    },
  mounted() {


  },
  methods: {
    onSubmit(){

    }
  }
}
</script>

<style>

</style>
