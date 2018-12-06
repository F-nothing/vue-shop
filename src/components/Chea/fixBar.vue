<template>
  <!-- 购物车商品结算容器 -->
  <div class="fixbare">
    <i class="icon_select iconfont icon-gouxuanzhong1">
      全选
    </i>
    <div class="total">
      <p>
        总计：
        <strong>¥4887.10</strong>
        <small>
          <span id="totalBackMoney">总额¥{{4887.10 }}立减¥0.00</span>
        </small>
      </p>
      <a class="buy buyJs">去结算
        <em>(54件)</em>
      </a>
    </div>
  </div>

</template>
<script>
export default {};
</script>
<style lang='stylus' scoped>
@import url('//at.alicdn.com/t/font_908836_k4okucvvwsg.css');

.fixbare {
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 40px;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 14px;
  z-index: 999;

  .icon_select {
    width: 100px;
    font-size: 18x;
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #999;
  }

  .total {
    position: absolute;
    top: 0;
    right: 0;

    p {
      padding-top: 10px;
      float: left;
      font-weight: 700;
      line-height: 1em;
      height: 50px;
      text-align: right;
      font-size: 16px;

      strong {
        color: #e4393c;
      }

      small {
        padding-top: 2px;
        display: block;
        font-size: 10px;
        color: #999;
        font-weight: 400;
      }
    }

    .buyJs {
      float: right;
      display: block;
      width: 110px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
      background: #e4393c;
      color: #fff;
      margin-left: 10px;

      em {
        font-weight: 400;
        font-size: 12px;
        font-family: none;
      }
    }
  }
}
</style>
