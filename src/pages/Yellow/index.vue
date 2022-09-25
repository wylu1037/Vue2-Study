<template>
  <div class="yellow-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="tab in yellowTabList"
        :key="tab.id"
        :label="tab.label"
        :name="tab.name"
        ><PageEle :name="tab.name" :yellowTabList="yellowTabList"
          ><h1>{{ tab.name }}</h1></PageEle
        ></el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import PageEle from "@/components/Yellow/pageEle.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Yellow",

  components: { PageEle },

  data() {
    return {
      activeName: "first",
    };
  },

  methods: {
    ...mapActions("latticeModule", ["findYellowTabList"]),

    handleClick(tab, event) {
      console.log(tab, event);
    },
  },

  computed: {
    ...mapState("latticeModule", ["yellowTabList"]),
  },

  mounted() {
    this.findYellowTabList();
  },
};
</script>
<style lang="css" scoped>
.yellow-box {
  width: 100%;
  display: block;
}
</style>
