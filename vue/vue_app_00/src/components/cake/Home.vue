<template>
   <div class="page-tabbar">
      <div class="page-wrap">
      
      <!--Home.vue 入口全局组件-->
      <!--:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="index">
          <index :list="list" :pno="pno" :loadMore="loadMore" :mes="mes"></index>
        </mt-tab-container-item>

        <mt-tab-container-item id="contact">
           <list></list>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
           <cart></cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
           <mine></mine>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <!--当前按钮isSelect:true-->
      <!--其它按钮isSelect:false-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="index" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../../assets/index_selected.png')"
          :normalImage="require('../../assets/index_normal.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         首页   
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
         :normalImage="require('../../assets/list_normal.png')"
         :selectedImage="require('../../assets/list_selected.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         分类
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon
          :normalImage="require('../../assets/cart_normal .png')"
          :selectedImage="require('../../assets/cart_selected.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
           :normalImage="require('../../assets/me_normal .png')"
           :selectedImage="require('../../assets/me_selected.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
   </div>
   </div>
</template>
<script>
import Index from "./common/index.vue"
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import List from "./common/List.vue"
import cart from "./common/cart.vue"
import mine from "./common/mine.vue"
export default {
  data(){
    return {
      active:"index",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ],

      list:[],   //保存服务器返回商品列表
      pno:0,     //当前页码
      mes:"加载更多"     
    }
  },

  mounted(){
       this.loadMore();
    },

  methods: {
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      //对应数组值修改true其它修改false
      for(var i=0;i<this.currentIndex.length;i++){
       if(n==i){
        this.currentIndex[i].isSelect=true;
       }else{
        this.currentIndex[i].isSelect=false;
       }
       
      }

    },

    loadMore(){
           //当组件创建成功后获取第一页数据 
            var url = "product";
            //将当前页码加一
            this.pno++;
            var obj = {pno:this.pno}
            //发送ajax请求获取第一页数据
            this.axios.get(url,{params:obj}).then(res=>{
            //将数据保存data中
            //console.log(res.data.data);
            //this.list = res.data.data;
            var rows = this.list.concat(res.data.data);
            this.list = rows;
            if(res.data.data.length<4)
              {this.mes="已经到底了"}
            })
        },
  },
  components:{
    "index":Index,
    "messagelist":MessageList,
    "tabbaricon":TabBarIcon,
    "list":List,
    "cart":cart,
    "mine":mine
  }
}
</script>
<style  scoped>
.page-tabbar{
  overflow: hidden;
}
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#E58336;
}

.page-wrap{
  overflow:auto;
  padding-bottom: 60px;
}
.titlebar{
  background:#ccc
}
</style>


