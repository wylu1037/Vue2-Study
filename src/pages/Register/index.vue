<template>
  <!-- 样式调整部分 -->
  <div class="register-box">
    <!-- 注册部分 -->
    <div class="register-content">
      <div style="text-align: center; margin-bottom: 10%">
        <h1>欢迎注册</h1>
      </div>

      <el-form>
        <el-form-item>
          <el-input placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请设置密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="地址"></el-input>
        </el-form-item>

        <el-form-item style="text-align: center">
          <el-button type="primary">同意条款并注册</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align: center" class="tip">
        已有账号？<a
          href="login"
          style="text-decoration-line: none; font-weight: bold"
          >登录已有账号</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="css" scoped>
.register-box {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.register-content {
  display: block;
  border-radius: 20px;
  width: 500px;
}
</style>
