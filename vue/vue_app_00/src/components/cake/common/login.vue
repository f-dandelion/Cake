<template>
    <div>
        <div class="xq">
            <span class="xq_back" @click="prev">返回</span>
        </div>
        <img class="login_img" src="../../../../public/img/bg.jpg">
        <div>
            <mt-field class="input_border" label="用户名"  placeholder="请输入用户名" v-model="uname"></mt-field>
            <!--用户密码输入框-->
            <mt-field class="input_border" label="密码" placeholder="请输入密码" v-model="upwd"  type="password"></mt-field>
            <!--登录按钮 绑定事件-->
            <mt-button size="large" @click="login">登录</mt-button>
        </div>
       </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"", //用户名
            upwd:""
        }
    },
    methods:{
        login(){
           //功能一：完成用户登录操作
           //1：获取用户名和密码  11:52
            var u = this.uname;
            var p = this.upwd;
            //2: 创建正则表达式  3~12位置 字母数字
            var reg = /^[0-9]{3,12}$/i;
            //3: 判断如何错误 用户名提示
            if(reg.test(u)){
                this.$toast("用户名格式不正确");
                return;
            }
            //4: 判断如何错误 密码提示
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            //5: 发送ajax axios
           var url = "login";
           var obj = {uname:u,upwd:p};
           this.axios.get(url,{params:obj}).then(res=>{
           //6: 回调函数:接收服务器返回数据
           var code = res.data.code;
            if(code==-1){
           //7: 失败 提示
                this.$messagebox("消息","用户名或密码有误");
            }else{
            //8: 成功 跳转
                this.$router.push("/")
            }
            })
        },
        prev(){
            this.$router.go(-1)
        },
    }
}
</script>
<style scoped>
.login_img{
    width:100%;
    height:100%
}
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
.input_border{
    border-bottom:1px solid #ccc
}
</style>

