<template>
    <div class="Spilk">


        <!--秒杀-->
        <div class="floor-container">
            <div class="sec_kill_floor">
                <div class="title_wrap">
                    <a class="seckill-left-link j_more_sec_link">
                        <strong  class="seckill-tit-txt">京东秒杀</strong>
                        <strong  class="seckill-nth">22点场</strong>
                    </a>
                    <a  style=""  class="seckill-more-link">
                        更多秒杀<i class="seckill-more-icon"></i>
                    </a>

                </div>
                <div class="floor-container">
                    <ul class="seckill-new-list">
                        <li class="seckill-new-li">
                            <div class="seckill-item-img">
                                <a>
                                    <img src="//img14.360buyimg.com/n1/s150x150_jfs/t1/17046/15/4750/786028/5c36d82eE2943ece8/952febc3b2b1522d.png" class="seckill-photo">
                                </a>
                            </div>
                            <div class="seckill-item-price">
                                <span class="seckill-new-price">
                                    <em>¥</em>
                                    <span class="j_init_price">88</span>
                                </span>
                                <span class="seckill-original-price">
                                    <em>¥</em>
                                    <span class="j_init_price">180</span>
                                    <hr>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="item">
            <div class="real-show">
                <div class="graphic-text">
                    <strong class="graphic-tit j_linear_color" data-color="#000000" style="-webkit-background-clip: text; color: rgb(0, 0, 0);">钟表馆</strong>
                    <p class="graphic-wz" style="color:#D663E1">
                        百元直降
                    </p>
                </div>
                <div class="graphic-img">
                    <img class="opa1 ll_fadeIn" src="//m.360buyimg.com/n1/s150x150_jfs/t16618/154/356149823/20882/5e1d0792/5a6e8cb8N2873f417.jpg!q70.jpg.dpg" loaded="1" style="opacity: 1;">
                </div>
            </div>
            <div class="real-show">
                <div class="graphic-text">
                    <strong class="graphic-tit j_linear_color" data-color="#000000" style="-webkit-background-clip: text; color: rgb(0, 0, 0);">钟表馆</strong>
                    <p class="graphic-wz" style="color:#D663E1">
                        百元直降
                    </p>
                </div>
                <div class="graphic-img">
                    <img class="opa1 ll_fadeIn" src="//m.360buyimg.com/n1/s150x150_jfs/t16618/154/356149823/20882/5e1d0792/5a6e8cb8N2873f417.jpg!q70.jpg.dpg" loaded="1" style="opacity: 1;">
                </div>
            </div>
            <div class="real-show">
                <div class="graphic-text">
                    <strong class="graphic-tit j_linear_color" data-color="#000000" style="-webkit-background-clip: text; color: rgb(0, 0, 0);">钟表馆</strong>
                    <p class="graphic-wz" style="color:#D663E1">
                        百元直降
                    </p>
                </div>
                <div class="graphic-img">
                    <img class="opa1 ll_fadeIn" src="//m.360buyimg.com/n1/s150x150_jfs/t16618/154/356149823/20882/5e1d0792/5a6e8cb8N2873f417.jpg!q70.jpg.dpg" loaded="1" style="opacity: 1;">
                </div>
            </div>
            <div class="real-show">
                <div class="graphic-text">
                    <strong class="graphic-tit j_linear_color" data-color="#000000" style="-webkit-background-clip: text; color: rgb(0, 0, 0);">钟表馆</strong>
                    <p class="graphic-wz" style="color:#D663E1">
                        百元直降
                    </p>
                </div>
                <div class="graphic-img">
                    <img class="opa1 ll_fadeIn" src="//m.360buyimg.com/n1/s150x150_jfs/t16618/154/356149823/20882/5e1d0792/5a6e8cb8N2873f417.jpg!q70.jpg.dpg" loaded="1" style="opacity: 1;">
                </div>
            </div>
        </div>





    </div>
</template>

<script>
    export default {
        name: "Spike"
    }
</script>

<style lang="scss" scoped>
    @import "../../../mimin";
    @import "../../../index";
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
                .floor-container::-webkit-scrollbar{
                    display: none;
                }
                .floor-container{
                    overflow-x: scroll;
                    border-bottom: none;
                    font-size: 0;
                    .seckill-new-list{
                        transition: 0.3s ease 0s;
                        transform: translate3d(0px, 0px, 0px);
                        width: vw(830);
                        position: relative;
                        background-color: #fff;
                        overflow: hidden;
                        .seckill-new-li{
                            width: 10%;
                            float: left;
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
        .item{
            width: 100%;
            background: #fff;
            font-size: 100%;
            overflow: hidden;
            border-top: vw(1) solid #e0d6d6;
            .real-show{
                border: 1px solid #e0d6d6;
                position: relative;
                width: 25%;
                float: left;
                padding: vw(5) 0 vw(8) vw(4);
                box-sizing: border-box;
                font-size: vw(14);
                .graphic-img{
                    margin: vw(4) vw(3) 0;
                }
            }
        }

    }
</style>


