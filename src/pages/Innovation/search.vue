<template>
  <div>
    <!--<van-nav-bar title="创新成果" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>-->
    <!--<div style="height: 46px"></div>-->
    <van-search
      v-model="value"
      show-action
      background="#1E87F0"
      placeholder="请输入创新成果名称"
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <div class="search">
      <!-- 历史记录是否为空 -->
      <div v-if="history != 0">
        <div class="history">
          历史搜索
          <i class="icon">
            <span v-if="clear">
              <span @click="clearall">全部删除</span>
              <span @click="clear = !clear">完成</span>
            </span>
            <van-icon v-if="!clear" name="delete" @click="clear = !clear" />
          </i>
        </div>
        <div class="search_groud">
          <div v-for="(item, index) in history" :key="index" class="search_item">
            {{ item }}
            <span v-if="clear">
              <van-icon color="#fff" name="cross" @click="clearitem(index)" />
            </span>
          </div>
        </div>
      </div>
      <!-- 搜索推荐 -->
      <div class="history">搜索推荐</div>
      <div class="search_groud">
        <div
          v-for="(item, index) in recommendedlist"
          :key="index"
          class="search_item"
          @click="recommended(item)"
        >{{ item }}</div>
      </div>
    </div>
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
      // 是否显示删除按钮
      clear: false,
      recommendedlist: ["QC成果", "输变电类成果", "调度保护及综合类成果"],
      // 历史记录数据
      history: []
    };
  },
  methods: {
    //回到首页
    onClickLeft() {
      this.$router.push("/InnovationIndex");
    },
    //点击搜索
    onSearch(val) {
      if (val == "" || this.history.indexOf(val) > -1) return;
      this.history.unshift(val);
      storage.set("history", this.history.join(","));
      this.clear = false;
    },
    //点击取消
    onCancel() {
      this.$router.go(-1);
    },
    //清除全部历史记录
    clearall() {
      Dialog.confirm({
        message: "确认删除所有历史记录"
      })
        .then(() => {
          storage.remove("history");
          this.history = [];
          Toast("删除成功");
          this.clear = false;
        })
        .catch(() => {
          Toast("已取消删除");
        });
    },
    //清除单个历史记录
    clearitem(index) {
      this.history.splice(index, 1);
      storage.set("history", this.history.join(","));
    },
    recommended(name) {
      this.value = name;
      this.onSearch(name);
    }
  },
  created() {
    // let status=storage.get('history')==null
    // console.log(status,storage.get('history'));

    this.history =
      storage.get("history") != null ? storage.get("history").split(",") : [];
    console.log(this.history);
  },
  mounted() {
    document.querySelector("input").focus();
  }

  // 自定义指令获取焦点
  // directives:{
  //  focus: {
  // // 指令的定义
  //   inserted: function (el) {
  //     el.focus()}
  //   }
  // }
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

.history {
  margin: 1.5rem 0.5rem 0.5rem;
  font-weight: bold;
  font-size: 1rem;
}
.history .icon {
  float: right;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  color: rgb(180, 178, 178);
  margin-right: 0.5rem;
}
.search_groud {
  width: 95%;
}
.search_groud::after {
  content: "";
  display: block;
  clear: both;
}
.search_item {
  float: left;
  border: 0.1rem solid #f2f2f2;
  max-width: 85%;
  overflow: hidden;
  padding: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
}

.search_item span {
  display: inline-block;
  text-align: center;
  line-height: 1rem;
  background-color: #c8c9cc;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  overflow: hidden;
  margin: 0 0.3rem;
}
</style>
