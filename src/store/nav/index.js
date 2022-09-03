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

  ADDTAB(state, tab, tabValue) {
    if (JSON.stringify(state.tabs).indexOf(JSON.stringify(tab)) === -1) {
      state.tabs.push(tab);
    }
    state.tabValue = tabValue;
    state.closable = state.tabs.length !== 1;
  },

  EDITTAB(state, targetName) {
    let pushFlag = targetName === state.tabValue;
      let tabs = state.tabs;
      let activeName = state.tabValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      state.tabValue = activeName;
      if (pushFlag) {
        // this.$router.push(state.tabRoute[activeName]);
      }
      state.tabs = tabs.filter((tab) => tab.name !== targetName);
      state.closable = state.tabs.length !== 1;
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
