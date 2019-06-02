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
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:[
                    {
<<<<<<< HEAD
                        img:"img/5b03b779N5c0b196f.png.webp",
                        title:"二手手机",
                    },
                    {
                        img:"img/43ea8051bc50d939.png.webp",
                        title:"数码",
                    },
                    {
                        img:"img/ca89a8718704215c.png.webp",
                        title:"游戏交易",
                    },
                    {
                        img:"img/efd3dbfaf8a7f1fd.gif",
                        title:"二手图书",
                    },
                    {
                        img:"img/43ea8051bc50d939.png.webp",
                        title:"全部分类",
                    },
                ]
=======
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

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        }
    }

}
</script>
<style lang='scss'>
    @import "../../../style/mimin";
    @import "../../../style/index";
<<<<<<< HEAD
=======


>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
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
<<<<<<< HEAD
                padding: vw(10) 0;
=======
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                box-sizing: border-box;
                a{
                    img {
                        width: 50%;
                        padding: vw(5) 0;
                        display: block;
                        margin: 0 auto;

                    }
                    .title{
<<<<<<< HEAD
                        font-size: vw(12);
                        font-weight:bold ;
                        text-align: center;
                        font-family: "PF";
                        color: black;
=======
                        font-size: vw(10);
                        text-align: center;
                        color: #666;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                        height: vw(20);
                        line-height:vw(20);
                        margin-top: vw(5);
                        overflow: hidden;
                    }
<<<<<<< HEAD
=======

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                }

            }
        }
    }


}

</style>


