<template>
    <div class="registerContainer">
        <div>
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

            <el-form-item>
                <el-button type="primary">同意条款并注册</el-button>
            </el-form-item>
        </el-form>
        <div class="tip">
            已有账号？<a href="login" style="text-decoration-line: none"
                >登录已有账号</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>

<style lang="css" scoped>
.registerContainer {
    border-radius: 20px;
    width: 500px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
