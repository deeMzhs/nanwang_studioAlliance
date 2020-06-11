<template>
  <div class="wrap">
    <van-nav-bar title="职创e联" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <span @click="toPersonal">
          <van-icon name="fire-o" />67
        </span>
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>

    <div class="banner">
      <div class="ban_title">通知 公告</div>
      <div class="ban_desc">这是一条通知这是一条通知这是一条通知 这是一条通知</div>
      <div class="ban_icon">
        <van-icon name="arrow" />
      </div>
    </div>

    <div>
      <div class="xm_img">
        <img src="@/assets/img/snipaste20200611_085434.jpg" alt />
      </div>
      <div class="xm_img" @click="$router.push('/studioMoreHome')">
        <img src="@/assets/img/snipaste20200611_085434.jpg" alt />
      </div>
    </div>

    <div class="home_icon">
      <div class="innovation" @click="to('InnovationIndex')">
        <van-icon size="2rem" name="friends-o" />创新成果
      </div>
      <div @click="to('technologyHome')">
        <van-icon size="2rem" name="friends-o" />技术门诊
      </div>
      <div @click="to('Findpeople')">
        <van-icon size="2rem" name="friends-o" />快速找人
      </div>
    </div>
    <!--
    <van-row class="module-wrap">
      <van-col span="6" class="module" @click="to('InnovationIndex')">
        <img src="../assets/img/module.png" alt />
        <p>创新成果</p>
      </van-col>
      <van-col span="6" class="module" @click="to('Innovate')">
        <img src="../assets/img/module.png" alt />
        <p>创新培训</p>
      </van-col>
      <van-col span="6" class="module" @click="to('technologyHome')">
        <img src="../assets/img/module.png" alt />
        <p>技术门诊</p>
      </van-col>
      <van-col span="6" class="module">
        <img src="../assets/img/module.png" alt />
        <p>快速找人</p>
      </van-col>
    </van-row>-->

    <div class="new-activity">
      <van-cell class="head">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <p class="head-title">活动报名</p>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span class="head-more" @click="moreActivity()">更多</span>
        </template>
      </van-cell>
      <van-row
        class="activity-list"
        v-for="(item, i) in activityList"
        :key="i"
        @click="$router.push('DynamicDetail')"
      >
        <van-col span="16" class="left">
          <!-- vant内置样式，超出用...表示：van-ellipsis -->
          <div class="van-multi-ellipsis--l2 content">{{item.name}}</div>
          <div class="time">2020.05.24-2020.05.31</div>
        </van-col>
        <van-col span="8" class="right">
          <img :src="item.img" alt />
          <div v-if="item.isJoin == 1" class="status joined-status">已报名</div>
          <div v-if="item.isJoin == 2" class="status unjoin-status">进行中</div>
          <div v-if="item.isJoin == 0" class="status unjoin1-status">未参与</div>
        </van-col>
      </van-row>
    </div>

    <!-- 已加入/关注 -->
    <div v-if="followList.length !== 0" class="follow-content">
      <van-cell class="head">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <p class="head-title">我加入/关注的</p>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span class="head-more" @click="followMore()">关注更多</span>
        </template>
      </van-cell>
      <van-row
        class="follow-list"
        v-for="(item, i) in followList"
        :key="i"
        @click="studioUnion(item)"
      >
        <van-col span="4" class="img">
          <img :src="item.img" alt />
        </van-col>
        <van-col span="20" class="main">
          <div class="first">
            <!-- vant内置样式，超出用...表示：van-ellipsis -->
            <div class="van-ellipsis title">{{item.name}}</div>
            <div class="join">加入群聊</div>
          </div>
          <div class="second">
            <div class="second_left">
              <div class="second_img" v-for="(item, index) in 9" :class="{mr: index !== 0}">
                <img src="../assets/img/join-portrait.jpg" alt />
              </div>
            </div>
            <p class="second_right">222人已加入 ></p>
          </div>
        </van-col>
        <van-col span="24" class="footer">{{item.desc}}</van-col>
      </van-row>
    </div>

    <!-- 未加入/关注 -->
    <div v-if="followList.length === 0" class="unfollow-content">
      <div class="tip">你还没关注任何工作室，去关注看看吧</div>
      <!-- 工作室联盟 -->
      <div class="studio-union">
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="head-title">工作室联盟</span>
          </template>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <span class="head-more" @click="allStudioUnion">全部</span>
          </template>
        </van-cell>
        <div class="container">
          <div class="scroll" scrollY="true">
            <div class="alive" v-for="(item, i) in studioUnionList" :key="i">
              <div class="msg">
                <div class="img-wrap">
                  <img class="img" :src="item.img" alt />
                </div>
                <!-- vant内置样式，超出用...表示：van-ellipsis -->
                <p>{{item.name}}</p>
              </div>
              <div class="action-wrap">
                <span class="unfollow">关注</span>
                <!--<span v-else class="followed"> <van-icon name="success" />已关注</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 星级工作室 -->
      <div class="studio-union">
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="head-title">星级工作室</span>
          </template>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <span class="head-more" @click="allStartStudio">全部</span>
          </template>
        </van-cell>
        <div class="container">
          <div class="scroll" scrollY="true">
            <div class="alive" v-for="(item, i) in startStudioList" :key="i">
              <div class="msg">
                <div class="img-wrap">
                  <img class="img" :src="item.img" alt />
                </div>
                <!-- vant内置样式，超出用...表示：van-ellipsis -->
                <p>{{item.name}}</p>
              </div>
              <div class="action-wrap">
                <span class="unfollow">关注</span>
                <!--<span v-else class="followed"> <van-icon name="success" />已关注</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 所在单位工作室 -->
      <div class="studio-union">
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="head-title">所在单位工作室</span>
          </template>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <span class="head-more" @click="allDepartStudio">全部</span>
          </template>
        </van-cell>
        <div class="container">
          <div class="scroll" scrollY="true">
            <div class="alive" v-for="(item, i) in departStudioList" :key="i">
              <div class="msg">
                <div class="img-wrap">
                  <img class="img" :src="item.img" alt />
                </div>
                <!-- vant内置样式，超出用...表示：van-ellipsis -->
                <p>{{item.name}}</p>
              </div>
              <div class="action-wrap">
                <span class="unfollow">关注</span>
                <!--<span v-else class="followed"> <van-icon name="success" />已关注</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { joinedActivityList, recruitTest } from "@/request/api"; // 导入api接口
