import Vue from 'vue'
import Router from 'vue-router'



import Home from "./components/cake/Home.vue"
//消息组件
import MessageList from "./components/cake/common/MessageList.vue"



Vue.use(Router)
export default new Router({
  routes: [
   {path:'/MessageList',component:MessageList},
   {path:'/',component:Home}
  ]
})
