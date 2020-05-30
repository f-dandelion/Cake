<template>
    <div>
        <div class="lx">
            <span>全部分类</span>
        </div>
        <div style="height:45px"></div>

        <div style="display:flex">
            <div  class="column">
                <div @click="active='tab1'">雪域口味</div>
                <div  @click="active='tab2'">芝士口味</div>
                <div  @click="active='tab3'" >巧克力味</div>
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
                <mt-tab-container v-model="active" v-if="all"  class="proList">
                    <mt-tab-container-item id="tab1" >
                        <div class="proList_card">  
                            <router-link :to="`/details/${all[0].lid}`">
                                <div>
                                    <img :src="all[0].pic" >
                                    <h6>{{all[0].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[1].lid}`">
                                <div>
                                    <img :src="all[1].pic">
                                    <h6>{{all[1].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[2].lid}`">
                                <div>
                                    <img :src="all[2].pic">
                                    <h6>{{all[2].title}}</h6>
                                </div>
                            </router-link>    
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab2"  >
                        <div class="proList_card">
                            <router-link :to="`/details/${all[3].lid}`">
                                <div>
                                    <img :src="all[3].pic">
                                    <h6>{{all[3].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab3">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[4].lid}`">
                                <div>
                                    <img :src="all[4].pic">
                                    <h6>{{all[4].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[5].lid}`">
                                <div>
                                    <img :src="all[5].pic">
                                    <h6>{{all[5].title}}</h6>
                            </div>
                            </router-link>
                            <router-link :to="`/details/${all[6].lid}`">
                                <div>
                                    <img :src="all[6].pic">
                                    <h6>{{all[6].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[7].lid}`">
                                <div>
                                    <img :src="all[7].pic">
                                    <h6>{{all[7].title}}</h6>
                            </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab4">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[8].lid}`">
                                <div>
                                    <img :src="all[8].pic">
                                    <h6>{{all[8].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[9].lid}`">
                                <div>
                                    <img :src="all[9].pic">
                                    <h6>{{all[9].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[10].lid}`">
                                <div>
                                    <img :src="all[10].pic">
                                    <h6>{{all[10].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[11].lid}`">
                                <div>
                                    <img :src="all[11].pic">
                                    <h6>{{all[11].title}}</h6>
                                </div>
                            </router-link>
                        </div>                        
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab5">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[12].lid}`">
                                <div>
                                    <img :src="all[12].pic">
                                    <h6>{{all[12].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[13].lid}`">
                                <div>
                                    <img :src="all[13].pic">
                                    <h6>{{all[13].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[14].lid}`">
                                <div>
                                    <img :src="all[14].pic">
                                    <h6>{{all[14].title}}</h6>
                                </div>
                            </router-link>
                            <router-link :to="`/details/${all[16].lid}`">
                                <div>
                                    <img :src="all[16].pic">
                                    <h6>{{all[16].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab6">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[15].lid}`">
                                <div>
                                    <img :src="all[15].pic">
                                    <h6>{{all[15].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab7">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[17].lid}`">
                                <div>
                                    <img :src="all[17].pic">
                                    <h6>{{all[17].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab8">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[18].lid}`">
                                <div>
                                    <img :src="all[18].pic">
                                    <h6>{{all[18].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab9">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[19].lid}`">
                                <div>
                                    <img :src="all[19].pic">
                                    <h6>{{all[19].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab10">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[20].lid}`">
                                <div>
                                    <img :src="all[20].pic">
                                    <h6>{{all[20].title}}</h6>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab11">
                        <div class="proList_card">
                            <router-link :to="`/details/${all[21].lid}`">
                                <div>
                                    <img :src="all[21].pic">
                                    <h6>{{all[21].title}}</h6>
                                </div>
                            </router-link>
                        </div>
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
           active:"tab1",
           all:""
       }
    },
    created(){
       this.loadAll();
    },
    methods:{
        loadAll(){
            var url = "listPro";
            this.axios.get(url).then(res=>{
                //console.log(res.data.data)
                this.all=res.data.data;
            })
        },
    },
    watch:{
        active:function(){
            var a=document.querySelector('.column div:first-child');
            if(this.active!=='tab1'){               
                a.style.background='#FFFFFF'
                //console.log(this.active)
            }else{
                a.style.background='rgb(226, 172, 73)'
            }
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
    position:fixed;
    z-index:999
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
.proList img{
    width:120px
}
.proList_card{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.proList_card div{
    padding:5px;
}
.proList_card h6{
    color:#ff4949;
    font-size:10px;
    margin-top:10px;
    text-align: center;
}
a{
    text-decoration: none;
}
.router-link-active{
    text-decoration: none;
}


.column div:first-child{
    background:rgb(226, 172, 73)
}
</style>