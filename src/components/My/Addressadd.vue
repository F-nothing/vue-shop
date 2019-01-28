<template>
    <div>

        <mheade  :titlee="title"></mheade>


        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />






    </div>
</template>

<script>
    import mheade from '../public/header/shop-header'
    export default {
        components:{
            mheade
        },
        data() {
            return {
                title:'新增收货地址',
                areaList:'',
                searchResult: []
            }
        },

        methods: {
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
