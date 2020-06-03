<template>
  <div class="wrap">
    <van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#FFFFFF"/>
    </template>
     <template #title>
        <P class="h-title">收获得赞</P>
    </template>
  </van-nav-bar>
  <div class="content">
    <div class="content-first">
      <div class="left">
        <van-image
            round
            width="52px"
            height="52px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
      </div>
      <div class="center">
        <div class="font-size">张三</div>
        <div class="info">赞了你的动态<span>2019-02-23</span>
        </div>  
      </div>
      <div class="right">
         <img src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
    </div>
     <div class="content-first">
      <div class="left">
        <van-image
            round
            width="52px"
            height="52px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name:"PersonalLike",
  methods:{
    onClickLeft()
    {
       this.$router.replace('personalPage');
    }
  }
}
</script>
<style scoped>
  .wrap{
  background-color: #F8F8F8;
  height: 100vh;
  }
  .van-nav-bar{
    width:100%;
    height: 64px;
    background:rgba(30,135,240,1);}
  .van-nav-bar .van-icon{
      margin-top:18px;
  }
  .h-title{
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    margin-top:18px;
  }
  .content{
    background-color: #ffffff;
    position: relative;
    top:81px;
  }
  .content .content-first{
    height: 100%;
    padding: 8.5px 0px 8.5px 0px;
    margin: 0px 17px;
    display: flex;
    position: relative;
    justify-content: space-between;
  }
  .content .content-first::after{
    content: '';
    border-bottom: #B2B2B2 1px solid ;
    transform: scaleY(0.5);
    height:1px;
    width:100%;
    position: absolute;top:100%;left:0;
    display: block;
  }
    
  .content-first .left,.right {
    flex: 0 0 52px;
    height: 81px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

  .content-first .center {
    min-height: 81px;
    padding-left: 10px;
    flex: 1;
    height: 25x;
    line-height: 25px
  }
  .content-first .right img{
    display: block;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 4px;
  }
  .center .info{
    color:#B2B2B2;
    font-size: 12px;
  }
   .center .info *{
    color:#B2B2B2;
    font-size: 12px;
    padding-left: 5px;
  }
  .center .font-size{
    color: #262626;
    font-size:16px;
    font-weight: bold;
    padding-top: 20px;
  }
      

</style>


