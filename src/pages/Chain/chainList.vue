<template>
  <div class="chain-list-main">
    <el-main>
      <div>
        <el-button
          class="chain-list-query-btn"
          type="primary"
          @click="findPageChainList"
          >查询</el-button
        >
      </div>
      <el-table border :data="chainList">
        <el-table-column
          type="index"
          label="序号"
          width="200"
        ></el-table-column>
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
        <el-table-column
          fixed="right"
          label="操作"
          width="120px"
          align="center"
        >
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
              @click="deleteChain(scope.row.ID)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <Pagination
      :total="chainTotal"
      :pageList="pageList"
      :params="params"
    ></Pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChainList",

  data() {
    return {
      params: {
        page: 1,
        size: 10,
      },
    };
  },

  methods: {
    matchChainTypeName(type) {
      return type == 0 ? "晶格链" : "超级账本";
    },

    getAllChainList() {
      this.$store.dispatch("latticeModule/getAllChainList");
    },

    findPageChainList() {
      this.$store.dispatch("latticeModule/findPageChainList", this.params);
    },

    queryChainInfo(chainId) {
      alert("链ID：" + chainId);
    },

    deleteChainById(chainId) {
      this.$store.dispatch("latticeModule/deleteChainById", chainId);
    },

    deleteChain(chainId) {
      this.$confirm("此操作将永久删除链，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 调用接口删除链
          // deleteChainById(chainId);
          this.$message({ type: "success", message: "删除成功！" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除！",
          });
        });
    },

    pageList() {
      this.findPageChainList();
    },
  },

  computed: {
    ...mapState("latticeModule", ["chainList", "chainTotal"]),
  },
};
</script>

<style lang="css" scoped>
.chain-list-main {
  width: 100%;
  height: 100%;
}

.chain-list-query-btn {
  margin-left: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
