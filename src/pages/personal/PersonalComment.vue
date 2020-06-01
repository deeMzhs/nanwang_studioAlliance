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
        <P class="h-title">评论</P>
    </template>
  </van-nav-bar>
  <div class="content">
    <div class="content-first" v-for="(item,i) in CommentInfo" :key="index">
      <div class="left">
        <van-image
            round
            width="52px"
            height="52px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
      </div>
      <div class="center">
        <div class="font-size">{{item.name}}</div>
        <div class="info">转发你的动态<span>2019-02-23</span></div>
        <p class="comment">{{item.comment}}</p>
        <div v-show="item.userComment != 0" class="user-comment">{{item.userComment}}</div>
        <van-button type="default">回复按钮</van-button>
      </div>
      <div class="right">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name:"PersonalLike",
  data(){
    return{
      CommentInfo:[
        {name:'张三',comment:"我很喜欢很喜欢很喜欢你的的的的的的的的恶的评论",userComment:''},
        {name:'李四',comment:"我很喜欢很喜欢很喜欢你的评论",userComment:"这是你的回复"},
      ]
    }
  },
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
  /* .content-first .right .van-image img{
    border-radius:10px;
  } */
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
  .center .comment{
    color: #262626;
    font-size:14px;
  }
  .center .user-comment{
  width:221px;
  height:29px;
  background:rgba(248,248,248,1);
  border-radius:4px;
  font-size: 12px;
  color: #8C8C8C
  }    

</style>