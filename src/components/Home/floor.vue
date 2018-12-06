<template>
    <div class="floor">
        <div class="position-r">
            <ul class="fix">
                <li v-for="item in item" :key="item.img">
                    <a>
                        <img :src="item.img">
                        <div class="title" style="color: ">{{item.title}}</div>
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
                        img:"//image5.suning.cn/uimg/cms/img/154211125566148443.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image1.suning.cn/uimg/cms/img/154211126036025283.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image3.suning.cn/uimg/cms/img/154211126548060214.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image2.suning.cn/uimg/cms/img/154211127394345417.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image2.suning.cn/uimg/cms/img/154211128006138445.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image5.suning.cn/uimg/cms/img/154211125566148443.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image5.suning.cn/uimg/cms/img/154211125566148443.png?from=mobile",
                        title:"爆款手机",
                    },
                    {
                        img:"//image5.suning.cn/uimg/cms/img/154211125566148443.png?from=mobile",
                        title:"爆款手机",
                    }
                ]
            
        }
    }
    
}
</script>
<style lang='stylus'>
.floor
    padding 10px 0  
    .position-r  
        overflow: auto;
        ul 
            li
                width 20%
                float left
                a
                    img
                        width 60%
                        display block
                        margin 0 auto
                    .title
                        font-size 14px
                        text-align center
                        height 20px
                        line-height 20px
                        color: #333;
                        overflow: hidden;    
</style>


