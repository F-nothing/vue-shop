<template>
    <div>
        <li class="item-card">
            <div class="tpl-wrapper-header">
                <div class="box">
                    <div class="box-left">
                        <img src="http://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_200x200q85s150.jpg_.webp">
                        <span>多情爵士旗舰店</span>
                    </div>
                   <div class="box-right">
                        <span>卖家已发货</span>
                    </div>
                </div>
            </div>
            <div class="tpl-wrapperr">
                <div class="order-item">
                    <div class="order-itemInfo mui-flex">
                        <div class="cell fixed item-pic">
                            <div class="img-cell">
                                <img src="//gw.alicdn.com/imgextra/i1/2219657390/O1CN0124SfOLhpUDDTHDF_!!2219657390.jpg_270x270q90.jpg">
                            </div>
                        </div>
                        <div class="content cell">
                            <div class="title">
                                围巾女秋冬季韩版百搭学生软妹加厚毛线针织ins情侣款保暖围脖男
                            </div>
                            <div class="sku-info">
                                颜色分类: 条纹 灰白
                            </div>

                            <div class="icon-main mui-flex align-center">
                                <div class="item-icon-tip">七天退换</div>
                            </div>
                        </div>
                        <div class="ext cell fixed item-pay">
                            <div class="price">
                                <span class="dollar">￥19.80</span>
                            </div>
                            <div class="quantity">
                                x 1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tpl-wrapper">
                <div class="tpl-wrapper-c">
                    <div class="border"></div>
                    <div class="flex">
                        <div class="box">
                            <span>更多</span>
                        </div>
                        <div  class="box">
                            <span>查看物流</span>
                        </div>
                        <div  class="box">
                            <span>确认收货</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </div>



</template>
<script>
export default {
    data(){
        return{


        }
    }
}
</script>
<style lang='stylus'>
.item-card
    margin: 10px;
    padding: 10px;

    background: #fff;
    border-radius: 8px;

    .tpl-wrapper-header
        .box
            display flex
            width 100%
            .box-left
                margin-top 10px
                margin-bottom 10px
                img
                    width 15px
                    height 15px
                    margin-left: 12px;
                    float left
                    margin-top 2px
                span
                    font-size: 12px;
                    margin-left: 5px;
                    max-width: 155px;
            .box-right
                -webkit-box-flex: 1;
                flex: 1 1 0;
                margin 5px 0
                justify-content: flex-end;
                -webkit-box-align: center;
                align-items: center;
                span
                    font-size: 12px;
                    float right
                    color: rgb(255, 80, 0);
    .tpl-wrapper
        .tpl-wrapper-c
            display flex
            width: 100%;
            border-top 1px solid red
            margin-top 10px
            .flex
                display flex
                margin 9px 0
                padding 1px 0
                div
                    border-radius: 15px
                    line-height 28px
                    text-align center
                    height: 28px;
                    width: 81px;
                    color: rgb(102, 102, 102);
                    border 1px solid rgb(102, 102, 102);
    .tpl-wrapperr
        padding 0 10px
        .order-item
            .order-itemInfo
                padding: 1~2px;
                display flex;
                .item-pic
                    .img-cell
                        width: 92px!important;
                        height: 92px;
                        flex: 1;
                        margin-right: 9px;
                        img
                            width: 92px;
                            height: 92px;
                            border-radius 10px
                .content
                    .title
                        color: #666;
                    .sku-info
                        font-size: 12px;
                        margin-top 5px
                    .icon-main
                        font-size: 12px;
                        color: #f50;
                        margin-top 5px
                .item-pay
                    margin-left 10px
                    .price
                        color: #f50;
                        font-size: 16px;
                        font-weight: bolder;


</style>

