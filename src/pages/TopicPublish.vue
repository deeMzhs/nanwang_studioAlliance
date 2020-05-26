<template>
<div class="wrap">
  <van-nav-bar
    title="话题发布"
    fixed
    left-arrow
    @click-left="onClickLeft">
    <!-- <template #right>
      <span class="head-right" @click="publish">发表</span>
    </template> -->
  </van-nav-bar>
  <div style="height: 55px;background: #fff"></div>
  <!-- label-width	左侧文本宽度，默认单位为px	默认90px -->
  <!-- input-align	左侧文本对齐方式，可选值为 center right 默认left -->
  <!-- maxlength	输入的最大字符数 -->
  <van-field
    label="话题名称"
    label-width="70px" 
    v-model="title"
    required
    clearable
    :formatter="formatter"
    maxlength="50"
    placeholder="必填(限50字)"
    input-align="right"
  />
  <div class="activity-detail">
    <p>话题介绍</p>
    <van-field
      v-model="detail"
      rows="6"
      autosize
      :formatter="formatter"
      type="textarea"
      maxlength="1000"
      placeholder="点击编辑话题介绍"
      show-word-limit
    />
  </div>
  <van-cell center title="分享至群">
    <template #right-icon>
      <van-switch v-model="checked" size="24" />
    </template>
  </van-cell>
  <!-- 发布按钮 -->
  <div class="publish-pop" ref="container">
    <van-sticky :container="container">
      <van-button class="plus" type="info" @click="publish">发布</van-button>
    </van-sticky>
  </div>
</div>
</template>

<script>
import { Dialog, Toast } from 'vant';
export default {
  name: 'TopicPublish',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    title: '',
    detail: '',
    checked: true,
    // 发布控件
    container: null,
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
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 格式化输入框
    formatter(value) {
      // 过滤输入的空格
      return value.replace(/\s+/g, '');
    },
    // 发布
    publish() {
      console.log(this.title, this.detail);
      if (this.title.length > 0) {
         // 将所有 success Toast 的展示时长设置为 2000 毫秒
         Toast.setDefaultOptions('success', { duration: 1000 });
         Toast.success('发布成功');
         setTimeout(() => {
           this.$router.go(-1);
         }, 1500);
      } else {
        Toast('话题名称必填！');
      }
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .activity-detail{
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem 0;
}
.wrap .activity-detail p{
  padding: 0 1rem;
  font-size: 0.9rem;
}
/* 发布按钮 */
.wrap .publish-pop{
  position: fixed;
  bottom: 3%;
  left: 30%;
  z-index: 1;
}
.wrap .publish-pop .plus{
  width: 10rem;
  background: linear-gradient(to bottom, #54b7f6, #488eee);
  border-radius: 2rem;
}
</style>