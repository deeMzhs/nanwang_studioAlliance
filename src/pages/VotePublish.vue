<template>
<div class="wrap">
  <van-nav-bar
    title="投票发布"
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
    label="投票名称"
    label-width="70px" 
    v-model="title"
    required
    clearable
    :formatter="formatter"
    maxlength="50"
    placeholder="必填(限50字)"
    input-align="right"
  />
  <van-cell title="选择日期区间" size="small" required is-link :value="date" @click="showTime = true" />
  <van-calendar v-model="showTime" :min-date="minDate" type="range" @confirm="confirmDate" />
  <!-- 投票类型 -->
  <van-field
    readonly
    clickable
    name="picker"
    :value="voteTypeValue"
    label="投票类型"
    required
    placeholder="点击选择投票类型"
    @click="voteTypePicker = true"
  />
  <van-popup v-model="voteTypePicker" position="bottom">
    <van-picker
      show-toolbar
      :columns="voteTypeColumns"
      @confirm="voteTypeConfirm"
      @cancel="voteTypePicker = false"
    />
  </van-popup>
  <!-- 投票设置 -->
  <van-field
    readonly
    clickable
    name="picker"
    :value="voteSetValue"
    label="投票设置"
    required
    placeholder="点击选择投票设置"
    @click="voteSetPicker = true"
  />
  <van-popup v-model="voteSetPicker" position="bottom">
    <van-picker
      show-toolbar
      :columns="voteSetColumns"
      @confirm="voteSetConfirm"
      @cancel="voteSetPicker = false"
    />
  </van-popup>
  <div class="upload-img">
    <p>投票选项</p>
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
    <!-- <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" /> -->
    <!-- 图文投票类型 -->
    <div v-if="voteTypeValue == '图文'">
      <van-row class="photo-word-option" v-for="(item, i) in photoWordList" :key="i">
        <van-col span="16" class="left">
          <van-field
            type="textarea"
            v-model="item.word"
            :formatter="formatter"
            placeholder="选项"
            input-align="left"
          />
        </van-col>
        <van-col span="6" class="middle">
          <van-uploader v-model="item.fileList" multiple :max-count="1" :after-read="afterRead" />
        </van-col>
        <van-col span="2" class="right" @click="photoWordDelete(item, i)">
          <van-icon name="cross" />
        </van-col>
      </van-row>
      <div class="photo-word-add" @click="photoWordAdd">添加选项</div>
    </div>
    <!-- 文字投票类型 -->
    <div v-else>
      <van-row class="word-option" v-for="(item, i) in wordList" :key="i">
        <van-col span="22" class="left">
          <van-field
            v-model="item.word"
            :formatter="formatter"
            placeholder="选项"
            input-align="left"
          />
        </van-col>
        <van-col span="2" class="right" @click="wordDelete(item, i)">
          <van-icon name="cross" />
        </van-col>
      </van-row>
      <div class="word-add" @click="wordAdd">添加选项</div>
    </div>
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
  name: 'VotePublish',
  components:{
    Dialog, Toast
  },
  data () {
  return {
    msg: 'Welcome to one demo1',
    title: '',
    // 投票类型，默认选中图文
    voteTypeValue: '图文',
    voteTypeColumns: ['图文', '文字'],
    voteTypePicker: false,
    voteSetValue: '',
    voteSetColumns: ['单选', '多选'],
    voteSetPicker: false,
    minDate: new Date(this.getNowFormatDate()),
    date: '',
    showTime: false,
    checked: true,
    // 发布控件
    container: null,
    // fileList: [
      // { 
      //   url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      //   status: 'uploading',
      //   message: '上传中...'
      // },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      // { url: 'https://cloud-image', isImage: true }
    // ],
    // 文字选项
    wordList: [{word: ''}],
    // 图文选项
    photoWordList: [{word: '', fileList: []}]
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
    // 投票类型确定
    voteTypeConfirm(value) {
      this.voteTypeValue = value;
      this.voteTypePicker = false;
    },
    // 添加文字选项
    wordAdd() {
      const obj = {word: ''};
      this.wordList.push(obj);
      // console.log(this.wordList);
    },
    // 删除文字选项
    wordDelete(item, i) {
      // .splice()方法用于添加或删除数组中的元素，这种方法会改变原始数组
      this.wordList.splice(i,1);
      // console.log(this.wordList);
    },
    // 添加图文选项
    photoWordAdd() {
      const obj = {word: '', fileList: []};
      this.photoWordList.push(obj);
      console.log(this.photoWordList);
    },
    // 删除图文选项
    photoWordDelete(item, i) {
      // .splice()方法用于添加或删除数组中的元素，这种方法会改变原始数组
      this.photoWordList.splice(i,1);
      console.log(this.photoWordList);
    },
    // 投票设置确定
    voteSetConfirm(value) {
      this.voteSetValue = value;
      this.voteSetPicker = false;
    },
    // 发布
    publish() {
      console.log(this.title, this.date, this.voteSetValue);
      if (this.title.length > 0 && this.date.length > 0 && this.voteSetValue.length > 0) {
        if (this.voteTypeValue == '图文' && this.photoWordList[0].word.length > 0 && this.photoWordList[0].fileList.length > 0) {
          // 将所有 success Toast 的展示时长设置为 2000 毫秒
          Toast.setDefaultOptions('success', { duration: 1000 });
          Toast.success('发布成功');
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else if (this.voteTypeValue == '文字' && this.wordList[0].word.length > 0) {
          // 将所有 success Toast 的展示时长设置为 2000 毫秒
          Toast.setDefaultOptions('success', { duration: 1000 });
          Toast.success('发布成功');
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else {
          Toast('请完整填写投票选项(图文类型请选择图片)！');
        }
      } else {
        Toast('标题、时间、投票设置必填！');
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
.wrap .upload-img{
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem 1rem;
}
.wrap .upload-img p{
  padding-bottom: 0.8rem;
  font-size: 0.9rem;
}
/* 文字 */
.wrap .upload-img .word-option .right{
  height: 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.wrap .upload-img .word-add{
  padding-top: 0.8rem;
  font-size: 0.9rem;
  color: #1E87F0;
}
/* 图文 */
.wrap .upload-img .photo-word-option .right{
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.wrap .upload-img .photo-word-add{
  padding-top: 0.8rem;
  font-size: 0.9rem;
  color: #1E87F0;
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