<template>
  <div class="wrap">
    <van-nav-bar title="关注更多" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="1rem" color @click="showSearchPop" />
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    <van-tabs v-model="tabActive" title-active-color="#278bef" color="#278bef">
      <van-tab :title="'工作室联盟'">
        <div class="choose">
          没有搜索结果
          <span @click="choose">
            筛选
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div class="bd">
          <div class="bd_item" v-for="(item, index) in studioUnionList" :key="index">
            <div class="bd_detail" @click="to(item)">
              <div>
                <img src="../assets/img/photo.jpg" alt />
              </div>
              <p>{{item.name}}</p>
            </div>
            <div
              v-if="item.isFollow == 0"
              @click="studioUnionList[index].isFollow=1"
              class="bd_btn"
            >
              <span>关注</span>
            </div>
            <div v-else class="bd_btn bd_btn1" @click="follow(item,index)">
              <van-icon name="success" />
              <span>已关注</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab :title="'星级工作室'">
        <div class="choose">
          没有搜索结果
          <span @click="choose">
            筛选
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div class="bd">
          <div class="bd_item" v-for="(item, index) in studioUnionList1" :key="index">
            <div class="bd_detail" @click="to(item)">
              <div>
                <img src="../assets/img/photo.jpg" alt />
              </div>
              <p>{{item.name}}</p>
            </div>
            <div
              v-if="item.isFollow == 0"
              @click="studioUnionList[index].isFollow=1"
              class="bd_btn"
            >
              <span>关注</span>
            </div>
            <div v-else class="bd_btn bd_btn1" @click="follow(item,index)">
              <van-icon name="success" />
              <span>已关注</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab :title="'所在单位工作室'">
        <div class="choose">
          没有搜索结果
          <span @click="choose">
            筛选
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div class="bd">
          <div class="bd_item" v-for="(item, index) in studioUnionList" :key="index">
            <div class="bd_detail" @click="to(item)">
              <div>
                <img src="../assets/img/photo.jpg" alt />
              </div>
              <p>{{item.name}}</p>
            </div>
            <div
              v-if="item.isFollow == 0"
              @click="studioUnionList[index].isFollow=1"
              class="bd_btn"
            >
              <span>关注</span>
            </div>
            <div v-else class="bd_btn bd_btn1" @click="follow(item,index)">
              <van-icon name="success" />
              <span>已关注</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 弹窗 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '80%' }">
      <div class="choose1">筛选</div>
      <van-tabs v-model="tabActive1" animated title-active-color="#278bef" color="#278bef">
        <van-tab :title="'所在单位'">
          <van-collapse v-model="activeName" v-for="i of list" :key="i.id" accordion>
            <van-collapse-item :name="i.id">
              <template #title>
                <van-checkbox
                  class="checkbox"
                  v-model="i.checked"
                  @click.stop="handclick(i)"
                  shape="square"
                  label-disabled
                ></van-checkbox>
                {{i.name}}
              </template>
              <van-checkbox-group
                v-model="result"
                :ref="i.id"
                class="group"
                @change="handChangeclick(i)"
              >
                <div class="item" v-for="i1 of i.children" :key="i1.id">
                  <van-checkbox :name="i1.id" shape="square">{{i1.name}}</van-checkbox>
                </div>
              </van-checkbox-group>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab :title="'工作室联盟'">
          <van-collapse v-model="activeName" v-for="i of list" :key="i.id" accordion>
            <van-collapse-item :name="i.id">
              <template #title>
                <van-checkbox
                  class="checkbox"
                  v-model="i.checked"
                  @click.stop="handclick(i)"
                  shape="square"
                  label-disabled
                ></van-checkbox>
                {{i.name}}
              </template>
              <van-checkbox-group
                v-model="result"
                :ref="i.id"
                class="group"
                @change="handChangeclick(i)"
              >
                <div class="item" v-for="i1 of i.children" :key="i1.id">
                  <van-checkbox :name="i1.id" shape="square">{{i1.name}}</van-checkbox>
                </div>
              </van-checkbox-group>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab :title="'所在星级'">
          <van-collapse v-model="activeName" v-for="i of list" :key="i.id" accordion>
            <van-collapse-item :name="i.id">
              <template #title>
                <van-checkbox
                  class="checkbox"
                  v-model="i.checked"
                  @click.stop="handclick(i)"
                  shape="square"
                  label-disabled
                ></van-checkbox>
                {{i.name}}
              </template>
              <van-checkbox-group
                v-model="result"
                :ref="i.id"
                class="group"
                @change="handChangeclick(i)"
              >
                <div class="item" v-for="i1 of i.children" :key="i1.id">
                  <van-checkbox :name="i1.id" shape="square">{{i1.name}}</van-checkbox>
                </div>
              </van-checkbox-group>
            </van-collapse-item>
          </van-collapse>
        </van-tab>
      </van-tabs>
      <div style="height: 6rem"></div>
      <van-row class="btn">
        <van-col span="12">
          <van-button type="default" size="large" @click="result=[]">重置</van-button>
        </van-col>
        <van-col span="12">
          <van-button type="info" size="large" @click="addStudioMore">确定</van-button>
        </van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
