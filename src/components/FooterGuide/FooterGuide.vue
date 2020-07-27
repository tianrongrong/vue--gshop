<template>
  <div class="footer-guide top-border-1px">
      <router-link class="guide-item" to="/home" :class="{active : '/home' === $route.path}">
          <span class="guide-icon"><i class="iconfont icon-daohangshouye"></i></span>
          <span>首页</span>
      </router-link>
       <router-link class="guide-item" to="/search" :class="{active : '/search' === $route.path}">
          <span class="guide-icon"><i class="iconfont icon-search"></i></span>
          <span>搜索</span>
      </router-link>
       <router-link class="guide-item" to="order" :class="{active : '/order' === $route.path}">
          <span class="guide-icon"><i class="iconfont icon-74wodedingdan"></i></span>
          <span>订单</span>
      </router-link>
       <router-link class="guide-item" to="personal" :class="{active : '/personal' === $route.path}">
          <span class="guide-icon"><i class="iconfont icon-wode"></i></span>
          <span>我的</span>
      </router-link>
  </div>
</template>

<script type='es6'>
export default{

}

</script>

<style lang="less" scoped>
@import '../../common/less/style.less';
.footer-guide{
    .top-border-1px(@color: #ddd);
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    .guide-item{
        &.active{
            color: @green;
        }
        .guide-icon{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6px;
        margin-bottom: 3px;
        i{
            font-size: 22px;
        }
    }
    }
}
</style>
