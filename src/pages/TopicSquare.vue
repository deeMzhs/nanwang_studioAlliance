<template>
<div class="wrap">
  <van-nav-bar
    title="话题广场"
    fixed
    left-arrow
    @click-left="onClickLeft">
    <!-- <template #right>
      <span class="head-right" @click="publish">发表</span>
    </template> -->
  </van-nav-bar>
  <div style="height: 46px;background: #fff"></div>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
    <div class="item" v-for="(item, i) in topicList" :key="i" @click="dynamicDetail(item)">
      <div class="one">
        <span class="index">#</span><span class="text">{{item.topic}}</span>
      </div>
      <div class="two van-multi-ellipsis--l2">{{item.content}}</div>
      <div class="three">{{item.man}}人已参与</div>
    </div>
  </van-list>
</div>
</template>

<script>
import { Dialog, Toast } from 'vant';
export default {
  name: 'TopicSquare',
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
      const arr = [
        {topic: '篮球', man: 4, content: '话题概念的烦恼歌日提供IEUR他儿童和儿童he认同和让他和儿童和托合提仁和堂让他忽然他和让他人the让他他而今日通过后'},
        {topic: '极限运动跳战',man: 4, content: '和认同和儿童和儿儿童和他童与和和认同和田玉和田玉人the认同和'},
        {topic: '羽毛球',man: 19, content: '话题概念的儿童呵呵烦恼歌日提供IEUR他而今日通过后'}
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
    // 点击当前话题看详情
    dynamicDetail(item) {
      this.$router.push(
        {
          path: '/topicDetail',
          query: {
            topicName: item.topic,
            topicContent: item.content
          }
        }
      )
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .item{
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem;
}
.wrap .item .one{
  font-size: 0.9rem;
  font-weight: bold;
  
}
.wrap .item .one .index{
  padding-right: 0.3rem;
  color: #1E87F0;
  /* text-shadow: X-offset(X轴偏移量)    Y-offset(Y轴偏移量)    Blur(模糊半径)   Color(颜色); */
  text-shadow: 0px 4px 1px rgb(161, 202, 250);
}
.wrap .item .one .text{
 text-shadow: 0px 4px 1px rgb(161, 202, 250);
}
.wrap .item .two{
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0.5rem 0.5rem;
}
.wrap .item .three{
  margin-left: 0.5rem;
  color: #8C8C8C;
}
</style>