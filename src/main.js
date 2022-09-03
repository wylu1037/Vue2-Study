import Vue from 'vue'
import App from './App.vue'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'

// 注册全局组件
Vue.component(Header.name, Header)
Vue.component(Pagination.name, Pagination)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),

  // 注册路由
  router: router,

  // 注册仓库
  store: store
}).$mount('#app')
