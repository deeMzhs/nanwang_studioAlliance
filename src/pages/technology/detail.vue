<template>
  <div class="wrap">
    <van-nav-bar title="问题详情" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>

    <div class="user">
      <div class="header">
        <div>
          <img src="@/assets/img/joined-studio-union.jpeg" alt />
        </div>
        <div>张三提出了问题</div>
        <div>2019-01-01</div>
      </div>
      <div class="title">这是问题这是问题这是问题这是问题这是问题</div>
      <div
        class="desc"
      >这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容 这是内容这是这是内容这是内容这是内容这是...</div>
      <div>
        <img src="@/assets/img/joined-studio-union.jpeg" alt />
      </div>

      <div class="footer">
        <div class="footer_child">
          <span>
            <van-icon name="chat-o" />5
          </span>
          <span>
            <van-icon name="share" />3
          </span>
        </div>
        <div class="follow">关注问题</div>
      </div>
    </div>

    <div class="answer">
      <div class="answer_title">全部回答(3)</div>
      <div class="users" v-for="(item, index) in 3" :key="index">
        <div class="user_img">
          <div class="img">
            <img src="@/assets/img/joined-studio-union.jpeg" alt />
          </div>
        </div>
        <div class="user_info">
          <div class="user_name">王丽</div>
          <div class="user_desc">评论内容评论内容评论内容评论内容评论内容 评论内容评论内容评论内容</div>
          <div class="user_time">
            2019-02-12
            <span>
              <van-icon name="chat-o" />5
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn"><van-button type="info" size="large">大号按钮</van-button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style  scoped>
.van-icon {
  margin-right: 0.2rem;
}
.wrap {
  background-color: #f8f8f8;
}
.user {
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
}
.header {
  position: relative;
  display: flex;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color: #8c8c8c;
}
.header :nth-child(1) {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
}
.header :nth-child(3) {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.title {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.desc {
  height: 2.2rem;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #595959;
}
.footer {
  display: flex;
  margin: 1rem 0 0.1rem;
  justify-content: space-between;
}
.footer .footer_child {
  width: 6rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #b2b2b2;
}
.footer .follow {
  padding: 0.3rem 0.5rem;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
}

.answer {
  background-color: #fff;
  padding: 1rem;
}
.answer_title {
  font-size: 1.2rem;
  font-weight: bold;
}
.users {
  display: flex;
  margin-top: 1rem;
}
.users .user_img {
  width: 4rem;
}
.users .user_img .img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
}
.user_info {
  flex: 1;
  padding-bottom: 1.5rem;
  border-bottom:.1rem solid #fcfafa;
}
.user_name {
  font-size: 1rem;
  font-weight: bold;
}
.user_desc {
  padding: .5rem 0;
  color: #262626;
}
.user_time{
    color: #8C8C8C;
}
.user_time span{
    float: right;
}
.btn{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #fff;
}
.van-button{
    width: 90%;
    margin-left: 5%;
    margin-top: 1rem;
}
</style>