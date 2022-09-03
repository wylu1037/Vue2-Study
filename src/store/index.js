import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import lattice from "./lattice";
import nav from "./nav/index";

export default new Vuex.Store({
  modules: {
    latticeModule: {
      ...lattice,
    },
    navModule: {
      ...nav,
    },
  },
});
