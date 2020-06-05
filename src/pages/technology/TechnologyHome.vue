<template>
  <div class="wrap">
    <van-nav-bar fixed left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#FFFFFF" />
      </template>
      <template #title>
        <P class="h-title">技术问诊</P>
      </template>
    </van-nav-bar>
    <van-tabs
      class="main-tab"
      title-active-color="#1E87F0"
      color="#1E87F0"
      background="#FFFFFF"
      line-width="50vw"
    >
      <van-tab title="全部">全部</van-tab>
      <!-- 我的页面 -->
      <van-tab title="我的">
        <div class="user-info bg_withe">
          <div class="user-item" @click="toRelpy">
            <p>{{ userInfo[0].num }}</p>
            <p>获得的回答</p>
          </div>
          <div class="user-item" @click="toForward">
            <p>{{ userInfo[1].num }}</p>
            <p>获得的转发</p>
          </div>
          <div class="user-item" @click="toFollow">
            <p>{{ userInfo[2].num }}</p>
            <p>获得的关注</p>
          </div>
        </div>
        <van-tabs
          title-active-color="#1E87F0"
          color="#1E87F0"
          background="#FFFFFF"
          line-width="33vw"
        >
          <!-- 第1个标签 -->
          <van-tab :title="'我的提问' + ' (' + userInfo[1].num + ')'">
            <div class="content">
              <div
                class="content_item bg_withe"
                v-for="(item, index) in Info"
                :key="index"
              >
                <div class="content_head">
                  <van-image
                    round
                    width="1.25rem"
                    height="1.25rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <div class="center">{{ item.name + "关注了你的问题" }}</div>
                  <div class="right">{{ item.time }}</div>
                </div>
                <div class="content_title">
                  <p>{{ item.title }}</p>
                </div>
                <div class="content_main">
                  <p class="left">{{ item.content }}</p>
                  <div class="right">
                    <img :src="item.imgurl" />
                  </div>
                </div>
                <!-- 底部标签 -->
                <div class="content_footer">
                  <div class="icon_left">
                    <span class="icon_item">
                      <van-icon name="chat-o" size="12" />
                      <span>3</span>
                    </span>
                    <span class="icon_item">
                      <van-icon name="label-o" size="12" />
                      <span>3</span>
                    </span>
                  </div>
                  <div class="icon_right">
                    <van-icon name="ellipsis" size="1rem" @click="item.deleteButteon = !item.deleteButteon"/>
                    <button class="bg_withe " v-if="item.deleteButteon">删除</button>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="'我的回答' + ' (' + userInfo[1].num + ')'">
            <!-- 第2个标签 -->
          </van-tab>
          <van-tab :title="'我的关注' + ' (' + userInfo[2].num + ')'">内容 3</van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "TechnologyHome",
  data() {
    return {
      deleteButteon : false,
      userInfo: [
        { name: "获得的回答", num: "156" },
        { name: "获得的转发", num: "99" },
        { name: "获得的点赞", num: "11" }
      ],
      Info: [
        {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon : false,
        },
         {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon : false,
        },
        {
          name: "Deca Joins",
          time: "2019-02-03",
          title: "这是标题这是标题",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/photo.png"),
          deleteButteon : false,
        },
         {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon : false,
        },
      ]
    };
  },
  methods: {
    //跳转方法
    toRelpy() {
      this.$router.replace("techAnswers");
    },
    toForward() {
      this.$router.replace("techForward");
    },
    toFollow() {
      this.$router.replace("techFollow");
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: #f8f8f8;
  height: 100%;
}
.bg_withe {
  background-color: #ffffff;
}
.main-tab {
  display: block;
  margin-top: 2.875rem;
}
.user-info {
  margin: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 2.5px 5px 10px 0px #d7e7f6;
}
.user-info .user-item {
  flex: 1;
  height: 100%;
  text-align: center;
  color: #262626;
}
.user-info .user-item p:nth-child(1) {
  font-size: 1.2rem;
  font-weight: 900;
  padding-top: 0.875rem;
}
.user-info .user-item p:nth-child(2) {
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
}

/* 通用css */
content{
  position: relative;
  top: 3.5rem;
}
.content_item{
  padding: 0 1rem;
}
.content_head{
  padding-top: .65rem;
  display: flex;
  align-items: center;
  padding-bottom: .5rem;
  border-bottom: 0.01rem solid #E5E5E5;
  flex-wrap: nowrap;
  color:#8C8C8C;
  font-size: .75rem;
  line-height: 1.56rem;
}
.content_head .van-image{
  flex: 0 0 1.25rem
}
.content_head .center{
  flex: 1;
  padding-left:.6rem;
}
.content_head .right{
  flex :0 0 4.5rem;
}
.content_title{
  margin-top:.8rem;
  font-size: 1rem;
  color: #262626;
}
.content_title p{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.content_main{
  margin-top:1rem;
  color: #595959;
  display: flex;
}
.content_main .left{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: .875rem;
  flex: 1;
}
.content_main .right{
  justify-content: center;
  align-items: center;
  flex: 0 0 6.4rem;
  margin-left: .75rem;
}
.content_main .right img{
  height: 3.9rem;
  width: 6.3rem;
  border-radius: 4px;
}
 .content_footer{
  display: flex;
  margin-bottom: .7rem;
  padding-bottom: .7rem;
  padding-top: 0.5rem;
}
.content_footer .icon_left,.icon_right{
  flex: 1;
}
.content_footer .icon_left .icon_item{
  width: 33%;
  line-height: 1rem;
  display: flex;
  align-items: center
}
.icon_left{
  display: flex;
  justify-content: flex-start
}
.content_footer .icon_left .icon_item span{
   padding-left: .3rem;
}
.content_footer .icon_right{
  position: relative;
}
.content_footer .icon_right button{
  position:absolute;
  top:1.2rem;
  left: 50%;
  border: none;
  line-height: 2rem;
  width: 5.2rem;
  box-shadow: .2rem .2rem .4rem rgba(38, 38, 38, 0.16);
}
.content_footer .icon_right .van-icon{
float: right;
}
</style>
