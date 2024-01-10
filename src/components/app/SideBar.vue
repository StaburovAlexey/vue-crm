<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      active-class="active"
      to="/"
      exact
      v-for="link in links"
      :key="link.url"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>
<script>
export default {
  data: () => ({
    links: [
      { title: "Счет", url: "/" },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категория", url: "/categories" },
    ],
  }),
};
</script>
