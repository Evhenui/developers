import { createStore } from "vuex";
import state from "@/modules/state";
import getters from "@/modules/getters";
import mutations from "@/modules/mutations";

export default createStore({
  modules: { state, getters, mutations },
  state: state,
  getters: getters,
  mutations: mutations,
  actions: { }
});
