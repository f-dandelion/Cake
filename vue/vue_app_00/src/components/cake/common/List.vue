<template>
    <div>
        <div class="lx">
            <span>全部分类</span>
        </div>

        <div style="display:flex">
            <div  class="column" style="width:30%">
                <div @click="active='tab1'">雪域口味</div>
                <div  @click="active='tab2'">芝士口味</div>
                <div  @click="active='tab3'">巧克力味</div>
                <div  @click="active='tab4'">慕斯口味</div>
                <div @click="active='tab5'">鲜果口味</div>
                <div @click="active='tab6'">奶油口味</div>
                <div @click="active='tab7'">抹茶口味</div>
                <div @click="active='tab8'">奶茶口味</div>
                <div @click="active='tab9'">咸蛋黄味</div>
                <div @click="active='tab10'">板栗口味</div>
                <div @click="active='tab11'">芋泥口味</div>
            </div>
            <!--添加三个面板-->
            <div class="tabList">
                <img src="../../../../public/img/list_show.jpg" >
                <mt-tab-container v-model="active">
                    <mt-tab-container-item id="tab1">美食
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab2">购物
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab3">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab4">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab5">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab6">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab7">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab8">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab9">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab10">休闲
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab11">休闲
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           active:"tab1"
       }
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
}
.column{
    display: flex;
    flex-direction:column;
    width:30%
}
.column div{
    width:112px;
    height:50px;
    background:#fff;
    line-height:50px;
    text-align: center;
    color:rgb(63, 50, 50)
}
.column div:hover{
    background:rgb(226, 172, 73)
}
.tabList{
    width:70%;
    background:#EEEEEE
}
</style>