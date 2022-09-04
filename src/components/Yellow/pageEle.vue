<template>
  <div class="page-box">
    <div v-if="name == 'first'">{{ name }}</div>

    <div v-if="name == 'second'">{{ name }}</div>

    <div v-if="name == 'third'">{{ name }}</div>

    <div v-if="name == 'fourth'">{{ name }}</div>

    <div v-if="name == 'fifth'">{{ name }}</div>

    <div v-if="name == 'sixth'">{{ name }}</div>

    <div v-if="name == 'seventh'">{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "PageEle",

  props: ["name"],
};
</script>
<style lang="css" scoped>
.page-box {
  margin-top: 30px;
  display: block;
}
</style>
