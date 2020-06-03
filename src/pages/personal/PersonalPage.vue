<template>
  <div class="wrap">
    <!-- 首页信息展示 -->
    <div class="head-info">
      <div class="background">
        <div class="pre-info">
          <van-image round width="52px"height="52px"src="https://img.yzcdn.cn/vant/cat.jpeg" class="per-img"/>
          <p>{{name}}</p>
          <van-row class="info">
            <van-col span="8" @click="tolike"><p>123</p><p>获赞</p></van-col>
            <van-col span="8" @click="toComment"><p>23</p><p>评论</p></van-col>
            <van-col span="8" @click="toForward"><p>45</p><p>转发</p></van-col>
        </van-row>
        </div>
        <van-icon name="arrow-left" color="#ffffff" size="24px" @click="toHome"/>
      </div>
    </div>
    <div class="content">
      <!-- tab组件控制住跳转 -->
      <van-tabs title-active-color="#1E87F0" color="#1E87F0" line-width="50vw">
        <van-tab title="我的发布 (100)">
          <van-row class="publish-list" v-for="(item, i) in publishList" :key="i">
            <van-col span="24" v-if="i === 0">
              <div class="tag">
                <span>#</span>
                <h1>这里是标签</h1>
              </div>
            </van-col>
            <van-col span="16" class="main">
              <div class="van-multi-ellipsis--l2 title">{{item.content}}</div>
              <div class="time">2009-02-02</div>
            </van-col>
            <van-col span="8" class ="img">
              <img :src="item.img" alt=""/>
            </van-col>
            <van-col span="24" class="ex-msg" v-if="item.active == 1">
              <div class="join-pic">
                <div v-for="(item,i) in publishList"><img :src="item.img" alt=""></div>
              </div>
              <div class="right">50人已经报名</div>
            </van-col>
            <van-col span="24" class="footer">
              <span class="icon-left" ><van-icon name="like-o" size="12"/><span>3</span></span>
              <span class="icon-left"><van-icon name="like-o" size="12"/><span>3</span></span>
              <span class="icon-left"><van-icon name="like-o" size="12"/><span>3</span></span>
              <span class="icon-right"><van-icon name="weapp-nav" size="12" color="#262626"/></span>
            </van-col>
          </van-row>
            <div class="main">
              <div>
            </div>
            <div></div>
            <div class="footer"></div>
          </div>
        </van-tab>
        <van-tab title="我喜欢的 (50)">我喜欢的</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
    name:"PersonalPage",
    data () {
    return {
      name : "张三",
      publishList: [
          {name: '' , content: "内容内容内容内容我爱台我爱你我恨你我拿你我亲你" ,img: require('../../assets/img/photo.png') ,active:'0'},
          {name: '' , content: "内容内容内容内容我爱台妹" ,img: require('../../assets/img/photo.png'),active:'1'},
          {name: '' , content: "内容内容内容内容我爱台妹" ,img: require('../../assets/img/photo.png'),active:'1'}
      ],
      personImg:[

      ],
      activity:true
    }
    },
  methods:{
    // 信息栏跳转
    tolike(){
      this.$router.replace('/personalLike')
    },
    toForward(){
      this.$router.replace('/personalForward')
    },
    toComment(){
      this.$router.replace('/personalComment')
    },
    toHome(){
      this.$router.replace('/studioUnionHome')
    }
  }
}
</script>

<style scoped>
.wrap{
  background-color: #F8F8F8;
  height: 100%;
}
.head-info {
  height: 25vh;
  display: flex;
  flex: 1;
}
.head-info .background{
  background-image: url('../../assets/img/per-bg.png');
  height: 25vh;
  width: 100%;
  background-repeat: no-repeat;
  display: flex;
  background-size: 100% 100%;
  -moz-background-size:100% 100%;
  position: relative;
}
.head-info .background .pre-info{
  color: #ffffff;
  font-weight: 550;
  font-size: 1.3em;
  margin: auto;
  /* margin-top: 2.7em; */
  position: absolute;
  bottom: -5%;
  left: 4.5%;
  text-align: center;
}
.head-info .background .pre-info .info{
  position: relative;
  top:4px;
  background-color: #ffffff;
  width: 92vw;
  font-size: 19px;
  color: #000;
  font-weight: bold;
  box-shadow:0px 5px 10px 0px rgba(30,135,240,0.23);
  border-radius:4px;
}
.head-info .background .pre-info .info p:nth-child(2){
  font-size: 13px;
  font-weight: 300;
}
.head-info .background .pre-info .info .van-col{
  padding: 10px;
}
.head-info .background .van-icon{
  position: absolute;
  top: 32.5px;
  left: 12px;
}
.content{
  margin-top: 2.7em;
}
.publish-list{
  background-color: #ffffff;
  margin-bottom: 10px;
}
.publish-list .van-col{
  padding: 6px 12.5px 0px 12.5px;
}
.publish-list .van-col div{
 margin-bottom: 5px
}
.publish-list .van-col .title{
 font-size: 16px;
 height: 40px;
 line-height: 18px;
}
.publish-list .van-col .time{
  color: #B2B2B2
}
.publish-list .van-col .img{
  padding-bottom: 62px;
  width: 48%;
  position: relative;
}
.publish-list .van-col .img img{
  width: 100%;
}
.publish-list .per-img img{
  width:40px;
  height:40px;
  border-radius:50%;
}
/* 投票一行样式 */
.publish-list .ex-msg{
  display: flex;
  height: 30px;
  width: 92%;
  margin:auto;
  align-items: center;
}
.publish-list .ex-msg .join-pic{
  flex: 0 0 50%;
  height: 30px;
  display: flex;
  align-items: center;
}
.publish-list .ex-msg .join-pic div{
  width: 20px;
  height: 20px;
  margin-left: -6px
}
.publish-list .ex-msg .join-pic div:first-child{
  margin-left:0;
}
.publish-list .ex-msg .join-pic div img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.publish-list .ex-msg .right{
  flex: 1
}
.content .tag{
  height: 17px;
  width: 146px;
  background-color: #E8F3FD;
  position: relative;
  margin-left: -20px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.tag span{
  left: 25px;
  font-size: 1.3em;
  font-weight:bold;
  bottom: 6.5px;
  position: absolute;
  color: #1E87F0;
}
.tag h1{
  font-weight: bold;
  font-size: 1.3em;
  position: absolute;
  bottom: 6.5px;
  left: 40px;
}
.content .footer{
  display: flex;
  margin-bottom: 15px;
}
.content .footer .icon-left{
  flex:1;
  height: 12px;
  line-height: 12px;
  margin-bottom: 4px;
  color: #B2B2B2;
}
.content .footer .icon-right{
  flex:3;
  height: 12px;
  line-height: 12px;
  color: #B2B2B2;
  margin-bottom: 4px;
}
.content .footer .icon-right .van-icon{
  float: right;
}

.content .footer .icon-left span{
   
   vertical-align: middle;
   display: inline-block;
   padding-left: 3px;
   margin-bottom: 6px;
   
}


</style>
