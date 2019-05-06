<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        用户登录
      </div>
      <el-form label-width="80px" :model="loginForm" ref='loginForm' :rules="rules">
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
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
  loginIn,
} from '@/api/base/login';

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        name: 'admin1',
        password: 'admin1',
        // remember:true
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
    }
  },
  created() {

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == 'loginForm') {
            this.userLogin();
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    userLogin() {
      const _this = this;
      loginIn(_this.loginForm).then((response) => {
        if (response.status == 200) {
          _this.$store.dispatch('Login', response.data).then(() => {
            _this.$message({
              message: '登录成功！',
              type: 'success'
            });
            _this.loginForm = {
              name: '',
              password: '',
              remember: true
            }
            _this.$router.push(this.$route.query.redirect || '/');
            // _this.getMe();
          })
        }
      }).catch((error) => {
        _this.$message.error('登录失败！请检查账号和密码！');
      })
    },
    getMe(){
      const _this = this;
      getMe().then((response)=>{
        _this.$store.dispatch('getMe', response.data).then(() => {

        })
      }).catch((error) => {
        _this.$message.error('获取用户信息出错！');
      })
    }
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
