<template>
  <div class="wrap">
    <van-nav-bar title="投票详情" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="name">这是投票名称工作室联盟</div>
    <div class="data">2020-01-01 至 2020-02-01</div>
    <!-- 图文投票 -->
    <div v-if="graphic">
      <!-- 未投票 -->
      <div class="bd">
        <div class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.imgUrl" alt />
          <!-- 单选 -->
          <div
            class="title"
            v-if="type=='only'"
            @click="ative=item.id"
            :class="{ative:ative==item.id}"
          >{{item.title}}</div>
          <!-- 多选 -->
          <div
            class="title"
            v-if="type=='many'"
            @click="check(item.id)"
            :class="{ative:ischeck(item.id)}"
          >{{item.title}}</div>
        </div>
        <div class="users">30人已参与投票</div>
      </div>
    </div>

    <!-- 文本投票 -->
    <div v-if="!graphic">
      <!-- 未投票 -->
      <div class="bd">
        <div class="item" v-for="(item, index) in list" :key="index">
          <!-- 单选 -->
          <div
            class="title"
            v-if="type=='only'"
            @click="ative=item.id"
            :class="{ative:ative==item.id}"
          >{{item.title}}</div>
          <!-- 多选 -->
          <div
            class="title"
            v-if="type=='many'"
            @click="check(item.id)"
            :class="{ative:ischeck(item.id)}"
          >{{item.title}}</div>
        </div>
        <div class="users">30人已参与投票</div>
      </div>
    </div>

    <div class="btn">
      <van-button type="info" size="large" @click="btn">投票</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      // 单选活跃
      ative: 0,
      // 多选活跃
      atives: [],
      // 单选或多选类型(only,many)
      type: "only",
      // 投票类型（图文，文本）
      graphic: true,
      list: [
        {
          id: 1,
          imgUrl: require("@/assets/img/joined-studio-union.jpeg"),
          title: "选项文案1"
        },
        {
          id: 2,
          imgUrl: require("@/assets/img/joined-studio-union.jpeg"),
          title: "选项文案2"
        },
        {
          id: 3,
          imgUrl: require("@/assets/img/joined-studio-union.jpeg"),
          title: "选项文案3"
        },
        {
          id: 4,
          imgUrl: require("@/assets/img/joined-studio-union.jpeg"),
          title: "选项文案4"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    btn() {
      if (this.type == "only") {
        Toast(this.ative);
      } else if (this.type == "many") {
        // console.log(this.atives);
        Toast(this.atives.toString());
      }
    },
    check(id) {
      if (this.atives.indexOf(id) > -1) {
        this.atives = this.atives.filter(el => id != id);
      } else {
        this.atives.push(id);
      }
    },
    ischeck(id) {
      return this.atives.indexOf(id) > -1;
    }
  },
  computed: {}
};
</script>

<style  scoped>
.progress {
  width: 78%;
  height: 0.5rem;
  margin-top: -0.5rem;
  background-color: #dddddd;
  border-radius: 1rem;
  overflow: hidden;
}
.progressative {
  background-color: #fff;
}
.progress_item {
  background-color: #1d87ef;
  border-radius: 1rem;
  height: 100%;
}
.progress_num {
  position: absolute;
  height: 0.78rem;
  bottom: 2.1rem;
  right: 0.84rem;
  font-size: 0.6rem;
}
.wrap {
  box-sizing: border-box;
  padding: 1rem;
}
.name {
  font-size: 1.12rem;
  font-weight: 600;
  color: rgba(38, 38, 38, 1);
}
.data {
  height: 1.5rem;

  font-size: 0.87rem;
  font-weight: 400;
  color: rgba(139, 139, 139, 1);
}
.bd {
  background-color: #f8f8f8;
  padding: 0.63rem;
  box-sizing: border-box;
}
.item {
  display: flex;
  margin-bottom: 0.63rem;
}
.item img {
  width: 4.06rem;
  height: 4.06rem;
  border-radius: 0rem;
}
.item .title {
  position: relative;
  flex: 1;
  height: 4.06rem;
  line-height: 4.06rem;
  font-size: 1rem;
  background-color: #eeeeee;
  font-weight: 600;
  color: #262626;
  padding-left: 2rem;
}
.users {
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: right;
  color: rgba(89, 89, 89, 1);
}
.item .ative {
  color: rgba(30, 135, 240, 1);
  background-color: #55a4f3;
  background: rgba(74, 158, 242, 0.1);
}
.btn {
  margin-top: 4rem;
}
</style>