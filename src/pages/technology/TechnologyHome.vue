<template>
  <div class="wrap">
    <van-nav-bar fixed left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#FFFFFF" />
      </template>
      <template #title>
        <P class="h-title">技术问诊</P>
      </template>
      <template #right>
        <div>
          <img src="../../assets/img/serach.png">
        </div>
      </template>
    </van-nav-bar>
    <van-tabs
      class="main-tab"
      title-active-color="#1E87F0"
      color="#1E87F0"
      background="#FFFFFF"
      line-width="50vw"
    >
      <van-tab title="全部">
        <technology-all />
      </van-tab>
      <!-- 我的页面 -->
      <van-tab title="我的">
        <div class="user">我收到的</div>
        <div class="navbar bg_withe">
          <div @click="toInvitation">
            <img src="../../assets/img/invite.png" alt="" />
            <p>邀请</p>
          </div>
          <div @click="toRelpy">
            <img src="../../assets/img/like.png" alt="" />
            <p>喜欢</p>
          </div>
          <div @click="toFollow">
            <img src="../../assets/img/follow.png" alt="" />
            <p>关注</p>
          </div>
          <div @click="toForward">
            <img src="../../assets/img/forward.png" alt="" />
            <p>评论与转发</p>
          </div>
        </div>
        <!-- 导航栏 -->
        <tab-control class="tab-control" :title="userInfo" @tabClick="tabClick" />
        <!-- 我的提问 -->
        <div
          v-show="currentType == 'que'"
          class="content_item bg_withe"
          v-for="(item, index) in Info"
          :key="'info'+index"
        >
          <div class="content_head">
            <van-image
              round
              width="1.25rem"
              height="1.25rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="center">
              <div class="user_name">
                <span>我</span>
                <span>{{ item.studio }}</span>
              </div>
              <span class="center_info">提出了问题</span>
            </div>
            <div class="right">{{ item.time }}</div>
          </div>
          <div class="content_title">
            <p>{{ item.title }}</p>
          </div>
          <div
            class="content_main"
            @click="to('TechnologyDetail')"
            v-if="item.imgurl"
          >
            <p class="left">{{ item.content }}</p>
            <div class="right">
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="content_main" @click="to('TechnologyDetail')" v-else>
            <p class="left">{{ item.content }}</p>
          </div>
          <!-- 标签底部 -->
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
              <van-icon
                name="ellipsis"
                size="1rem"
                @click="item.deleteButteon = !item.deleteButteon"
              />
              <button class="bg_withe" v-if="item.deleteButteon">
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 我的回答 -->
        <div
          v-show="currentType == 'anw'"
          class="content_item bg_withe"
          v-for="(item, index) in Info"
          :key="'info1'+index"
        >
          <div class="content_head">
            <van-image
              round
              width="1.25rem"
              height="1.25rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="center">
              <div class="user_name">
                <span>{{ item.name }}</span>
                <span>{{ item.studio }}</span>
              </div>
              <span class="center_info">回答了你的问题</span>
            </div>
            <div class="right">{{ item.time }}</div>
          </div>
          <div class="content_title">
            <p>{{ item.title }}</p>
          </div>
          <div
            class="content_main"
            @click="to('TechnologyDetail')"
            v-if="item.imgurl"
          >
            <p class="left_anw left">{{ item.content }}</p>
            <div class="right">
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="content_main" @click="to('TechnologyDetail')" v-else>
            <p class="left_anw left">{{ item.content }}</p>
          </div>
          <div class="content_footer">
            <div class="icon_left"></div>
            <div class="icon_right">
              <van-icon
                name="ellipsis"
                size="1rem"
                @click="item.deleteButteon = !item.deleteButteon"
              />
              <button class="bg_withe" v-if="item.deleteButteon">
                删除
              </button>
            </div>
          </div>
        </div>
        <!-- 我的关注 -->
        <div
          v-show="currentType == 'forward'"
          class="content_item bg_withe"
          v-for="(item, index) in forward"
          :key="'info2'+index"
        >
          <div class="content_head">
            <van-image
              round
              width="1.25rem"
              height="1.25rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="center">
              <div class="user_name">
                <span>我</span>
                <span>{{ item.studio }}</span>
              </div>
              <span class="center_info">关注了{{ item.name }}的问题</span>
            </div>
            <div class="right">{{ item.time }}</div>
          </div>
          <div class="content_title">
            <p>{{ item.title }}</p>
          </div>
          <div
            class="content_main"
            @click="to('TechnologyDetail')"
            v-if="item.imgurl"
          >
            <p class="left">{{ item.content }}</p>
            <div class="right">
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="content_main" @click="to('TechnologyDetail')" v-else>
            <p class="left">{{ item.content }}</p>
          </div>
          <!-- 标签底部 -->
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
              <van-icon
                name="ellipsis"
                size="1rem"
                @click="item.deleteButteon = !item.deleteButteon"
              />
              <button class="bg_withe" v-if="item.deleteButteon">
                取消关注
              </button>
            </div>
          </div>
        </div>
        <!-- 我的质询 -->
        <div
          v-show="currentType == 'ask'"
          class="content_item bg_withe"
          v-for="(item, index) in ask"
          :key="'info3'+index"
        >
          <div class="content_head">
            <van-image
              round
              width="1.25rem"
              height="1.25rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="center">
              <div class="user_name">
                <span>我</span>
                <span>{{ item.studio }}</span>
              </div>
              <span class="center_info">咨询了{{ item.name }}的问题</span>
            </div>
            <div class="right">{{ item.time }}</div>
          </div>
          <div class="content_title">
            <p>{{ item.title }}</p>
          </div>
          <div
            class="content_main"
            @click="to('TechnologyDetail')"
            v-if="item.imgurl"
          >
            <p class="left">{{ item.content }}</p>
            <div class="right">
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="content_main" @click="to('TechnologyDetail')" v-else>
            <p class="left">{{ item.content }}</p>
          </div>
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
            <div class="icon_right" @click="headclick(item.id)">
              <div class="button">继续咨询</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TabControl from "@/components/tabcontrol/TabControl";
