<!--MessageList.vue-->
<template>
  <div>
     <router-link to="/">
        <div class="mes">
          <img slot="icon" src="../../../assets/back.png" >
          <div class="back">
            <div class="back_font" >返回</div>
          </div>   
        </div>
      </router-link>
     <message
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../../assets/a_7.png')"
      :itemClick="clickitem"
     ></message>
     <div class="subtitle">哇哦，已无更多新消息</div>
  </div>
</template>
<script>
import  Message from "./Message"
import messagejson from "../json/messagelist.json"
export default {
  data(){
    return {
      datas:messagejson
    }
  },
  created(){
  },
  methods: {
    clickitem(id){
      console.log(id);
    }
  },
  components:{
    "message":Message
  }
}
</script>
<style scoped>
.mes{
  height:50px;
  border:1px solid #ccc;
  background:#fff;
}
.mes img{
  width:30px;
  margin-top:10px
}
.back{
  margin-top:-25px;
  margin-left:35px
}
.back_font{
  display:inline-block;
  margin-top:-10px;
  font-size:20px;
  color: #ff4949;
}
.itemstyle{
  padding-left:5px;
  padding-right:5px;
  padding-top:5px;
  padding-bottom:5px;
  border-bottom:1px solid #d9d9d9;
}
.subtitle{
  color:gray;
  margin-top:20px;
  margin-bottom:20px;
  text-align: center;
}
</style>
