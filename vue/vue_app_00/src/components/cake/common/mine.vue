<template>
    <div>
        <div class="mine_title">
            <img src="../../../assets/me.png">
        </div>
        <div class="mine_order">
            我的订单
        </div>
        <div class="mine_login">
            <div class="mine_left">注册</div>
            <router-link to="/login"  class="mine_right">登录</router-link>
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
.mine_title{
    width:100%;
    height:150px;
    display: flex;
    align-items: center;
    background:#E58336;
}
.mine_title img{
    width:100px;
    height:100px;
    border-radius:50%;
    display:block;
    margin:0 auto;
}
.mine_order{
    width:100%;
    height:60px;
    background:#f5f2f2;
    border:1px solid #ccc;
    margin-bottom:5px;
    color:#353131;
    font-size:20px;
    text-align: center;
    line-height:60px;
}
.mine_login{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height:60px;
    background:#f5f2f2;
    border:1px solid #ccc;
    margin-bottom:5px;
    color:#353131;
}
.mine_left,.mine_right{
    width:30%;
    height:30px;
    line-height:30px;
    background:#ccc;
    border-radius:30px;
    text-align: center;
    color:#353131;
}
a{
    text-decoration: none;
}
.router-link-active{
    text-decoration: none;
}
</style>