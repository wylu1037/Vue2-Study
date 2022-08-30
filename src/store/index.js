import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import lattice from './lattice'

export default new Vuex({
    modules: {
        latticeModule: {
            namespaced: true,
            ...lattice
        }
    }
})