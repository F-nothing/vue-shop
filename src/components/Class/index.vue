<template>
    <div class="flool">

        <div style="border-bottom: 1px solid #E5E5E5">
            <heade>
                <van-search
                        placeholder="请输入搜索关键词"
                        background="#ffffff"

                />
            </heade>
        </div>



        <div class="fooll" >


            <div class="fl category1" style="background-color: #f8f8f8">
                <ul v-for="item in data">
                    <li @click="list(item)">{{item.cat_name}}</li>
                </ul>
            </div>

            <div class="fr category2" style="background-color: #fff" >

                    <div style="margin: 7px 7px 0;" class="tp-category-third-promotion">
                        <img src="//img11.360buyimg.com/mcoss/jfs/t14026/352/1775685408/39507/1dfb9518/5a28efe9N353f6584.jpg">
                    </div>


                    <div class="tp-class-list" style="margin: 19px 7px 0;overflow:hidden;">
                        <h4 style="font-size: 14px;
    color: #333;">热门分类</h4>

                        <ul style="    padding: 7px 10px 0;">
                            <li @click="no(opp)"  style="width: 32.8%;float: left;text-align: center;"   v-for="opp in op">
                                <img style="margin: 0 auto;width: 70px;
    height: 70px;"  src="//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png">
                                <div style="color: #333;">{{opp.cat_name}}</div>
                            </li>
                        </ul>
                    </div>
            </div>



        </div>






    </div>
</template>
<script>
    import {Classlist,shoplist} from '../../api/apilist'
    import heade from '../public/header/shop-header'




    export default {
        name: "index",
        components:{
            heade
        },

        data(){
            return{
                data:[],
                // 被选中的数据
                op:[],

                item:''
            }
        },


        mounted(){
            this.Classlist()
        },
        methods:{

            imgError(item) {
                this.item = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2310514390,3580363630&fm=27&gp=0.jpg'
            },
//图片加载完毕之后，执行的回调
            successLoadImg(){
                alert(2)
            },


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

    .search
        .van-search
            background-color red


    .fooll
        display flex
        height: auto;
        .fl
            background-color: #fff;
            width 80px
            overflow: scroll;
            li
                width 80px
                height: 46px;
                line-height: 46px;
                text-align: center;



    .fr
            flex 1


</style>
