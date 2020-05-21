<template>
   <div>
       <!--顶部导航栏-->
       <div class="page-head">
            <img slot="icon" style="border-radius:50%" :src="require('../../../img/logo.jpg')" >
            <span>蛋糕新语</span>
            <input type="search">
            <img class="search"  src="../../../assets/search.png">
            <router-link to="/MessageList"><img class="add" src="../../../assets/message.png"></router-link>
        </div>
        <div style="height:35px"></div>

       <!--轮播图-->
        <div class="lunbo">
        <mt-swipe :auto="5000" :show-indicators="true" >
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../img/banner1.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../img/banner2.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../img/banner3.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../img/banner4.jpg')">
            </mt-swipe-item>
        </mt-swipe>
        </div>

        <!--热销商品-->
        <div class="body_title">
            <img  src="../../../assets/new.png">
            <span>新品上市</span>
        </div>
        
        
   </div>
</template>
<script>
export default {
   data(){
     return{}
   },
}
</script>
<style scoped>
.page-head{
    position: fixed;/*固定定位*/
    z-index: 999;/*浮动所有元素上方*/
    width:100%;
    justify-content: space-between;/*两端对齐*/
    align-items: center;/*垂直居中*/
    background:#fff;
    display: flex;
    height:35px;
    padding-top:10px;
    padding-bottom:10px;
 }
.page-head span{
    margin-left:-45px;
    color:#ff4949
}
.page-head input{
    outline: none; 
    width:35%;
    border:1px solid #ccc;
    border-radius:5%;
    margin-left:-25px
}
.lunbo{
    height:200px
}
.lunboImg{
    width:100%;
    height:100%

}
.search,.add{
    width:30px;
}
.search{
    margin-left:-45px
}
.add{
    margin-top:5px
}
.body_title{
    color:#E58336;
    height:50px;
    border-bottom:1px solid #ff4949
}

</style>