<template>
  <ul class="sidenav app-sidenav" :class="{ open: modelValue }">
    <li
      v-for="link in links"
      :key="link.url"
      :class="{ active: isActive === link.url }"
    >
      <router-link
        class="waves-effect waves-orange pointer"
        :to="link.url"
        exact
      >
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["modelValue"],
  data: () => ({
    links: [
      { title: "Счет", url: "/" },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категория", url: "/categories" },
    ],
  }),
  computed: {
    isActive() {
      return this.$route.path;
    },
  },
};
</script>
