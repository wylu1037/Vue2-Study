<template>
  <div class="page-box">
    <div v-if="name == 'first'">
      <el-table :data="yellowTabList[0].data" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="200"
        ></el-table-column>
        <el-table-column prop="type" label="类型" width="240">
        </el-table-column>
        <el-table-column prop="url" label="网址" width="240"> </el-table-column>
        <el-table-column prop="port" label="端口" width="240">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="240">
        </el-table-column>
        <el-table-column prop="password" label="密码"> </el-table-column>
      </el-table>
    </div>

    <div v-if="name == 'second'">{{ name }}</div>

    <div v-if="name == 'third'">{{ name }}</div>

    <div v-if="name == 'fourth'">{{ name }}</div>

    <div v-if="name == 'fifth'">{{ name }}</div>

    <div v-if="name == 'sixth'">{{ name }}</div>

    <div v-if="name == 'seventh'">{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "PageEle",

  props: ["name", "yellowTabList"],
};
</script>
<style lang="css" scoped>
.page-box {
  margin-top: 30px;
  display: block;
}
</style>
