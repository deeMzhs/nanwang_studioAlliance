<template>
<div class="wrap">
  <van-nav-bar
    title="工作室联盟"
    fixed
    left-arrow
    @click-left="onClickLeft">
    <template #right>
      <van-icon name="manager" size="1rem" color="" :dot="isDot"/>
    </template>
  </van-nav-bar>
  <div style="height: 46px"></div>
  <van-row class="module-wrap">
    <van-col span="6" class="module">
      <img src="../assets/img/module.png" alt="">
      <p>创新成果</p>
    </van-col>
    <van-col span="6" class="module">
      <img src="../assets/img/module.png" alt="">
      <p>创新培训</p>
    </van-col>
    <van-col span="6" class="module">
      <img src="../assets/img/module.png" alt="">
      <p>技术门诊</p>
    </van-col>
    <van-col span="6" class="module">
      <img src="../assets/img/module.png" alt="">
      <p>快速找人</p>
    </van-col>
  </van-row>
  <!-- 已加入/关注 -->
  <div v-if="followList.length != 0" class="follow-content">
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
    <van-row class="follow-list" v-for="(item, i) in followList" :key="i" @click="studioUnion(item)">
      <van-col span="4" class="img">
        <img :src="item.img" alt="">
      </van-col>
      <van-col span="20" class="main">
        <div class="first">
          <!-- vant内置样式，超出用...表示：van-ellipsis -->
          <div class="van-ellipsis title">{{item.name}}</div>
          <div class="join">加入群聊</div>
        </div>
        <div class="second">
          <img src="../assets/img/join-portrait.jpg" alt="">
          <img src="../assets/img/join-portrait.jpg" alt="">
          <img src="../assets/img/join-portrait.jpg" alt="">
          <span>222人已加入</span><van-icon name="arrow" />
        </div>
      </van-col>
      <van-col span="24" class="footer">
       <span>#</span>  提升远程办公安全意识
       <div>提升远程办公安全意识</div>
      </van-col>
    </van-row>
  </div>

  <!-- 未加入/关注 -->
  <div v-if="followList.length == 0" class="unfollow-content">
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
            <div class="img-wrap">
              <img class="img" :src=item.img alt="">
            </div>
            <!-- vant内置样式，超出用...表示：van-ellipsis -->
            <div class="van-ellipsis name-wrap">{{item.name}}</div>
            <div class="action-wrap">
              <span v-if="item.isFollow == 0" class="unfollow">关注</span>
              <span v-else class="followed"> <van-icon name="success" />已关注</span>
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
            <div class="img-wrap">
              <img class="img" :src=item.img alt="">
            </div>
            <!-- vant内置样式，超出用...表示：van-ellipsis -->
            <div class="van-ellipsis name-wrap">{{item.name}}</div>
            <div class="action-wrap">
              <span v-if="item.isFollow == 0" class="unfollow">关注</span>
              <span v-else class="followed"> <van-icon name="success" />已关注</span>
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
            <div class="img-wrap">
              <img class="img" :src=item.img alt="">
            </div>
            <!-- vant内置样式，超出用...表示：van-ellipsis -->
            <div class="van-ellipsis name-wrap">{{item.name}}</div>
            <div class="action-wrap">
              <span v-if="item.isFollow == 0" class="unfollow">关注</span>
              <span v-else class="followed"> <van-icon name="success" />已关注</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'vant';
