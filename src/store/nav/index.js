const state = {
  closable: true,
  tabValue: "",
  tabs: [],
};

const actions = {};

const mutations = {
  SETTABVALUE(state, val) {
    state.tabValue = val;
  },

  SETCLOSABLE(state, val) {
    state.closable = val
  },

  PUSHTAB(state, tab) {
    state.tabs.push(tab)
  },

  SETTABS(state, tabs) {
    state.tabs = tabs
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
