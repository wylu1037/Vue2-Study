<template>
  <div>
    <el-aside
      width="200px"
      height="90%"
      style="background-color: rgb(238, 241, 246)"
    >
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>导航一</template
          >
          <el-menu-item-group>
            <template slot="title">分组一</template>
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
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-setting"></i>导航三</template
          >
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
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
