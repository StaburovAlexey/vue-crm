<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen"></Navbar>
    <sidebar v-model="isOpen"></sidebar>
    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/app/NavBar.vue";
import Sidebar from "@/components/app/SideBar.vue";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    isOpen: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
      console.log(this.$store.state.info);
    }
  },
};
</script>