import { joinedActivityList } from "@/request/api"; // 导入api接口
import storage from "../storage/storage"; // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: "StudioMoreHome",
  // components:{
  //   oneLoad
  // },
  data() {
    return {
      activeName: [],
      show: false,
      tabActive: 0,
      tabActive1: 0,
      result: [],
      studioUnionList: [
        {
          name: "A协会协会反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会协会反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      studioUnionList1: [
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会协会反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      startStudioList: [
        {
          name: "星级工作室反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室2",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室3",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室4",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室5",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      departStudioList: [
        {
          name: "所在单位工作室1反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室2",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室3",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室4",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室5",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      list: [
        {
          id: 1,
          checked: false,
          name: "广东电网有限公司",
          children: [
            {
              id: 11,
              name: "广州电网公司"
            },
            {
              id: 12,
              name: "深圳电网公司"
            },
            {
              id: 13,
              name: "珠海电网公司"
            }
          ]
        },
        {
          id: 2,
          checked: false,
          name: "广东电网有限公司",
          children: [
            {
              id: 21,
              name: "广州电网公司"
            },
            {
              id: 22,
              name: "广州电网公司"
            },
            {
              id: 23,
              name: "广州电网公司"
            }
          ]
        }
      ]
    };
  },
  created() {
    // this.joinedActivityList();
    this.tabActive = this.$route.query.tab;
    this.setLoginStorage();
  },
  methods: {
    setLoginStorage() {
      storage.set("list", 999);
    },
    // h5与app交互较简单，以url跳转的形式即可，将app需要的参数以query的形式携带在url后面，如：
    setUserInfo(id) {
      window.location.href = `http://appName.local.com?action=webPushUserInfo&id=${id}`; // es6的字符串拼接写法
      // 注释：可以在 H5 的重定向链接后面拼接参数，app 获取后进行解析，推至内部详情页
      window.location.href =
        'com.English.AJ://?extra={"type":"3","h5_url":"[https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle](https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle)"}';
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击放大镜，搜索弹框出现
    showSearchPop() {
      // this.isSearchPop = true;
    },
    // 全部未关注工作室联盟
    allStudioUnion() {
      // this.$router.push("/photoAlbum");
    },

    // 进入已关注/未关注工作室
    studioUnion(item) {
      this.$router.push({
        path: "/studioUnion",
        query: {
          isFollow: item.isFollow,
          studioName: item.name
        }
      });
    },
    // 弹窗筛选框
    choose() {
      this.show = true;
    },

    //点击1级checkbox框
    handclick(i) {
      let newIndexs = i.children.map(val => val.id);

      if (i.checked == false) {
        this.result.push(
          ...newIndexs.filter(el => this.result.indexOf(el) === -1)
        );
      } else {
        this.result = this.result.filter(val => newIndexs.indexOf(val) === -1);
      }
    },

    //点击确定按钮
    addStudioMore() {
      let msg =
        this.result.length != 0 ? this.result.join(",") : "请选择关注内容";
      Toast(msg);
      this.show = false;
    },
    //点击2级checkbox框
    handChangeclick(i) {
      let newIndexs = i.children.map(val => val.id);
      //判断是否全选
      i.checked = newIndexs.find(el => this.result.indexOf(el) === -1)
        ? false
        : true;
    },
    //取消关注
    follow(item, index) {
      Dialog.confirm({
        message: "确认取消关注" + item.name
      })
        .then(() => {
          Toast("取消关注成功");
          this.studioUnionList[index].isFollow = 0;
        })
        .catch(() => {
          // Toast("已取消操作");
        });
    },
    to(item) {
      this.$router.push({
        path: "/studioUnion",
        query: {
          id: item.id,
          isFollow: item.isFollow,
          studioName: item.name
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.van-nav-bar .van-nav-bar {
  background-color: #1e87f0;
}
.van-icon {
  vertical-align: middle;
}
.wrap {
  background-color: #fff;
}
.wrap .grid-wrap {
  background-color: #fff;
}
.wrap .grid-wrap .grid-item {
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  /* box-shadow: 0px 0px 10px 0px #ccc; */
  /* border: 1px solid #E5E5E5; */
}
.wrap .grid-wrap p {
  padding: 0.4rem;
  color: #262626;
}
.wrap .grid-wrap .action-wrap .unfollow {
  background-color: #1e87f0;
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}
.wrap .grid-wrap .action-wrap .followed {
  background-color: rgb(219, 240, 30);
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}

.bd {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.bd_item {
  width: 20%;
  margin-left: 4%;
  margin-top: 0.5rem;
}
.bd_detail {
  border-radius: 0.3rem;
  overflow: hidden;
  background-color: #fff;
  padding-bottom: 0.7rem;
  box-shadow: 0rem 0rem 1rem 0rem rgba(89, 89, 89, 0.3);
}
.bd_detail div img {
  width: 100%;
}
.bd_detail > p {
  padding: 0.7rem 0.4rem;
  display: -webkit-box;
  font-size: 0.75rem;
  color: rgba(38, 38, 38, 1);
  -webkit-box-orient: vertical;
  height: 2.6rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.bd_btn {
  width: 80%;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  color: #fff;
  margin: 0.5rem 0;
  background: rgba(30, 135, 240, 1);
  border-radius: 0.2rem;
  margin-left: 10%;
}
.bd_btn1 {
  background: rgb(193, 236, 93);
}

.choose {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.84rem 1.03rem;
  background-color: #f5f5f5;
  margin-bottom: 0.5rem;
  color: #8b8b8b;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  span {
    color: #262626;
  }
}
.choose1 {
  height: 2.5rem;
  padding-left: 1.2rem;
  line-height: 2.5rem;
  text-align: left;
  font-size: 1.2rem;
  border-bottom: 0.05rem solid #f2f2f2;
  color: #262626;
}

.group .item {
  padding: 0.6rem;
  padding-left: 1.8rem;
  border-bottom: 0.05rem solid #f2f2f2;
}
.group :nth-child(1) {
  padding-top: 0;
}
.checkbox {
  display: inline-block;
  margin-right: 0.2rem;
  vertical-align: middle;
}
.btn {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
}
.btn .van-col {
  padding: 0.7rem;
  box-sizing: border-box;
}
</style>
