<template>
  <div class="baseSettings">
    <el-form
    :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      label-position="left"
      class="demo-ruleForm">
      <el-form-item label-width='0px'>
        <template>
          <div>
            <el-upload
  class="avatar-uploader"
  action="#"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
          </div>
        </template>
      </el-form-item>

      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>

      <el-form-item label="电子邮件" prop="email">
        <el-button round>点击绑定</el-button>
      </el-form-item>

      <el-form-item label="常用编辑器" prop="editor">
        <el-radio-group v-model="ruleForm.editor">
          <el-radio label="1">富文本</el-radio>
          <el-radio label="2">Markdown </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="语言设置" prop="language">
        <el-radio-group v-model="ruleForm.language">
          <el-radio label="1">中文简体</el-radio>
          <el-radio label="2">中文繁体</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="接收谁的简信" prop="letter">
        <el-radio-group v-model="ruleForm.letter">
          <el-radio label="1">所有人</el-radio>
          <el-radio label="2">我关注的人、我发过简信的人</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="提醒邮件通知" prop="notification">
        <el-radio-group v-model="ruleForm.notification">
          <el-radio label="1">所有动态</el-radio>
          <el-radio label="2">每天未读汇总</el-radio>
          <el-radio label="3">不接收</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label-width='0px'>
        <template>
          <div>

        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          </div>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'baseSettings',
  data() {
    return {
      imageUrl: '',
      ruleForm: {
        imageUrl:'',
        nickname: '',
        email: '',
        editor:'',
        language:'',
        letter:'',
        notification:''
      },
      rules: {
        nickname: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          },
        ],
        resource: [{
          required: true,
          message: '请选择活动资源',
          trigger: 'change'
        }],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },




    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }


  }
}
</script>

<style lang='less' scoped>
.baseSettings{
  padding: 30px;
  text-align: left;
  .el-form-item{
    height: 60px;
    .el-input{
      width: 200px;
    }
    .el-radio{
      margin: 0 80px 0 0;
      width: 142px;
    }
  }
}
</style>
