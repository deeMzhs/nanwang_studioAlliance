<template>
  <div class="wrap">
    <div class="head-info">
      <div class="background">
        <div class="studio-sub">
          <van-row class="first-sub-row">
            <van-col span="5" class="first-sub-col">
              <img :src="studioInfo.img" alt/>
            </van-col>
            <van-col span="15" class="first-sub-col" @click="goDetail">
              <p>{{ studioName }}</p>
            </van-col>
            <van-col span="4" class="first-sub-col">
              <div v-if="isFollow == 1" class="action" @click="isFollow = 0">退出</div>
              <div v-else="isFollow == 0" class="action action1" @click="isFollow = 1">关注</div>
            </van-col>
          </van-row>
          <van-row class="second-sub-row" @click="goMembers()">
            <van-col span="16" class="second-sub-col">
              <div class="join-pic">
                <div v-for="(item, i) in achieveList">
                  <img :src="item.img" alt/>
                </div>
              </div>
            </van-col>
            <van-col span="8" class="second-sub-col2">
              {{ studioInfo.num }}人已加入
              <van-icon name="arrow" style="line-height: 1.3rem;"/>
              <span></span>
            </van-col>
          </van-row>
        </div>
        <van-icon class="backBt" name="arrow-left" color="#ffffff" size="24px" @click="toHome"/>
      </div>
    </div>
    <!-- 工作室成果 -->
    <div class="union_achieve">
      <div class="achieve_title">
        <div>工作室成果</div>
        <span>专利成果</span>
        <span>课题</span>
      </div>
      <div class="achieve_swiper">
        <div
          class="achieve_item"
          v-for="(item, index) in achieveList"
          :key="index"
          @click="btn_professor(item.id)"
        >
          <div class="achieve_img">
            <img :src="item.img" alt="ss"/>
          </div>
          <p>{{ item.name }}</p>
          <div class="transmit" @click="transmit(index)">
            <img src="../assets/img/transmit.png" alt="转发"/>
          </div>
        </div>
      </div>
    </div>

    <!-- 培训 -->
    <innovate class="transmit"/>

    <!-- 最新活动 -->
    <div class="new-activity">
      <van-cell class="head">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <p class="head-title">最新活动</p>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span class="head-more">更多</span>
        </template>
      </van-cell>
      <van-row class="activity-list" v-for="(item, i) in activityList" :key="i">
        <van-col span="16" class="left">
          <!-- vant内置样式，超出用...表示：van-ellipsis -->
          <div class="van-multi-ellipsis--l2 content">{{ item.name }}</div>
          <div class="time">{{ item.time }}</div>
        </van-col>
        <van-col span="8" class="right">
          <img :src="item.img" alt/>
          <div v-if="item.isJoin == 1" class="status joined-status">已报名</div>
          <div v-else class="status unjoin-status">未参与</div>
        </van-col>
        <!-- <van-col span="24" class="footer">
          <img src="../assets/img/join-portrait.jpg" alt />
          <img src="../assets/img/join-portrait.jpg" alt />
          <img src="../assets/img/join-portrait.jpg" alt />
          <span>{{ item.man }}人已加入</span>
        </van-col> -->
      </van-row>
    </div>

    <!-- 技术专家 -->
    <div class="professor">
      <div class="pro_title">
        <div>在线专家</div>
        <span style="color:rgba(140,140,140,1);" @click="operationStatus">{{status}}</span>
      </div>
      <van-swipe @change="onChange">
        <van-swipe-item
          class="pro_body"
          v-for="(item, index) in professor"
          :key="index"
        >
          <van-image round width="3.9rem" height="3.9rem" :src="item.imgurl"/>
          <div class="pro_info">
            <div class="pro_name">
              {{ item.name }}
              <van-tag
                color="#D7F0D2"
                text-color="#36B21D"
                v-if="item.skill != ''"
                round
              >{{ item.skill }}
              </van-tag
              >
              <van-tag
                color="#FCDDDA"
                text-color="#F15747"
                v-if="item.level != ''"
                round
              >{{ item.level }}
              </van-tag
              >
            </div>
            <div class="pro_name1">{{ item.studio }} <span @click="$router.push('/OnlineExperts')">查看全部</span></div>
            <div class="pro_name1">{{ item.numSeek }}人已咨询</div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ currentStudio + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>

    <!-- <问题环节> -->
    <div class="content">
      <div
        class="content_item bg_withe"
        v-for="(item, index) in list"
        :key="index"
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
            <span class="center_info">提出了问题</span>
          </div>
          <div class="right">{{ item.time }}</div>
        </div>
        <div class="content_title">
          <p>{{ item.title }}</p>
        </div>
        <div
          class="content_main"
          @click="to('TechnologyDetail', item.id)"
          v-if="item.imgurl"
        >
          <p class="left">{{ item.content }}</p>
          <div class="right">
            <img :src="item.imgurl"/>
          </div>
        </div>
        <div class="content_main" @click="to('TechnologyDetail')" v-else>
          <p class="left_anw left">{{ item.content }}</p>
        </div>
        <!-- 底部标签 -->
        <div class="content_footer">
          <div class="icon_left">
            <span class="icon_item" @click="msg(item.id)">
              <van-icon name="chat-o" size="12"/>
              <span>3</span>
            </span>
            <span class="icon_item" @click="share(item.id)">
              <van-icon name="label-o" size="12"/>
              <span>3</span>
            </span>
          </div>
          <div class="icon_right" @click="headclick(item.id)">
            <div class="button">回答问题</div>
          </div>
        </div>
      </div>

      <div class="questions" @click="to('TechnologyQuestions')">
        <van-icon name="records"/>
        <span>我要提问</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Innovate from "@/pages/Innovate";
  import { Toast } from "vant";
  export default {
    name: 'studio-details',
    data() {
      return {
        status: '点击下线',
        studioInfo: {
          id: this.$route.query.id,
          name: this.$route.query.studioName,
          img: require("../assets/img/a.jpg"),
          num: 100,
          portrait: require("../assets/img/join-portrait.jpg")
        },
        isFollow: this.$route.query.isFollow,
        // 联盟成果
        achieveList: [
          {
            name: "A协会、C协会符合认同和让他",
            img: require("../assets/img/join-portrait.jpg")
          },
          {
            name: "B协会、C协会发明了深海巨鳗进行捕捞然后去阿拉斯加好溪镇淘金",
            img: require("../assets/img/join-portrait.jpg")
          },
          {
            name: "A协会、B协会",
            img: require("../assets/img/join-portrait.jpg")
          },
          {
            name: "A协会、C协会",
            img: require("../assets/img/join-portrait.jpg")
          },
          {
            name: "B协会、C协会",
            img: require("../assets/img/join-portrait.jpg")
          }
        ],
        currentStudio: 0,
        professor: [
          {
            id: 1,
            name: "李宏利",
            studio: "特朗普劳模工作室",
            numSeek: "188",
            level: "技术技能专家",
            skill: "一级技术",
            imgurl: require("@/assets/img/mypage.png")
          },
          {
            id: 2,
            name: "树生",
            studio: "牛逼哄哄工作室",
            numSeek: "188",
            level: "技术技能专家",
            skill: "三级技术",
            imgurl: require("@/assets/img/mypage.png")
          }
        ],
        list: [
          {
            id: 1,
            name: "张张红",
            time: "2019-01-01",
            follow: true,
            title: "这是问题",
            content: "这是内容 这是内容这是内容这是内容这是",
            imgurl: require("@/assets/img/mypage.png"),
            studio: "加勒比港湾工作室"
          },
          {
            id: 2,
            name: "张张红",
            time: "2019-01-01",
            title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
            studio: "南方电网工作室",
            content:
              "这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是..."
          },
          {
            id: 3,
            name: "张张红",
            follow: false,
            time: "2019-01-01",
            title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
            studio: "灭霸工作室",
            content:
              " 内容这是内容这内容这是内容这是内容这是内容这是内容这是内容这是是内容这是",
            imgurl: require("@/assets/img/mypage.png")
          }
        ],
        // 最新活动
        activityList: [
          {
            name:
              "输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同",
            time: "2020/04/09-2020/12/23",
            isJoin: 1,
            man: "876",
            img: require("../assets/img/photo.jpg")
          },
          {
            name: "输电专业工作室联盟2",
            time: "2020/04/09-2020/06/04",
            isJoin: 0,
            man: "333",
            img: require("../assets/img/joined-studio-union.jpeg")
          },
          {
            name: "输电专业工作室联盟3",
            time: "2020/04/09-2020/12/23",
            isJoin: 1,
            man: "876",
            img: require("../assets/img/joined-studio-union.jpeg")
          }
        ]
      }
    },
    created() {
      this.studioName = this.$route.query.studioName;
    },
    methods: {
      btn_professor(){
        this.$router.push('/InnovationDetail');
      },
      toHome() {
        this.$router.go(-1);
      },
      goDetail() {
        this.$router.push("/studioInfo");
      },
      // 工作室轮播
      onChange(index) {
        this.currentStudio = index;
      },
      // 跳转查看工作室成员
      goMembers() {
        this.$router.push({
          path: "/StudioMembers",
          query: {
            id: this.studioInfo.id
          }
        });
      },
      operationStatus(){
        this.status === '点击下线'? this.status = '我是专家，点击在线' : this.status = '点击下线'
      },
      // 回复
      msg(id) {
        Toast(id);
      },
      // 分享
      share(id) {
        Toast(id);
      },
      // 关注
      headclick(item, index) {
        if (item.follow) return;
        this.list[index].follow = true;
        console.log(this.list);
        Toast("已关注id:" + item.id);
      },
    },
    components: {
      Innovate
    },
  }
