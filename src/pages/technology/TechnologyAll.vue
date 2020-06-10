<template>
  <div>
    <div class="professor">
      <div class="pro_title">
        <div>在线专家</div><span>我是专家，点击在线</span>
      </div>
      <van-swipe @change="onChange">
        <van-swipe-item class="pro_body" v-for="(item, index) in professor" :key="index">
          <van-image
            round
            width="3.9rem"
            height="3.9rem"
            :src="item.imgurl"
          />
          <div class="pro_info">
            <div class="pro_name">{{item.name}}
              <van-tag color="#D7F0D2" text-color="#36B21D"v-if="item.skill != '' "round >{{item.skill}}</van-tag>
              <van-tag color="#FCDDDA" text-color="#F15747" v-if="item.level != '' "round>{{item.level}}</van-tag>
            </div>
            <div class="pro_name1">{{item.studio}}</div>
            <div class="pro_name1">{{item.numSeek}}人已咨询</div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
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
                  <div class="center">{{ item.name + "关注了你的问题" }}</div>
                  <div class="right">{{ item.time }}</div>
                </div>
                <div class="content_title">
                  <p>{{ item.title }}</p>
                </div>
                <div class="content_main" @click="to('TechnologyDetail')">
                  <p class="left">{{ item.content }}</p>
                  <div class="right">
                    <img :src="item.imgurl" />
                  </div>
                </div>
                <!-- 底部标签 -->
                <div class="content_footer">
                  <div class="icon_left">
                    <span class="icon_item">
                      <van-icon name="chat-o" size="12" />
                      <span>3</span>
                    </span>
                    <span class="icon_item">
                      <van-icon name="label-o" size="12" />
                      <span>3</span>
                    </span>
                  </div>
                  <div class="icon_right">
                    <div>回答问题</div>
                </div>
              </div>
            </div>
    <!-- <div
      class="technology_item"
      v-for="(item, index) in list"
      :key="index"
      @click="to('TechnologyDetail')"
    >
      <div class="header">
        <div>
          <img src="@/assets/img/joined-studio-union.jpeg" alt />
        </div>
        <div>张三提出了问题</div>
        <div>{{ item.time }}</div>
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="desc" v-if="item.imgurl">
        <div class="desc_msg">{{ item.desc }}</div>
        <div class="img">
          <img :src="item.imgurl" alt />
        </div>
      </div>
      <div class="desc1" v-else>{{ item.desc }}</div>
      <div class="footer">
        <div class="footer_child">
          <span> <van-icon name="chat-o" />5 </span>
          <span> <van-icon name="share" />3 </span>
        </div>
        <div class="follow" @click.stop="$router.push({path:'TechAnswer',query:{id:item.id}})">关注问题</div>
      </div>
    </div> -->

    <!-- <div class="popup">
      <div class="popup_title">
        试试帮Ta解答吧 <span>{{ current + 1 }}/4</span>
      </div>
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(item, index) in 4" :key="index">
          <div class="popup_bd">
            <div class="popup_desc">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx问题，怎 么解决 拷贝
            </div>            <div class="popup_item">
              <div class="footer_child">
                <span> <van-icon name="chat-o" />5 </span>
                <span> <van-icon name="share" />3 </span>
              </div>
              <div class="follow">我来回答</div>
            </div>
            <div class="tag">问</div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div> -->
    <div class=" questions" @click="to('TechnologyQuestions')">
      <van-icon name="records" />
      <span>我要提问</span>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      list: [
        {
          id: 1,
          name:'张张红',
          time: "2019-01-01",
          title: "这是问题",
          content: "这是内容 这是内容这是内容这是内容这是",
          imgurl: require("@/assets/img/mypage.png")
        },
        // {
        //   id: 2,
        //   name:'张张红',
        //   time: "2019-01-01",
        //   title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
        //   content:
        //     "这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是..."
        // },
        {
          id: 1,
          name:'张张红',
          time: "2019-01-01",
          title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
          content:
            "这是内容这是内容这这是内容这是内容这这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容这是内容这是内容这是内容这是这是这是内容这是内容这是内容这是这是是内容这是内容 这是内容这是内容这是内容这是这是 内容这是内容这是内容这是...",
          imgurl: require("@/assets/img/mypage.png")
        },
        // {
        //   id: 2,
        //   name:'张张红',
        //   time: "2019-01-01",
        //   title: "这是问题这是问题这是问题这是问题这是问题这 是问题这是问题",
        //   content: " 这内容这是内容这是"
        // }
      ],
      professor: [
        {
          name: "李宏利",
          studio: "特朗普劳模工作室",
          numSeek: "188",
          level: "技术技能专家",
          skill: "一级技术",
          imgurl: require("@/assets/img/mypage.png")
        },
        {
          name: "树生",
          studio: "牛逼哄哄工作室",
          numSeek: "188",
          level: "技术技能专家",
          skill: "三级技术",
          imgurl: require("@/assets/img/mypage.png")
        },
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    to(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.van-icon {
  vertical-align: middle;
  margin-right: 0.2rem;
}
.technology_item {
  padding: 0.5rem 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
}
.bg_withe {
  background-color: #ffffff;
}

/* .header {
  align-items: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  color: #8c8c8c;
}
.header :nth-child(1) {
  width: 1.24rem;
  height: 1.24rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
}
.header :nth-child(3) {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.title {
  margin: 0.5rem 0;
  font-size: 1rem;
} */
/* .desc {
  display: flex;
  height: 5rem;
  color: #595959;
}
.desc .desc_msg {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 0.5rem;
  height: 3.2rem;
  flex: 1;
  overflow: hidden;
}
.desc .img {
  width: 30%;
}
.desc img {
  width: 100%;
}
.desc1 {
  height: 2.2rem;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #595959;
}
.footer {
  display: flex;
  margin:  0 0 0.5rem 0;
  font-size: 0.75rem;
  justify-content: space-between;
}
.footer .footer_child {
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #b2b2b2;
}
.footer .follow {
  padding: 0.3rem 0.5rem;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
} */
.professor{
  margin-top: .7rem;
  padding: 1.2rem;
  height: 10rem;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 1rem;
  
}
.pro_title {
  color: #262626;
  font-weight: 600;
  font-size: 1.06rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.pro_title span {
  font-size: .88rem;
  color: #1E87F0;
  font-weight: 400;

}
.pro_body{
  display: flex;
}
.pro_body .pro_info{
  flex: 1;
  padding-left: 1rem
}
.pro_body .pro_info .pro_name span{
   font-size: .63rem
}
.pro_info :nth-child(1){
  color: #262626;
  font-size: 1.06rem;
}
.pro_name1{
height:1.31rem;
font-size:.88rem;
font-weight:400;
color:rgba(89,89,89,1);
line-height:1.31rem;
}

/* item部分css */
content {
  position: relative;
  top: 3.5rem;
}
.content_item {
  padding: 0 1rem;
}
.content_head {
  padding-top: 0.65rem;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 0.01rem solid #e5e5e5;
  flex-wrap: nowrap;
  color: #8c8c8c;
  font-size: 0.75rem;
  line-height: 1.56rem;
}
.content_head .van-image {
  flex: 0 0 1.25rem;
}
.content_head .center {
  flex: 1;
  padding-left: 0.6rem;
}
.content_head .right {
  flex: 0 0 4.5rem;
}
.content_title {
  margin-top: 0.8rem;
  font-size: 1rem;
  color: #262626;
}
.content_title p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.content_main {
  margin-top: 1rem;
  color: #595959;
  display: flex;
}
.content_main .left {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 0.875rem;
  flex: 1;
}
.content_main .right {
  justify-content: center;
  align-items: center;
  flex: 0 0 6.4rem;
  margin-left: 0.75rem;
}
.content_main .right img {
  height: 3.9rem;
  width: 6.3rem;
  border-radius: 4px;
}
.content_footer {
  display: flex;
  margin-bottom: 0.7rem;
  padding-bottom: 0.7rem;
  padding-top: 0.5rem;
}
.content_footer .icon_left,
.icon_right {
  flex: 1;
}
.content_footer .icon_left .icon_item {
  width: 33%;
  line-height: 1rem;
  display: flex;
  align-items: center;
}
.icon_left {
  display: flex;
  justify-content: flex-start;
  color: #B2B2B2
}
.content_footer .icon_left .icon_item span {
  padding-left: 0.3rem;
}
.content_footer .icon_right {
  position: relative;
}
.content_footer .icon_right button {
  position: absolute;
  top: 1.2rem;
  left: 50%;
  border: none;
  line-height: 2rem;
  width: 5.2rem;
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(38, 38, 38, 0.16);
}
.content_footer .icon_right div {
  float: right;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
  width:3.75rem ;
  height: 1.25rem;
  text-align: center
}

/* .popup_bd {
  position: relative;
  width: 90%;
  height: 7rem;
  margin-left: 5%;
  box-sizing: border-box;
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #fff;
}
.popup_desc {
  font-weight: bold;
  font-size: 1rem;
}
.popup_item {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.popup_item .follow {
  padding: 0.3rem 0.5rem;
  background-color: #1e87f0;
  border-radius: 0.2rem;
  color: #ffffff;
}
.popup_item .footer_child {
  width: 6rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #b2b2b2;
}
.tag {
  position: absolute;
  top: 1rem;
  left: 0;
  background-color: #288bf0;
  padding: 0.5rem;
  color: #fff;
  border-radius: 0 0.3rem 0.3rem 0;
} */
.custom-indicator {
  opacity: 0;
  /* color: #fff;
    position:absolute;
    font-size: 1.2rem;
    top: 2rem;
    right:2rem;
    background-color: pink; */
}
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
</style>
