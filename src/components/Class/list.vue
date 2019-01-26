<template>
    <div>
        <div class="search_head">
            <div class="tsearchwrap">
                <van-search

                        v-model="value"
                        placeholder="请输入搜索关键词"
                        background="red"
                >

                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
            <div class="pro_filter_wrap">
                <div class="inner">
                    <div class="pro_filter">

                    </div>
                    <div class="pro_filter_more">

                    </div>
                </div>
            </div>

        </div>

        <div class="searchResBlock">
            <div>
                <div v-for="shoplist in shop" class="search_prolist_item" @click="shopchlick(shoplist._id)">
                    <van-card
                            tag="标签"
                            price="2.00"

                            desc="描述信息"
                            :title="shoplist.shop_name"
                            :thumb="shoplist.shop_img"
                    >
                    </van-card>
                </div>


            </div>
        </div>

    </div>
</template>
<script>
    import {shoplist} from '../../api/apilist'
    export default {
        name: "list",
        data(){
            return{
                shop:[],


                message: 'Hello'

            }
        },


        mounted(){
            this.shoplis()
        },

        methods:{
            async shoplis(){
                const id =this.$route.query.id;
                this.$axios('/goods/get_fingshop',
                    {
                        params: {id:id}
                    }
                ).then((response)=>{
                    console.log(response)
                    this.shop = response.data.mas
                }).catch((err)=>{
                })
            },

            //接受当前点击商品id
            shopchlick(shoplist){
                // console.log(shoplist)


                // this.$router.push({path: '/user/:',query:{id:opp.value} });
                this.$router.push({path: '/commodity' ,query:{id:[shoplist]} });

            }

        }
    }
</script>

<style lang="stylus" scoped>



</style>

