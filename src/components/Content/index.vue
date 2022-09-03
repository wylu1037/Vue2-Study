<template>
  <div class="content-box">
    <Nav></Nav>
    <el-container>
      <el-container style="width: 100%">
        <el-tabs
          v-model="tabValue"
          style="width: 100%"
          type="border-card"
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
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Nav from "@/components/Nav";
export default {
  name: "Content",
  components: { Nav },

  data() {
    return {
      tabRoute: {
        BlockChain: "/home/chain/list",
        LatticeNode: "/home/node/list",
      },
    };
  },
  methods: {
    ...mapMutations("navModule", [
      "SETTABVALUE",
      "SETCLOSABLE",
      "PUSHTAB",
      "SETTABS",
    ]),

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
        this.SETTABVALUE(activeName);
        if (pushFlag) {
          this.$router.push(this.tabRoute[activeName]);
        }
        this.SETTABS(tabs.filter((tab) => tab.name !== targetName));
        this.SETCLOSABLE(this.tabs.length !== 1);
      }
    },

    clickTab(tab, event) {
      const fullPath = this.tabRoute[tab.name];
      if (tab.$route.fullPath !== fullPath) {
        this.$router.push(fullPath);
      }
    },
  },
  computed: {
    ...mapState("latticeModule", ["chainList"]),
    ...mapState("navModule", ["closable", "tabs"]),
    tabValue: {
      get() {
        return this.$store.state.navModule.tabValue;
      },
      set(val) {
        this.SETTABVALUE(val);
      },
    },
  },
};
</script>
<style lang="css">
.content-box {
  display: flex;
}
</style>
