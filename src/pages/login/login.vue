<template>
  <div class="login-container">
    <a @click='$router.back()' class="goback iconfont icon-zuojiantou"></a>
    <div class="content">
        <h1>硅谷外卖</h1>
        <div class='login'>
            <span @click="go('/login/sms')" :class="{active: $route.path === '/login/sms'}">短信登陆</span>
            <span @click="go('/login/user')" :class="{active: $route.path === '/login/user'}">密码登录</span>
        </div>
             
        <router-view></router-view>
        
    </div>
</div>
</template>

<script>
export default {
    created(){
        this.go('/login/sms')
    },
    methods: {
        go(path){
            this.$router.replace(path)
        }
    }
}

</script>
<style lang="less" scoped>
@import '../../common/less/style.less';
.login-container{
    width: 100%;
    background-color: #fff;
    height: 100%;
    .goback{
        line-height: 50px;
        padding-left: 10px;
    }
    .content{
        width: 100%;
        text-align: center;
        h1{ 
            font-size: 35px;
            font-weight: 900;
            color: @green;
            margin-top: 40px;    
        }
        .login{
            margin-top: 50px;
            span{
                font-size: 16px;
                font-weight: 900;
                margin: 5px;
                padding: 5px 0;
                &.active{
                    color: @green;
                    border-bottom: 2px solid @green;
                }
            }
            
        }
        .login-method{
            width: 100%;
            height: 200px;

        }
    }
}

</style>