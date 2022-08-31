import requests from './request'

// 获取所有链的接口
export const getAllChainList = () => requests({
    method: 'get',
    url: '/chain/getAll'
})

// 删除链
export const deleteChainById = (chainId) => requests({
    method:'get',
    url: '/chain/delete/' + chainId
})

// 根据链查询节点列表
export const getNodeList = (chainId) => requests({
    method: 'get',
    url: '/chain/findNodes',
    params: {chainId: chainId}
})