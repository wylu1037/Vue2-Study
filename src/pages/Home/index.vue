<template>
  <div class="home-root">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <el-container style="height: 757px">
        <el-aside
          width="200px"
          height="757px"
          style="background-color: rgb(238, 241, 246)"
        >
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>导航一</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1"
                  ><router-link
                    style="text-decoration: none"
                    to="/home/chain/list"
                    >区块链</router-link
                  ></el-menu-item
                >
                <el-menu-item index="1-2"
                  ><router-link
                    style="text-decoration: none"
                    to="/home/node/list"
                    >节点信息</router-link
                  ></el-menu-item
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
              <template slot="title"
                ><i class="el-icon-menu"></i>导航二</template
              >
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

        <el-container style="width: 100vw">
          <router-view></router-view>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  methods: {
    matchChainTypeName(type) {
      return type == 0 ? "晶格链" : "超级账本";
    },

    getAllChainList() {
      this.$store.dispatch("latticeModule/getAllChainList");
    },

    queryChainInfo(chainId) {
      console.log(chainId);
    },
  },

  computed: {
    ...mapState("latticeModule", ["chainList"]),
  },
};
</script>

<style lang="css">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.home-root {
  height: 100vh;
}
</style>
