<template>
  <div class="grey darken-1 empty-layout">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError.code);
      if (fbError.code == "auth/invalid-credential") {
        alert("Неверный Email или пароль");
      } else if (fbError.code == "auth/too-many-requests") {
        alert("Слишком много попыток, попробуйте позже");
      } else if (fbError.code == "auth/email-already-in-use") {
        alert("Email уже зарегестрирован");
      } else {
        alert("Что-то пошло не так");
      }
    },
  },
};
</script>
