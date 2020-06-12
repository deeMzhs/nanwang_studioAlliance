<template>
  <div>
    <van-nav-bar
      title="胡学柳劳模创新工作室"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="height: 46px"></div>
    <div class="img">
      <img src="@/assets/img/photo.jpg" alt=""/>
    </div>
    <div class="box">
      <div class="title">
        <h3>胡学柳劳模创新工作室
          <van-tag round type="success">二星级</van-tag>
        </h3>
        <p>广西电网有限责任公司/桂林供电局</p>
      </div>
    </div>
    <div class="main_info">
      <div class="msg_title">基础信息</div>
      <div class="msg">
        <div>工作室口号</div>
        <div>智慧输电，持续创新</div>
      </div>
      <div class="msg">
        <div>地方认证情况</div>
        <div>二星级</div>
      </div>
      <div class="msg">
        <div>专业方向</div>
        <div>用爱发电</div>
      </div>
    </div>
    <div class="main_info">
      <div class="msg_title">联系方式</div>
      <div class="msg">
        <div>联系人</div>
        <div>于潇琳</div>
      </div>
      <div class="msg">
        <div>联系人电话</div>
        <div>aiqiyid@</div>
      </div>
      <div class="msg">
        <div>联系人邮箱</div>
        <div>123456@qq.com</div>
      </div>
    </div>
    <div class="main_info">
      <div class="msg_title">负责人信息</div>
      <div class="msg">
        <div>姓名</div>
        <div>于潇琳</div>
      </div>
      <div class="msg">
        <div>性别</div>
        <div>男@</div>
      </div>
      <div class="msg">
        <div>职称</div>
        <div>副主任</div>
      </div>
    </div>
    <div class="main_info">
      <div class="msg_title">工作室成员</div>
      <div v-for="item in StudioMerber" class="StudioMerber">
        <div class="body">
          <van-image
            round
            width="2.25rem"
            height="2.25rem"
            :src="item.imgurl"
          />
          <div class="mem_name">{{item.name}}
            <van-tag v-if="item.level != '' " round type="success">{{item.level}}</van-tag>
          </div>
        </div>
        <div class="border"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StudioInfo',
    data() {
      return {
        top: 0,
        active: 0,
        currentIndex: 0,
        tabInfo: ["针对问题", "原理说明", '创新点'],
        content: ['输电发电用爱发电联盟', '做好核心目标', '董事长，副董事长.....', '2020年工作计划', '这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则'],
        StudioMerber: [
          {
            name: "老王",
            imgurl: require("@/assets/img/mypage.png"),
            level: '一级技能',
            skill: ''
          },
          {
            name: "Deca Joins",
            imgurl: require("@/assets/img/photo.png"),
            level: '',
            skill: ''
          }
        ]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
    },
    mounted() {
      console.log(this.$route.query);
    },
  };
</script>


<style scoped>
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }

  .img {
    width: 100%;
    height: 12.75rem;
  }

  .img img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .box {
    position: relative;
    background-color: #f2f2f2;
    height: 5.25rem;
  }

  .title {
    position: absolute;
    top: -30%;
    left: 4%;
    right: 4%;
    width: 92%;
    height: 5.25rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(30, 135, 240, 0.23);
    border-radius: 4px;
  }

  .title h3 {
    font-size: 1rem;
    margin-top: 1.2rem;
    margin-left: .9rem;
    font-weight: bold;
  }

  .title h3 span {
    width: 3rem;
    height: 1.25rem;
    background: #D2E7FC;
    border-radius: 1rem;
    font-size: .75rem;
    line-height: 1.25rem;
    height: 1.25rem;
    color: #1E87F0;
    margin-left: 1rem
  }

  .title p {
    color: #595959;
    font-size: .75rem;
    padding: 0.5rem .9rem;
  }

  .msg {
    margin: .8rem 0;
    display: flex;
    font-size: 1rem;
    font-size: .87rem
  }

  .msg :nth-child(odd) {
    width: 6rem;
    color: #8c8c8c;
  }

  .msg :nth-child(even) {
    flex: 1;
    color: #595959;
  }

  .main_info {
    padding: 1.3rem 1rem 0 1rem;
  }

  .msg_title {
    border-left: .125rem solid #1E87F0;
    padding: 0 .43rem;
    font-weight: 700;
    color: #262626;
    font-size: .875rem;
    margin-bottom: 1rem;
  }

  .StudioMerber {
  }

  .body {
    display: flex;
    align-items: center;
    margin: .8rem 0;
  }

  .StudioMerber .mem_name {
    padding-left: 1.1rem;
    font-size: 1rem;
    line-height: 1.88rem
  }

  .StudioMerber .mem_name .van-tag {
    font-size: .63rem;
  }

  .border {
    width: 100%;
    height: 0.03rem;
    border: 0px solid rgba(229, 229, 229, 1);
  }
</style>
