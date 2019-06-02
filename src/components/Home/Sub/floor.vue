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
        }
    }

}
</script>
<style lang='scss'>
    @import "../../../style/mimin";
    @import "../../../style/index";
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
                padding: vw(10) 0;
                box-sizing: border-box;
                a{
                    img {
                        width: 50%;
                        padding: vw(5) 0;
                        display: block;
                        margin: 0 auto;

                    }
                    .title{
                        font-size: vw(12);
                        font-weight:bold ;
                        text-align: center;
                        font-family: "PF";
                        color: black;
                        height: vw(20);
                        line-height:vw(20);
                        margin-top: vw(5);
                        overflow: hidden;
                    }
                }

            }
        }
    }


}

</style>


