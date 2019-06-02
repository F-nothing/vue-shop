<template>
    <div class="mCommonFooter">
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
        <div class="common-copyright">Copyright © 2004-2018 易云科技 版权所有</div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang='scss'>
    @import "../../../style/mimin";
    .mCommonFooter{
        position:relative;
        bottom: 0;
        padding-bottom: vw(10);
        padding-top :vw(20);
        width: 100%;
        .common-links{
            width: 100%;
            padding :vw(10) 0;
            font-size: vw(14);
            .common-lin {
                overflow: hidden;
                li{
                    float: left;
                    text-align: center;
                    width: vw(120);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding: 0 vw(5);
                    box-sizing: border-box;
                    a {
                        color: #848689;
                        text-align :center;
                        img {
                            height:vw(60);
                        }
                    }
                }
            }
        }
    }


        .common-icons {
            border-bottom: 1px solid #e5e5e5;
            width :100%;
            padding: 10px 0;

            ul {
                overflow: hidden;

                li {
                    float: left;
                    text-align: center;
                    width: 33.3333%;
                    margin :0 auto;

                    a {
                        display: block;

                        img {
                            height: 50px;
                            width: 40%;
                            margin :0 auto !important
                        }
                    }
                }
            }
        }
        .common-copyright{
            font-size :12px;
            text-align :center;
            color: #666;
            padding :20px 0;
        }





</style>
