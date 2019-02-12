<template>
    <!-- 猜你喜欢 -->
    <div class="love-foor">
        <div class="gray-text">
           <div class="opa1">为你推荐</div>
        </div>
        <!--猜你喜欢商品推荐-->
        <ul class="gray-ul">
            <li v-for="data in get_fingshoppp" :key="data.id" class="mhome">
                <a>
                    <div class="similar-product">
                        <div class="similar-posre">
                            <img :src="'//img14.360buyimg.com/mobilecms/s372x372_'+ data.img + '!q70.dpg'">
                        </div>
                        <span>{{data.t}}</span>
                        <div class="similar-product-info">
                            <span class="similar-product-price">
                                <span class="big-price">￥{{data.jp/100}}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    // import {get_fingshoppp} from '../../../api/apilist'
    import {getZeptoo} from '../../../api/recommend'
    export default {
        data(){
            return{
                get_fingshoppp:[]
            }
        },
        //自动获取推荐数据
        created(){
            // get_fingshoppp()
            //     // this.$store.commit('showLoading')
            //     .then((res)=>{
            //         this.get_fingshoppp = res.docs;
            //         this.$store.commit('hideLoading')
            //     })

            getZeptoo().then((res)=>{
                this.get_fingshoppp = res.data;
                this.$store.commit('hideLoading')
            })
        },
    }
</script>
<style lang='scss'>
    @import "../../../style/mimin";
    .love-foor{
        width:100%;
        .gray-text {
            font-size: vw(16);
            text-align: center;
            background: url("//img13.360buyimg.com/jdphoto/jfs/t1/614/9/6156/4845/5ba0a8c3E6bce832e/b990bc007cdb54b1.png!q70.webp") 0 0 / 100% 100% no-repeat !important;
            .opa1 {
                margin: 0 auto;
                margin-top: vw(10);
                margin-left: vw(-10);
            }
        }
        .gray-ul{
            overflow: hidden;
            .mhome{
                float: left;
                border-radius: 5px;
                overflow: hidden;
                padding: 10px 0;
                width: 50%;
                box-sizing: border-box;
                a{
                    span{
                        font-size: 13px;
                        color: #232326;
                        line-height: 16px;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: break-word;
                        margin-top: 5px;
                        margin-bottom: 3px;
                    }
                    .similar-product-info{
                        height: 30px;
                        color: #f23030;
                        display: inline-block;
                        position: relative;
                    }
                    .similar-product-price{
                        .big-price{
                            padding: 0 5px 0 4px;
                            color: #f23030;
                            font-size: 14px;
                            font-style: normal;
                        }
                    }
                    .similar-posre img{
                        width: 95%;
                        margin: 0 auto;

                    }
                }
            }
        }
    }

</style>

