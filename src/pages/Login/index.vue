<template>
  <div class="login-bg">
    <div class="login-box">
      <div>
        <h1>中国安徽省DEMO系统</h1>
      </div>
      <el-form>
        <el-form-item prop="username">
          <el-input placeholder="用户名"><span></span></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login"
            >登录</el-button
          >
          <el-button type="success" class="login-btn" @click="toRegister"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <p class="login-tip">温馨提示：</p>
      <p class="login-tip">未登录过的新用户，需先行注册账户！！！</p>
      <p class="login-tip">注册过的用户可凭账号密码登录！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push({ name: "home" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style lang="css" scoped>
.login-bg {
    display: block;
    border: 1px solid #f90;
    width: 100%;
    height: 100%;
}

.login-container {
  border-radius: 20px;
  width: 350px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-box {
    width: 350px;
    padding: 240px 1em 0 80em;
    border-radius: 2px;
}

.login-btn {
  width: 150px;
}

.login-tip {
  color: gray;
  font-size: 10px;
}
</style>
