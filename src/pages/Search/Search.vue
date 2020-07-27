<template>
<div class='container'>
  <HeaderTop title="搜索">
  </HeaderTop>
  <form action="">
    <input type="text" placeholder="请输入搜索内容">
    <input type="button" value="搜索" class="btn">
  </form>
</div>
  
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
components: {
    HeaderTop
}
}

</script>
<style lang="less" scoped>
.container{
  text-align: center;
  form{
    margin-top: 20px;
  }
  input{
    width: 280px;
    height: 40px;
    padding-left: 5px;
    color: #999;
    position: relative;
    outline: none;
  }
  .btn{
    width: 60px;
    height: 40px;
    background-color: #009475;
    color: white;
    margin-left: -5px;
  }
}
</style>