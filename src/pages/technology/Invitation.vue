<template>
  <div>
    <van-nav-bar title="邀请" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div
      class="technology_item"
      v-for="(item, index) in list"
      :key="index"
      @click="to('TechnologyDetail',item.id)"
    >
      <div class="header">
        <div class="user">
          <div class="img">
            <img src="@/assets/img/joined-studio-union.jpeg" alt />
          </div>
          <div class="name">
            <div>
              <span class="username">莉丝</span>
              <span class="roomname">创新工作室</span>
            </div>
            <span class="answer">邀请你回答</span>
          </div>
        </div>

        <div class="time">{{item.time}}</div>
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
        <div
          class="follow"
          @click.stop="$router.push({path:'TechAnswer',query:{title:item.title}})"
        >写回答</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      current: 0,
      list: [
        {
          id: 1,
          time: "2019-01-01",
          title: "这是问题",
          desc:
            "这是内容 这是内容这是内容这是内容这是这是内容这是内容这是内容这是这是内容这是内容这是内容这是这是内容这是内容这是内容这是这是内容这是内容这是内容这是这是内容这是内容这是内容这是",
          imgurl: require("@/assets/img/mypage.png")
        },
        {
          id: 3,
          time: "2019-01-01",
          title: "这是问题这是问题这是问题这是问题",
          desc:
            "这是内容这是内容这这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是...",
          imgurl: require("@/assets/img/mypage.png")
        },
        {
          id: 2,
          time: "2019-01-01",
          title: "这是问题这是问题这是",
          desc:
            "这是内容这是内容这这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是...",
          imgurl: require("@/assets/img/mypage.png")
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    to(path, id) {
      this.$router.push({
        name: path,
        query: {
          id
        }
      });
      Toast("id:" + id);
    },
    onClickLeft() {
      this.$router.push("technologyHome");
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
  display: flex;
  width: 100%;
  height: 2.5rem;
  justify-content: space-between;
  align-items: center;
  color: #8c8c8c;
}
.user {
  display: flex;
  flex: 1;
}
.header .img {
  width: 1.3rem;
  height: 1.3rem;

  border-radius: 50%;
  overflow: hidden;
}
.header .img img {
  width: 100%;
}
.name {
  flex: 1;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 0;
  width: 100%;
}
.username {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(38, 38, 38, 1);
}
.roomname {
  font-size: 0.4rem;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
}
.answer {
  font-size: 0.4rem;
  color: rgba(140, 140, 140, 1);
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
</style>