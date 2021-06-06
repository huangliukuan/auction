import Vue from 'vue'
import App from './App'

import utils from './core/util.js'
import Bus from "./core/bus.js"

import { router, RouterMount } from "./core/router.js";

Vue.config.productionTip = false


// 常用函数
Vue.prototype.$utils = utils;
Vue.prototype.$Bus = Bus;


App.mpType = 'app'


// 路由首位
Vue.use(router);




const app = new Vue({
    ...App
})

// #ifdef H5
RouterMount(app,router, '#app');
// #endif

// #ifndef H5
app.$mount()
// #endif