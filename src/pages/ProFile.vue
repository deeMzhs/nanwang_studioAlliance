<template>
  <div>
    <van-nav-bar :title="ActiveTitle[Active]" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="border_bottom"></div>
    <div>
        <div class="wrap" v-if="Active===0">
            
        </div>
    </div>
  </div>
</template>
<script>
import storage from "../storage/storage"; // 导入storage
export default {
  data() {
    return {
      ActiveTitle:['收到点赞','评论','转发'],
      Active:0
    };
  },
   created() {
    // this.joinedActivityList();
    this.Active =this.$route.query.tab||storage.get('profile');
    this.setLoginStorage();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    setLoginStorage() {
      storage.set("profile",this.Active);
    }
  }
};
</script>

<style scoped>
.border_bottom{
    width: 100%;
    height:55px;
    background-color: #f2f2f2;
}
.wrap{
    width: 100%;
    box-sizing: 1rem;
    border-bottom:.1rem solid #f2f2f2 ;
    
}
    
</style>