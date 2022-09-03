<template>
  <div class="home-root">
    <Header></Header>
    <Content></Content>
  </div>
</template>
<script>
import Header from "@/components/Header/index.vue";
import Content from "@/components/Content/index.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Header, Content },
};
</script>

<style lang="css">
.home-root {
  height: 100%;
  width: 100%;
}
</style>
