<template>
  <div class="wrap">
    <van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#FFFFFF"/>
      </template>
      <template #title>
        <P class="h-title">技术问诊</P>
      </template>
    </van-nav-bar>
      <van-tabs class="main-tab" title-active-color="#1E87F0" color="#1E87F0" background="#FFFFFF" sticky line-width="50vw">
        <van-tab title="全部">
       <technology-all />
        </van-tab>
        <van-tab title="我的">
          <div >
          </div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script> 
import TechnologyAll from './TechnologyAll'
export default {
   name: 'TechnologyHome',
   components:{
     TechnologyAll
   },
   data() {
     return {
       
     }
   },
   methods:{
    onClickLeft(){
       this.$router.push("/");
    }
   }
}
</script>

<style scoped>
.wrap{
  background-color:#F8F8F8 ;
  height: 100%;
}
.main-tab{
  display:block;
  margin-top: 2.875rem
  }
</style>

  
