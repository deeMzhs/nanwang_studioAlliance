<template>
  <div>
    <van-nav-bar title="创新成果详情" fixed left-arrow @click-left="onClickLeft" />
    <div style="height: 46px"></div>
    <div class="img">
      <img src="@/assets/img/photo.jpg" alt />
    </div>
    <div class="box">
      <div class="title">
        <h3>高空作业用全双工语音通讯装置</h3>
        <p>广西电网有限责任公司/桂林供电局</p>
        <p>胡学柳劳模创新工作室</p>
      </div>
    </div>
    <van-tabs v-model="active" title-active-color="#1E87F0" color="#1E87F0" line-width="50vw">
      <van-tab title="基础信息">
        <div class="msg" v-for="(item, index) in 3" :key="index">
          <div>成果专业</div>
          <div>全国电力职工技术成果奖</div>
        </div>
        <div>
          <div class="contact">联系方式</div>
          <div class="msg" v-for="(item, index) in 2" :key="index">
            <div>成果专业</div>
            <div>技术成果奖</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="正文内容">
        <!-- 测试 -->
        <!-- <div style="height : 500px"></div> -->
        <div class="detail">
          <div class="tab-control">
            <div
              v-for="(item,index) in tabInfo"
              :key="index"
              :class="{tabAcitve:index === currentIndex}"
              @click="itemClick(index)"
            >{{item}}</div>
          </div>
          <div class="detail" ref="question">
            <div class="detail-title">针对问题</div>
            <p>{{content}}</p>
          </div>
          <!-- <div style="height: 500px"></div> -->
          <div class="footer">
            <span>下一篇文章</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      active: 0,
      currentIndex: 0,
      tabInfo: ["针对问题", "原理说明", "创新点"],
      content: `前输电检查人员在杆塔上进行高空作业时，地面人员与塔上人员交流普通使用对讲机进行，但对讲机体积较大且至少需要使用一只手进行操作通话，往往塔上工作人员在工作进行时中无法随时空出手来使用对讲机。前
      前输电检查人员在杆塔上进行高空作业时，地面人员与塔上人员交流普通使用对讲机进行，但对讲机体积较大且至少需要使用一只手进行操作通话，往往塔上工作人员在工作进行时中无法随时空出手来使用对讲机。前
      前输电检查人员在杆塔上进行高空作业时，地面人员与塔上人员交流普通使用对讲机进行，但对讲机体积较大且至少需要使用一只手进行操作通话，往往塔上工作人员在工作进行时中无法随时空出手来使用对讲机。前`
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("InnovationIndex");
    },
    // tab点击
    itemClick(index) {
      this.currentIndex = index;
      //对应标签跳转对应方法
      this.top =
        this.$refs.question.offsetTop + this.$refs.question.offsetHeight;
      // console.log(this.$refs.question.offsetHeight);
      window.scrollTo(0, this.top);
      // console.log(this.$refs.question.scrollIntoView(true))
    }
  },
  mounted() {
    console.log(this.$route.query);
  }
};
</script>


<style scoped>
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.img {
  width: 100%;
}
.img img {
  width: 100%;
  vertical-align: middle;
}
.box {
  position: relative;
  background-color: #f2f2f2;
  height: 5.6rem;
}
.title {
  position: absolute;
  top: -30%;
  left: 4%;
  right: 4%;
  width: 92%;
  height: 6.5rem;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(30, 135, 240, 0.23);
  border-radius: 4px;
}
.title h3 {
  font-size: 1.2rem;
  margin: 0.5rem;
  margin-left: 1.2rem;
  font-weight: bold;
}
.title p {
  color: #595959;
  padding: 0.3rem 1.2rem;
}
.msg {
  margin: 1rem;
  display: flex;
  font-size: 1rem;
}
.msg :nth-child(1) {
  width: 6rem;
  color: #8c8c8c;
}
.msg :nth-child(2) {
  flex: 1;
  color: #595959;
}
.contact {
  margin-left: 1rem;
  color: #262626;
  padding: 0 0.43rem;
  padding-left: 0.5rem;
  font-weight: 700;
  border-left: 0.1rem solid #1e87f0;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
.detail {
  margin: 1rem;
}
.tab-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}
.tab-control div {
  flex: 1;
  height: 2rem;
  border: 1px solid #1e87f0;
  font-size: 0.875rem;
  color: #1e87f0;
  display: inline-block;
  text-align: center;
  line-height: 2rem;
  margin-right: -1px;
}
.tab-control .tabAcitve {
  color: #fff;
  background-color: #1e87f0;
}
.detail-title {
  border-left: 0.125rem solid #1e87f0;
  padding: 0 0.43rem;
  font-weight: 700;
  color: #262626;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
.detail p {
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #595959;
  margin-bottom: 1.7rem;
}
.footer {
  background-color: #f8f8f8;
  margin-left: -1rem;
  margin-right: -1rem;
}
.footer span {
  line-height: 3rem;
  height: 3rem;
  padding-left: 1.5rem;
  color: #1e87f0;
}
</style>
