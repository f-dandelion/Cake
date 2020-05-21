<template>
   <div class="page-tabbar">
      <div class="page-wrap">
      
      <!--Home.vue 入口全局组件-->
      <!--:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="index">
          <index></index>
        </mt-tab-container-item>

        <mt-tab-container-item id="contact">
           <list></list>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
         <messagelist>
         </messagelist>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
         <messagelist>
         </messagelist>
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
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"index",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods: {
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
  },
  components:{
    "index":Index,
    "messagelist":MessageList,
    "tabbaricon":TabBarIcon,
    "list":List
  }
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#E58336;
}

.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
.titlebar{
  background:#ccc
}
</style>


