<template>
    <div class="logo-box">
        <heade></heade>
        <div class="box-cont">
<<<<<<< HEAD
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
=======
            <van-tabs v-model="active">
                <van-tab title="登陆">
                    <div class="item" id="logo">
                        <input v-model="logodbs.username" placeholder="用户名/邮箱/已验证手机号" name="logodbs.username" />
                        <input v-model="logodbs.userPwd" placeholder="请输入密码" name="logodbs.userPwd"/>
                        <div class="butt">
                            <div class="logo-butt" @click="logoo()">登陆</div>
                            <div class="reg-butt">忘记密码</div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="注册">
                    <div class="item" id="reg">
                        <input placeholder="请输入手机号码" v-model="information.username" name='username'/>
                        <input placeholder="请输入密码" v-model="information.userPwd" type="password" name="userPwd"/>
                        <div class="butt">
                            <div class="logo-butt" :plain="true" @click="submitForm()">register</div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        </div>
    </div>
</template>
<script>
import heade from '@/components/public/header/shop-header'
<<<<<<< HEAD
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
=======
import {login,Reg} from '../api/apilist'
export default {
    data(){
        return{
            goodsList:[{staus:'',msg:''}],
            // 登陆表单
            logodbs:{
                username:'',
                userPwd:''
            },
            // 注册表单
            information:{
                username:'',
                userPwd:''
            }
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        }
    },
    components:{
        heade
    },
    methods:{
<<<<<<< HEAD
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
=======
        /**
         * 登陆接口
         */
         async logoo(){
            const response = await login(this.logodbs);
            if(response.status == 1){
                this.$toast(response.message)
            }else{
                this.$toast(response.message)
                sessionStorage.setItem('username',response.message);
                sessionStorage.setItem('login',response.token);
                this.$router.push({path: '/'});
            }
        },
        /**
         * 注册方法
         */
        async submitForm(){
            const response = await Reg(this.information);
            if(response.status == 1){
                this.$toast(response.message)
            }else{
                this.$toast(response.message);
                sessionStorage.setItem('login',response.token);
                sessionStorage.setItem('username',response.userid);
                this.$router.push({path: '/'});
            }
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        },
    }
}
</script>
<style lang='scss'>
    @import "../style/mimin";
    @import "../style/index";
    .logo-box {
        width: 100%;
<<<<<<< HEAD
        background-color: #F7F7F7;
        height: 100vh;
        background-size:100vw 100vh;
        .cname{
            color: #FFFFFF;
            background-color: #F7F7F7;
=======
        background: #ffffff;
        height: 100vh;
        background:url(4.png) center center no-repeat;
        background-size: 150vw 100vh;
        .m_header_bar{
            padding: 10px 15px
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
        }
        .box-cont {
            padding:vw(30);
            .item {
<<<<<<< HEAD
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

=======
                margin-top: vw(20);
                input {
                    width: 80%;
                    margin: vw(10) auto;
                    height: vw(40);
                    border: none;
                    border-radius: vw(10);
                    font-size: vw(14);
                    padding: 0 10%;
                }
                .butt {
                    margin-top: vw(30);
                    .logo-butt {
                        width: 80%;
                        @include line(vw(40),vw(40));
                        border-radius: vw(20);
                        font-size: vw(12);
                        margin: 0 auto;
                        text-align: center;
                        color :#ffffff;
                        background-color: #CCCCCC;
                    }
                    .reg-butt {
                        margin-top:vw(20);
                        font-size :vw(12);
                        color: cornsilk;
                        text-align: center;
>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
                    }
                }
            }
        }
<<<<<<< HEAD
=======



>>>>>>> 5c238d8372868820917fb18d9a4c601617d4c4f6
    }
</style>
