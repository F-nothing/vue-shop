<template>
    <div class="">


        <!--秒杀-->
        <div class="floor-container">
            <div class="sec_kill_floor">
                <div class="title_wrap">
                    <a class="seckill-left-link j_more_sec_link">
                        <strong  class="seckill-tit-txt">京东秒杀</strong>
                        <strong  class="seckill-nth">22点场</strong>
                        <!--<div id="seckill_time" class="seckill-timer">-->
                            <!--<div class="seckill-time j_sk_h">01</div>-->
                            <!--<span class="seckill-time-separator">:</span>-->
                            <!--<div class="seckill-time j_sk_m">45</div>-->
                            <!--<span class="seckill-time-separator">:</span>-->
                            <!--<div class="seckill-time j_sk_s">57</div>-->
                        <!--</div>-->
                    </a>
                    <a  style=""  class="seckill-more-link">
                        更多秒杀<i class="seckill-more-icon"></i>
                    </a>

                </div>



                <div class="floor-container">
                    <ul class="seckill-new-list">
                        <li>
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



    </div>


</template>

<script>
    export default {
        name: "Spike"
    }
</script>

<style lang="stylus" scoped>
    .floor-container
        font-size: 0;
        width: 100%;
        overflow: hidden;
        .sec_kill_floor
            background: #fff;
            .title_wrap
                height: 44px;
                line-height: 44px;
                padding 0 8px
                vertical-align: middle;
                .seckill-left-link
                    display: inline-block;
                    .seckill-tit-txt
                        margin: .1rem .15rem 0;
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 18px;
                        color: #f02b2b;
                        margin-top: -5px;
                        font-weight: 700;

                    .seckill-nth
                        font-size: 12px;
                        color: #232326;
                        font-weight: 700;
                        display: inline-block;
                .seckill-more-link
                    display: inline-block;
                    color: #f23030;
                    float: right;
                    font-size: 10px;
                    text-align: right;
                    position: relative;
                    padding-right: 22px;
        .floor-container::-webkit-scrollbar
            display: none;
        .floor-container
            overflow-x: scroll;

            border-bottom: none;
            font-size: 0;


            .seckill-new-list
                transition: 0.3s ease 0s;
                transform: translate3d(0px, 0px, 0px);
                width: 853.452px;
                position: relative;
                background-color: #fff;
                overflow: hidden;
                padding-left: .25rem;
                li
                    width: 10%;
                    float: left;
                    .seckill-item-img
                        width: 100%;
                        padding: 0 10px;
                    .seckill-item-price
                        margin: 0 auto;
                        text-align: center;
                        .seckill-new-price
                            margin-top: 10px;
                            display: block;
                            color: #f23030;
                            font-size: 16px;
                            line-height: 16px;
                            height: 16px;
                            text-align: center;
                            font-weight: 700;
                        .seckill-original-price
                            color: #686868;
                            font-size: 12px;
                            line-height: 12px;
                            margin: 4px 0 11px;
                            text-align: center;
                            padding: 0 2px;
                            display: inline-block;
                            position: relative;
                            hr
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 200%;
                                height: 1px;
                                background-color: #686868;
                                -webkit-transform: scale(.5);
                                transform: scale(.5);
                                -webkit-transform-origin: left top;
                                transform-origin: left top;
                                overflow: hidden;
                                box-sizing: border-box;
                                border: 0;

</style>

