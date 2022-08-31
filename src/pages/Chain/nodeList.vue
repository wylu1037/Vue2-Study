<template>
  <el-main>
    <el-input v-model="chainId" placeholder="请输入链ID"></el-input>
    <el-button type="primary" class="node-list-query-btn" @click="getNodeList"
      >查询</el-button
    >
    <el-table border :data="nodeList">
      <el-table-column type="index" label="序号" width="200"></el-table-column>
      <el-table-column prop="Name" label="节点名称"> </el-table-column>
      <el-table-column prop="IP" label="IP地址"> </el-table-column>
      <el-table-column prop="ChainId" label="链ID"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120px" align="center">
        <template slot-scope="scope">
          <el-button
            @click="queryChainInfo(scope.row.ID)"
            icon="el-icon-search"
            circle
            size="small"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="small"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NodeList",

  data() {
    return {
      chainId: undefined,
    };
  },

  methods: {
    getNodeList() {
      this.$store.dispatch("latticeModule/getNodeList", this.chainId);
    },
  },

  computed: {
    ...mapState("latticeModule", ["nodeList"]),
  },
};
</script>

<style>
.node-list-query-btn {
  display: block;
  margin-left: auto;
  margin-bottom: 10px;
}
</style>
