<template>
    <div class="body_wrap">
        <div style="border-bottom: 1px solid #E5E5E5">
            <heade :titlee='title'>
            </heade>
        </div>
        <div class="categoryBody" >
            <div class="rootList category1">
                <div class="overflow: hidden; height: 719px;">
                    <ul v-for="item in data">
                        <li @click="list(item)">{{item.cat_name}}</li>
                    </ul>
                </div>
            </div>

            <div class="fr category2" style="background-color: #fff" >
                    <div class="jd-category-third-promotion">
                        <div class="tp-class-list" style="margin: 19px 7px 0;overflow:hidden;">
                            <h4 style="font-size: 14px;
    color: #333;">热门分类</h4>

                            <ul style="    padding: 7px 10px 0;">
                                <li @click="no(opp)"  style="width: 32.8%;float: left;text-align: center;"   v-for="opp in op">
                                    <img style="margin: 0 auto;width: 70px;
    height: 70px;"  :src="opp.icon">
                                    <div style="color: #333;">{{opp.cat_name}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <Navbar></Navbar>
    </div>
</template>
<script>
    import {Classlist,shoplist} from '../../api/apilist'
    import Navbar from "../Navbar"
    import heade from '../public/header/shop-header'
    export default {
        name: "index",
        components:{
            heade,
            Navbar
        },

        data(){
            return{
                data:[],
                // 被选中的数据
                op:[],
                title:'热门分类',
                item:''
            }
        },


        mounted(){
            this.Classlist()
        },
        methods:{




            onNavClick(index) {
                this.mainActiveIndex = index;
            },
            onItemClick(data) {
                this.activeId = data.id;
            },
            list(item){
               this.op= item.childList
            },

            //跳转 父id商品列表
            no(opp){
                const rou_id = opp.value;


                // this.$router.push({path: '/user/' + opp.value});

                this.$router.push({path: '/user/:',query:{id:opp.value} });


            },
            async Classlist(){
                const res = await Classlist();
                let cloneData = JSON.parse(JSON.stringify(res.message));    // 对源数据深度克隆
                let tree = cloneData.filter((father)=>{
                    let branchArr = cloneData.filter((child)=>{
                        return father.value == child.parent_id
                    });
                    if(branchArr.length>0){
                        father.childList = branchArr
                    }
                    return father.parent_id == 0;
                });
                this.data = tree;
                //沉默选中第一个
                this.op = this.data[0].childList
            }
        }
    }
</script>

<style lang="stylus"  scoped>
    .body_wrap
        background-color #FFFFFF
        height: 100vh;
        .search
            .van-search
                background-color red
        .categoryBody
            display flex
            .rootList
                width 80px
                padding 0 10px
                li
                    width 80px
                    height: 46px;
                    line-height: 46px;
                    text-align: center;
            .fr
                flex 1
                padding 0 10px



</style>
