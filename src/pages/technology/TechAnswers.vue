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
        <P class="h-title">获得的回答</P>
      </template>
    </van-nav-bar>
    <!-- 主要内容 -->
    <div class="content">
      <div class="content_item bg_withe"v-for="(item,index) in Info" :key="index">
        <div class="content_head">
          <van-image
            round
            width="1.25rem"
            height="1.25rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="center">{{item.name+'回答了你的问题'}}</div>
          <div class="right">{{item.time}}</div>
        </div>
        <div class="content_title">
          <p>{{item.title}}</p>
        </div>
        <div class="content_main">
          <p class="left">{{item.content}}</p>
          <div class="right">
            <img :src="item.imgurl"/>
          </div>
        </div>
        <!-- 底部标签 -->
        <div class="content_footer">  
          <div class="icon_left">
            <span class="icon_item" ><van-icon name="chat-o" size="12"/><span>3</span></span>
            <span class="icon_item"><van-icon name="label-o" size="12"/><span>3</span></span>
          </div>
          <div class="icon_right">
            <!-- <van-icon name="label-o" size="12"/></span>> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'TechAnswers',
   data(){
     return{
       Info:[
      {name:'老王',time:'2019-02-03',title:'这是标题这是标题这是标题这是标是标题这是标题标题这是标',content:`这是内容这是内容这是内容这是内容这是内容这是内容这是内容
       这是内容这是内容这是内容这是内容这是内容`,imgurl: require("@/assets/img/mypage.png"),
       },
       {name:'Deca Joins',time:'2019-02-03',title:'这是标题这是标题',content:`这是内容这是内容这是内容这是内容这是内容这是内容这是内容
       这是内容这是内容这是内容这是内容这是内容`,imgurl: require("@/assets/img/photo.png"),
       },]
     }
   },
   methods:{
     onClickLeft(){
        this.$router.replace('technologyHome');
     }
   }
}
</script>

<style scoped>
.wrap{
  background-color:#F8F8F8 ;
  height: 100vh;
}
.bg_withe{
  background-color: #ffffff
}
.content{
  position: relative;
  top: 3.5rem;
}
.content_item{
  padding: 0 1rem;
}
.content_head{
  padding-top: .65rem;
  display: flex;
  align-items: center;
  padding-bottom: .5rem;
  border-bottom: 0.01rem solid #E5E5E5;
  flex-wrap: nowrap;
  color:#8C8C8C;
  font-size: .75rem;
  line-height: 1.56rem;
}
.content_head .van-image{
  flex: 0 0 1.25rem
}
.content_head .center{
  flex: 1;
  padding-left:.6rem;
}
.content_head .right{
  flex :0 0 4.5rem;
}
.content_title{
  margin-top:.8rem;
  font-size: 1rem;
  color: #262626;
}
.content_title p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.content_main{
  margin-top:1rem;
  color: #595959;
  display: flex;
}
.content_main .left{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: .875rem;
  flex: 1;
}
.content_main .right{
  justify-content: center;
  align-items: center;
  flex: 0 0 6.4rem;
  margin-left: .75rem;
}
.content_main .right img{
  height: 3.9rem;
  width: 6.3rem;
  border-radius: 4px;
}
 .content_footer{
  display: flex;
  margin-bottom: .7rem;
  padding-bottom: .7rem;
}
.content_footer .icon_left,.icon_right{
  flex: 1;
}
.content_footer .icon_left .icon_item{
  width: 33%;
  line-height: 1rem;
  display: flex;
  align-items: center
}
.icon_left{
  display: flex;
  justify-content: flex-start
}
.content_footer .icon_left .icon_item span{
   padding-left: .3rem;
}
</style>