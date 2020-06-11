<template>
   <div>
       <div class="xq">
            <span class="xq_back" @click="prev">返回</span>
        </div>
        <img class="login_img" src="../../../../public/img/bg.jpg">
        <div>
            <mt-field @blur.native.capture="checkRegular_u" class="input_border" label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
            <mt-field @blur.native.capture="checkRegular_p" class="input_border" label="密码" placeholder="请输入密码" v-model="upwd"  type="password"></mt-field>
            <mt-field @blur.native.capture="checkRegular_cp" class="input_border" label="确认密码" placeholder="请确认密码" v-model="confirmUpwd"  type="password"></mt-field>
            <mt-field @blur.native.capture="checkRegular_ph" class="input_border" label="手机号" placeholder="请绑定您的手机号" v-model="phone" type="tel"></mt-field>
            
            <mt-button  size="large" @click="register">注册</mt-button>
        </div>
   </div>
</template>
<script>
import qs from 'qs'
export default {
     data(){
        return{
            uname:'',
            upwd:'',
            confirmUpwd:'',
            phone:'',
        }
     },
     methods:{
        prev(){
            this.$router.go(-1)
        },
        checkRegular_u(){           
            if(/^[0-9]{3,12}$/i.test(this.uname)) {
                this.$toast('用户名格式不正确！');
                return;
        }},
        checkRegular_p(){   
            if(!/^(\w){6,12}$/.test(this.upwd)) { 
                this.$toast('密码为6-12位！');
                return;
        }},
        checkRegular_cp(){  
            if(this.upwd != this.confirmUpwd) { 
               this.$toast('两次密码不一致！');
               return;
        }},
        checkRegular_ph(){   
            if(!/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone)) { 
               this.$toast('请输入正确的手机号');
               return;
        }},
        register(){
            if(/^[0-9]{3,12}$/i.test(this.uname)) {
                this.$toast('用户名格式不正确！');
                return;
            }
            if(!/^(\w){6,12}$/.test(this.upwd)) { 
                this.$toast('密码为6-12位！');
                return;
            }
            if(this.upwd != this.confirmUpwd) { 
               this.$toast('两次密码不一致！');
               return;
            }
            if(!/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone)) { 
               this.$toast('请输入正确的手机号');
               return;
            }

            var param={
                uname: this.uname,
                upwd: this.upwd,
                confirmUpwd: this.confirmUpwd,
                phone: this.phone
            }
             
            this.axios.post("register", 
                  qs.stringify(param),// 
                 {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then((res) => {
                  res = res.data;
                  if(res.code == 200) {
                    this.uname = '';
                    this.upwd = '';
                    this.confirmUpwd = '';
                    this.phone='';
                    this.$toast('注册成功');
                    this.$router.push("/login")
                  }else{
                    this.$toast( '请按要求完成您的注册');
                  }
                })
        }
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