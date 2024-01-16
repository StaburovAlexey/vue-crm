<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="v$.email.$model"
          :class="{
            invalid: v$.email.$error,
          }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.email.required.$invalid"
          >Обязательное поле ввода</small
        >
        <small class="helper-text invalid" v-else-if="v$.email.email.$invalid"
          >Введите коректный Email
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="v$.password.$model"
          :class="{
            invalid: v$.password.$error,
          }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.minLength.$invalid"
          >Пароль должен быть не меньше 6 символов</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="v$.name.$model"
          :class="{
            invalid: v$.name.$error,
          }"
        />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="v$.name.required.$invalid"
          >Обязательное поле</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
export default {
  name: "registerForm",
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  methods: {
    async submitHandler() {
      if (!this.v$.$invalid) {
        const formData = {
          email: this.email,
          password: this.password,
          name: this.name,
        };
        try {
          await this.$store.dispatch("registr", formData);
          this.$router.push("/");
        } catch (e) {}
      }
      this.v$.$touch();
    },
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { chrcked: (v) => v },
    };
  },
};
</script>
