// 引入插件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)


// 引入路由组件
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ChainList from '@/pages/Chain/chainList'

// 配置路由
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'chainList',
                    path: 'chain/list',
                    component: ChainList
                },
            ]
        }
    ],
})

export default router
