<template>
    <div>
        <div class="mine_title">
            <img v-if='!usercenter' src="../../../assets/me.png"><!--v-show='photo'-->
            <img v-if='usercenter' :src="usercenter.avatar">
        </div>
        <div class="mine_order">
            <router-link to="/">我的订单</router-link>
        </div>
        <div @click="showNext" v-if='usercenter' class="mine_order">
            我的信息
        </div>
        <div  v-if='usercenter' v-show="info" class="info">
            <div>昵称：{{usercenter.uname}}</div>
            <div>真实姓名：{{usercenter.user_name}}</div>
            <div>绑定的手机号：{{usercenter.phone}}</div>
        </div>
        <div class="mine_login" v-if='!usercenter'>
            <router-link to="/register"  class="mine_right">注册</router-link>
            <router-link to="/login"  class="mine_right">登录</router-link>
        </div>
        <div v-if='usercenter' class="mine_order" @click="logout">
            退出登录
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usercenter:'',//usercenter:{},
            photo:true,
            info:false
        }
    },
    created(){
        this.user()
    },
    methods:{
        user(){
            this.axios.get("userInfo").then(res=>{
                if(res.data.length!==0){
                    this.usercenter=res.data[0];
                    this.photo=false
                }
                 //console.log(this.usercenter)
            })
        },
        showNext(){
            this.info=!this.info
        },
        logout(){
            this.axios.get("logOut").then(res=>{
                if(res.data.code==3){
                    this.$toast('退出成功')
                    this.$router.push("/login")
                }
               
            })
        }
    }
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
.mine_right{
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
.info{
    color:#6d5959;
    font-size:18px
}
.info div:first-child,.info div:nth-child(2){
    margin-bottom:10px;
}
</style>