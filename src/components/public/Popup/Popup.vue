<template>
    <div class="van-popu" @click="clic" :class="{show:myResult}">
        <div class="van-popu-bottom" id="parent" :class="{showw:myResult}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        // 当前组件是否显示 属性true false
        isShow:{
            type:Boolean,
        },
    },
    data(){
        return{
            myResult:this.isShow, //①创建props属性result的副本--myResult
        };
    },
    watch:{
        isShow(val){
            this.myResult = val;
            // 监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myResult(val){
            this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
        }
    },
    methods:{
        clic(e){
            if(e.target.id!= 'parent'){
                this.myResult = false;
            }
        },
    },


}
</script>
<style lang='scss'>
.van-popu{
    position:fixed;
    width: 100%;
    height: 100%;
    z-index: 10000;
    top: 0;
    left: -10000px;
    right: 0;
    bottom: 0;
    background-color: rgba(74,74,74,0.5);
    transition: all .1s cubic-bezier(0, -0.67, 0, -0.46);
    opacity: 0;
    .van-popu-bottom{
        z-index: 100000;
        position: fixed;
        bottom: -500px;
        height: 300px;
        background: #FFFFFF;
        width: 100%;
        left: 0;
        transition: all 0.4s cubic-bezier(0.55, 0.09, 0.68, 0.53);
    }
    .showw{
        bottom: 0;

    }
}
.show{
    left: 0;
    opacity: 1;
}

</style>

