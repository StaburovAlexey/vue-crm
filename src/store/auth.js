import { auth, db } from "@/main";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { set, ref } from "firebase/database";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async registr({ dispatch, commit }, { email, password, name }) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const uid = await dispatch("getUid");
        await set(ref(db, `/users/${uid}/info`), {
          bill: 10000,
          name: name,
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      return auth.currentUser?.uid || null;
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("clearInfo");
    },
  },
};
