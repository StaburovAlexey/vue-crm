<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
import EmptyLayout from "./layout/EmptyLayout.vue";
import MainLayout from "./layout/MainLayout.vue";

export default {
  computed: {
    layout() {
      // return console.log(this.$route.meta.layout + "-layout");
      return this.$route.meta.layout + `-layout`;
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>
<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import "./assets/index.css";
</style>
