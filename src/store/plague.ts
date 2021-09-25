import { axiosCall } from "@/service/axios";
import Vue from "vue";
interface StadeBase {
  items: Array<any>;
  status: string;
}
const getDefaultState = () => {
  return {
    items: [],
    status: "",
  };
};
const state = getDefaultState();
const getters = {};
const mutations = {
  resetState(state: StadeBase): void {
    Object.assign(state, getDefaultState());
  },
  CHANGE(state: StadeBase, payload: StadeBase): void {
    Object.assign(state, payload);
  },
};
const actions = {
  RESET({ commit }: any): void {
    commit("resetState");
  },
  CHANGE({ commit }: any, payload: StadeBase): void {
    commit("CHANGE", payload);
  },
  async GET_LIST({ commit, state }: any): Promise<void> {
    if (state.status === "loading") return;
    commit("CHANGE", { status: "loading" });
    const [error, data] = await axiosCall({
      method: "get",
      url: "/plague/list",
    });
    if (error) {
      console.log("error", error);
      commit("CHANGE", { status: "error" });
      if (error?.message) {
        Vue.$toast.error(error.message);
      } else {
        Vue.$toast.error("Ocorreu um erro interno!");
      }
    } else {
      commit("CHANGE", { items: data.items, status: "" });
    }
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};