<template>
  <div class="header">
    <slot name="left"></slot>
    <span class="header_title ellipsis">
      <span class="header_title_text">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}

</script>
<style lang='scss' scoped>
.header{
    width: 100%;
    height: 50px;
    background-color: #009475;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header_search{
        .icon-search{
            &:before{
                font-size: 20px;
            }
        }
    }
    .header_title{
        width: 160px;
        text-align: center;
    }
}
</style>