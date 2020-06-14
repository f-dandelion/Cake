import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import MintUI from "mint-ui" 
import "mint-ui/lib/style.css"

Vue.use(MintUI)


import axios from "axios"
//配置请求时保存session信息 
axios.defaults.withCredentials=true
axios.defaults.baseURL="http://127.0.0.1:8080/"


Vue.prototype.axios = axios;


Vue.use(Vuex)
var store = new Vuex.Store({
  state:{   //集中管理数据属性
    
  },
  mutations:{//集中修改数据函数属性
    
  },
  getters:{//集中获取数据函数

  },
  actions:{//集中保存异步修改数据函数
    
  }
})


new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')