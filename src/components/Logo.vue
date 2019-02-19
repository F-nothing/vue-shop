<template>
    <div class="logo-box">
        <heade></heade>
        <div class="box-cont">
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
        </div>
    </div>
</template>
<script>
import heade from '@/components/public/header/shop-header'
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
        }
    },
    components:{
        heade
    },
    methods:{
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
        },
    }
}
</script>
<style lang='scss'>
    @import "../style/mimin";
    @import "../style/index";
    .logo-box {
        width: 100%;
        background: #ffffff;
        height: 100vh;
        background:url(4.png) center center no-repeat;
        background-size: 150vw 100vh;
        .m_header_bar{
            padding: 10px 15px
        }
        .box-cont {
            padding:vw(30);
            .item {
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
                    }
                }
            }
        }



    }
</style>
