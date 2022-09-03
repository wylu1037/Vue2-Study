<template>
  <div class="yellow-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="开发环境" name="first"><Dev></Dev></el-tab-pane>
      <el-tab-pane label="测试环境" name="second"
        ><el-dropdown>
          <span class="el-dropdown-link">
            选择功能<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></el-tab-pane
      >
      <el-tab-pane label="阜南版" name="third">阜南版</el-tab-pane>
      <el-tab-pane label="亚信版" name="fourth">亚信版</el-tab-pane>
      <el-tab-pane label="NFT版" name="fifth">NFT版</el-tab-pane>
      <el-tab-pane label="基线版" name="sixth">基线版</el-tab-pane>
    </el-tabs>

    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">开发环境</template>
        <el-menu-item index="1-1">BaaS系统</el-menu-item>
        <el-menu-item index="1-2">BaaS后台</el-menu-item>
        <el-menu-item index="1-3">NodeJS服务</el-menu-item>
        <el-menu-item index="1-4">晶格链</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">测试环境</template>
        <el-menu-item index="2-1">2.22主机</el-menu-item>
        <el-menu-item index="2-2">2.18主机</el-menu-item>
        <el-menu-item index="2-3">2.53主机</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">测评环境</template>
          <el-menu-item index="2-4-1">2.56主机</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">历史版本</el-menu-item>
      <el-menu-item index="4"><a target="_blank">BUG历史</a></el-menu-item>
    </el-menu>
    <div class="line"></div> -->
  </div>
</template>

<script>
import Dev from "@/components/Yellow/dev.vue";
export default {
  name: "Yellow",

  components: { Dev },

  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="css" scoped>
.yellow-box {
  width: 100%;
  display: block;
}
</style>