import TechnologyAll from "./TechnologyAll";
export default {
  name: "TechnologyHome",
  components: {
    TechnologyAll,
    TabControl
  },
  data() {
    return {
      currentType: "que",
      userInfo: [
        { name: "我的提问", num: "156" },
        { name: "我的回答", num: "99" },
        { name: "我的关注", num: "11" },
        { name: "我的咨询", num: "11" }
      ],
      Info: [
        {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "创新联盟"
        },
        {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是是内容这是内容这是内容这是内容这是内容这是内容`,
          deleteButteon: false,
          studio: "发展联盟"
        },
        {
          name: "Deca Joins",
          time: "2019-02-03",
          title: "这是标题这是标题",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/photo.png"),
          deleteButteon: false,
          studio: "发展联盟"
        },
        {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内这是内容这是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "发展联盟"
        }
      ],
      anw: [
        {
          type: "",
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "创新联盟"
        },
        {
          name: "老王",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "发展联盟"
        }
      ],
      forward: [
        {
          name: "小吴",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "创新联盟"
        },
        {
          name: "小罗",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "发展联盟"
        }
      ],
      ask: [
        {
          name: "小吴",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是内容这是内容这是内容这内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "创新联盟"
        },
        {
          name: "小罗",
          time: "2019-02-03",
          title: "这是标题这是标题这是标题这是标是标题这是标题标题这是标",
          content: `这是内容这是内容这是内容这是是内容这是内容这是内容这是内容这是内容这是内容`,
          imgurl: require("@/assets/img/mypage.png"),
          deleteButteon: false,
          studio: "发展联盟"
        }
      ]
    };
  },
  methods: {
    //跳转方法
    toRelpy() {
      this.$router.replace("techAnswers");
    },
    toInvitation() {
      this.$router.replace("TechInvitation");
    },
    toForward() {
      this.$router.replace("techForward");
    },
    toFollow() {
      this.$router.replace("techFollow");
    },
    onClickLeft() {
      this.$router.push("/");
    },
    to(path) {
      this.$router.push(path);
    },
    // tabclick点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "que";
          break;
        case 1:
          this.currentType = "anw";
          break;
        case 2:
          this.currentType = "forward";
          break;
        case 3:
          this.currentType = "ask";
          break;
      }
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
.van-nav-bar__right div{
display: flex;
text-align: center;
align-items: center
}
.van-nav-bar__right img{
  width: 21px;
  right: 21px;
}
.main-tab {
  display: block;
  margin-top: 2.875rem;
}

.user {
  font-size: 0.88rem;
  font-weight: 400;
  color: rgba(140, 140, 140, 1);
  line-height: 2.31rem;
  height: 2.3rem;
  padding-left: 1.06rem;
}
.navbar {
  display: flex;
  justify-content: space-around;
  height: 6.25rem;
  text-align: center;
  margin-bottom: 0.8rem;
}
.navbar img {
  width: 3.23rem;
  height: 3.23rem;
  margin-top: 0.8rem;
}
.navbar p {
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
}
/* 通用css */
/* content {
  position: relative;
  top: 3.5rem;
} */
.content_item {
  padding: 0 1rem;
}
.content_head {
  padding-top: 0.65rem;
  display: flex;
  align-items: center;
  /* border-bottom: 0.01rem solid #e5e5e5; */
  flex-wrap: nowrap;
  color: #8c8c8c;
  font-size: 0.75rem;
}
.content_head .van-image {
  flex: 0 0 1.25rem;
}
.content_head .center {
  flex: 1;
  padding-left: 0.6rem;
}
.content_head .user_name span:nth-child(1) {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(38, 38, 38, 1);
}
.content_head .user_name span:nth-child(2) {
  font-size: 0.63rem;
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
}
.content_head .center_info {
  font-size: 0.63rem;
  font-weight: 400;
}
.content_head .right {
  flex: 0 0 4.5rem;
}
.content_title {
  margin-top: 0.8rem;
  font-size: 1rem;
  color: #262626;
}
.content_title p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.content_main {
  margin-top: 1rem;
  color: #595959;
  display: flex;
}
.content_main .left {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 0.875rem;
  flex: 1;
}
.left_anw {
  background-color: #f8f8f8;
  color: #8c8c8c;
  padding: 0.87rem;
  -webkit-line-clamp: 2;
  margin-right: -0.75rem;
}
.content_main .right {
  justify-content: center;
  align-items: center;
  flex: 0 0 6.4rem;
  margin-left: 0.75rem;
}
.content_main .right img {
  height: 3.9rem;
  width: 6.3rem;
  border-radius: 4px;
}
.content_footer {
  display: flex;
  margin-bottom: 0.7rem;
  padding-bottom: 0.7rem;
  padding-top: 0.5rem;
}

.content_footer .icon_left,
.icon_right {
  flex: 1;
}
.content_footer .icon_left .icon_item {
  width: 33%;
  line-height: 1rem;
  display: flex;
  align-items: center;
}
.icon_left {
  display: flex;
  justify-content: flex-start;
  color: #b2b2b2;
}
.content_footer .icon_left .icon_item span {
  padding-left: 0.3rem;
}
.content_footer .icon_right {
  position: relative;
}
.content_footer .icon_right button {
  position: absolute;
  top: 1.2rem;
  left: 50%;
  border: none;
  line-height: 2rem;
  width: 5.2rem;
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(38, 38, 38, 0.16);
}
.content_footer .icon_right .van-icon {
  float: right;
}
.content_footer .icon_right .button {
  float: right;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
  width: 3.75rem;
  height: 1.25rem;
  text-align: center;
}
</style>
