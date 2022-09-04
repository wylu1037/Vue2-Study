import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

let instance = axios.create({
    baseURL: "/mock",
    timeout: 5000
});

instance.interceptors.request.use((config) => {
    nprogress.start();
    return config;
});

instance.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

export default instance;