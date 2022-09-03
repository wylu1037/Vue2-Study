<template>
  <div>
    <el-aside
      width="200px"
      height="90%"
      style="background-color: rgb(238, 241, 246)"
    >
      <el-menu :collapse="false" :default-openeds="['1', '2', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-goods"></i>中科晶格</template
          >
          <el-menu-item-group>
            <el-menu-item
              index="1-1"
              @click="
                addTab(
                  { name: 'BlockChain', title: '区块链' },
                  'BlockChain',
                  '/home/chain/list'
                )
              "
              >区块链</el-menu-item
            >
            <el-menu-item
              index="1-2"
              @click="
                addTab(
                  { name: 'LatticeNode', title: '节点信息' },
                  'LatticeNode',
                  '/home/node/list'
                )
              "
              >节点信息</el-menu-item
            >
            <el-menu-item
              index="1-3"
              @click="
                addTab(
                  { name: 'YellowPage', title: '黄页' },
                  'YellowPage',
                  '/home/yellow'
                )
              "
              >黄页</el-menu-item
            >
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">链类型</template>
            <el-menu-item index="1-4-1">晶格链</el-menu-item>
            <el-menu-item index="1-4-2">超级账本</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-reading"></i>禅道</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">项目</el-menu-item>
            <el-menu-item index="2-2">需求</el-menu-item>
            <el-menu-item index="2-3">任务</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-mouse"></i>测试</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">提BUG</el-menu-item>
            <el-menu-item index="3-2">提优化</el-menu-item>
            <el-menu-item index="3-3">发布上线</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Nav",

  data() {
    return {};
  },
  methods: {
    ...mapMutations("navModule", [
      "ADDTAB",
      "PUSHTAB",
      "SETTABVALUE",
      "SETCLOSABLE",
    ]),

    addTab(tab, tabValue, fullPath) {
      if (JSON.stringify(this.tabs).indexOf(JSON.stringify(tab)) === -1) {
        this.PUSHTAB(tab);
      }
      this.SETTABVALUE(tabValue);
      this.SETCLOSABLE(this.tabs.length !== 1);
      if (this.$route.fullPath !== fullPath) {
        this.$router.push(fullPath);
      }
    },
  },

  computed: {
    ...mapState("navModule", ["closable", "tabValue", "tabs"]),
  },
};
</script>

<style lang="css" scoped>
.nav-main {
  height: 10%;
  justify-content: space-between;
}
</style>
