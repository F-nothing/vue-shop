<template>
    <div >
        <section class="cname">
            <div class="m_header_bar header">
                <div @click="$router.history.go(-1)" class="m_header_">
                    <i class="iconfont icon-shanchu"></i>
                </div>
                <div class="m_header_bar_title">
                    <slot></slot>
                    <i>发布商品</i>
                </div>
            </div>
        </section>
        <div style="height: 46px"></div>
        <section class="header_biaoti">
            <input placeholder="标题" v-model="data.goods_name">
        </section>
        <section class="header_miaoshu">
            <textarea placeholder="描述宝贝的转手原因，入手渠道和使用感受" v-model="data.goods_describe"></textarea>
        </section>
        <!--图片视频-->
        <div class="content-main">
            <div v-for="item in 1" class="content-main-center">
                <div style="background-color: #f3f5f9;width: 100%;">
                    <i class="iconfont icon-shanchu-copy" style="line-height: 60px;font-size:26px"></i>
                    <p style="line-height: 8px">图片/视频</p>
                </div>
            </div>
        </div>
        <el-upload class="content-main-center"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <div style="height: 20px;background-color: #f9f9f9"></div>
        <!--价格-->
        <div style="" class="container-jiage">
            <div>
                <i>￥</i>
                <input placeholder="价格" type="number" v-model="data.shop_price">
            </div>
        </div>
        <div style="height: 100px;"></div>
        <!--商品提交按钮-->
        <section class="bottom_Submission">
            <div class="bottom_submission-container">
                <debounce time="300" >
                    <button @click="Release">确定发布</button>
                </debounce>
            </div>
        </section>
    </div>
</template>
<script>
    import { Toast } from 'vant';
    import { Uploader } from 'vant';
    import debounce from '../../utils/debounce'
    export default {
        name: "index",
        components: {debounce},
        data(){
            return{
                data:{
                    cat_id:null,
                    goods_name:null,
                    goods_describe:null,
                    goods_number:null,
                    goods_img:null,
                    shop_price:null,
                },
                inpModel: 1,
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            inputChange(e){
                console.log(e.target.value, '防抖')
            },
            beforeFun(e){
                console.log(e.target.value, '不防抖')
            },
            Release(){
                this.$api.article.secondHandshop(this.data)
                    .then(res => {
                        Toast(res.data.success)
                        // this.$router.go(-1)
                    })
                    .catch(err => {
                        Toast(res.data.success)
                    })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import url(//at.alicdn.com/t/font_882041_5owwv3cz4q.css);
    @import "../../style/mimin";
    @import "../../style/index";
    .m_header_bar{
        width: 100%;
        display: flex;
        height: vw(45);
        color: black;
        font-size: vw(14);
        font-weight: 700;
        border-bottom: 1px solid #e2e2e2;
        .m_header_{
            display: block;
            @include line(vw(45),vw(45),vw(28));
            text-align: center;
            i{
                width:vw(45);
                height: vw(20);
                position: absolute;
            }
        }

        .m_header_bar_title{
            @include line(vw(45),vw(45),vw(18));
            text-align: center;
            @include text_hidden();
            flex: 1;
        }
    }
    .cname{
        .m_header_bar{
            display: flex;
            position: fixed;
            top: 0;
            background-color: #ffffff
        }
    }
    .header_biaoti{
        border-bottom:1px solid #e2e2e2;
        margin: 0 15px;
        input{
            width: 100%;
            border: none;
            padding: 15px 10px;
            color: black;
            box-sizing: border-box;;
            font-size: 16px;
        }
    }
    .header_miaoshu{
        margin: 0 15px;
        textarea{
            width: 100%;
            height: 200px;
            border: none;
            padding: 10px 10px;
            font-size: 14px;
            box-sizing: border-box;
        }
    }
    .content-main{
        padding: 15px 20px;color: #888888;display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        .content-main-center{
            width: 25%;
            height: 80px;
            border-radius: 10px;
            text-align: center;
            display: flex;
            padding:0 5px;
            box-sizing: border-box;
            margin: 5px 0;
            justify-content: center;
        }
    }
    .container-jiage{
        position: relative;
        margin: 5px 10px;
        div{
            i{
                position: absolute;
                font-size: 20px;
                font-weight: 700;
                top: 10px;
                left: 10px;
                margin-right: 10px
            }
            input{
                width: 100%;
                border: none;
                padding: 10px 20px;
                padding-left: 40px;
                box-sizing: border-box;
                border-bottom:1px solid #e2e2e2;
                font-size: 20px;
            }
        }
    }
    .bottom_Submission{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: 700;
        background-color: #ffffff;
        /*底部提交商品*/
        .bottom_submission-container{
            padding: 10px;
            button{
                width: 100%;
                height: 40px;
                background-color: yellow;
                border: none;
                font-size: 17px;
                border-radius: 5px
            }
        }
    }
</style>
