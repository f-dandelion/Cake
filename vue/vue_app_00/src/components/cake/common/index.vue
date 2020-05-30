<template>
   <div>
       <!--顶部导航栏-->
       <div class="page-head">
            <img slot="icon" class="logo_img" :src="require('../../../../public/img/logo.jpg')" >
            <span class="logo_font">蛋糕新语</span>
            <input  type="text"  v-model="kw">
            <img class="search"   @click="search" src="../../../assets/search.png">
            <router-link to="/MessageList"><img class="message" src="../../../assets/message.png"></router-link>
        </div>
        <div style="height:35px"></div>

       <!--轮播图-->
        <div class="lunbo">
        <mt-swipe :auto="5000" :show-indicators="true" >
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../../public/img/banner1.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../../public/img/banner2.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../../public/img/banner3.jpg')">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="lunboImg" :src="require('../../../../public/img/banner4.jpg')">
            </mt-swipe-item>
        </mt-swipe>
        </div>

        <!--热销商品-->
        <div class="body_title">
            <img  src="../../../assets/new.png">
            <span >新品上市</span>
        </div>
        <div  v-for="(item,index) of list" :key="index">
            <router-link :to="`/details/${item.lid}`"  class="product">
            <img  :src="item.pic"/>
            <div class="product_font">
                <h5>{{item.title}}</h5>
                <h6>{{item.subtitle}}</h6>
                <div >¥{{item.price}}</div>
            </div>
            </router-link>
        </div>

        <mt-button size="large" @click="loadMore">{{this.mes}}</mt-button>
   </div>
</template>
<script>
export default {
    data(){
        return{
            kw:"",
        }
    },
    props:{
        list:Array,
        pno:Number,
        loadMore:Function,
        mes:String
    },
    create(){
    },
    methods:{
        search(){
            this.$router.push("/search/"+this.kw)
        },
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
    border-radius:10px;
    margin-left:-25px
}
.logo_img{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.logo_font{
    background:#f6f6f6;
    width:70px;
    height:50px;
    line-height:50px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
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
.message{
    margin-top:5px;
    margin-right:5px
}
.body_title{
    color:#E58336;
    height:50px;
}
.product{
    display:flex;
    border:1px solid #ccc;
    margin-bottom:8px
}
.product img{
    width:50%;
}
.product_font {
    width:50%
}
.product_font h5,.product_font h6,.product_font div{
    text-align: center;
}
.product_font h5{
    margin-top:35px;
    color:#ff4949;
    font-size:16px
}
.product_font h6{
    color:#7b7272;
    font-size:15px;
}
.product_font div{
    color:#292727;
}
a{
    text-decoration: none;
}
.router-link-active{
    text-decoration: none;
}
</style>