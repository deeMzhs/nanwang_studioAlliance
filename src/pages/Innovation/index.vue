<template>
  <div>
    <van-nav-bar title="创新成果" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <van-search v-model="value" background="#1E87F0" placeholder="请输入创新成果名称" @focus="onSearch" />
    <!-- 筛选 -->
    <div class="screening">
      <span>0条搜索结果</span>
      <span class="span" @click="screening">
        筛选
        <van-icon name="arrow-down" />
      </span>
    </div>
    <!-- 主体内容 -->
    <div class="content">
      <p class="title">工作室成果</p>
      <div class="body">
        <div class="bd-item" v-for="(item, index) in list" :key="index" @click="to(item.id)">
          <img :src="item.imgurl" alt srcset />
          <p>{{ item.desc }}</p>
          <h5>
            <span>{{ item.title }}</span>
            <i>
              <img src="@/assets/img/转发@2x.png" alt @click.stop="share_popup(item.id)" />
            </i>
          </h5>
        </div>
      </div>
    </div>

    <!-- 分享弹窗 -->
    <van-popup v-model="show_share" round position="bottom" :style="{ height: '40%' }">
      <div class="share_title">分享到</div>
      <div class="share_body">
        <div
          class="share_item"
          v-for="(item, index) in shareInfo"
          :key="index"
          @click="share(item.name)"
        >
          <img :src="item.img" alt srcset />
          <span>{{item.name}}</span>
        </div>
      </div>
      <button class="share_btn" @click="show_share = false">取消</button>
    </van-popup>

    <!-- 筛选弹窗 -->
    <van-popup v-model="popShow" position="bottom" :style="{ height: '80%' }">
      <div class="main">
        <div class="pop-block">
          <div class="pop-title">获奖</div>
          <div class="pop-context">
            <div
              v-for="(item,index) in Award"
              :key="index"
              :class="{active:index === currentIndex}"
              @click="tabClick(index)"
            >{{item.context}}</div>
          </div>
        </div>
        <div class="pop-block">
          <div class="pop-title">分类</div>
          <div class="pop-context">
            <div
              v-for="(item,index) in FruitList"
              :key="index"
              :class="{active:item.selected}"
              @click="tabClick1(index)"
            >{{item.context}}</div>
          </div>
        </div>
        <div class="pop-block">
          <div class="pop-title">所在单位</div>
          <div class="pop-context">
            <div
              v-for="(item,index) in CommpoyList"
              :key="index"
              :class="{active:index === currentIndex2}"
              @click="tabClick2(index)"
            >{{item.context}}</div>
          </div>
        </div>
      </div>
      <div style="height: 3.5rem"></div>
      <div style="height: 6rem"></div>
      <van-row class="pop-btn">
        <van-col span="12">
          <van-button
            type="default"
            size="large"
            @click="currentIndex=[],remove(),currentIndex2=[]"
          >重置</van-button>
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
import storage from "@/storage/storage"; // 导入storage
export default {
  components: {
    [Dialog.Component.confirm]: Dialog.confirm
  },
  data() {
    return {
      value: "",
      // 筛选弹窗
      popShow: false,
      // 分享弹窗
      show_share: false,
      share_id: 0,
      list: [
        {
          id: 1,
          title: "世项劳模创新工作室世项劳模创新工作室",
          imgurl: require("@/assets/img/a.jpg"),
          desc:
            "小型发电车改造，节省了人 力抬搬环节，小型发电车改造，节省了人 力抬搬环节，小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 2,
          title: "世项劳模创新工作室世项劳模创新工作室",
          imgurl: require("@/assets/img/a.jpg"),
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 3,
          imgurl: require("@/assets/img/a.jpg"),
          title: "世项劳模创新工作室世项劳模创新工作室",
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 4,
          imgurl: require("@/assets/img/a.jpg"),
          title: "世项劳模创新工作室世项劳模创新工作室",
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 5,
          title: "世项劳模创新工作室世项劳模创新工作室",
          imgurl: require("@/assets/img/a.jpg"),
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 6,
          title: "世项劳模创新工作室世项劳模创新工作室",
          imgurl: require("@/assets/img/a.jpg"),
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        },
        {
          id: 7,
          title: "世项劳模创新工作室世项劳模创新工作室",
          imgurl: require("@/assets/img/a.jpg"),
          desc:
            "小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改"
        }
      ],
      //   弹窗筛选数据
      currentIndex: "",
      currentIndex1: "",
      currentIndex2: "",
      Award: [
        { id: 11, context: "一等奖", selected: false },
        { id: 12, context: "二等奖", selected: false },
        { id: 13, context: "三等奖", selected: false }
      ],
      FruitList: [
        { id: 21, context: "qc创新成果", selected: false },
        { id: 22, context: "输变电成果", selected: false },
        { id: 23, context: "调度保护及综合类成果", selected: false }
      ],
      CommpoyList: [
        { id: 31, context: "广东电网有限责任公司", selected: false },
        { id: 32, context: "广东供电局有限公司", selected: false },
        { id: 33, context: "广西电网有限责任公司", selected: false },
        { id: 34, context: "云南电网有限责任公司", selected: false },
        { id: 35, context: "贵州电网有限责任公司", selected: false },
        { id: 36, context: "海南电网有限责任公司", selected: false }
      ],
      shareInfo: [
        { name: "E-link", img: require("../../assets/img/elink.png") },
        { name: "微信", img: require("../../assets/img/微信.png") },
        { name: "朋友圈", img: require("../../assets/img/朋友圈.png") },
        { name: "QQ", img: require("../../assets/img/QQ.png") }
      ]
    };
  },
  methods: {
    //回到首页
    onClickLeft() {
      this.$router.push("/studioUnionHome");
    },
    // 筛选
    screening() {
      this.popShow = true;
    },
    // 点击分享按钮
    share_popup(id) {
      this.show_share = true;
      this.share_id = id;
      Toast(id);
    },
    // 分享
    share(name) {
      Toast("用" + name + "分享了id为" + this.share_id + "内容");
    },
    // 点击搜索
    onSearch() {
      this.$router.push("InnovationSearch");
    },
    to(id) {
      this.$router.push({
        path: "InnovationDetail",
        query: {
          id
        }
      });
      Toast("id:" + id);
    },
    // 弹窗显示
    changeOff() {
      this.shareShow = true;
    },

    //点击确定后
    addStudioMore() {
      let ret = [];
      ret = this.FruitList.filter(el => el.selected === true);
      ret = ret.concat(this.CommpoyList.filter(el => el.selected === true));
      ret = ret.concat(this.Award.filter(el => el.selected === true));
      ret = ret.map(e => e.context);
      Toast("点击了" + ret.toString());
      this.popShow = false;
    },
    //重置
    remove() {
      this.FruitList.map(val => (val.selected = false));
    },
    //点击tab
    tabClick(index) {
      this.currentIndex = index;
      this.Award[index].selected = !this.Award[index].selected;
    },
    tabClick1(index) {
      this.FruitList[index].selected = !this.FruitList[index].selected;
    },
    tabClick2(index) {
      this.currentIndex2 = index;
      this.CommpoyList[index].selected = !this.CommpoyList[index].selected;
    }
  }
};
</script>

