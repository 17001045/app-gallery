import Vue from "vue";
import Vuex from "vuex";
import { PhotoModule } from "./modules/photo.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    photoModule: PhotoModule
  }
});
