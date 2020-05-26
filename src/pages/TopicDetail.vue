<template>
<div class="wrap">
  <van-nav-bar
    title=""
    fixed
    left-arrow
    @click-left="onClickLeft">
    <!-- <template #right>
      <span class="head-right" @click="publish">发表</span>
    </template> -->
  </van-nav-bar>
  <div style="height: 46px;background: #fff"></div>
  <div class="topic-wrap">
    <div class="topic"><span class="index">#</span><span class="text">{{topicName}}</span></div>
    <div class="topic-content">{{topicContent}}</div>
  </div>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
    <div class="topic-tag">
      <van-row class="tag-list" v-for="(item, i) in topicList" :key="i">
        <van-col span="24" class="top">
          <!-- <div class="topic">{{item.time}}</div> -->
          <div class="topic"><span class="index">#</span><span class="text">{{topicName}}</span></div>
        </van-col>
        <van-col span="16" class="left">
          <!-- vant内置样式，超出用...表示：van-ellipsis -->
          <div class="van-multi-ellipsis--l2 content">{{item.name}}</div>
          <div class="time">{{item.time}}</div>
        </van-col>
        <van-col span="8" class="right">
          <img :src="item.img" alt="">
        </van-col>
        <van-col span="24" class="footer">
          <div class="left" @click="tagThumb(i, item.isThumb)">
            <van-icon v-bind:class="{thumbed: item.isThumb == 1}" name="like-o" />
            <span class="thumb-value" v-bind:class="{thumbed: item.isThumb == 1}">{{item.thumb}}</span>
            <van-icon name="chat-o" />
            <span class="comment-value">{{item.comment}}</span>
            <van-icon name="share" />
            <span>{{item.share}}</span>
          </div>
          <div class="right">
            <van-icon size="large" name="ellipsis" />
          </div>
        </van-col>
      </van-row>
    </div>
  </van-list>
</div>
</template>

<script>
import { Dialog, Toast } from 'vant';
export default {
  name: 'TopicDetail',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    // 话题列表
    topicList: [],
    // 下拉刷新更多加载中提示
    loading: false,
    // 下拉刷新更多结束
    finished: false,
  }
  },
  created () {
    this.topicName = this.$route.query.topicName;
    this.topicContent = this.$route.query.topicContent;
    this.getDatas();
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
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 话题滚动加载
    onLoad() {
      // console.log(111);
      // const obj = {topicCode: 1, name: '话题概念', love: 7, author: '王军'};
      // const arr = [
      //   {topic: '篮球', man: 4, content: '话题概念的烦恼歌日提供IEUR他儿童和儿童he认同和让他和儿童和托合提仁和堂让他忽然他和让他人the让他他而今日通过后'},
      //   {topic: '极限运动跳战',man: 4, content: '和认同和儿童和儿儿童和他童与和和认同和田玉和田玉人the认同和'},
      //   {topic: '羽毛球',man: 19, content: '话题概念的儿童呵呵烦恼歌日提供IEUR他而今日通过后'}
      // ];
      // 这是话题标签
      const arr = [
        {name: '输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, comment: 78, img: require('../assets/img/photo.jpg')},
        {name: '输电专业工作室联盟2', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, comment: 55, img: require('../assets/img/joined-studio-union.jpeg')},
        {name: '输电专业工作室联盟3', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, comment: 35, img: require('../assets/img/joined-studio-union.jpeg')},
      ];
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          // this.topicList.push(obj);
          this.topicList = this.topicList.concat(arr);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.topicList.length >= 120) {
          this.finished = true;
        }
      }, 1000);
    },
    // 这是话题标签点赞
    tagThumb(i, isThumb) {
      this.topicList.forEach(function(ele, y){
        if (i == y && isThumb == 0) {
          ele.isThumb = 1;
          ele.thumb = ele.thumb + 1;

        }else if (i == y && isThumb == 1) {
          ele.isThumb = 0;
          ele.thumb = ele.thumb - 1;
        }
      });
    },
    // 点击当前动态看详情
    // dynamicDetail(item) {
    //   console.log(9999);
    //   this.$router.push('/dynamicDetail');
    // },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 使标签<van-nav-bar>背景色显示蓝色 */
/* .van-nav-bar{
  background-color: rgb(53, 147, 240);
} */
/* 使标签<van-nav-bar>下边框消失 */
/* .van-nav-bar::after{
  border: none;
}
.van-nav-bar .van-nav-bar__left .van-nav-bar{
  color: #fff;
} */
.wrap{
  background-color: #f9f9f9;
}
.wrap .topic-wrap{
  background-color: rgb(53, 147, 240);
  padding: 1rem;
}
.wrap .topic-wrap .topic{
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  padding: 1rem 0;
}
.wrap .topic-wrap .topic .index{
  padding-right: 0.3rem;
  /* text-shadow: X-offset(X轴偏移量)    Y-offset(Y轴偏移量)    Blur(模糊半径)   Color(颜色); */
  text-shadow: 0px 6px 1px rgb(226, 236, 247);
}
.wrap .topic-wrap .topic .text{
  text-shadow: 0px 4px 1px rgb(228, 238, 250);
}
.wrap .topic-wrap .topic-content{
  color: rgb(248, 245, 245);
  line-height: 1.2rem;
}

.wrap .topic-tag .tag-list{
  padding: 0.8rem 0.8rem 0.6rem 0.8rem;
  margin-top: 0.5rem;
  background-color: #fff;
}
.wrap .topic-tag .tag-list .top .topic{
  font-size: 0.9rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
.wrap .topic-tag .tag-list .top .topic .index{
  padding-right: 0.3rem;
  /* text-shadow: X-offset(X轴偏移量)    Y-offset(Y轴偏移量)    Blur(模糊半径)   Color(颜色); */
  text-shadow: 0px 4px 1px rgb(161, 202, 250);
}
.wrap .topic-tag .tag-list .top .topic .text{
  text-shadow: 0px 4px 1px rgb(161, 202, 250);
}
.wrap .topic-tag .tag-list .left .content{
  color: #262626;
  line-height: 1.4rem;
  font-size: 0.9rem;
  padding: 0 1rem 0 0;
}
.wrap .topic-tag .tag-list .left .time{
  padding-top: 0.8rem;
}
.wrap .topic-tag .tag-list .right{
  position: relative;
  text-align: center;
}
.wrap .topic-tag .tag-list .right img{
  width: 100%;
  height: 4.5rem;
}
.wrap .topic-tag .tag-list .footer{
  padding: 0.6rem 0 0 0;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  color: #B2B2B2;
}
.wrap .topic-tag .tag-list .footer .left .thumb-value{
  padding-right: 1rem;
}
.wrap .topic-tag .tag-list .footer .left .comment-value{
  padding-right: 1rem;
}
.wrap .topic-tag .tag-list .footer .left .thumbed{
  color: #f15f6d;
}
</style>