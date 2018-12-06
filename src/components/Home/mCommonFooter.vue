<template>
    <div class="mCommonFooter">
        <div class="common-links">
            <ul class="common-lin">
                <li><a>登录</a></li>
                <li><a>注册</a></li>
                <li><a>客户服务</a></li>
                <li><a>返回顶部</a></li>
            </ul>

        </div>
        <div class="common-icons">
            <ul>
                <li>
                    <a><img src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png"></a>
                </li>
                <li>
                    <a><img src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png"></a>
                </li>
                <li>
                    <a><img src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png"></a>
                </li>
            </ul>

        </div>
        <div class="common-copyright">Copyright © 2004-2018 京东JD.com 版权所有</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='stylus'>
.mCommonFooter
    
   
    padding-bottom: 50px;
    padding-top 20px
    width 100%;
    .common-links
        width 100%  
        padding 10px 0
        font-size 14px
        .common-lin
            overflow hidden

            li
                float: left;
                text-align: center;
                width: 25%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 0 5px;
                box-sizing: border-box;
                a
                    color: #848689;
    .common-icons
        border-bottom: 1px solid #e5e5e5;
        width 100%
        ul
            overflow hidden
            li
                float: left;
                text-align: center;
                width: 33.3333%;
                
                a
                    display: block;
                    img
                        height 50px 
                        width: 40%;

    .common-copyright
        font-size 12px;
        text-align center;
        color #666;
        padding 10px 0







</style>
