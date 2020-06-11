<template>
  <div class="wrap">
    <van-nav-bar title="回答问题" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <van-cell-group>
      <div class="title">{{title}}</div>
    </van-cell-group>
    <van-field v-model="message" rows="10" autosize type="textarea" placeholder="输入回答" />
    <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
    <div class="btn">
      <van-button type="info" size="large">发布</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message: "",
      fileList: [],
      title: ""
    };
  },
  created() {
    this.title = this.$route.query.title;
    console.log(this.$route.query.title);
  },
  // watch: {
  //   "$route.title": {
  //     tilte(title) {
  //       console.log(tilte);
  //     }
  //   }
  // },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    afterRead(field) {}
  }
};
</script>

<style  scoped>
.van-nav-bar {
  color: #fff;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #f8f8f8;
}
.van-button {
  width: 90%;
  margin-left: 5%;
  margin-top: 1rem;
}
.title {
  height: 3.44rem;
  font-size: 0.88rem;
  font-weight: 400;
  padding-left: 1rem;
  color: rgba(38, 38, 38, 1);
  line-height: 3.44rem;
}
</style>