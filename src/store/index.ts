import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import auth from "./auth";
import plague from "./plague";
import farm from "./farm";
Vue.use(Vuex);

const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage,
  key: "hackathon",
});

export default new Vuex.Store({
  modules: {
    auth,
    plague,
    farm,
  },
  plugins: [vuexLocal.plugin],
});
