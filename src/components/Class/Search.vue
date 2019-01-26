<template>
    <div>
        <van-search background="red" onchange="aa(this)"  placeholder="请输入搜索关键词" v-model="value" />

        <div class="suggest-container">
            <ul class="suggest-sug">
                <li @click="gerRouter(item)"  v-for="item in items" style="
                    height: 43px;
                    line-height: 43px;
                    background: #f9f9f9;
                    border-bottom: 1px solid #dedede;
                    padding: 0 16px;
                    color: #666;
                    font-size: 14px;">
                    <span>{{value}}</span>
                    {{item[0]}}
                </li>
            </ul>
        </div>
        <button @click="getfind()">提交</button>
    </div>





</template>

<script>
    import {getSug,getRecommend,getfind} from '../../api/recommend'
    export default {
        name: "Search",

        data(){
            return{
                value:'',
                question: '',
                answer: 'I cannot give you an answer until you ask a question!',
                items:[]
            }
        },

        watch:{
            value:function (newQuestion, oldQuestion) {
                this.search();

            }
        },


        methods:{
            getfind(){
                // getfind().then((res)=>{
                //
                // })
                getSug('1')
            },


            gerRouter(item){
                console.log(item[0])
            },



            search(){
                var q = this.value
                getSug({q}).then((res) => {
                    if (res.result){
                        this.items = res.result;
                    }
                });
            }





        }
    }
</script>

<style scoped>

</style>
