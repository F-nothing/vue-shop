<template>
    <div class="logo-box">
        <heade></heade>
        <div class="box-cont">
            <div class="header">
                <div class="header-logo">
                    <span class="acrive"  @click="logo" id="logobutt">登陆</span>
                    <span  @click="reg" id="regbutt">注册</span>
                </div>
            </div>
            <!-- 登陆窗口 -->
            <div class="item" id="logo">
                <div class="cont">
                    <div class="cont-phone">
                        <input v-model="logodbs.username" placeholder="用户名/邮箱/已验证手机号"  name="logodbs.username" />
                    </div>
                    <div class="cont-phone">
                        <input v-model="logodbs.userPwd" placeholder="请输入密码" name="logodbs.userPwd"/>
                    </div>
                </div>
                <div class="butt">
                    <div class="logo-butt" @click="logoo()">登陆</div>
                    <div class="reg-butt">忘记密码</div>
                </div>
            </div>
            <!-- 注册窗口 -->
            <div class="item" id="reg" style="display:none">
                <div class="cont">
                    <div class="cont-phone">
                        <input placeholder="请输入手机号码" v-model="information.username"  ref="username" name='username'/>
                    </div>
                     <div class="cont-phone">
                         <input placeholder="请输入密码" v-model="information.userPwd" type="password" ref="password" name="userPwd"/>
                    </div>
                </div>
                <div class="butt">
                    <div class="logo-butt" :plain="true" @click="submitForm()">register</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import heade from '../components/public/header/shop-header'
import {login} from '../api/apilist'
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
        logo(){
            let logo = document.getElementById('logo');
            let reg = document.getElementById('reg');
            let logobutt = document.getElementById('logobutt');
            let regbutt = document.getElementById('regbutt');
            logobutt.classList.add('acrive')
            regbutt.classList.remove('acrive')
            logo.style.display="block"
            reg.style.display="none"
        },
        reg(){
            let logo = document.getElementById('logo');
            let reg = document.getElementById('reg');
            let logobutt = document.getElementById('logobutt');
            let regbutt = document.getElementById('regbutt');
            logobutt.classList.remove('acrive')
            regbutt.classList.add('acrive')
            logo.style.display="none"
            reg.style.display="block"
        },
        /**
         * 登陆接口
         */
         async logoo(){
            var username =this.logodbs.username;
            var password =this.logodbs.userPwd;
            if(username == '' ||  password == ''){
                this.$toast('账号或密码不能为空')
                return
            }
            const response = await login(this.logodbs);
            if(response.status == 1){
                this.goodsList[0].msg = response.mas;
                this.$toast(this.goodsList[0].msg)
            }else{
                sessionStorage.setItem('login',response.message);
                this.$router.push({path: '/'});
            }
        },
        /**
         * 注册方法
         */
        submitForm(){
            var username =this.$refs.username.value;
            var password =this.$refs.password.value;
            if(username == '' || password == ''){
                this.$toast('账号或密码不能为空')
                return
            }
            this.$axios.post('api/reg' , this.information ).then((response)=>{
                let res = response.data;
                //注册失败
                if(response.data.status == "1"){
                    this.$toast(res.staus)
                }else{
                    this.$toast(res.mas)
                    var token = response.data.message
                    sessionStorage.setItem("login",token);
                    this.$router.push({ path: '/' })
                }
            });
        },
    }
}
</script>
<style lang='scss'>
    @import "../mimin.scss";
    @import "../index";
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
            .header{
                display: flex;
                .header-logo {
                    flex:1;
                    span{
                        font-size: vw(12);
                        font-weight: 700;
                        margin-right: vw(20);
                    }
                    .acrive {
                        font-size: vw(20);
                        padding-bottom:vw(5);
                        border-bottom: vw(2) solid #FF9933;
                    }
                }
            }
            .item {
                margin-top: vw(20);
                .cont {
                    .cont-phone {
                        padding: vw(10) 0;
                        input {
                            width: 80%;
                            margin: 0 auto;
                            height: vw(40);
                            border: none;
                            border-radius: vw(10);
                            font-size: vw(14);
                            padding: 0 10%;
                        }
                    }
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
