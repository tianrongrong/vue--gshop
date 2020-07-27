<template>
  <div class="container">
    <input type="text" placeholder="手机号">
    <input type="text" placeholder="密码">
    <input type="button" value="登录" class="btn">
</div>
</template>

<script>
export default {

}

</script>
<style lang="less" scoped>
.container{
    margin-top: 30px;
    input{
        width: 300px;
        height: 40px;
        border: 1px solid #ccc;
        padding-left: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        border-radius: 3px;
    }
    .btn{
        background-color: #009475;
        border: none;
        color: white;
        margin-top: 20px;
    }
}
</style>