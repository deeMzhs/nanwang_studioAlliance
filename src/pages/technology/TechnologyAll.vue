<template>
  <div>
    <div class="technology_item" v-for="(item, index) in list" :key="index" @click="to('TechnologyDetail')">
      <div class="header">
        <div>
          <img src="@/assets/img/joined-studio-union.jpeg" alt />
        </div>
        <div>张三提出了问题</div>
        <div>{{item.time}}</div>
      </div>
      <div class="title">{{item.title}}</div>
      <div class="desc" v-if="item.imgurl">
        <div class="desc_msg">{{item.desc}}</div>
        <div class="img">
          <img :src="item.imgurl" alt />
        </div>
      </div>

      <div class="desc1" v-else>{{item.desc}}</div>
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

    <div class="popup">
      <div class="popup_title">试试帮Ta解答吧 <span>{{current+1}}/4</span></div>
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(item, index) in 4" :key="index">
          <div class="popup_bd">
            <div class="popup_desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxx问题，怎 么解决 拷贝</div>
            <div class="popup_item">
              <div class="footer_child">
                <span>
                  <van-icon name="chat-o" />5
                </span>
                <span>
                  <van-icon name="share" />3
                </span>
              </div>
              <div class="follow">我来回答</div>
            </div>
            <div class="tag">问</div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
    <div class=" questions" @click="to('TechnologyQuestions')">
       <van-icon name="records" />
        <span>提问</span> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current:0,
      list: [
        {
          id: 1,
          time: "2019-01-01",
          title: "这是问题",
          desc:
            "这是内容 这是内容这是内容这是内容这是",
          imgurl: require("@/assets/img/mypage .png")
        },
        {
          id: 2,
          time: "2019-01-01",
          title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
          desc:
            "这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是..."
        },
        {
          id: 1,
          time: "2019-01-01",
          title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
          desc:
            "这是内容这是内容这这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是...",
          imgurl: require("@/assets/img/mypage .png")
        },
        {
          id: 2,
          time: "2019-01-01",
          title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
          desc:
            " 这内容这是内容这是"
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    to(path){
        this.$router.push(path)
    }
  }
};
</script>

<style  scoped>
.van-icon {
  vertical-align: middle;
  margin-right: 0.2rem;
}
.technology_item {
  padding: 0.5rem 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
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
  display: flex;
  height: 5rem;
  color: #595959;
}
.desc .desc_msg {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 0.5rem;
  height: 3.2rem;
  flex: 1;
  overflow: hidden;
}
.desc .img {
  width: 30%;
}
.desc img {
  width: 100%;
}
.desc1 {
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
  margin: 0.5rem 0;
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
.popup {
    position: relative;
  height: 12rem;
  width: 100%;
  background-color: #4a9ef2;
  margin-bottom: 1rem;
}
.popup_title {
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.popup_title span{
  float: right;
  margin-right:1.2rem ;
}
.popup_bd {
  position: relative;
  width: 90%;
  height: 7rem;
  margin-left: 5%;
  box-sizing: border-box;
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #fff;
}
.popup_desc {
  font-weight: bold;
  font-size: 1rem;
}
.popup_item {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.popup_item .follow {
  padding: 0.3rem 0.5rem;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
}
.popup_item .footer_child {
  width: 6rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #b2b2b2;
}
.tag {
  position: absolute;
  top: 1rem;
  left: 0;
  background-color: #288bf0;
  padding: 0.5rem;
  color: #fff;
  border-radius: 0 0.3rem 0.3rem 0;
}
.custom-indicator{
    opacity: 0;
    /* color: #fff;
    position:absolute;
    font-size: 1.2rem;
    top: 2rem;
    right:2rem;
    background-color: pink; */
}
.questions{
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: fixed;
  text-align: center;
  font-size: 1rem;
  bottom:2rem;
  right:2rem;
  color: #fff;
  background-color: #1E87F0;
}
.questions .van-icon{
    margin-top: .5rem;
    margin-left:.5rem ;
    font-size: 2rem;
  display: block;
}

</style>