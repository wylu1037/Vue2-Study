<template>
  <div class="header-box">
    <!-- Logo部分 -->
    <div style="display: flex; align-items: center; margin-left: 20px">
      <el-col :span="12">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar
              shape="square"
              :size="35"
              :src="require('./avatar.jpg')"
            ></el-avatar>
          </div>
        </div>
      </el-col>
    </div>
    <!-- 系统名称部分 -->
    <div
      style="
        display: flex;
        font-family: 微软雅黑;
        font-size: 20px;
        align-items: center;
        color: #ffffff;
        margin-left: 10px;
        font-weight: bolder;
      "
    >
      华中大Vue学习系统
    </div>
    <!-- 右边部分 -->
    <div style="display: flex; align-items: center; margin-left: auto">
      <div style="margin-right: 25px">
        <el-badge :value="99" class="item" type="primary">
          <el-button size="small">消息</el-button>
        </el-badge>
      </div>
      <div style="margin-right: 10px">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar
                shape="square"
                :size="35"
                :src="require('./avatar.jpg')"
              ></el-avatar>
            </div>
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="css" scoped>
.header-box {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #245ff5;
}
</style>
