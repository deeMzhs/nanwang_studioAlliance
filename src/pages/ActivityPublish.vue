<template>
<div class="wrap">
  <van-nav-bar
    title="活动发布"
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
    label="标题"
    label-width="50px" 
    v-model="title"
    required
    clearable
    :formatter="formatter"
    maxlength="50"
    placeholder="必填(限50字)"
    input-align="right"
  />
  <van-field
    label="地址"
    label-width="50px" 
    v-model="address"
    clearable
    :formatter="formatter"
    maxlength="100"
    placeholder="选填"
    input-align="right"
  />
  <van-cell title="选择日期区间" size="small" required is-link :value="date" @click="showTime = true" />
  <van-calendar v-model="showTime" :min-date="minDate" type="range" @confirm="confirmDate" />
  <div class="activity-detail">
    <p>活动详情</p>
    <van-field
      v-model="detail"
      rows="2"
      autosize
      :formatter="formatter"
      type="textarea"
      maxlength="200"
      placeholder="点击编辑活动详情"
      show-word-limit
    />
  </div>
  <div class="upload-img">
    <p>附件</p>
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
    <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
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
  name: 'ActivityPublish',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    title: '',
    address: '',
    minDate: new Date(this.getNowFormatDate()),
    date: '',
    showTime: false,
    detail: '',
    checked: true,
    // 发布控件
    container: null,
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
    // 格式化输入框
    formatter(value) {
      // 过滤输入的空格
      return value.replace(/\s+/g, '');
    },
    // 时间确定
    confirmDate(date) {
      const [start, end] = date;
      this.showTime = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    // 格式化时间
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    // 发布
    publish() {
      console.log(this.title, this.address, this.date, this.detail);
      if (this.title.length > 0 && this.date.length > 0) {
         // 将所有 success Toast 的展示时长设置为 2000 毫秒
         Toast.setDefaultOptions('success', { duration: 1000 });
         Toast.success('发布成功');
         setTimeout(() => {
           this.$router.go(-1);
         }, 1500);
      } else {
        Toast('标题和时间必填！');
      }
    },
    // 将时间戳转换为时间：如：2019-07-04
    getNowFormatDate() {
      const date = new Date();
      const seperator1 = ',';
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      // if (month >= 1 && month <= 9) {
      //   month = '0' + month;
      // }
      // if (strDate >= 0 && strDate <= 9) {
      //   strDate = '0' + strDate;
      // }
      const currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
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
.wrap .upload-img{
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem 1rem;
}
.wrap .upload-img p{
  padding-bottom: 0.8rem;
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