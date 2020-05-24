import Vue from 'vue'
import Router from 'vue-router'

import Home from "./components/cake/Home.vue"
//消息组件
import MessageList from "./components/cake/common/MessageList.vue"
import Details from './components/cake/common/details.vue'


Vue.use(Router)
export default new Router({
  routes: [
   {path:'/',component:Home},
   {path:'/MessageList',component:MessageList},
   {path:'/details/:lid',component:Details,props:true},
  ]
})
