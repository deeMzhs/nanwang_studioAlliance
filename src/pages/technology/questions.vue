<template>
  <div class="wrap">
    <van-nav-bar title="提问" fixed left-arrow @click-left="onClickLeft">
      <template #right>取消</template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    <van-cell-group>
      <van-field v-model="value" placeholder="填写你的问题" />
    </van-cell-group>
    <van-field v-model="message" rows="10" autosize type="textarea" placeholder="对问题补充说明，可以更快获得解答" />
    <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
    <div class="btn"><van-button type="info" size="large">大号按钮</van-button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message:'',
      fileList:[],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    afterRead(field){

    }
  }
};
</script>

<style  scoped>
.van-nav-bar {
  color: #fff;
}
.btn{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #F8F8F8;
}
.van-button{
    width: 90%;
    margin-left: 5%;
    margin-top: 1rem;
}
</style>