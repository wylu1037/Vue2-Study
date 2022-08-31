<template>
  <el-main>
    <el-button
      type="primary"
      class="node-list-query-btn"
      @click="getAllChainList"
      >查询</el-button
    >
    <el-table border :data="chainList">
      <el-table-column type="index" label="序号" width="200"></el-table-column>
      <el-table-column prop="Name" label="节点名称"> </el-table-column>
      <el-table-column
        prop="ChainType"
        label="节点类型"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.ChainType === 0 ? 'primary' : 'success'"
            disable-transitions
            >{{ matchChainTypeName(scope.row.ChainType) }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="BlockChainId" label="IP"> </el-table-column>
      <el-table-column prop="BlockChainId" label="节点账户"> </el-table-column>
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
export default {
  name: "NodeList",
};
</script>

<style>
.node-list-query-btn {
  display: block;
  margin-left: auto;
  margin-bottom: 10px;
}
</style>
