<template>
  <div class="adminPage-container">
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
  </div>
</template>

<script>
  export default {
    name: "admin-page",
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