import { joinedActivityList, recruitTest } from '@/request/api';  // 导入api接口
import storage  from '../storage/storage' // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: 'StudioUnionHome',
  // components:{
  //   oneLoad
  // },
  data () {
  return {
    isDot: true,
    followList: [
      {name: '输电专业工作室联盟1', footer: '张三发不了动态', img: require('../assets/img/joined-studio-union.jpeg')},
      {name: '输电专业工作室联盟2', footer: '李四分享了照片“中山湖公园”', img: require('../assets/img/joined-studio-union.jpeg')},
      {name: '输电专业工作室联盟3', topfooteric: '李四分享了照片“中山湖公园”', img: require('../assets/img/joined-studio-union.jpeg')},
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
  }
  },
  created () {
    // this.joinedActivityList();
    this.recruitTest();
    this.setLoginStorage();
  },
  mounted() {
 	  //把js方法暴露给app
    window["loginData"] = res => {
      this.loginData(res);
    };
    // window["loginData"] = this.loginData;
  },
  methods:{
    setLoginStorage() {
      storage.set('list', 999);
    },
    // 与原生APP人员约定的方法
    loginData(res){
      console.log(res);//原生返回的数据
      alert(res);
    },
    // h5与app交互较简单，以url跳转的形式即可，将app需要的参数以query的形式携带在url后面，如：
    setUserInfo(id){
        window.location.href = `http://appName.local.com?action=webPushUserInfo&id=${id}` // es6的字符串拼接写法
        // 注释：可以在 H5 的重定向链接后面拼接参数，app 获取后进行解析，推至内部详情页
        window.location.href ='com.English.AJ://?extra={"type":"3","h5_url":"[https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle](https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle)"}';
    },
    // 招聘接口测试
    recruitTest() {
      // 调用api接口，并且提供了两个参数                
      recruitTest({}).then(res => {
        // 获取数据成功后的其他操作
        console.log(res);
        // alert(res.data.codeCipher);
        Toast(res.data.codeCipher);
      }).catch((err)=>{
        console.log(err);
      })            
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
    articlesToDetail (id,$event) {
        console.log($event.target.className)
        if($event.target.className != "down"){
          this.$router.push("/pictureDetail?id="+id)
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
            isFollow: 1,
            studioName: item.name
          }
        }
      )
    },
    // 全部未关注工作室联盟
    allStudioUnion() {
      this.$router.push(
        {
          path: '/studioMoreHome',
          query: {
            tab: 0
          }
        }
      )
    },
    // 全部未关注星级工作室
    allStartStudio() {
      this.$router.push(
        {
          path: '/studioMoreHome',
          query: {
            tab: 1
          }
        }
      )
    },
    // 全部未关注星级工作室
    allDepartStudio() {
      this.$router.push(
        {
          path: '/studioMoreHome',
          query: {
            tab: 2
          }
        }
      )
    },
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
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .module-wrap{
  background-color: #fff;
  padding: 1rem 0 0.5rem 0;
}
.wrap .module-wrap .module{
  text-align: center;
}
.wrap .module-wrap .module img{
  width: 3rem;
  border-radius: 3rem;
}
.wrap .module-wrap .module p{
  font-size: 0.8rem;
  padding-top: 0.3rem;
}
.wrap .follow-content{
  margin-top: 0.5rem;
}
.wrap .follow-content .head .head-title{
  color: #262626;
  font-size: 1rem;
  font-weight: bold;
}
.wrap .follow-content .head .head-more{
  color: #1E87F0;
  font-size: 0.9rem;
  font-weight:bold;
}
.wrap .follow-content .follow-list{
  padding: 0.8rem 0.8rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
 
}
.wrap .follow-content .follow-list .main{
  
}
.wrap .follow-content .follow-list .main .first{
  padding: 0.1rem 0 0.1rem 0.3rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
}
.wrap .follow-content .follow-list .main .first .title{
  font-size: 0.9rem;
  font-weight: bold;
}
.wrap .follow-content .follow-list .main .first .join{
  width:5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.2rem 0.3rem;
  background-color: #1E87F0;
  border-radius: 0.2rem;
}
.wrap .follow-content .follow-list .main .second{
  padding: 0.4rem 0 0.1rem 0.3rem;
}
.wrap .follow-content .follow-list .main .second img{
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
}
.wrap .follow-content .follow-list .footer{
  position: relative;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #E5E5E5;
}
.wrap .follow-content .follow-list .footer div{
  position: absolute;
  top:60%;
  left:0;
  color: #f7d074;
  padding-right:2rem;
  height: 1rem;
  background:rgb(250, 199, 80);
  opacity:0.3; 
}

.wrap .follow-content .follow-list .footer span{
  color: #F5C656;
}

/* 未关注/加入 */

.wrap .unfollow-content .tip{
  color: #B2B2B2;
  font-size: 0.9rem;
  margin: 1.2rem 0 0.5rem 1rem;
}
.wrap .unfollow-content .studio-union{
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
}
/* 去掉<van-cell>标签默认的下边框 */
.wrap .unfollow-content .studio-union ::after{
  border-bottom: none;
}
.wrap .unfollow-content .studio-union .head-title{
  color: #262626;
  font-weight: bold;
  font-size: 1rem;
}
.wrap .unfollow-content .studio-union .head-more{
  font-size: 0.8rem;
  color: #595959;
}
.wrap .unfollow-content .studio-union .container{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
.wrap .unfollow-content .studio-union .container .scroll{
  overflow: auto;
  padding: 0 0 0 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
}
.wrap .unfollow-content .studio-union .container .scroll .alive{
  display: inline-block;
  text-align: center;
  margin-right: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #E5E5E5;
}
.wrap .unfollow-content .studio-union .container .scroll .alive .img-wrap .img{
  width: 6.5rem;
  height: 5rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.wrap .unfollow-content .studio-union .container .scroll .alive .name-wrap{
  width: 6.5rem;
  color: #262626;
  word-wrap:break-word;
}
.wrap .unfollow-content .studio-union .container .scroll .alive .action-wrap .unfollow{
  background-color: #1E87F0;
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}
.wrap .unfollow-content .studio-union .container .scroll .alive .action-wrap .followed{
  background-color: rgb(219, 240, 30);
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}

.van-icon{
  vertical-align:middle;
  padding-right: .2rem;
}
</style>