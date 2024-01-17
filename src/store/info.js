import { db } from "@/main";
import { get, ref } from "firebase/database";

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const dbRef = ref(db, `/users/${uid}/info`);
        const snapshot = await get(dbRef);
        const info = snapshot.val();
        commit("setInfo", info);
      } catch (e) {}
    },
  },
  getters: {
    info: (s) => s.info,
  },
};
