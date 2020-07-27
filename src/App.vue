<template>
  <div class="container">
    <router-view></router-view>
    <!-- nav-bar区域 -->
   
    <FootGuide v-show='$route.meta.showFooter'></FootGuide>
  </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FooterGuide.vue'
export default({
  components: {
    FootGuide
  }
})
</script>

<style lang="less" scoped>
.container{
  background-color: #eee;
  width: 100%;
  height: 100%;
}
</style>