// 引入插件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)


// 引入路由组件
import Register from '@/pages/Register'
import Login from '@/pages/Login'

// 配置路由
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ],
})

export default router
