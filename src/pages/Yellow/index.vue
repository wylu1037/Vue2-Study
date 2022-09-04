<template>
  <div class="yellow-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="tab in yellowTabList"
        :key="tab.id"
        :label="tab.label"
        :name="tab.name"
        >{{ tab.label }}</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
