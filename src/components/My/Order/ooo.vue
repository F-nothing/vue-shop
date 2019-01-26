<template>
    <div class="list-card">
        <div class="empty-block">
            <img src="https://img.alicdn.com/tfs/TB1vJ_.vTqWBKNjSZFxXXcpLpXa-330-330.png" alt="empty">
            <div class="empty-title">您还没有相关的订单</div>
            <div class="empty-content">可以去看看有哪些想买的</div>
            <!-- <div class="empty-btn"><span>随便逛逛</span></div> -->
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang='stylus'>
.list-card
    .empty-block
        text-align: center;
        margin-top: 130px;
        img 
            width 150px
            display inline-block
        .empty-title
            color: #333333;
            font-size: 0.16rem;
            margin: 10px 0;
        .empty-content
            color: #999999;
            font-size: 0.12rem;
</style>

