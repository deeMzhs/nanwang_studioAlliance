<template>
  <div class="wrap">
    <van-nav-bar title="Triz创新培训" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="innovate">
      <div class="innovate_item" v-for="(item, index) in 5" :key="index">
        <div class="innovate_item_left">
          <img src="@/assets/img/photo.png" alt />
          <div class="Classroom">第{{index+1}}课</div>
        </div>
        <div class="innovate_item_right">
            <div class="title">创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用</div>
            <div class="source">来源：哔哩哔哩</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: #F8F8F8;
  height:100vh;
}
.innovate {
  background-color: #fff;
}
.innovate_item {
  box-sizing: border-box;
  margin: .5rem 1rem;
  padding: .5rem 0;
  display: flex;
  border-bottom: .05rem solid rgb(238, 236, 236);
}
.innovate_item_left {
  width: 30%;
  position: relative;
  border-radius: .2rem;
  overflow: hidden;
}
.innovate_item_left .Classroom{
    position: absolute;
    left: 0;
    top: 0;
    width: 4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    color:#fff;
    border-radius: .2rem;
    overflow: hidden;
    background-color: rgb(45, 148, 252);
}

.innovate_item_right {
    flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: .5rem;
}
.innovate_item_right .title{
  font-weight:bold;
  font-size: .86rem;
}
.innovate_item_right .source{
    color: #B2B2B2;
}
</style>