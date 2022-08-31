import {getAllChainList, deleteChainById} from '@/api/lattice'

const state = {
    chainList: []
}

const actions = {
    async getAllChainList(context) {
        let result = await getAllChainList()
        if(result.code === 200) {
            context.commit('GETALLCHAINLIST', result.data)
        }
    },

    async deleteChainById(context, chainId) {
        let result = await deleteChainById(chainId)
        if(result.code !== 200) {
            throw new Error('删除失败！');
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
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}