</script>

<style lang="less" scoped>
  .wrap {
    background-color: #f9f9f9;
  }

  .border {
    width: 100%;
    height: 0.03rem;
    border: 0px solid rgba(229, 229, 229, 1);
    border-radius: 0rem;
  }

  .head-info {
    height: 10.63rem;
    display: flex;
    flex: 1;
    margin-bottom: 3.5rem;
  }

  .head-info .background {
    background-image: url("../assets/img/per-bg.png");
    height: 10.63rem;
    width: 100%;
    background-repeat: no-repeat;
    display: flex;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    position: relative;
  }

  .head-info .background .backBt {
    position: absolute;
    top: 32.5px;
    left: 12px;
  }

  .join-pic {
    flex: 0 0 50%;
    height: 30px;
    display: flex;
    align-items: center;
  }

  .join-pic div {
    width: 1.57rem;
    height: 1.57rem;
    margin-left: -6px;
  }

  .join-pic div:first-child {
    margin-left: 0;
  }

  .join-pic div img {
    width: 1.57rem;
    height: 1.57rem;
    border-radius: 50%;
  }

  /* 分割线 */
  .wrap .studio-sub {
    margin: auto;
    position: absolute;
    bottom: -25%;
    left: 50%;
    margin-left: -46vw;
    background-color: #fff;
    padding: 0.7rem;
    width: 92vw;
    height: 8.25rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 1rem 0rem rgba(30, 135, 240, 0.3);
    border-radius: 4px;
    /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
    box-shadow: 0px 3px 10px 0px rgb(142, 186, 230);
  }

  .wrap .studio-sub .first-sub-row {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
  }

  .wrap .studio-sub .first-sub-row .first-sub-col img {
    width: 3.88rem;
    height: 3.88rem;
    border-radius: 4px;
  }

  .wrap .studio-sub .first-sub-row .first-sub-col p {
    font-size: 1rem;
    color: #262626;
    font-weight: 600;
    padding-left: 0.78rem;
  }

  .wrap .studio-sub .first-sub-row .first-sub-col .action {
    background-color: #dfdfdf;
    text-align: center;
    color: #8c8c8c;
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.1rem;
  }

  .wrap .studio-sub .first-sub-row .first-sub-col .action1 {
    background: rgba(30, 135, 240, 1);
    color: #fff;
  }

  .wrap .studio-sub .second-sub-row {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    margin-top: 0.7rem;
    padding-top: 0.4rem;
  }

  .wrap .studio-sub .second-sub-row .second-sub-col img {
    width: 1.5rem;
    border-radius: 1.5rem;
  }

  .wrap .studio-sub .second-sub-row .second-sub-col2 {
    text-align: right;
    font-size: 0.75rem;
    color: #262626;
    align-items: center;
    text-align: center;
  }

  // 通知公告栏
  .notice {
    display: flex;
    padding: 0.9rem;
    background-color: #ffffff;
    .notice_img {
      flex: 0 0 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .center {
      flex: 1;
      padding-left: 1.28rem;
      font-size: 0.88rem;
      overflow: hidden;
      line-height: 1.28rem;
    }
    .right {
      flex: 0 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  /* 联盟工作室 */
  .studio_union {
    margin-top: 0.7rem;
    padding: 1.06rem;
    height: 14.6rem;
    width: 100%;
    background-color: #ffffff;
    .studio_title {
      font-family: PingFang SC;
      color: #262626;
      font-weight: 600;
      font-size: 1.06rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.09rem;
      span {
        font-size: 0.75rem;
        font-weight: 400;
        color: rgba(89, 89, 89, 1);
      }
    }
    .studio_swiper {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      overflow-x: auto;
      .studio_item {
        width: 9rem;
        height: 9.68rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0rem 5px 10px 0rem rgba(216, 216, 216, 0.4);
        margin-right: 0.7rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        .studio_img {
          width: 9rem;
          height: 6.75rem;
          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 4px;
          }
        }
        p {
          padding: 0.8rem 0 0 0.5rem;
          width: 6.78rem;
          height: 0.72rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(38, 38, 38, 1);
          line-height: 1.31rem;
        }
      }
    }
  }

  // 联盟成果
  .union_achieve {
    margin-top: 0.7rem;
    padding: 1.06rem;
    height: 17.5rem;
    width: 100%;
    background-color: #ffffff;
    .achieve_title {
      color: #262626;
      font-weight: 600;
      font-size: 1.06rem;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 1.09rem;
      span {
        font-size: 0.88rem;
        font-weight: 400;
        padding-left: 1.44rem;
        color: rgba(89, 89, 89, 1);
      }
    }
    .achieve_swiper {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      overflow-x: auto;
      .achieve_item {
        width: 10.31rem;
        height: 12.75rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0rem 5px 10px 0rem rgba(216, 216, 216, 0.4);
        margin-right: 0.7rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        .achieve_img {
          width: 10.31rem;
          height: 7.84rem;
          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 4px;
          }
        }
        p {
          margin: 0.7rem 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #8c8c8c;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          line-height: 1.19rem;
        }
        .transmit {
          display: flex;
          justify-content: flex-end;
          margin-right: 0.2rem;
          img {
            width: 0.81rem;
            height: 0.81rem;
          }
        }
      }
    }
  }

  //创新培训
  .transmit {
    margin-top: .6rem
  }

  //在线专家
  .professor {
    margin-top: 0.7rem;
    padding: 1.2rem;
    height: 10rem;
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 1rem;
    .pro_title {
      color: #262626;
      font-weight: 600;
      font-size: 1.06rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      span {
        font-size: 0.88rem;
        color: #1e87f0;
        font-weight: 400;
      }
    }
    .pro_body {
      display: flex;
      .pro_info {
        flex: 1;
        padding-left: 1rem;
        .pro_name{
          margin-bottom: .3rem;
        }
        .pro_name span {
          font-size: 0.63rem;
        }
        .pro_name1 {
          height: 1.31rem;
          font-size: 0.88rem;
          font-weight: 400;
          color: rgba(89, 89, 89, 1);
          line-height: 1.31rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span{
            border:1px solid rgba(30,135,240,1);
            font-size:.8rem;
            font-weight:400;
            color:rgba(30,135,240,1);
            padding: 0.11rem .43rem;
            border-radius: 5px;
          }
        }
        :nth-child(1) {
          color: #262626;
          font-size: 1.06rem;
        }
      }
    }
    .custom-indicator {
      opacity: 0;
    }
  }

  //问题item
  .content {
    position: relative;
    .content_item {
      padding: 0 1rem;
      .content_head {
        padding-top: 0.65rem;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        color: #8c8c8c;
        font-size: 0.75rem;
        .van-image {
          flex: 0 0 1.25rem;
        }
        .center {
          flex: 1;
          padding-left: 0.6rem;
          .center_info {
            font-size: 0.63rem;
            font-weight: 400;
          }
          .user_name span:nth-child(1) {
            font-size: 0.75rem;
            font-weight: 600;
            color: rgba(38, 38, 38, 1);
          }
          .user_name span:nth-child(2) {
            font-size: 0.63rem;
            font-weight: 400;
            color: rgba(38, 38, 38, 1);
          }
        }
        .right {
          flex: 0 0 4.5rem;
        }
      }
      .content_title {
        margin-top: 0.8rem;
        font-size: 1rem;
        color: #262626;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .content_main {
        margin-top: 1rem;
        color: #595959;
        display: flex;
        .left {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          font-size: 0.875rem;
          flex: 1;
        }
        .right {
          justify-content: center;
          align-items: center;
          flex: 0 0 6.4rem;
          margin-left: 0.75rem;
          img {
            height: 3.9rem;
            width: 6.3rem;
            border-radius: 4px;
          }
        }
      }
      .content_footer {
        display: flex;
        margin-bottom: 0.7rem;
        padding-bottom: 0.7rem;
        padding-top: 0.5rem;
        .icon_left,
        .icon_right {
          flex: 1;
        }
      }
    }
  }

  .content_footer .content_footer .icon_left .icon_item {
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

  .content_footer .icon_right .button {
    float: right;
    background-color: #1e87f0;
    border-radius: 0.2rem;
    color: #ffffff;
    width: 3.75rem;
    height: 1.25rem;
    text-align: center;
  }

  //提问弹窗
  .questions {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: fixed;
    text-align: center;
    font-size: 0.75rem;
    bottom: 2rem;
    right: 2rem;
    color: #fff;
    background-color: #1e87f0;
  }

  .questions .van-icon {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 2rem;
    display: block;
  }

  /* 隐藏滚动条 */
  ::-webkit-scrollbar {
    display: none;
  }
  /* 发布、编辑按钮 */
  .publish-pop {
    position: fixed;
    top: 50%;
    right: 3%;
    z-index: 1;
  }

  .publish-pop .plus {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(to bottom, #54b7f6, #488eee);
    border-radius: 2rem;
  }

  /* 遮罩层 */
  .cover-layer {
    z-index: 2;
  }

  .cover-layer .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .cover-layer .wrapper .block {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .cover-layer .wrapper .block .blck-item {
    text-align: center;
    color: #fff;
  }

  .cover-layer .wrapper .block .blck-item img {
    height: 3rem;
  }

  .cover-layer .wrapper .block .blck-item p {
    padding-top: 0.5rem;
  }

  /* 最新活动 */
  .wrap .new-activity {
    margin-top: 0.6rem;
  }

  .wrap .new-activity .head .head-title {
    font-weight: bold;
    font-size: 1rem;
  }

  .wrap .new-activity .head .head-more {
    color: #8c8c8c;
    font-size: 0.9rem;
  }

  .wrap .new-activity .activity-list {
    padding: 0.8rem 0.8rem;
    background-color: #fff;
  }

  .wrap .new-activity .activity-list .left .content {
    color: #262626;
    line-height: 1.4rem;
    font-size: 0.9rem;
    padding: 0 1rem 0 0;
  }

  .wrap .new-activity .activity-list .left .time {
    padding-top: 0.8rem;
    color: #8c8c8c;
    font-size: 0.75rem;
  }

  .wrap .new-activity .activity-list .right {
    position: relative;
    text-align: center;
  }

  .wrap .new-activity .activity-list .right img {
    width: 100%;
    height: 4.5rem;
  }

  .wrap .new-activity .activity-list .right .status {
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding: 0.2rem 0.4rem;
    color: #fff;
    background-color: #36b21d;
  }

  .wrap .new-activity .activity-list .right .joined-status {
    background-color: #36b21d;
  }

  .wrap .new-activity .activity-list .right .unjoin-status {
    background-color: #f5c656;
  }

  .wrap .new-activity .activity-list .footer {
    padding: 0.4rem 0 0.8rem 0;
    border-bottom: 1px solid #e5e5e5;
  }

  /* 把最后一个条目的下边框去掉 */
  .wrap .new-activity .activity-list:nth-last-child(1) .footer {
    border-bottom: none;
  }

  .wrap .new-activity .activity-list .footer img {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }

  /* 热门话题 */
  .wrap .heat-topic {
    background-color: #fff;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
  }

  .wrap .heat-topic .head-title {
    font-weight: bold;
    font-size: 1rem;
  }

  .wrap .heat-topic .container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  /* 隐藏滚动条 */
  ::-webkit-scrollbar {
    display: none;
  }

  .wrap .heat-topic .container .scroll {
    overflow: auto;
    padding: 0 0 1rem 0.8rem;
    background-color: #fff;
    border-radius: 0.2rem;
  }

  .wrap .heat-topic .container .scroll .alive {
    display: inline-block;
    /* text-align: center; */
    margin-right: 0.8rem;
    border-radius: 0.2rem;
    /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
    box-shadow: 0px 3px 10px 0px #cac3c3;
  }

  .wrap .heat-topic .container .scroll .alive .text-wrap {
    max-width: 9rem;
    color: #8c8c8c;
    padding: 0.6rem 0.3rem;
    font-weight: bold;
  }

  .wrap .heat-topic .container .scroll .alive .text-wrap .index {
    padding-right: 0.2rem;
  }

  .wrap .heat-topic .topic-more {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
  }

  .wrap .heat-topic .topic-more .action {
    color: #1e87f0;
    font-size: 1rem;
    border: 1px solid #1e87f0;
    padding: 0.5rem 2rem;
  }

  /* 这是话题标签 */
  .wrap .topic-tag {
    margin-top: 0.5rem;
  }

  .wrap .topic-tag .head .head-title {
    font-weight: bold;
    font-size: 1rem;
  }

  .wrap .topic-tag .head .head-more {
    color: #8c8c8c;
    font-size: 0.9rem;
  }

  .wrap .topic-tag .tag-list {
    padding: 0.8rem 0.8rem;
    background-color: #fff;
  }

  .wrap .topic-tag .tag-list .left .content {
    color: #262626;
    line-height: 1.4rem;
    font-size: 0.9rem;
    padding: 0 1rem 0 0;
  }

  .wrap .topic-tag .tag-list .left .time {
    padding-top: 0.8rem;
  }

  .wrap .topic-tag .tag-list .right {
    position: relative;
    text-align: center;
  }

  .wrap .topic-tag .tag-list .right img {
    width: 100%;
    height: 4.5rem;
  }

  .wrap .topic-tag .tag-list .footer {
    padding: 0.5rem 0 0.8rem 0;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: center;
    color: #b2b2b2;
  }

  /* 把最后一个条目的下边框去掉 */
  .wrap .topic-tag .tag-list:nth-last-child(1) .footer {
    border-bottom: none;
  }

  .wrap .topic-tag .tag-list .footer .left .thumb-value {
    padding-right: 1rem;
  }

  .wrap .topic-tag .tag-list .footer .left .thumbed {
    color: #f15f6d;
  }
</style>
