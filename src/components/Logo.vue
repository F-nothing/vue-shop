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
                        <el-input v-model="logodbs.username" placeholder="用户名/邮箱/已验证手机号"  name="logodbs.username"></el-input>
                    </div>
                    <div class="cont-phone">
                        <el-input v-model="logodbs.userPwd" placeholder="请输入密码" name="logodbs.userPwd"></el-input>
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
                        <el-input placeholder="请输入手机号码" v-model="information.username"  ref="username" name='username'></el-input>
                    </div>
                     <div class="cont-phone">
                         <el-input placeholder="请输入密码" v-model="information.userPwd" type="password" ref="password" name="userPwd"></el-input>
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

import { mapState } from 'vuex'


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
                this.goodsList[0].msg = '用户名或密码不能为空';
                this.$message({
                    showClose: true,
                    message: this.goodsList[0].msg,
                    type: 'error',
                });
                return
            }
            this.$axios.post('/users/login',this.logodbs).then((response)=>{
                if(response.data.status == 1){

                    this.goodsList[0].msg = response.data.mas;

                    this.$message({
                        showClose: true,
                        message: 'this.goodsList[0].msg',
                        type: 'error',
                    })


                }else{
                    this.goodsList[0].msg = '登陆成功';
                    this.$message({
                        showClose: true,
                        message: this.goodsList[0].msg,
                        type: '',
                    });

                    localStorage.setItem('login',response.data.message);

                    this.$router.push({name: '/'});
                }
            })
        },
        /**
         * 注册方法
         */
        submitForm(){
            var username =this.$refs.username.value;
            var password =this.$refs.password.value;
            if(username == '' || password == ''){
                this.goodsList[0].msg = '用户名或密码不能为空';
                this.$message({
                    showClose: true,
                    message: this.goodsList[0].msg,
                    type: 'error',
                });
                return
            }
            this.$axios.post('api/reg' , this.information ).then((response)=>{
                let res = response.data;
                //注册失败
                if(response.data.status == "1"){
                    this.goodsList.staus = res.staus;
                }else{
                    this.goodsList[0].msg = res.msg;
                    this.$message({
                        showClose: true,
                        message: res.mas,
                        type: 'success',
                    });
                    var token = response.data.message
                    localStorage.setItem("login",token);
                    this.$router.push({ path: '/' })
                }
            });
        },
    }
}
</script>
<style lang='stylus'>
.logo-box
    width 100%
    background #ffffff
    height 100%

    .m_header_bar{
        padding 10px 15px
    }
    .box-cont
        padding 30px
        .header
            display flex
            .header-logo
                flex 1
                span
                    font-size 12px
                    font-weight 700
                    margin-right 20px
                .acrive
                    font-size 20px
                    padding-bottom 5px
                    border-bottom 2px solid #FF9933

        .item
            margin-top 20px
            .cont
                .cont-phone
                    padding 10px 0
                    .el-input__inner
                        border none
                        border-radius 0
                        border-bottom 1px solid #999999
                    .el-input__inner:focus{
                        border-top none
                        border-left none
                        border-right none
                        border-bottom 2px solid #409EFF;
                    }
            .butt
                margin-top 30px
                .logo-butt
                    width 80%
                    height 40px
                    line-height 40px
                    border-radius 20px
                    margin 0 auto
                    text-align center
                    color #ffffff
                    background-color #CCCCCC
                .reg-butt
                    margin-top 20px
                    font-size 12px
                    color blue
                    text-align center
                    color #CCCCCC
</style>
