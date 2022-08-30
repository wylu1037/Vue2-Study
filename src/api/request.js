import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseUrl: '/chain',
    timeout: 20000
})

requests.interceptors.request.use((config) => {
    // 开始进度条
    nprogress.start()
    return config
})

requests.interceptors.response.use(
    (result) => {
        // 结束进度条
        nprogress.done()
        return result.data
    },
    (error) => {
        return Promise.reject(new Error('Failure: ' + error))
    }
)

export default requests