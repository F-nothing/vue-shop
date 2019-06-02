<template>
    <div class="box">
        <div id="spinner" class="spinner">
<<<<<<< HEAD
            <van-loading color="white" />
        </div>
    </div>
=======
            <!--<div class="bounce1"></div>-->
            <!--<div class="bounce2"></div>-->
            <!--<div class="bounce3"></div>-->
        <van-loading color="white" />
        </div>

    </div>

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
</template>
<script>
    export default {
        name: 'loading',
        data() {
            return {
                loading: false
            }
        },
    }
</script>
<style scoped>
    .box{
        position:fixed;
        top :0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background-color:#000;
        opacity:0.6;
        text-align:center
    }
    .spinner {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .van-loading{
<<<<<<< HEAD
        width: 100%;
    }
=======
        margin: 0 auto;
    }

>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
</style>
