<template>
  <div class="login-bg">
    <div style="flex: 8"></div>
    <div style="display: flex; flex-direction: column; flex: 3">
      <div style="flex: 5"></div>
      <div style="flex: 1">
        <!-- 登录表单部分 -->
        <div class="login-box">
          <div style="margin-bottom: 15%">
            <h1>华中大Vue学习系统</h1>
          </div>
          <el-form>
            <el-form-item prop="username">
              <el-input placeholder="用户名"><span></span></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码"></el-input>
            </el-form-item>
            <div style="display: flex; justify-content: space-evenly">
              <el-form-item>
                <el-button type="primary" class="login-btn" @click="login"
                  >登录</el-button
                >
                <el-button type="success" class="login-btn" @click="toRegister"
                  >注册</el-button
                >
              </el-form-item>
            </div>
          </el-form>
          <div>
            <p class="login-tip">温馨提示：</p>
            <p class="login-tip">未登录过的新用户，需先行注册账户！！！</p>
            <p class="login-tip">注册过的用户可凭账号密码登录！！！</p>
          </div>
        </div>
      </div>
      <div style="flex: 2"></div>
    </div>
    <div style="flex: 2"></div>
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
  display: flex;
  width: 100vw;
  height: 100vh;
}

.login-box {
  display: block;
  width: 350px;
  border-radius: 2px;
  text-align: center;
}

.login-btn {
  width: 170px;
}

.login-tip {
  color: gray;
  font-size: 10px;
}
</style>
