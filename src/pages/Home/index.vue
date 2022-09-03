<template>
  <div class="home-root">
    <div>
      <Nav></Nav>
    </div>
    <div style="height: 90%">
      <el-container>
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
                      'BlockChain'
                    )
                  "
                  ><router-link
                    style="text-decoration: none"
                    to="/home/chain/list"
                    >区块链</router-link
                  ></el-menu-item
                >
                <el-menu-item
                  index="1-2"
                  @click="
                    addTab(
                      { name: 'LatticeNode', title: '节点信息' },
                      'LatticeNode'
                    )
                  "
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

        <el-container style="width: 100%">
          <el-tabs
            v-model="tabValue"
            style="width: 100%"
            type="card"
            :closable="closable"
            @edit="editTab"
            @tab-click="clickTab"
          >
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in tabs"
              :label="item.title"
              :name="item.name"
            >
              <router-view></router-view>
            </el-tab-pane>
          </el-tabs>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      closable: true,
      tabValue: "",
      tabs: [],

      tabRoute: {
        BlockChain: "/home/chain/list",
        LatticeNode: "/home/node/list",
      },
    };
  },

  methods: {
    addTab(tab, tabValue) {
      if (JSON.stringify(this.tabs).indexOf(JSON.stringify(tab)) === -1) {
        this.tabs.push(tab);
      }
      this.tabValue = tabValue;
      this.closable = this.tabs.length !== 1;
    },

    editTab(targetName, action) {
      if (action === "remove") {
        let pushFlag = targetName === this.tabValue;
        let tabs = this.tabs;
        let activeName = this.tabValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.tabValue = activeName;
        if (pushFlag) {
          this.$router.push(this.tabRoute[activeName]);
        }
        this.tabs = tabs.filter((tab) => tab.name !== targetName);
        this.closable = this.tabs.length !== 1;
      }
    },

    clickTab(tab, event) {
      const fullPath = this.tabRoute[tab.name];
      if (tab.$route.fullPath !== fullPath) {
        this.$router.push(fullPath);
      }
    },

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
  height: 100%;
  width: 100%;
}
</style>
