<template>
  <div>
    <van-nav-bar title="快速找人" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="1rem" color @click="toPersonal" />
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>

    <van-tabs v-model="tabActive" title-active-color="#278bef" color="#278bef">
      <van-tab :title="'所在单位'">
        <van-collapse accordion v-model="activeNames" :border="false">
          <van-collapse-item
            :title="item.name"
            :name="index"
            v-for="(item, index) in list"
            :key="index"
          >
            <van-collapse accordion :border="false" v-model="activeNames_item">
              <van-collapse-item
                class="indext"
                v-for="(item1, index) in item.childlist"
                :key="index"
                :title="item1.name"
                :name="item1.id"
              >
                <div
                  class="user"
                  @click="toPersonal"
                  v-for="(item2, index) in item1.children"
                  :key="index"
                >
                  <div class="user_img">
                    <img src="@/assets/img/join-portrait.jpg" alt />
                  </div>
                  <span class="username">{{item2.name}}</span>
                </div>
              </van-collapse-item>
            </van-collapse>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab :title="'所在联盟'">没有搜索结果</van-tab>
      <van-tab :title="'工作室星级'">没有搜索结果</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 0,
      activeNames: [],
      activeNames_item: [],
      list: [
        {
          id: 1,
          name: "广东电网有限公司",
          childlist: [
            {
              id: 11,
              name: "张三创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "lisi"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "wangwu"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "cheniu"
                }
              ]
            },
            {
              id: 12,
              name: "张三封创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "hongqi"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "wangba"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "baijiu"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "chenshi"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "珠海电网有限公司",
          childlist: [
            {
              id: 13,
              name: "张三创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                }
              ]
            },
            {
              id: 14,
              name: "张三创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "深圳电网有限公司",
          childlist: [
            {
              id: 15,
              name: "张三创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                }
              ]
            },
            {
              id: 16,
              name: "张三创新工作室",
              children: [
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                },
                {
                  iid: 1,
                  imgurl: require("@/assets/img/join-portrait.jpg"),
                  name: "张山"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    toPersonal() {
      this.$router.push("PersonalPage");
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  color: #000;
  padding: 0.3rem 2.5rem;
  border-bottom: 1px solid rgb(245, 242, 242);
}
.user_img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
}
.username {
  flex: 1;
  box-sizing: border-box;
  margin-top: 0.3rem;
  padding-left: 1rem;
}

/deep/.van-collapse-item__content {
  padding: 0;
}
/deep/.van-cell {
  color: #040404;
  font-size: 1rem;
  font-weight: 500;
}
.indext {
  padding-left: 2rem;
}
.user:nth-last-of-type(1) {
  border-bottom: 0px solid rgba(229, 229, 229, 1);
}
</style>