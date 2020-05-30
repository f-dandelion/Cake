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
        <div v-for="(item,i) of list" :key="i" class="cart">              
                <div class="cart_list" >
                    <input type="checkbox"  v-model="item.cb">
                    <img style="width:50px;" :src="item.pic">
                    <span>{{item.title}}</span>
                        
                    <span>{{item.count}}份</span>
                    <span>¥{{(item.price*item.count).toFixed(2)}}</span>
                    <span   :data-id="item.id"   @click="deletePro($event)">✘</span>
                </div>
                
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    created() {
        this.loadCart();         
    },
    methods:{
       //请求数据
        loadCart(){
            this.axios.get("carts").then(res=>{
                if(res.data.code == 1){                  
                    var rows = res.data.data;
                    
                    for(var item of rows){
                        item.cb = false;
                    }
                        this.list=rows;
                }
            })
        },

        //删除
        deletePro(event){
            //this.list.splice(index,1);
            this.$messagebox.confirm("是否删除指定数据").then(res=>{
       //(3)将当前商品id传递函数
       var id = event.target.dataset.id;
       //(4)发送ajax请示完成删除任务
       var url="delItem";
       var obj={id:id};
       this.axios.get(url,{
         params:obj
       }).then(res=>{
         if(res.data.code==1){
          this.$toast("删除成功");
          this.loadCart();//刷新
         }else{
          this.$toast("删除失败"); 
         }
       }) 
       //(5)删除成功 提示"删除成功"
      }).catch(err=>{
      })
        }
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
.cart{
    margin-bottom:5px
}
.cart_list{
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    height:75px;
}
</style>