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
                    <a style="float: right;" href="/register">注册</a>
                </div>
                <div class="butt">
                    <van-button size="large" @click="mobileLogin">登陆</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import heade from '@/components/public/header/shop-header'
import {mapState, mapMutations} from 'vuex'
import { Toast } from 'vant';
export default {
    data(){
        return{
            logodbs:{
                account:'',
                password:''
            },
            userInfo:null   //获取到的用户信息
        }
    },
    components:{
        heade
    },
    methods:{
        ...mapMutations([
            'RECORD_USERINFO',
        ]),
        //发送登录信息
        async mobileLogin(){
            this.$api.article.login(this.logodbs)
                .then(res =>{
                    this.userInfo = res.data
                    //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                    if(res.data.status == 1){
                        this.RECORD_USERINFO(this.userInfo);
                        Toast(res.data.success);
                        this.$router.push({ path: '/' })

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
