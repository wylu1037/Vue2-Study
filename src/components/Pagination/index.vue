<template>
  <div class="pagination">
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="total"
      :hide-on-single-page="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "Pagination",

  methods: {
    handleSizeChange(val) {
      this.params.size = val;
      this.pageList(this.params);
    },

    handleCurrentChange(val) {
      this.params.page = val;
      this.pageList(this.params);
    },
  },

  props: ["total", "params", "pageList"],
};
</script>
<style lang="css" scoped>
.pagination {
  margin-left: 55%;
}
</style>
