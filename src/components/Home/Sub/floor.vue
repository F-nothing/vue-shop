<template>
    <div class="floor">
        <div class="position-r">
            <ul class="fix">
                <li v-for="itemm in item" :key="itemm.title">
                    <a class="yu-news-tit">
                        <img :src="itemm.img">
                        <div class="title">{{itemm.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="scroll_news">
                <div class="news_more">
                    <img src="//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg">
                </div>
                <div class="news_list_wrapper">
                    <ul>
                        <li class="news_item">
                            <a>
                                <span class="red">HOT</span>
                                联想重回PC市场龙头，但移动业务却止步不前
                            </a>
                        </li>
                        <li class="news_item">
                            <a>
                                <span class="red">HOT</span>
                                联想重回PC市场龙头，但移动业务却止步不前
                            </a>
                        </li>
                    </ul>
                </div>

                <a class="news_news_more">
                    <i class="line"></i>
                    更多
                </a>
            </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            item:[
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp",
                        title:"京东超市",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp",
                        title:"海囤全球",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp",
                        title:"京东服饰",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp",
                        title:"京东生鲜",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp",
                        title:"京东旅行",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp",
                        title:"充值缴费",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp",
                        title:"9.9元拼",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/18592/37/4041/9229/5c2d8e3aE7facf7b7/bd549f4712f4886c.png.webp",
                        title:"领券",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp",
                        title:"赚钱",
                    },
                    {
                        img:"//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp",
                        title:"全部",
                    }
                ]

        }
    }

}
</script>
<style lang='scss'>
    @import "../../../mimin";
    @import "../../../index.scss";
.floor{
    margin:0;
    background-color: #FFFFFF;
    overflow: hidden;
    .position-r{
        overflow: auto;
        ul{
            li{
                width: 20%;
                float: left;
                box-sizing: border-box;
                a{
                    img {
                        width: 50%;
                        padding: vw(5) 0;
                        display: block;
                        margin: 0 auto;

                    }
                    .title{
                        font-size: vw(10);
                        text-align: center;
                        color: #666;
                        height: vw(20);
                        line-height:vw(20);
                        margin-top: vw(5);
                        overflow: hidden;
                    }

                }

            }
        }
    }
    .scroll_news{
        position: relative;
        border-radius: 0;
        .news_more {
            position: absolute ;
            top: vw(4);
            left:vw(10);
            img{
                width: vw(62);
                height: vw(20);
            }
        }
        .news_list_wrapper{
            height: vw(30);
            overflow: hidden;
            margin: 0 vw(50) 0 vw(80);
            ul{
                li{
                    @include line(vw(30),vw(30),vw(14));
                    color: #181818;
                }
            }
        }
        .news_news_more{
            position: absolute;
            top: vw(7);
            right: vw(10);
            font-size: vw(12);
            .line{
                background: #ececec;
                width: vw(1);
                height: vw(15);
                display: inline-block;
                margin-right: 1px;
                vertical-align: middle;
            }
        }
    }

}

</style>


