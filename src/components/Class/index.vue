<template>
    <div class="body_wrap">
        <div style="border-bottom: 1px solid #E5E5E5">
            <heade :titlee='title'>
            </heade>
        </div>
        <div class="categoryBody" >
            <div class="rootList">
                <div>
                    <ul v-for="item in data" :key="item.index">
                        <li @click="list(item)">{{item.cat_name}}</li>
                    </ul>
                </div>
            </div>

            <div class="fr" >
                    <div class="jd-category-third-promotion">
                        <div class="tp-class-list">
                            <h4>热门分类</h4>

                            <ul>
                                <li @click="no(opp)"   v-for="opp in op" :key="opp.index">
                                        <img :src="opp.icon">

                                    <sapn>{{opp.cat_name}}</sapn>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <Loading v-if="LOADING"></Loading>
        <Navbar></Navbar>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {Classlist} from '../../api/apilist'
    import Loading from '../loading'
    import Navbar from "../Navbar"
    import heade from '../public/header/shop-header'
    export default {
        name: "index",
        components:{
            heade,
            Loading,
            Navbar
        },
        data(){
            return{
                data:[],
                op:[],
                title:'热门分类',
                item:''
            }
        },
        computed:{
            ...mapState([
                'LOADING'
            ])
        },
        mounted(){
            this.Classlist()
        },
        methods:{
            list(item){
               this.op= item.childList
            },

            //跳转 父id商品列表
            no(opp){
                this.$router.push({path: '/user',query:{id:opp.value} });
            },
            async Classlist(){
                const res = await Classlist();
                let cloneData = JSON.parse(JSON.stringify(res.message));    // 对源数据深度克隆
                let tree = cloneData.filter((father)=>{
                    let branchArr = cloneData.filter((child)=>{
                        return father.value == child.parent_id
                    });
                    this.$store.commit('hideLoading')
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
<style lang="scss" scoped>
    @import "../../style/index";
    .body_wrap {
        background-color: #FFFFFF;
        height: 100vh;
        .search {
            .van-search {
                background-color: red;
            }
        }
        .categoryBody {
            display :flex;
            .rootList{
                width: vw(80);
                padding: 0 vw(10);
                li {
                    width: vw(80);
                    @include line(vw(46),vw(46));
                    text-align: center;
                }
            }
            .fr {
                flex: 1;
                background-color: #fff;
                .jd-category-third-promotion{
                    .tp-class-list{
                        margin: vw(19) vw(7) 0;
                        overflow:hidden;
                        h4{
                            font-size: vw(14);
                            color: #333;
                        }
                        ul{
                            padding: vw(7) vw(10) 0;
                            overflow: hidden;
                            li{
                                width: 33%;
                                float: left;
                                text-align: center;
                                img{
                                    margin: 0 auto;
                                    width: vw(70);
                                    height: vw(70);
                                }
                                sapn{
                                    font-size: vw(12);
                                    display: block;
                                    height: 35px;
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
