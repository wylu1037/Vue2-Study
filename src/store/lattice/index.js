import {getAllChainList, deleteChainById, getNodeList} from '@/api/lattice'

const state = {
    chainList: [],
    nodeList: []
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
    },

    async getNodeList(context, chainId) {
        let result = await getNodeList(chainId)
        if(result.code === 200) {
            context.commit('GETNODELIST', result.data)
        }
    }
}

const mutations = {
    GETALLCHAINLIST(state, chainList) {
        state.chainList = chainList
    },

    GETNODELIST(state, nodeList) {
        state.nodeList = nodeList
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