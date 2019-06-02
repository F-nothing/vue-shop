<template>
    <div style="background-color: #ffffff;height: 100vh">



        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            label="商品"
            shape="round"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>





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
                    margin-right: 10px;" v-for="items in item.tag" :key="items.id">{{items.tsh}}</span>
                </li>
            </ul>
        </div>
        <div class="ContentWraper" style="padding-left: 13px;
    margin-top: 15px;
}">
            <div id="msHistory" class="recent-search">
                <div class="recent-search-head cf" style="padding: 0 15px 25px 0;">
                    <p style="font-size: 15px;
    line-height: 15px;
    color: #232326;
    float: left;
    width: 100px;
    padding-left: 1px;">最近搜索</p>
                    <i id="msHistoryDel" class="garbage-pic"></i>
                </div>

                <div id="msHistoryTags" class="recent-search-tags">
                    <span style="font-weight:700;display: inline-block;padding: 0 10px;background-color: #f0f2f5;height: 28px;line-height: 28px;text-align: center;border-radius: 5px">
                        <a style="color: black;" href="javascript:void(0);">
                            <i class="hot-search-move hot-search-red">直饮水龙头</i>
                        </a>
                    </span>
                </div>
            </div>

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
            },
            gerRouter(){
                var data = window.localStorage.getItem('searchhistory');
                window.localStorage.setItem('searchhistory',data)
            }
        }
    }
</script>

<style  scoped>

</style>
