<template>
    <div>
        <mheade :titlee="title"></mheade>
        <div>
            <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    :disabled-list="disabledList"
                    disabled-text="以下地址超出配送范围"
                    @add="onAdd"
                    @edit="onEdit"
            />
        </div>
    </div>
</template>
<script>
    import mheade from '@/components/public/header/shop-header'
    import {cartList} from '@/api/apilist'
    export default {
        name: "address",
        components:{
            mheade
        },
        data(){
            return{
                title:'收货地址',
                chosenAddressId: '', //当前的勾选收货地址
                list: [

                ],
                disabledList: [
                    {
                        id: '3',
                        name: '王五',
                        tel: '1320000000',
                        address: '浙江省杭州市滨江区江南大道 15 号'
                    }
                ]

            }
        },
        mounted(){
            this.addressdata()
        },
        methods: {
            //收货地址编辑
            onEdit(item, index) {
                this.$router.push({path: '/Addressadd'});
                localStorage.setItem("address",JSON.stringify(this.list[index]))
            },

            async addressdata(){
                const adddata = await cartList()
                // 修改数组的属性字段
                this.list =JSON.parse(JSON.stringify(adddata.docs).replace(/consignee/g, 'name'))
                this.list =JSON.parse(JSON.stringify(this.list).replace(/_id/g, 'id'))
                this.list =JSON.parse(JSON.stringify(this.list).replace(/mobile/g, 'tel'))
            }

        }
    }
</script>
<style scoped>

</style>
