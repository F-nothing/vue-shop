<template>
    <section class="cname" >
        <div class="m_header_bar header" style="display: flex;">
            <div @click="$router.history.go(-1)" class="m_header_">
                <svg t="1549678926274" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1949" xmlns:xlink="http://www.w3.org/1999/xlink" ><defs></defs><path d="M695.04 824.32c12.8-12.8 12.8-33.28 0-45.44L400 481.92 695.04 183.68c12.8-12.8 12.8-33.28 0-45.44-12.16-12.8-32.64-12.8-45.44-1e-8l-314.24 317.44c-1.28 1.28-3.2 1.28-4.48 2.56000001-12.8 12.8-12.8 33.28 0 45.44l318.08 320C661.76 837.12 682.24 837.12 695.04 824.32z" p-id="1950"></path></svg>
            </div>
            <div class="m_header_bar_title">
                <slot></slot>
                <i>{{titlee}}</i>
            </div>
            <div class="m_header_">
                <svg t="1549679162026" class="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2064" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M224 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S276.928 608 224 608z" p-id="2065"></path><path d="M512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S564.928 608 512 608z" p-id="2066"></path><path d="M800 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S852.928 608 800 608z" p-id="2067"></path></svg>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        titlee:{
            type:String,
            default:"",
        },
        background:'',

        isshow:{
            default:false,
        }
        //接受路由地址
    }
}
</script>
<style lang='scss'>
@import url(//at.alicdn.com/t/font_908836_nu64hp9k9ug.css);
@import "../../../style/mimin";
@import "../../../style/index";
    .m_header_bar{
        width: 100%;
        display: flex;
        height: vw(45);
        color: black;
        font-size: vw(14);
        .m_header_{
            display: block;

            @include line(vw(45),vw(45),vw(28));
            text-align: center;
            svg{
                width:vw(45);
                height: vw(20);
            }
        }

        .m_header_bar_title{
            @include line(vw(45),vw(45),vw(18));
            text-align: center;
            @include text_hidden();
            flex: 1;
        }
    }
</style>


