<template>
<div class="wrap">
 <van-nav-bar
  title="动态详情"
  fixed
  left-arrow
  @click-left="onClickLeft">
    <template #right>
      <!-- <span class="head-right" @click="publish">发表</span> -->
      <van-icon name="share" color="" @click="isShowShare = true" />
    </template>
 </van-nav-bar>
 <div style="height: 46px"></div>
 <div class="img">
   <van-image
      contain	
      height="15rem"
      :src=data.img
    />
 </div>
 <div class="content">
   <div class="topic">
     <span class="index">#</span>
     <span>{{data.topic}}</span>
   </div>
   <p>的反反复复付付付付付付付付付付付付滚滚滚滚滚滚过过过过过过过过过</p>
   <div class="foot">
     <div class="left">
       <span>{{data.author}}</span>
       <span class="time">{{data.time}}发布</span>
     </div>
     <div class="right">
       <van-icon name="like-o" color="#4A93EF" />
       <span>{{data.thumb}}</span>
     </div>
   </div>
 </div>
 <div class="comment">
    <div class="title">
      <span>全部评论</span>
      <span class="num">{{data.comment.total}}</span>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
      <van-row class="comment-list" v-for="(item, i) in commentList" :key="i">
        <van-col span="4" class="img">
          <img :src="item.img" alt="">
        </van-col>
        <van-col span="20" class="main">
          <div class="first">
            <div>{{item.author}}</div>
            <div><van-icon name="ellipsis" /></div>
          </div>
          <div class="second">
            <!-- vant内置样式，超出用...表示：van-ellipsis -->
            <div class="van-multi-ellipsis--l3">{{item.comment}}</div>
          </div>
          <div class="third">
            <div class="left">
              <span class="time">{{data.time}}</span>
            </div>
            <div class="right">
              <van-icon name="chat-o" />
              <span>{{data.thumb}}</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-list>
 </div>
 <van-share-sheet
  v-model="isShowShare"
  title="分享"
  :options="shareOptions"
  @select="shareComfirm"
 />
</div>
</template>

<script>
import { Dialog, Toast } from 'vant';
export default {
  name: 'DynamicDetail',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    msg: 'Welcome to one demo1',
    container: null,
    data: {
      img: require('../assets/img/photo.png'), topic: '篮球赛活动', time: '2020/03/04',
      author: '王军', thumb: 30, comment: {total: 100, commentList: []}
    },
    // 评论列表
    commentList: [],
    // 下拉刷新更多加载中提示
    loading: false,
    // 下拉刷新更多结束
    finished: false,
    // 分享显示
    isShowShare: false,
    // 分享选项
    shareOptions: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ]
  }
  },
  created () {
    this.getDatas();
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods:{
    getDatas () {
      // this.$http.get("/homeData").then(response => {
      //   this.homeDesc = response.body.homeDesc;
      //   this.homeArticle = response.body.homeArticle;
      //   this.homeQuestion = response.body.homeQuestion;
      //   this.showLoading = false;
      //   this.ready = true;
      // },error => {
      //   console.log(error);
      // });
    },
    articlesToDetail (id,$event) {
        console.log($event.target.className)
        if($event.target.className != "down"){
          this.$router.push("/pictureDetail?id="+id)
        }
    },
    articlesToRead (id) {
        this.$router.push("/readDetials?id="+id)
    },
    articlesToQuestion (id) {
        this.$router.push("/questionDetail?id="+id)
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    signUp() {

    },
    // 话题滚动加载
    onLoad() {
      // console.log(111);
      // const obj = {topicCode: 1, name: '话题概念', love: 7, author: '王军'};
      const arr = [
        {commentCode: 1, img: require('../assets/img/join-portrait.jpg'), love: 4, author: '王军', comment: '李四的评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论'},
        {commentCode: 2, img: require('../assets/img/join-portrait.jpg'), love: 4, author: '王军', comment: '李四的评论评论评论评论评论评论评论评论', love: 4, author: '王军'},
        {commentCode: 3, img: require('../assets/img/join-portrait.jpg'), love: 4, author: '王军', comment: '李四的评论评论评论评论评论评论评论评论', love: 19, author: '王军方'}
      ];
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // this.commentList.push(obj);
          this.commentList = this.commentList.concat(arr);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.commentList.length >= 120) {
          this.finished = true;
        }
      }, 1000);
    },
    // 确定分享
    shareComfirm(option) {
      Toast(option.name);
      this.isShowShare = false;
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .head-right{
  color: #06BC39;
  font-size: 0.8rem;
}
.wrap .content{
  background-color: #fff;
  padding: 0.8rem;
}
.wrap .content .topic{
  color: #262626;
  /* background:rgba(30,135,240,1); */
  /* opacity:0.1; */
  font-size: 0.9rem;
  font-weight: bold;
  padding-bottom: 0.8rem;
}
.wrap .content .topic .index{
  color: #1E87F0;
}
.wrap .content p{
  color: #262626;
  padding-bottom: 0.8rem;
}
.wrap .content .foot{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  color: #8C8C8C;
}
.wrap .content .foot .left .time{
  padding: 0 0.3rem;
}

.wrap .comment{
  background-color: #fff;
  padding: 0.8rem;
  margin-top: 0.6rem;
  font-size: 0.9rem;
}
.wrap .comment .title{
  font-weight: bold;
}
.wrap .comment .title .num{
  padding-left: 0.1rem;
}
.wrap .comment .comment-list{
  padding: 1rem 0 0.5rem 0;
}
.wrap .comment .comment-list .img img{
  width: 8rem;
  border-radius: 8rem;
}
.wrap .comment .comment-list .main{
  padding-left: 1rem;
}
.wrap .comment .comment-list .main .first{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.wrap .comment .comment-list .main .second{
  padding: 0.4rem 0 0.5rem 0;
}
.wrap .comment .comment-list .main .third{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #E5E5E5;
}
</style>