import storage from "../storage/storage"; // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: "StudioUnionHome",
  // components:{
  //   oneLoad
  // },
  data () {
  return {
    isDot: true,
    userInfo: {
      id: 0,
      name: '总监'
    },
    followList: [
      {id: 1, name: '输电专业工作室联盟1', footer: '张三发不了动态', img: require('../assets/img/joined-studio-union.jpeg')},
      {id: 2,name: '输电专业工作室联盟2', footer: '李四分享了照片“中山湖公园”', img: require('../assets/img/joined-studio-union.jpeg')},
      {id: 3,name: '输电专业工作室联盟3', topfooteric: '李四分享了照片“中山湖公园”', img: require('../assets/img/joined-studio-union.jpeg')},
    ],
    studioUnionList: [
      {name: 'A协会、C协会反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: 'B协会、C协会', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: 'A协会、B协会', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: 'A协会、C协会', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: 'B协会、C协会', isFollow: 0, img: require('../assets/img/photo.png')}
    ],
    startStudioList: [
      {name: '星级工作室反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: '星级工作室2', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: '星级工作室3', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: '星级工作室4', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: '星级工作室5', isFollow: 0, img: require('../assets/img/photo.png')}
    ],
    departStudioList: [
      {name: '所在单位工作室1反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: '所在单位工作室2', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: '所在单位工作室3', isFollow: 0, img: require('../assets/img/photo.png')},
      {name: '所在单位工作室4', isFollow: 1, img: require('../assets/img/photo.png')},
      {name: '所在单位工作室5', isFollow: 0, img: require('../assets/img/photo.png')}
    ],
    activityList: [
      {
        name:
          "输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同",
        time: "2020/04/09",
        isJoin: 1,
        man: "876",
        img: require("../assets/img/photo.jpg")
      },
      {
        name:
          "输电专业工作室联盟2输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同",
        time: "2020/04/09",
        isJoin: 0,
        man: "333",
        img: require("../assets/img/joined-studio-union.jpeg")
      },
      {
        name:
          "输电专业工作室联盟3输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同",
        time: "2020/04/09",
        isJoin: 2,
        man: "876",
        img: require("../assets/img/joined-studio-union.jpeg")
      }
    ]
  }
  },
  created() {
    // this.joinedActivityList();
    // this.recruitTest();
    this.setLoginStorage();
  },
  mounted() {
    //把js方法暴露给app
    window["loginData"] = res => {
      this.loginData(res);
    };
    // window["loginData"] = this.loginData;
  },
  methods: {
    toPersonal() {
      this.$router.push(
          {
            name: 'activeValue',
            params: {
              userInfo: this.userInfo
            }
          });
    },
    setLoginStorage() {
      storage.set("list", 999);
    },
    // 与原生APP人员约定的方法
    loginData(res) {
      console.log(res); //原生返回的数据
      alert(res);
    },
    // h5与app交互较简单，以url跳转的形式即可，将app需要的参数以query的形式携带在url后面，如：
    setUserInfo(id) {
      window.location.href = `http://appName.local.com?action=webPushUserInfo&id=${id}`; // es6的字符串拼接写法
      // 注释：可以在 H5 的重定向链接后面拼接参数，app 获取后进行解析，推至内部详情页
      window.location.href =
        'com.English.AJ://?extra={"type":"3","h5_url":"[https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle](https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle)"}';
    },
    // 招聘接口测试
    recruitTest() {
      // 调用api接口，并且提供了两个参数
      recruitTest({})
        .then(res => {
          // 获取数据成功后的其他操作
          console.log(res);
          // alert(res.data.codeCipher);
          Toast(res.data.codeCipher);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 封装式请求
    // joinedActivityList() {
    //   // 调用api接口，并且提供了两个参数
    //   joinedActivityList({}).then(res => {
    //     // 获取数据成功后的其他操作
    //     console.log(res);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // },

    // 直接请求
    // joinedActivityList(){
    //   this.$axios.get('apis/api-gateway/zhaopin-content/webAuthCode').then((response)=>{
    //     console.log(response);
    //   }).catch((response)=>{
    //     console.log(response);
    //   })
    // },

    // 云平台接口(直接请求)
    // joinedActivityList(){
    //   this.$axios.post('apis/cloudMember/findMyCloud/' + '9F33FA581E894771AFACB5441522D1CA',{})
    //   .then((response)=>{
    //     console.log(response);
    //   }).catch((response)=>{
    //     console.log(response);
    //   })
    // },

    // 封装式请求
    // joinedActivityList() {
    //   // 调用api接口，并且提供了两个参数
    //   joinedActivityList({
    //     userId: '9F33FA581E894771AFACB5441522D1CA'
    //   }).then(res => {
    //     // 获取数据成功后的其他操作
    //     console.log(res);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // },
    articlesToDetail(id, $event) {
      console.log($event.target.className);
      if ($event.target.className != "down") {
        this.$router.push("/pictureDetail?id=" + id);
      }
    },
    onClickLeft() {
      this.$router.push("/");
    },
    // 关注更多
    followMore() {
      this.$router.push("/studioMoreHome");
      // Toast('关注更多');
    },
    // 进入已关注工作室
    studioUnion(item) {
      this.$router.push(
        {
          path: '/studioUnion',
          query: {
            id: item.id,
            isFollow: 1,
            studioName: item.name
          }
      });
    },
    // 全部未关注工作室联盟
    allStudioUnion() {
      this.$router.push({
        path: "/studioMoreHome",
        query: {
          tab: 0
        }
      });
    },
    // 全部未关注星级工作室
    allStartStudio() {
      this.$router.push({
        path: "/studioMoreHome",
        query: {
          tab: 1
        }
      });
    },
    // 全部未关注星级工作室
    allDepartStudio() {
      this.$router.push({
        path: "/studioMoreHome",
        query: {
          tab: 2
        }
      });
    },
    //跳转

    to(path) {
      this.$router.push(path);
    }
    // activitScan() {
    //   this.$router.push("/activityScan")
    // },
    // communicate() {
    //   this.$router.push("/communicate")
    // },
    // associationMore() {
    //   this.$router.push("/associationMore")
    // },
    // // 进入某协会
    // goAssociation(item) {
    //   this.$router.push(
    //     {
    //       path: '/association',
    //       query: {
    //         name: item.name,
    //         id: item.id
    //       }
    //     }
    //   )
    // },
    // // 进入群聊
    // goChat() {
    //   Toast('跳转至elink聊天');
    // },
    // goActivity() {
    //   this.$router.push("/activityDetail")
    // }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/deep/.van-nav-bar__right {
  color: #fff;
}

.wrap {
  background-color: #f9f9f9;
}
// .wrap .module-wrap {
//   background-color: #fff;
//   padding: 1rem 0 0.5rem 0;
// }
// .wrap .module-wrap .module {
//   text-align: center;
// }
// .wrap .module-wrap .module img {
//   width: 3rem;
//   border-radius: 3rem;
// }
// .wrap .module-wrap .module p {
//   font-size: 0.8rem;
//   padding-top: 0.3rem;
// }
.wrap .follow-content {
  margin-top: 0.5rem;
}
.wrap .follow-content .head .head-title {
  color: #262626;
  font-size: 1rem;
  font-weight: bold;
}
.wrap .follow-content .head .head-more {
  color: #1e87f0;
  font-size: 0.9rem;
  font-weight: bold;
}
.wrap .follow-content .follow-list {
  padding: 0.8rem 0.8rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
}
.wrap .follow-content .follow-list .main {
}
.wrap .follow-content .follow-list .main .first {
  padding: 0.1rem 0 0.1rem 0.3rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
}
.wrap .follow-content .follow-list .main .first .title {
  font-size: 0.9rem;
  font-weight: bold;
}
.wrap .follow-content .follow-list .main .first .join {
  width: 5rem;
  text-align: center;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.25rem 0.65rem;
  background-color: #1e87f0;
  border-radius: 0.2rem;
}
.wrap .follow-content .follow-list .main .second {
  padding: 0.4rem 0 0.1rem 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .second_left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    .second_img {
      width: 1.57rem;
      height: 1.57rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .mr {
      margin-left: -0.35rem;
    }
  }
  p {
    font-size: 0.75rem;
    color: #262626;
  }
}

.wrap .follow-content .follow-list .footer {
  position: relative;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e5e5;
}
.wrap .follow-content .follow-list .footer div {
  position: absolute;
  top: 60%;
  left: 0;
  color: #f7d074;
  padding-right: 2rem;
  height: 1rem;
  background: rgb(250, 199, 80);
  opacity: 0.3;
}

.wrap .follow-content .follow-list .footer span {
  color: #f5c656;
  font-weight: 600;
}

/* 未关注/加入 */

.wrap .unfollow-content .tip {
  color: #b2b2b2;
  font-size: 0.9rem;
  margin: 1.2rem 0 0.5rem 1rem;
}
.wrap .unfollow-content .studio-union {
  background-color: #fff;
  margin-bottom: 0.6rem;
  padding-bottom: 1rem;
}
/* 去掉<van-cell>标签默认的下边框 */
.wrap .unfollow-content .studio-union ::after {
  border-bottom: none;
}
.wrap .unfollow-content .studio-union .head-title {
  color: #262626;
  font-weight: bold;
  font-size: 1rem;
}
.wrap .unfollow-content .studio-union .head-more {
  font-size: 0.8rem;
  color: #595959;
}
.wrap .unfollow-content .studio-union .container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

.scroll {
  padding: 0 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  overflow: scroll;
}

.alive {
  margin-right: 0.75rem;
  .msg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 0.5rem 0rem rgba(89, 89, 89, 0.3);
    margin-bottom: 1.41rem;
    .img-wrap {
      width: 4.5rem;
      height: 3.66rem;
      margin-bottom: 0.53rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      width: 3.69rem;
      height: 1.91rem;
      overflow: hidden;
      font-size: 0.75rem;
      white-space: pre-wrap;
      text-overflow: ellipsis;
      margin-bottom: 0.59rem;
    }
  }
  .action-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      /*width:3.19rem;*/
      padding: 0 0.88rem;
      height: 1.5rem;
      background: rgba(30, 135, 240, 1);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.13rem;
      font-size: 0.75rem;
    }
  }
}

.van-icon {
  vertical-align: middle;
  padding-right: 0.2rem;
}

// 最新公告部分
.banner {
  display: flex;
  background-color: #fff;
  margin-bottom: 0.66rem;
}
.ban_title {
  font-size: 1.2rem;
  font-weight: 900;
  margin: 1rem;
  border-right: 1px solid rgba(229, 229, 229, 1);
  width: 3.5rem;
}
.ban_desc {
  height: 2.09rem;
  padding-top: 1rem;
  line-height: 1.5rem;
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 1);
  flex: 1;
}
.ban_icon {
  width: 2.5rem;
  height: 3.5rem;
  text-align: center;
  height: 100%;
  padding-top: 1.78rem;
  font-weight: 900;
}
.ban_icon .van-icon {
  vertical-align: middle;
}

// 两个图片部分
.xm_img {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem 0;
  background-color: #fff;
}
.xm_img img {
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0rem rgba(177, 175, 175, 0.2);
}

// 三个按钮
.home_icon {
  display: flex;
  margin-bottom: 0.66rem;
  padding: 0.88rem 0;
  text-align: center;
  background-color: #fff;
  line-height: 3.59rem;
  justify-content: space-evenly;
  color: #fff;
}
.home_icon .innovation {
  width: 6.5rem;
  height: 3.59rem;
  background: linear-gradient(
    134deg,
    rgba(122, 176, 249, 1) 0%,
    rgba(35, 138, 240, 1) 100%
  );
  border-radius: 0.5rem;
}
.home_icon :nth-child(2) {
  width: 6.5rem;
  height: 3.59rem;
  background: linear-gradient(
    134deg,
    rgba(249, 201, 101, 1) 0%,
    rgba(247, 134, 4, 1) 100%
  );
  border-radius: 0.5rem;
}
.home_icon :nth-child(3) {
  width: 6.5rem;
  height: 3.59rem;
  background: linear-gradient(
    134deg,
    rgba(160, 166, 246, 1) 0%,
    rgba(123, 132, 239, 1) 99%
  );
  border-radius: 0.5rem;
}

/* 最新活动 */
.wrap .new-activity {
  margin-top: 0.5rem;
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
  color: rgba(140, 140, 140, 1);
}
.wrap .new-activity .activity-list .right {
  position: relative;
  text-align: center;
}
.wrap .new-activity .activity-list .right img {
  width: 100%;
  border-radius: 0.2rem;
  height: 4.5rem;
}
.wrap .new-activity .activity-list .right .status {
  position: absolute;
  right: 0;
  bottom: 0.2rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  background-color: #36b21d;
  border-radius: 0.1rem;
}
.wrap .new-activity .activity-list .right .joined-status {
  background-color: #36b21d;
}
.wrap .new-activity .activity-list .right .unjoin-status {
  background-color: #f5c656;
}
.wrap .new-activity .activity-list .right .unjoin1-status {
  background-color: rgba(178, 178, 178, 1);
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

.activity-list {
  border-bottom: 0.05rem solid rgba(229, 229, 229, 1);
}
</style>
