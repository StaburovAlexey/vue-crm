import { auth } from "@/main";
import { signInWithEmailAndPassword } from "firebase/auth";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        throw e;
      }
    },
  },
};
