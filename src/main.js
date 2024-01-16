import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBxw-dNmp9_oJVSBun64lwlH4SP3RFA8JY",
  authDomain: "vue-crm-4483a.firebaseapp.com",
  projectId: "vue-crm-4483a",
  storageBucket: "vue-crm-4483a.appspot.com",
  messagingSenderId: "1080972559466",
  appId: "1:1080972559466:web:b1c5ae0143ae91a077b613",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(
  app,
  "https://vue-crm-4483a-default-rtdb.europe-west1.firebasedatabase.app/"
);
let appVue;
auth.onAuthStateChanged(() => {
  if (!appVue) {
    appVue = createApp(App).use(store).use(router).mount("#app");
  }
});
// createApp(App).use(store).use(router).mount("#app");

export { auth, db };
