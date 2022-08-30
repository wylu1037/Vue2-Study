import {getAllChainList} from '@/api/lattice'

const state = {
    chainList: []
}

const action = {
    async getAllChainList(context) {
        let result = await getAllChainList()
        if(result.code === 200) {
            context.commit('GETALLCHAINLIST', result.data)
        }
    }
}

const mutations = {
    GETALLCHAINLIST(state, chainList) {
        state.chainList = chainList
    }
}
 
const getters = {

}

export default {
    state,
    action,
    mutations,
    getters
}