<template>
  <div class="page-head">
    <div class="searchdiv">
       <img :src="leftImg"  style="width:50px;">
    </div>
       <div class="searchdiv" @click="search">
        <img :src="rightFirstImg" style="width:25px;" />
       </div>
       <div class="searchdiv" style="margin-left:20px;" @click="add">
        <img :src="rightSecondImg" style="width:25px;margin-right:15px;"/>
       </div>
    
  </div>
</template>
<script>
export default {
  name:"TitileBar",
  props:{
    //右侧第一,二张图片
    leftImg:{default:""},
    rightFirstImg:{default:""},
    rightSecondImg:{default:""},
    //两个函数
    search:{type:Function},
    add:{type:Function}
  },
  data(){
    return {}
  }

}
</script>
<style scoped>
   /*最外层父元素*/
   .page-head{
     display: flex;
     position: fixed;
     z-index:999;
     width:100%;
     justify-content: space-between;
     align-items: center;
     padding-left:7px;
     padding-right:7px;
     height:48px;
     color:#fff;
     font-size:18px;
     background: #fff;
   }
   .right-head{
     display: flex;
   }
   .searchdiv{
     display: flex;
     align-items: center;
     height:48px;
   }
</style>


