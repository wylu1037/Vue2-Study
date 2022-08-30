import requests from './request'

// 获取所有链的接口
export const getAllChainList = () => requests({
    method: 'get',
    url: '/chain/getAll'
})