<style scoped>
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.van-icon {
  vertical-align: middle;
}
.van-search__action {
  color: #fff;
}
.screening {
  padding: 0.84rem 1rem;
  border: 0px solid rgba(229, 229, 229, 1);
  background-color: #f8f8f8;
  color: rgb(190, 186, 186);
  font-size: 0.88rem;
}
.screening .span {
  float: right;
  color: #262626;
}
.title {
  font-size: 1rem;
  color: #262626;
  margin: 0.6rem;
  font-weight: 600;
}
.body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.bd-item {
  margin-left: 4%;
  width: 44%;
  margin-bottom: 1rem;
  box-shadow: 0 0.05rem 0.1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  overflow: hidden;
}
.bd-item > p {
  padding: 0.5rem;
  height: 2.8rem;
  font-size: 0.65rem;
  font-weight: 400;
  color: rgba(140, 140, 140, 1);
  line-height: 1.19rem;
  display: -webkit-box;
  font-size: 0.65rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.bd-item img {
  width: 100%;
}

.bd-item h5 {
  margin-top: 0.2rem;
  height: 2rem;
  line-height: 2rem;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0 0.5rem;
  color: #262626;
}
.bd-item h5 span {
  display: inline-block;
  width: 87%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bd-item h5 i {
  float: right;
  margin-top: 0.3rem;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  color: #8c8c8c;
}
.share_title {
  text-align: center;
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1rem;
}
.share_body {
  display: flex;
  justify-content: space-around;
}
.share_item {
  width: 2.5rem;
  text-align: center;
}
.share_item img {
  width: 100%;
}
.share_btn {
  position: fixed;
  display: block;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  background-color: #fff;
  border: 0;
  border-top: 0.1rem solid #f2f2f2;
  text-align: center;
  font-size: 1rem;
}
/* 分界线 */
.main {
  margin: 1.18rem 1rem 0 1rem;
}
.pop-context {
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #262626;
}
.pop-context div {
  padding: 0.55rem 0.7rem;
  border: 0.1rem solid #e5e5e5;
  line-height: 0.875rem;
  font-size: 0.875rem;
  border-radius: 0.125rem;
  text-align: center;
  margin-right: 0.43rem;
  margin-bottom: 0.55rem;
}
.active {
  background-color: #1e87f0;
  color: #ffffff;
}
.pop-block .pop-title {
  color: #262626;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
  display: block;
}
.pop-btn {
  position: fixed;
  background-color: #fff;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
}
.pop-btn .van-col {
  padding: 0.7rem;
  box-sizing: border-box;
}

/* 分享弹窗样式
.share-h{
  text-align: center;
  height: 5rem;
  line-height: 5rem;
  font-size: .875rem;
  font-weight: 700;
  color: #262626;
}
.share-main{
  display: flex;
  justify-content: center;
  align-items: center
} */
</style>
