<template>
<section class="home">
<!-- 头部导航区域 -->
  <HeaderTop title='北京市昌平区北七家镇东三旗村'>
    <span class="header_search" slot="left">
        <i class="iconfont icon-search"></i>
    </span>
    <span class="header_login" slot="right">
       登录|注册
    </span>
  </HeaderTop>
<!-- 导航区域 -->
  <div class="swiper-container bottom-border-1px(@color)">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a> 
                <a href="#">
                    <img src="src/images/meishi.png" alt="">
                    <span>美食</span>
                </a>
                <a href="#">
                    <img src="src/images/jiancan.png" alt="">
                    <span>简餐</span>
                </a>
                <a href="#">
                    <img src="src/images/cart.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/meishi.png" alt="">
                    <span>甜品饮食</span>
                </a> 
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/jiancan.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/meishi.png" alt="">
                    <span>甜品饮食</span>
                </a>       
          </div>
          <div class="swiper-slide">
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                <span>甜品饮食</span>
                </a> 
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a> 
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>
                <a href="#">
                    <img src="src/images/tianpin.png" alt="">
                    <span>甜品饮食</span>
                </a>       
          </div>
      </div>
       <div class="swiper-pagination" slot="pagination">
       </div>
  </div>
  <!-- 附近商家 -->
  <div class="home_shop_list">
          <div class="shop_top">附近商家</div>
          <div class="shop_bottom">
            <div class="shop_bottom_left">
                <img src="src/images/1.jpg" alt="">
                <div>
                    <h3>嘉禾一品（温都水城）</h3>
                    <span>4.7分</span>
                    <span>月售105单</span>
                    <p>20起送/配送费约￥5</p>
                </div>
                
            </div>
            <div class="shop_bottom_right">
                <span>报</span>
                <span>准</span>
                <span>票</span>
                <div>美团专送</div>
            </div>
          </div>
          <div class="shop_bottom">
            <div class="shop_bottom_left">
                <img src="src/images/1.jpg" alt="">
                <div>
                    <h3>嘉禾一品（温都水城）</h3>
                    <span>4.7分</span>
                    <span>月售105单</span>
                    <p>20起送/配送费约￥5</p>
                </div>
                
            </div>
            <div class="shop_bottom_right">
                <span>报</span>
                <span>准</span>
                <span>票</span>
                <div>美团专送</div>
            </div>
          </div>
          <div class="shop_bottom">
            <div class="shop_bottom_left">
                <img src="src/images/1.jpg" alt="">
                <div>
                    <h3>嘉禾一品（温都水城）</h3>
                    <span>4.7分</span>
                    <span>月售105单</span>
                    <p>20起送/配送费约￥5</p>
                </div>
                
            </div>
            <div class="shop_bottom_right">
                <span>报</span>
                <span>准</span>
                <span>票</span>
                <div>美团专送</div>
            </div>
          </div>
          
  </div>
</section>
  
  
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', { 
            loop: true,
            pagination:'.swiper-pagination',
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
        });
    },
    components: {
        HeaderTop
    }
}

</script>
<style lang="less" scoped>
@import '../../common/less/style.less';
.home{
    .swiper-container{
        .bottom-border-1px(@color: #ddd);
        width: 100%;
        height: 200px;
        background-color: #fff;
        position: relative;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            .swiper-slide{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                a{
                    display: block;
                    width: 25%;
                    height: 50%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    img{
                    width: 55px;
                    margin: 0 auto;
                    margin-top: -10px;
                    display: block;
                    }
                    span{
                        font-size: 14px;
                        margin-top: -30px;
                    }
                }
                
            }
        }
    }
    .home_shop_list{
        padding: 10px;
        .shop_bottom{
            margin-top: 15px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            .shop_bottom_left{
                display: flex;
                justify-items: left;
                img{
                    width: 80px;
                    height: 80px;
                }
                h3,p,span{
                    margin-left: 10px;
                }
                h3{
                    font-size: 16px;
                    margin-bottom: 10px;
                    margin-top: 5px;
                }
                span{
                    font-size: 14px;
                    display: inline-block;
                    color: tomato;
                }
                p{
                    font-size: 14px;
                    margin-top: 15px;
                }
            }
            .shop_bottom_right{
                span{
                    margin-top: 10px;
                    width: 20px;
                    height: 20px;
                    background-color: #eee;
                    border-radius: 2px;
                    display: inline-block;
                    font-size: 12px;
                    text-align: center;
                    line-height: 20px;
                }
                div{
                    width: 60px;
                    height: 20px;
                    background-color: lightblue;
                    font-size: 12px;
                    border-radius: 10px;
                    text-align: center;
                    line-height: 20px;
                    margin:0 auto;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>