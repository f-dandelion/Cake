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
            <!--<table style="word-wrap:break-word;word-break:break-all">
               <thead> <tr>
                    <td>
                        <label>
                            <input    type="checkbox" >
                            全选
                        </label>
                    </td>
                    <td >款式</td>
                    <td  >单价</td>
                    <td   >数量</td>
                    <td >金额</td>
                    <td >删除</td>
                </tr></thead>
                <tbody><tr v-for="(item,i) of list" :key="i">
                    <td>
                        <input type="checkbox">选择
                    </td>
                    <td>
                        <img :src="item.pic" style="width:50px;">
                        {{item.title}}
                    </td>
                    <td>¥{{item.price}}</td>
                    <td>{{item.count}}</td>
                    <td>¥{{(item.price*item.count).toFixed(2)}}</td>
                    <td>删除</td>
                </tr></tbody>
            </table>-->
            <div v-show="!cart_blank">
                <label>
                    <input   type="checkbox" >
                        全选
                </label>
            </div>
            <div v-for="(item,i) of list" :key="i" class="cart">              
                <div class="cart_list" >
                    <input type="checkbox">
                    <img style="width:50px;" :src="item.pic">
                    <span>{{item.title}}</span>
                    <div class="count">
                        <div @click="item.count>1?item.count--:''">-</div>
                        <div>{{item.count}}</div>
                        <div  @click="item.count++">+</div>
                    </div>
                    <span>¥{{(item.price*item.count).toFixed(2)}}</span>
                    <span>✘</span>
                </div>
                
            </div>
            <div   v-show="!cart_blank" class="cart_bottom"> 
                <div>总金额</div>
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

        //数量加减
        
    }
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
    margin-top:20px;
}
.total{
    width:80%;
    height:35px;
    line-height:35px;
    background:#ff4949;
    opacity: .8;
    border-radius:30px;
    margin:0 auto;
    margin-top:20px;
}
</style>