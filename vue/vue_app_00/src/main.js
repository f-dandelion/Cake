import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
//删除 line 5~ line 16
//1:引入第三方组件库 mint-ui
//1.1 完成引入所有组件
import MintUI from "mint-ui" 
//1.2 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3 将mint-ui 注册vue
Vue.use(MintUI)

//main.js 配置axios
//1.5:引入axios库
import axios from "axios"
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials=true
//1.7:配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//地址栏请输必须!!!!!!!!!
//http://127.0.0.1:8080/!!!!
//如果地址  http://localhost 报错
//1.8:注册
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

//1.12:将存储对象添加vue实例作为属性
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')