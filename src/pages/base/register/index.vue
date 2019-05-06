<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        用户注册
      </div>
          <el-form label-width="80px" :model="registerForm" ref='registerForm' :rules="rules">
            <el-form-item label="账号" prop="name">
              <el-input v-model="registerForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password">
              <el-input v-model="registerForm.repassword"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="registerForm.email"></el-input>
            </el-form-item>

            <el-form-item label="头像" prop="profile">
              <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :headers="headers"
                :on-preview="handlePictureCardPreview"
                name="profile"
                :auto-upload='false'
                :on-change="handleChange"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="profile" :src="profile" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
              <el-button @click="resetForm('registerForm')">重置</el-button>
              <!-- <el-button @click="dialogVisible = false">取消</el-button> -->
            </el-form-item>
          </el-form>

    </el-card>
  </div>
</template>
<script>
import {
  users,
  validateEMail
} from '@/utils/validate';
import {
  register
} from '@/api/base/login';
export default {
  name: 'login',
  data() {
    return {
      headers: {
        "enctype": "multipart/form-data"
      },
      registerForm: {
        name: 'admin1',
        password: 'admin1',
        email: 'admin1@qq.com',
        repassword: '',
        profile: ''
      },
      rules: {
        name: [{
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          },
          // {validator:users,trigger:'blur'}
        ],
        password: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          },
          {
            validator: users,
            trigger: 'blur'
          }
        ],
        email: [{
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur'
          },
          {
            validator: validateEMail,
            trigger: 'blur'
          }
        ]
      },
      profile: '',
    }
  },
  created() {

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == 'registerForm') {
            this.userRegister();
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    userRegister() {
      const _this = this;
      register(_this.registerForm).then((response) => {
        if (response.status == 200) {
          _this.$message({
            message: '恭喜你，注册成功！',
            type: 'success'
          });
          _this.loginForm = {
            name: _this.registerForm.name,
            password: _this.registerForm.password,
            remember: true
          }
          _this.registerForm = {
            name: '',
            password: '',
            email: '',
            repassword: '',
            profile: ''
          }
          _this.$router.push(this.$route.query.redirect || '/')
        }
      }).catch((response) => {
        _this.$message.error('注册失败！');
      })
    },

    handleAvatarSuccess(res, file) {
      this.profile = URL.createObjectURL(file.raw);
      this.registerForm.profile = res;
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
      console.log(file)
      return isJPG && isLt2M;
    },
    handlePictureCardPreview(file) {
      console.log(file)
        this.profile = file.url;
      },
      handleChange(file,fileList) {
        // var reader = new FileReader();
        // reader.readAsDataURL(file.raw);
        // console.log(reader)
            // let fileName = file.name;
            // let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
            // if (regex.test(fileName.toLowerCase())) {
            //     this.profile = file.url;
            // } else {
            //     this.$message.error('请选择图片文件');
            // }
      },
  }

}
</script>
<style lang="css" scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix{
    /* background: #ccc; */
    text-align: left;
    text-indent: 2rem;
    width: 100%;
    height: 100%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 750px;
    /* margin-top: 20px; */
    margin: 20px auto;
  }
</style>
