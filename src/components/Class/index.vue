<template>
    <div class="body_wrap">
        <div style="border-bottom: 1px solid #E5E5E5">
<<<<<<< HEAD
            <heade titlee='热门分类'></heade>
=======
            <heade :titlee='title'>
            </heade>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        </div>
        <div class="categoryBody" >
            <div class="rootList">
                <div>
<<<<<<< HEAD
                    <ul v-for="item in classData" :key="item.index">
                        <li @click="classlist(item)">{{item.cat_name}}</li>
                    </ul>
                </div>
            </div>
            <div class="fr" >
                <div class="jd-category-third-promotion">
                    <div class="tp-class-list">
                        <h4>热门分类</h4>
                        <ul>
                            <li @click="Subclasslist(Subitem)"   v-for="Subitem in SubclassData" :key="Subitem.index">
                                <img :src="Subitem.icon">
                                <span>{{Subitem.cat_name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
=======
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
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
                classData:[
                    {
                        "cat_name":"推荐分类",
                        childList:[
                            {"cat_name":"手机","icon":"//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"},
                            {"cat_name":"耳机","icon":"//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"},
                            {"cat_name":"华为","icon":"//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"},
                            {"cat_name":"电饭煲","icon":"//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png"},
                            {"cat_name":"电磁炉","icon":"//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png"},
                            {"cat_name":"路由器","icon":"//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"},
                        ]
                    },
                    {
                        "cat_name":"男装",
                        childList:[
                            {"cat_name":"男鞋",},
                            {"cat_name":"推荐分类",},
                            {"cat_name":"推荐分类",},
                            {"cat_name":"推荐分类",},
                        ]
                    },
                    {"cat_name":"女装"},
                    {"cat_name":"手机数码"},
                ],//分类数据
                SubclassData:[],//当前分类子类
=======
                data:[],
                op:[],
                title:'热门分类',
                item:''
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            }
        },
        computed:{
            ...mapState([
                'LOADING'
            ])
        },
        mounted(){
<<<<<<< HEAD
            this.classlist(this.classData[0])
        },
        methods:{
            classlist(item){
               this.SubclassData= item.childList
            },
            Subclasslist(Subitem){
                this.$router.push({path: '/user',query:{id:Subitem.value} });
            },
            //初始化获取信息
            async initData(){
                const res = await Classlist();
                let cloneData = JSON.parse(JSON.stringify(res.message));
=======
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
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
                this.classData = tree;
                this.SubclassData = this.classData[0].childList
=======
                this.data = tree;
                //沉默选中第一个
                this.op = this.data[0].childList
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/index";
<<<<<<< HEAD
    @import "../../../public/INDEX.css";
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
                height:710px;
                overflow: hidden;
                background-color: #f9f9f9;
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
                            font-size: vw(12);
                            color: #333;
                            font-family: "PF";
=======
                            font-size: vw(14);
                            color: #333;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                        }
                        ul{
                            padding: vw(7) vw(10) 0;
                            overflow: hidden;
                            li{
                                width: 33%;
<<<<<<< HEAD
                                padding: vw(10) 0;
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                                float: left;
                                text-align: center;
                                img{
                                    margin: 0 auto;
                                    width: vw(70);
                                    height: vw(70);
<<<<<<< HEAD
                                    padding-bottom: 10px;
                                }
                                span{
                                    font-size: vw(12);
                                    display: block;
                                    color: #333;
                                    font-weight: bold;
=======
                                }
                                sapn{
                                    font-size: vw(12);
                                    display: block;
                                    height: 35px;
                                    color: #333;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
