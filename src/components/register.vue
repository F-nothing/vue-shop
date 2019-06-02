<template>
    <div class="logo-box">
        <heade></heade>
        <div class="box-cont">
            <div class="item">
                <van-cell-group>
                    <van-field v-model="logodbs.account" placeholder="请输入用户名" />
                </van-cell-group>
                <div style="height: 10px"></div>
                <van-cell-group>
                    <van-field v-model="logodbs.password" type="password" placeholder="请输入密码" />
                </van-cell-group>
                <div class="msg cl">
                    <a style="float: left;">忘记密码？</a>
                    <a style="float: right;" href="/logo">登陆</a>
                </div>
                <div class="butt">
                    <van-button size="large" @click="submitForm">注册</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import heade from '@/components/public/header/shop-header'
import { Field } from 'vant';
import { Toast } from 'vant';
export default {
    data(){
        return{
            goodsList:[{staus:'',msg:''}],
            // 登陆表单
            logodbs:{
                account:'',
                password:''
            },
            // 注册表单
            information:{
                username:'',
                userPwd:''
            }
        }
    },
    components:{
        heade
    },
    methods:{
         async submitForm(){
            this.$api.article.register(this.logodbs).then(res =>{
                if(res.data.status == 1){
                    sessionStorage.setItem('login',res.data.token);
                    Toast(res.data.message);
                }else{
                    Toast(res.data.message);
                }
            })
        },
    }
}
</script>
<style lang='scss'>
    @import "../style/mimin";
    @import "../style/index";
    .logo-box {
        width: 100%;
        background-color: #F7F7F7;
        height: 100vh;
        background-size:100vw 100vh;
        .cname{
            color: #FFFFFF;
            background-color: #F7F7F7;
        }
        .box-cont {
            padding:vw(30);
            .item {
                position: relative;
                margin-top: vw(20);
                .butt{
                    margin-top: 20px;
                }
                .msg{
                    padding: 10px 0;
                    color: #666666;
                    a{
                        color: #666666;
                    }
                }
            }
        }
    }
</style>
