import {getAllChainList, deleteChainById, getNodeList, findPageChainList, findYellowTabList} from '@/api/lattice'

const state = {
    chainList: [],
    chainTotal: 0,
    nodeList: [],
    yellowTabList: []
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
    },

    async findPageChainList(context, req) {
        let result = await findPageChainList(req)
        if(result.code === 200) {
            context.commit('FINDPAGECHAINLIST', result.data)
        }
    },

    async findYellowTabList(context) {
        let result = await findYellowTabList()
        if(result.code === 200) {
            context.commit('FINDYELLOWTABLIST', result.data)
        }
    }
}

const mutations = {
    GETALLCHAINLIST(state, chainList) {
        state.chainList = chainList
    },

    GETNODELIST(state, nodeList) {
        state.nodeList = nodeList
    },

    FINDPAGECHAINLIST(state, data) {
        state.chainList = data.List
        state.chainTotal = data.Total
    },

    FINDYELLOWTABLIST(state, data) {
        state.yellowTabList = data
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