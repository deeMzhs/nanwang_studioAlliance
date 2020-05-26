<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* 因为这里1rem=16px 0.8rem=12.8px，0.9rem=14.4px，所以APP之下的所有组件的默认字体大小就是12.8px */
  font-size: 0.8rem;
}
/* 全局修改<van-grid>标签下的<van-grid-item>标签的类.van-grid-item__content--center的justify-content，
原来是justify-content: center，现把它全局改为flex-start，在整个项目都生效 */
.van-grid-item__content--center{
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
}
/* 全局修改<van-grid>标签下的<van-grid-item>标签的类.van-grid-item__content的padding，
原来是padding: 16px 8px，现把它全局改为0，在整个项目都生效 */
.van-grid-item__content{
  padding: 0;
}

</style>
