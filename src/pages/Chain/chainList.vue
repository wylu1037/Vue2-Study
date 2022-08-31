<template>
  <el-main>
    <el-button
      type="primary"
      style="margin-right: -1190px; margin-bottom: 20px; position: relative"
      @click="getAllChainList"
      >查询</el-button
    >
    <el-table border :data="chainList">
      <el-table-column type="index" label="序号" width="200"></el-table-column>
      <el-table-column prop="Name" label="名称"> </el-table-column>
      <el-table-column
        prop="ChainType"
        label="链类型"
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
      <el-table-column prop="BlockChainId" label="BlockChainID">
      </el-table-column>
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
import {mapState} from 'vuex'

export default {
    name: 'ChainList',

    methods: {
        matchChainTypeName(type) {
            return type == 0 ? '晶格链' : '超级账本'
        },

        getAllChainList() {
            this.$store.dispatch('latticeModule/getAllChainList')
        },

        queryChainInfo(chainId) {
            alert('链ID：' + chainId)
        },
    },

    computed: {
        ...mapState('latticeModule', ['chainList'])
    }
};
</script>

<style></style>
