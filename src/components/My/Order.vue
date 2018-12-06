<template>
    <div>
        <mheade :titlee="title"></mheade>
        <!-- 地址 -->
        <div class="address_defalut_wrap">
            <div class="addressDefault">
                <ul>
                    <li><strong>阚 176****4090</strong></li>
                    <li><span class="tag tag_red">默认</span>湖北孝感市安陆市东城经济开发区林语花都东区4栋1单元 </li>
                </ul>
            </div>
        </div>
        <div class="order-order">
            <header>
                <div class="cell content">
                    <span>迈克柏恩旗舰店</span>
                </div>
            </header>
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
            <div></div>
            <div class="buy-single-row label-input order-memo input">
                <label class="cell fixed title input-label mui-flex align-center">
                    <div class="cell fixed title input-label mui-flex align-center">
                        <div class="cell fixed">给卖家留言：</div>
                    </div>

                    <div class="cell">
                        <input placeholder="选填:填写内容已和卖家协商确认">
                    </div>

                </label>
                <div class="seperator-wrap"><hr class="seperator"></div>
                
            </div>
            <div class="order-orderPay buy-single-row"></div>
            <div class="line">
                <div>共1件,合计￥19.80</div>
            </div>





            <div class="order-submitOrder">
                <div class="mui-flex align-center">
                    <div class="cell realPay">
                        <div class="realPay-wrapper">
                            共两件,总金额￥45.50
                        </div>
                    </div>
                    <div class="cell fixed action">
                        <div class="mui-flex align-center">
                            <span>提交订单</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
import mheade from '../../components/public/header/shop-header'
export default {
    components:{
        mheade
    },
    data(){
      return{
        title:'我的订单'
      }
    }

}
</script>
<style lang='stylus'>
// @import './Order';
.address_defalut_wrap
    position relative
    z-index 320
    .addressDefault
        padding: 22px 20px;
.order-order
    margin-bottom: 9px;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.1), 0 0.5px 0.5px 0 rgba(0,0,0,.2);
    header
        padding: 9px;
        background-color: #fff;
    .order-item
        background-color: #f5f5f5;
        .order-itemInfo
            padding: 12px;
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
    .order-memo
        background-color: #fff;

        .mui-flex
            display: flex!important;
            .input-label
                line-height: 41px;
                padding 0 10px
                display flex
                
            .seperator-wrap
                -webkit-box-flex: 0 !important;
                -webkit-flex: none !important;
                flex none
                .seperator
                   
                    border-bottom: 1px solid rgba(0,0,0,.1);
                    border: none;
            .cell
                margin-bottom: 0;
                text-indent: 0;
                background-color: #fff;
                line-height: 41px;
                
                input
                    border: none;
                    width: 100%;
                    flex 1
    .line       
        background-color: #fff;
        color: #999;
        padding: 9px;
        div
            text-align: right;
            color: #666;
            font-weight: bolder;
    .order-submitOrder               
        position fixed
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        
        .align-center
            display block
            display flex
            -webkit-align-items: center;
            
            .realPay
                text-align: right;
                margin-right: 9px;
                flex: 1;
                
            .action
                -webkit-box-flex: 0!important;
                -webkit-flex: none!important;
                background-color: #f50;
                color: #fff;
                padding: 1.1em 1.4em;

                        
        
</style>
