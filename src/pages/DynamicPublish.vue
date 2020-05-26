<template>
<div class="">
 <van-nav-bar
  title="动态发布"
  fixed
  left-arrow
  @click-left="onClickLeft">
    <!-- <template #right>
      <span class="head-right" @click="publish">发表</span>
    </template> -->
  </van-nav-bar>
 <div style="height: 46px"></div>
 <div class="">
  <!-- maxlength	输入的最大字符数 -->
  <van-field
    v-model="message"
    rows="2"
    autosize
    :formatter="formatter"
    type="textarea"
    maxlength="100"
    placeholder="这一刻的想法"
    show-word-limit
  />
  <div class="upload-img">
    <!-- fileList文件数组 -->
    <!-- multiple	是否开启图片多选，部分安卓机型不支持 -->
    <!-- :max-count	文件上传数量限制 -->
    <!-- :max-size	文件大小限制，单位为byte，1KB等于1024byte 1M等于1024x1024=1048576 10M等于10485760 -->
    <!-- :capture	图片选取模式，可选值为camera(直接调起摄像头) -->
    <!-- :after-read	文件读取完成后的回调函数 -->
    <!-- oversize	文件大小超过限制时触发	同after-read (尝试测试过，但未成功触发) -->
    <!-- :result-type字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。 -->
    <!-- :result-type取值有一下三种，默认为dataUrl -->
    <!-- file	结果仅包含 File 对象 -->
    <!-- text	结果包含 File 对象，以及文件的文本内容 -->
    <!-- dataUrl	结果包含 File 对象，以及文件对应的 base64 编码 -->
    <van-uploader v-model="fileList" multiple :max-count="5" :after-read="afterRead" />
  </div>
  <div class="topic-tag">
    <div v-for="(item, i) in topicTagList" :key="i" @click="selectTag(i)">
      <div class="item" :class="'color' + i%3">
        <span>#</span><span>{{item.name}}</span>
      </div>
    </div>
  </div>
 </div>
 <!-- 报名按钮 -->
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
  name: 'DynamicPublish',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    container: null,
    message: '',
    fileList: [
      // { 
      //   url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      //   status: 'uploading',
      //   message: '上传中...'
      // },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      // { url: 'https://cloud-image', isImage: true }
    ],
    topicTagList: [
      {name: '足球'},
      {name: '篮球'},
      {name: '羽毛球'},
      {name: '兵乓球'},
      {name: 'NBA'},
      {name: 'F1'},
      {name: '毽球'},
    ],
    // showLoading:true,
    // ready:false,
    // homeDesc:{},
    // homeArticle:{},
    // homeQuestion:{}
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
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 格式化输入框
    formatter(value) {
      // 过滤输入的空格
      return value.replace(/\s+/g, '');
    },
    // 文件读取完成后的回调函数
    afterRead(file) {
      // console.log(file);
      // file.status = 'uploading';
      // file.message = '上传中...';

      // setTimeout(() => {
      //   file.status = 'failed';
      //   file.message = '上传失败';
      // }, 1000);
      // console.log(this.fileList);
    },
    // 点击选择话题
    selectTag(i) {
      console.log(i);
      const self = this;
      this.topicTagList.forEach(function(element, index) {
        if (i == index) {
          self.message = self.message + ' ' + '#' + element.name + ' ';
        }
      })
    },
    // 发布
    publish() {
      console.log(this.message, this.fileList);
      // 如果输入等于空且上传图片少于一张，弹出提示
      if (this.message.length > 0 || this.fileList.length > 0) {
         // 将所有 success Toast 的展示时长设置为 2000 毫秒
         Toast.setDefaultOptions('success', { duration: 1000 });
         Toast.success('发布成功');
         setTimeout(() => {
           this.$router.go(-1);
         }, 1500);
      } else {
        Toast('不能发布空动态！');
      }
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head-right{
  color: #06BC39;
  font-size: 0.8rem;
}
.upload-img{
  padding: 0 1rem;
  background-color: #fff;
}
.topic-tag{
  /* padding: 1rem; */
  column-count: 3;
  column-gap: 1rem;
  background-color: #fff;
}
.topic-tag .item{
  /* 让item的子块元素在一列上，不至于子块元素分别渲染在分割的前后两列 */
    break-inside:avoid;
    text-align: center;
    padding: 0.5rem 0; 
}
.topic-tag .color0{
  color: #2b85db;
}
.topic-tag .color1{
  color: #fd4052;
}
.topic-tag .color2{
  color: #02bbc1;
}
.topic-tag .item span{
  padding: 0 0.2rem;
}


/* 报名按钮 */
.publish-pop{
  position: fixed;
  bottom: 3%;
  left: 30%;
  z-index: 1;
}
.publish-pop .plus{
  width: 10rem;
  background: linear-gradient(to bottom, #54b7f6, #488eee);
  border-radius: 2rem;
}
</style>