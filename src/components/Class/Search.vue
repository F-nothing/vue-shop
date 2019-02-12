<template>
    <div>
        <van-search background="red"   placeholder="请输入搜索关键词" v-model="value" />
        <div class="suggest-container">
            <ul class="suggest-sug">
                <li @click="gerRouter(item)"  v-for="item in items" :key="item.index" v-if="item.key" style="
                    height: 43px;
                    line-height: 43px;
                    background: #f9f9f9;
                    border-bottom: 1px solid #dedede;
                    padding: 0 16px;
                    color: #666;
                    font-size: 14px;">
                    <span>{{item.key}}</span>
                    {{item[0]}}
                    <span style="
                    float: right;
                    height: 43px;
                    line-height: 43px;
                    font-size: 12px;
                    padding-left: 10px;
                    padding-right: 10px;
                    border-radius: 3px;
                    margin-right: 10px;" v-for="items in item.tag">{{items.tsh}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {getSug} from '../../api/recommend'
    export default {
        name: "Search",
        data(){
            return{
                value:'',
                question: '',
                items:[]
            }
        },
        watch:{
            value:function () {
                this.search();
            }
        },
        methods:{
            search(){
                var q = this.value;
                getSug({q}).then((res) => {
                    if (res){
                        this.items = res;}
                });

            }
        }
    }
</script>

<style scoped>

</style>
