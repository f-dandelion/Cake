<template>
    <div>
        <div class="xq">
            <span class="xq_back" @click="prev">返回</span>
            <span class="xq_new">新品详情</span>
        </div>
        <div style="height:45px"></div>

        <div v-if="cakeDetail" class="detail">
            <img class="detail_img" :src="cakeDetail.pic">
            <div class="detail_font">款式：{{cakeDetail.title}}</div>
            <div  class="detail_subtitle">{{cakeDetail.subtitle}}</div>
            <div  class="detail_subtitle">规格：{{cakeDetail.spec}} </div>
            <div  class="sweet_img">
                甜度：<div><img class="sweet" src="../../../../public/img/sweet.png">
                <img class="sweet" src="../../../../public/img/sweet.png"></div>
            </div>           
            <div class="detail_subtitle">价格：¥{{cakeDetail.price}}</div>
            <div class="detail_bottom">
                <div class="cart">
                    <img class="detail_cart" src="../../../assets/cart_selected.png">
                </div>
                <div class="cart_font">加入购物车</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cakeDetail:""
        }
    },
    props:["lid"],

    created(){
       this.loadDetail();
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        loadDetail(){
            var url = "proDetail";
            this.axios.get(url,{params:{
              lid:this.$route.params.lid
                //this.lid
            }
          }).then(res=>{
                //console.log(res.data.data[0])
                this.cakeDetail=res.data.data[0];
            })
        },
    },

}
</script>
<style scoped>
.xq{
    width:100%;
    height:45px;
    line-height:45px;
    text-align: center;
    background: rgb(226, 172, 73);
    position:fixed;
    z-index:999;
    display: flex;
}
.xq_back{
    margin-left:10px;
    color:#7b7272
}
.xq_new{
    margin-left:120px
}
.detail_img{
    width:100%
}
.detail{
    color:#101010
}
.detail_font{
    font-size: 20px;
    color:#ff4949;
    margin-top:13px;
    margin-bottom:13px;
}
.detail_subtitle{
    font-size:18px;
    margin-bottom:13px;
}
.sweet_img{
    display: flex;
    margin-bottom:11px;
    font-size:18px
}
.cart{
    width:30%;
    border-radius: 30px;
    border:1px solid #ccc;
    text-align:center
}
.detail_cart{
    width:35px;
}
.detail_bottom{
    display: flex;
    margin-left:10px;
    margin-right:10px;
}
.cart_font{
    width:70%;
    border-radius: 30px;
    border:1px solid #ccc;
    text-align:center;
    line-height:40px;
    background-color: #E58336;
    opacity: .9;
}
</style>