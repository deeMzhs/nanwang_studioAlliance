<template>
  <div class="wrap">
    <!-- <van-nav-bar title="Triz创新培训" fixed left-arrow @click-left="onClickLeft"></van-nav-bar> -->
    <div class="innovate">
      <div class="title">
        <div>创新培训</div>
        <span>更多</span>
      </div>
      <div
        class="innovate_item"
        v-for="(item, index) in list"
        :key="index"
        @click="innovate(item.id)"
      >
        <div class="innovate_item_right">
          <div class="item_title">{{item.title}}</div>
          <div class="source">{{item.name}}</div>
        </div>
        <div class="innovate_item_left">
          <img :src="item.imgUrl" alt />
          <div class="Classroom">第{{convertToChinaNum(index+1)}}课</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        },
        {
          id: 2,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        },
        {
          id: 3,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        },
        {
          id: 4,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        },
        {
          id: 5,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        },
        {
          id: 6,
          title: "创新与TRIZ启蒙-创新方法（TRIZ） 理论及应用",
          imgUrl: require("@/assets/img/photo.jpg"),
          name: "xxx工作室"
        }
      ]
    };
  },

  methods: {
    onClickLeft() {
      return this.$router.push("/");
    },
    innovate(id) {
      Toast("id:" + id);
    },
    // 数字转中文
    convertToChinaNum(num) {
      let arr1 = new Array(
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九"
      );
      let arr2 = new Array(
        "",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿",
        "十",
        "百",
        "千",
        "万",
        "十",
        "百",
        "千",
        "亿"
      ); //可继续追加更高位转换值
      if (!num || isNaN(num)) {
        return "零";
      }
      let english = num.toString().split("");
      let result = "";
      for (let i = 0; i < english.length; i++) {
        let des_i = english.length - 1 - i; //倒序排列设值
        result = arr2[i] + result;
        let arr1_index = english[des_i];
        result = arr1[arr1_index] + result;
      } //将【零千、零百】换成【零】 【十零】换成【十】
      result = result.replace(/零(千|百|十)/g, "零").replace(/十零/g, "十"); //合并中间多个零为一个零
      result = result.replace(/零+/g, "零"); //将【零亿】换成【亿】【零万】换成【万】
      result = result.replace(/零亿/g, "亿").replace(/零万/g, "万"); //将【亿万】换成【亿】
      result = result.replace(/亿万/g, "亿"); //移除末尾的零
      result = result.replace(/零+$/, ""); //将【零一十】换成【零十】 //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十 //将【一十】换成【十】
      result = result.replace(/^一十/g, "十");
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: #f8f8f8;
}
.innovate {
  background-color: #fff;
  .title{
    color: #262626;
    font-weight: 600;
    font-size: 1.06rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0rem 1rem .8rem 1rem;
    padding-top:1rem;
    span {
      font-size: 0.88rem;
      font-weight: 400;
      padding-left: 1.44rem;
      color: rgba(89, 89, 89, 1);
    }
  }
}
.innovate_item {
  box-sizing: border-box;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  display: flex;
  border-bottom: 0.05rem solid rgb(238, 236, 236);
}
.innovate_item_left {
  width: 7.1rem;
  height: 4.5rem;
  position: relative;
  border-radius: 0.2rem;
  overflow: hidden;
}
.innovate_item_left img{
  width: 100%;
  height: 100%;
}
.innovate_item_left .Classroom {
  position: absolute;
  right: 0;
  bottom: 0.05rem;
  width: 4rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  color: #fff;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: rgb(45, 148, 252);
}

.innovate_item_right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.5rem;
}
.innovate_item_right .item_title {
  font-weight: 400;
  font-size: 1rem;
}
.innovate_item_right .source {
  color: #b2b2b2;
}
</style>