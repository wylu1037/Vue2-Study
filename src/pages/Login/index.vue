<template>
    <div class="loginContainer">
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
                <el-button type="primary" class="loginBtn">登录</el-button>
                <el-button type="success" class="loginBtn">注册</el-button>
            </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过的新用户，需先行注册账户！！！</p>
        <p class="tip">注册过的用户可凭账号密码登录！！！</p>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style lang="css" scoped>
.loginContainer {
    border-radius: 20px;
    width: 350px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loginBtn {
    width: 150px;
}

.tip {
    color: gray;
    font-size: 10px;
}
</style>
