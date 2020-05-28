<template>
    <div>
        <div class="xq">
            <span class="xq_back" @click="prev">返回</span>
        </div>
        <img class="search_img" src="../../../../public/img/search.jpg">

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
    </div>
</template>
<script>
export default {    
    data(){
        return {
            list:[]
        }
    },
    props:["kw"],
    created(){
        this.load()
    },
    methods:{
        load(){
            this.axios.get("search",{params:{kw:this.kw}}).then(result=>{
                //console.log(result.data);
                this.list=result.data
            })
        },
        prev(){
            this.$router.go(-1)
        },
    }
}
</script>
<style scoped>
.xq{
    width:100%;
    height:45px;
    line-height:45px;
    text-align: center;
    position:fixed;
    z-index:999;
    display: flex;
}
.xq_back{
    margin-left:10px;
    color:#292929;
    border-radius:10px;
    width:40px;
    height:30px;
    line-height:30px;
    margin-top:10px;
    background:#ff4949;
    opacity: .7;
}
.search_img{
    width:100%
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