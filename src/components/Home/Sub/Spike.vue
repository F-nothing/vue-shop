<template>
    <div class="Spilk">
<<<<<<< HEAD
=======


>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        <!--秒杀-->
        <div class="floor-container">
            <div class="sec_kill_floor">
                <div class="title_wrap">
                    <a class="seckill-left-link j_more_sec_link">
<<<<<<< HEAD
                        <strong  class="seckill-tit-txt">秒杀</strong>
=======
                        <strong  class="seckill-tit-txt">京东秒杀</strong>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                        <strong  class="seckill-nth">22点场</strong>
                    </a>
                    <a class="seckill-more-link">
                        更多秒杀<i class="seckill-more-icon"></i>
                    </a>
                </div>
                <div class="floor-container">
                    <ul class="seckill-new-list">
                        <li class="seckill-new-li" v-for="data in secondkildata" :key="data.index">
                            <div class="seckill-item-img">
                                <a :href="data.url">
                                    <img :src="'//img14.360buyimg.com/mobilecms/s372x372_'+ data.imgbase + '!q70.dpg'">
                                </a>
                            </div>
                            <div class="seckill-item-price">
                                <span class="seckill-new-price">
                                    <em>¥</em>
                                    <span class="j_init_price">{{data.chprice}}</span>
                                </span>
                                <span class="seckill-original-price">
                                    <em>¥</em>
                                    <span class="j_init_price">{{data.pcprice}}</span>
                                    <hr>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getsecondkill} from '../../../api/recommend'
    export default {
        name: "Spike",
        data(){
            return{
                secondkildata:[]
            }
        },

        created() {
            getsecondkill()
                .then((res)=>{
                this.secondkildata = res.data.list
            })

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/mimin";
    @import "../../../style/index";
    .Spilk{
        width: 100%;
        border-radius: 5px;
        .floor-container{
            font-size: 0;
            width: 100%;
            overflow: hidden;
            .sec_kill_floor{
                background: #fff;
                .title_wrap{
                    @include line(vw(44),vw(44));
                    padding: 0 vw(8);
                    vertical-align: middle;
                    .seckill-left-link{
                        display: inline-block;
                        .seckill-tit-txt{
                            display: inline-block;
                            vertical-align: middle;
                            font-size: vw(16);
                            padding-right: vw(10);
                            color: #f02b2b;
                            margin-top: -5px;
                            font-weight: 700;
                        }
                        .seckill-nth{
                            font-size: vw(12);
                            color: #232326;
                            font-weight: 700;
                            display: inline-block;
                        }
                        .seckill-more-link{
                            display: inline-block;
                            color: #f23030;
                            float: right;
                            font-size: vw(10);
                            text-align: right;
                            position: relative;
                            padding-right: vw(22);
                        }
                    }
                }

                .floor-container{
                    white-space: nowrap;
                    overflow-x: scroll;
                    font-size: 0;
                    .seckill-new-list{
                        .seckill-new-li{
                            display: inline-block;
                            vertical-align: top;
                            width:vw(80);
                            padding: 0 vw(10);
                            .seckill-item-img{
                                padding: 0 vw(10);
                            }
                            .seckill-item-price {
                                margin: 0 auto;
                                text-align: center;
                                .seckill-new-price {
                                    margin-top: vw(10);
                                    display: block;
                                    color: #f23030;
                                    @include line(vw(16),vw(16),vw(16));
                                    text-align: center;
                                    font-weight: 700;
                                }
                                .seckill-original-price {
                                    color: #686868;
                                    font-size:vw(12);
                                    line-height: vw(12);
                                    margin: vw(4) 0 vw(11);
                                    text-align: center;
                                    padding: 0 vw(2);
                                    display: inline-block;
                                    position: relative;
                                    hr {
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 200%;
                                        height: vw(1);
                                        background-color: #686868;
                                        -webkit-transform: scale(.5);
                                        transform: scale(.5);
                                        -webkit-transform-origin: left top;
                                        transform-origin: left top;
                                        overflow: hidden;
                                        box-sizing: border-box;
                                        border: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>


