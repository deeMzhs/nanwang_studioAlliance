<template>
  <div>
    <van-nav-bar title="活动详情" fixed left-arrow @click-left="onClickLeft" />
    <div style="height: 46px"></div>
    <div class="img">
      <img src="@/assets/img/photo.jpg" alt />
    </div>
    <div class="title">广东电网篮球友谊赛</div>
    <div>2020-01-01 18:00 至 2020-02-01 18:00</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    "$route.id": {
      id(id) {
        console.log(id);
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped>
.title {
  height: 1.06rem;
  font-size: 1.13rem;
  margin: 1.16rem;
  font-weight: 600;
  color: rgba(38, 38, 38, 1);
}
</style>
