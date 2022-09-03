<template>
  <div class="dev-box">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
  </div>
</template>
<script>
export default {
  name: "Dev",
};
</script>
<style lang="css" scoped>
.dev-box {
  margin-top: 30px;
  display: block;
}
</style>
