// 入口文件

//导入vue包
import Vue from 'vue'
//导入app.vue
import app from './App.vue'
//导入router文件
import router from './router/router.js'

var vm = new Vue({
    el: '#app',
    render: c => c (app),
    //1.4将路由挂载到VM实例上
    router,
    // store
})
