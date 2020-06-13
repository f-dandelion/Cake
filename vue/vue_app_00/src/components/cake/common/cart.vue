<template>
    <div>
        <div class="lx">
            <span>购物车</span>
        </div>
        <div style="height:45px"></div>

        <div class="normal" v-show="cart_blank">
            <img class="normal_img" src="../../../assets/blank.png" >
            <div class="normal_font">购物车空空如也~</div>
        </div>

        <div>
            <div  v-show="!cart_blank" class="selAll">
                <label>
                    <input type="checkbox"    @click="selectProduct(isSelectAll)" :checked="isSelectAll">
                        <span>全选</span>
                </label>
            </div>
            <div v-for="(item,i) of list" :key="i" class="cart">              
                <div class="cart_list" >
                    <input type="checkbox"  v-model="item.cb">
                    <img style="width:50px;" :src="item.pic">
                    <span>{{item.title}}</span>
                    <div class="count">
                        <div @click="item.count>1?item.count--:''">-</div>
                        <div>{{item.count}}</div>
                        <div  @click="item.count++">+</div>
                    </div>
                    <span>¥{{(item.price*item.count).toFixed(2)}}</span>
                    <span   :data-id="item.id"   @click="deletePro($event)">✘</span>
                </div>
                
            </div>
            <div   v-show="!cart_blank" class="cart_bottom"> 
                <div>总金额&nbsp;&nbsp;&nbsp;¥{{getTotal.totalPrice}}</div>
                <div class="total">结算</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cart_blank:true,
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
                        //console.log(this.list)
                        if(!this.list.length==0){
                            this.cart_blank=false;
                            
                        }                        
                }     
            })
        },

        //选择所有
        selectProduct(_isSelect){
            //遍历list，全部取反
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].cb = !_isSelect;
            }
        },

        //删除
        deletePro(event){
            //this.list.splice(index,1);
            this.$messagebox.confirm("是否删除指定数据").then(res=>{
       //将当前商品id传递函数
       var id = event.target.dataset.id;
       //发送ajax请示完成删除任务
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
       //删除成功 提示"删除成功"
      }).catch(err=>{
      })
        },
    },
    computed:{
        //检测单个是否都选中
        isSelectAll:function(){
            //如果list中每一条数据的cb都为true，返回true，否则返回false;
            return this.list.every(function (val) { return val.cb});
        },

        //合计
        getTotal(){
			var prolist = this.list.filter(function (val) { return val.cb}),
			totalPri = 0;
			for (var i = 0; i < prolist.length; i++) {
				totalPri+=prolist[i].price*prolist[i].count;
			}
			return {totalPrice:totalPri}
		},
    },
    
}
</script>
<style scoped>
.lx{
    width:100%;
    height:45px;
    line-height:45px;
    text-align: center;
    background: rgb(226, 172, 73);
    position:fixed;
    z-index:999
}
.normal{
    margin-left:45%;
    margin-top:50%;
}
.normal_img{
    width:50px;   
}
.normal_font{
    margin-left:-15%;
    margin-top:10%;
    color:#7b7272
}
.selAll{
    margin-bottom:5px;
}
.selAll input{
    margin-top:20px;
}
.selAll span{
    font-size: 18px;
}
.count{
    width:25%;
    height:30px;
    border:1px solid #ccc;
    display:inline-block;
    border-radius:30px;
}
.count div:first-child{
    display:inline-block;
    width:30%;
    box-sizing:border-box;
    padding-left:12px;
}
.count div:nth-child(2){
    height:100%;
    display:inline-block;
    width:37%;
    border-right:1px solid #ccc;
    border-left:1px solid #ccc;
    box-sizing:border-box;
    padding-left:12px;
    padding-top:5px;
}
.count div:last-child{
    display:inline-block;
    width:30%;
    box-sizing:border-box;
    padding-left:8px;
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
.cart_bottom{
    width:70%;
    height:100px;
    margin:0 auto;
    text-align: center;
    margin-top:50px;
}
.cart_bottom div:first-child{
    font-size:20px;
}
.total{
    width:80%;
    height:40px;
    line-height:40px;
    background:#ff4949;
    opacity: .8;
    border-radius:30px;
    margin:0 auto;
    margin-top:20px;
    font-size:20px;
}

</style>