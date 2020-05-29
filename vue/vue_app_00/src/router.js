import Vue from 'vue'
import Router from 'vue-router'

import Home from "./components/cake/Home.vue"
import MessageList from "./components/cake/common/MessageList.vue"
import Details from './components/cake/common/details.vue'
import Cart from "./components/cake/common/cart.vue"
import Mine from "./components/cake/common/mine.vue"
import Login from "./components/cake/common/login.vue"
import Register from "./components/cake/common/register.vue"
import Search from "./components/cake/common/search.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/MessageList',component:MessageList},
    {path:'/details/:lid',component:Details,props:true},
    {path:'/cart',component:Cart},
    {path:'/mine',component:Mine},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/search/:kw',component:Search,props:true},
  ]
})
