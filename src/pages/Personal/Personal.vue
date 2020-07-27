<template>
<div class="per-container">
  <HeaderTop title="个人中心"></HeaderTop>
  <router-link to="/login" class="per-login">
      <div class="left">
          <div class="photo iconfont icon-touxiang">
          </div>
          <div class="left-login">
              <h3>登录/注册</h3>
              <p><i class="iconfont icon-phone"></i>暂无绑定手机号</p>
          </div>
      </div>
      <span class="rightArrow iconfont icon-iconfontjiantou5"></span>
  </router-link>
  <div class="per-money">
      <div class="my-overMoney right-border-1px(@color)">
          <h3><span>0.00</span>元</h3>
          <p>我的余额</p>
      </div>
      <div class="my-discount right-border-1px(@color)">
          <h3><span>0</span>元</h3>
          <p>我的优惠</p>
      </div>
      <div class="my-integral">
          <h3><span>0</span>元</h3>
          <p>我的积分</p>
      </div>
  </div>
  <ul class="per-list">
      <li class="bottom-border-1px(@color)">我的订单<i class="iconfont icon-iconfontjiantou5"></i></li>
      <li class="bottom-border-1px(@color)">积分商城<i class="iconfont icon-iconfontjiantou5"></i></li>
      <li class="bottom-border-1px(@color)">硅谷外卖会员卡<i class="iconfont icon-iconfontjiantou5"></i></li>
      <li class="bottom-border-1px(@color)" style="margin-top: 10px">服务中心<i class="iconfont icon-iconfontjiantou5"></i></li>
      
  </ul>
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
<style lang="less" scoped>
@import '../../common/less/style.less';
.per-login{
    display: block;
    width: 100%;
    height: 80px;
    background-color: #009475;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .photo{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 50px;
        }
        .left-login{
            padding-left: 10px;
            h3{
                font-size: 16px;
                line-height: 24px;
            }
            p{
                line-height: 24px;
                padding-left: 13px;
                font-size: 14px;
                position: relative;
                i{
                    font-size: 20px;
                    position: absolute;
                    top: 0;
                    left: -5px;
                }
            }
        }
    }
    .rightArrow{
        font-size: 20px;
    }
}
.per-money{
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    .my-overMoney,.my-discount,.my-integral{
        width: 33%;
        height: 100%;
        text-align: center;
        h3{
            font-size: 14px;
            margin-top: 6px;
            span{
                color: orange;
                font-size: 26px;
                font-weight: 900;
            }
        }
        p{
            font-size: 14px;
            line-height: 24px;
        }
    }
    .my-discount,.my-overMoney{
        .right-border-1px(@color: #ccc)
    }
    .my-discount{
        h3{
            span{
                color: orangered;
            }
        }
    }
    .my-integral{
        h3{
            span{
                color: green;
            }
        }
    }
}
.per-list{
    width: 100%;
    margin-top: 10px;
    li{
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        background-color: #fff;
        .bottom-border-1px(@color: #ccc);
        line-height: 50px;
        position: relative;
        i{
            position: absolute;
            right: 15px;
            color: #ccc;
        }
    }
}
</style>