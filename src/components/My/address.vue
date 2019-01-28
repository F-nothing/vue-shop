<template>
    <div>
        <mheade :titlee="title"></mheade>

        <div>
            <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    :disabled-list="disabledList"
                    @add="onAdd"
                    @edit="onEdit"
            />
        </div>
    </div>

</template>

<script>
    import mheade from '../public/header/shop-header'
    export default {
        name: "address",
        components:{
            mheade
        },
        data(){
            return{
                title:'收货地址',
                list: [
                    {
                        id: '1',
                        name: '阚',
                        tel: '176****4090',
                        address: '湖北孝感市安陆市东城经济开发区林语花都东区4栋1单元'
                    },
                    {
                        id: '2',
                        name: '阚',
                        tel: '176****4090',
                        address: '湖北孝感市安陆市东城经济开发区林语花都东区4栋1单元'
                    }
                ],
                // disabledList: [
                //     {
                //         id: '3',
                //         name: '王五',
                //         tel: '1320000000',
                //         address: '浙江省杭州市滨江区江南大道 15 号'
                //     }
                // ]
            }
        },

        methods: {
            onAdd() {
                this.$router.push({path: '/Addressadd'  });
            },

            onEdit(item, index) {
                alert(1)
            }
        }
    }
</script>

<style scoped>

</style>
