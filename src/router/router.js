import  Vue from 'vue'
import VueRouter from 'vue-router'
// 安装插件
Vue.use(VueRouter)

import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import login from '../pages/login/login.vue'
import smsLogin from '../pages/smsLogin/smsLogin.vue'
import usernameLogin from '../pages/usernameLogin/usernameLogin.vue'

//3.创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home, meta: {showFooter: true}},
        {path: '/order', component: Order, meta: {showFooter: true}},
        {path: '/personal', component: Personal, meta: {showFooter: true}},
        {path: '/search', component: Search, meta: {showFooter: true}},
        {
            path: '/login', 
            component: login,
            children: [
                {path: 'sms', component: smsLogin},
                {path: 'user', component: usernameLogin},
            ]
        },
    ]
})

export default router