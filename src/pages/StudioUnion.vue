<template>
<div class="wrap">
  <van-nav-bar
    title=""
    fixed
    left-arrow
    @click-left="onClickLeft">
  </van-nav-bar>
  <div style="height: 46px"></div>
  <div class="studio-sub">
    <van-row class="first-sub-row">
      <van-col span="5" class="first-sub-col">
        <img :src=studioInfo.img alt="">
      </van-col>
      <van-col span="15" class="first-sub-col">
        <p>{{studioName}}</p>
      </van-col>
      <van-col span="4" class="first-sub-col">
        <div class="action">退出</div>
      </van-col>
    </van-row>
    <van-row class="second-sub-row">
      <van-col span="16" class="second-sub-col">
        <img :src=studioInfo.portrait alt="">
        <img :src=studioInfo.portrait alt="">
        <img :src=studioInfo.portrait alt="">
        <img :src=studioInfo.portrait alt="">
        <img :src=studioInfo.portrait alt="">
      </van-col>
      <van-col span="8" class="second-sub-col2">
        <span>{{studioInfo.num}}人已加入<van-icon name="arrow" style="line-height: 1.3rem;" /></span>
      </van-col>
    </van-row>
  </div>
  <!-- 联盟工作室 -->
  <!-- <div v-if="isFollow == 1" class="studio-union">
    <van-cell>
      <template #title>
        <span class="head-title">联盟工作室</span>
      </template>
      <template #right-icon>
        <span class="head-more" @click="studioMore()">更多</span>
      </template>
    </van-cell>
    <div class="container">
      <div class="scroll" scrollY="true">
        <div class="alive" v-for="(item, i) in studioList" :key="i">
          <div class="img-wrap">
            <img class="img" :src=item.img alt="">
          </div>
          <div class="text-wrap van-ellipsis">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- 联盟成果 -->
  <div class="union-achieve">
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="head-title">联盟成果</span>
      </template>
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <span class="head-more" @click="achieveMore()">更多</span>
      </template>
    </van-cell>
    <div class="container">
      <div class="scroll" scrollY="true">
        <div class="alive" v-for="(item, i) in achieveList" :key="i">
          <div class="img-wrap">
            <img class="img" :src=item.img alt="">
          </div>
          <div class="text-wrap van-ellipsis">
            {{item.name}}
          </div>
          <div class="share-wrap">
            <van-icon name="share" color="#8C8C8C" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 发布、编辑按钮 -->
  <div class="publish-pop" ref="container">
    <van-sticky :container="container">
      <van-button class="plus" icon="plus" type="info" @click="showPop = true"></van-button>
    </van-sticky>
  </div>
  <!-- 遮罩层 -->
  <van-overlay class="cover-layer" :show="showPop" @click="showPop = false">
    <!-- <div class="wrapper" @click.stop="jj"> -->
    <div class="wrapper">
      <div class="block">
        <div class="blck-item" @click="goDynamic">
          <img src="../assets/img/pop-dt.png" alt=""><p>动态</p>
        </div>
        <div class="blck-item" @click="goActivity">
          <img src="../assets/img/pop-hd.png" alt=""><p>活动</p>
        </div>
        <div class="blck-item" @click="goTopic">
          <img src="../assets/img/pop-ht.png" alt=""><p>话题</p>
        </div>
        <div class="blck-item" @click="goVote">
          <img src="../assets/img/pop-tp.png" alt=""><p>投票</p>
        </div>
      </div>
    </div>
  </van-overlay>
  <!-- 最新活动 -->
  <div class="new-activity">
    <van-cell class="head">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <p class="head-title">最新活动</p>
      </template>
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <span class="head-more" @click="moreActivity()">更多</span>
      </template>
    </van-cell>
    <van-row class="activity-list" v-for="(item, i) in activityList" :key="i">
      <van-col span="16" class="left">
        <!-- vant内置样式，超出用...表示：van-ellipsis -->
        <div class="van-multi-ellipsis--l2 content">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </van-col>
      <van-col span="8" class="right">
        <img :src="item.img" alt="">
        <div v-if="item.isJoin == 1" class="status joined-status">已报名</div>
        <div v-else class="status unjoin-status">未参与</div>
      </van-col>
      <van-col span="24" class="footer">
        <img src="../assets/img/join-portrait.jpg" alt="">
        <img src="../assets/img/join-portrait.jpg" alt="">
        <img src="../assets/img/join-portrait.jpg" alt="">
        <span>{{item.man}}人已加入</span>
      </van-col>
    </van-row>
  </div>
  <!-- 热门话题 -->
  <div class="heat-topic">
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="head-title">热门话题</span>
      </template>
    </van-cell>
    <div class="container">
      <div class="scroll" scrollY="true">
        <div class="alive" v-for="(item, i) in topicList" :key="i">
          <div class="text-wrap van-ellipsis">
            <span class="index">#</span>{{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="topic-more">
      <div class="action" @click="topicSquare">进入话题广场</div>
    </div>
  </div>
  <!-- 这是话题标签 -->
  <div class="topic-tag">
    <van-cell class="head">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <p class="head-title">#这是话题标签</p>
      </template>
    </van-cell>
    <van-row class="tag-list" v-for="(item, i) in tagList" :key="i">
      <van-col span="16" class="left">
        <!-- vant内置样式，超出用...表示：van-ellipsis -->
        <div class="van-multi-ellipsis--l2 content">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </van-col>
      <van-col span="8" class="right">
        <img :src="item.img" alt="">
      </van-col>
      <van-col span="24" class="footer">
        <div class="left" @click="tagThumb(i, item.isThumb)">
          <van-icon v-bind:class="{thumbed: item.isThumb == 1}" name="like-o" />
          <span class="thumb-value" v-bind:class="{thumbed: item.isThumb == 1}">{{item.thumb}}</span>
          <van-icon name="share" />
          <span>{{item.share}}</span>
        </div>
        <div class="right">
          <span>发布人：{{item.issuer}}</span>
        </div>
      </van-col>
    </van-row>
  </div>
</div>
</template>

<script>
import { Toast } from 'vant';
import { joinedActivityList, recruitTest } from '@/request/api';  // 导入api接口
import storage  from '../storage/storage' // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: 'StudioUnion',
  // components:{
  //   oneLoad
  // },
  data () {
  return {
    container: null,
    showPop: false,
    studioInfo: {
      img: require('../assets/img/join-portrait.jpg'), num:100, portrait: require('../assets/img/join-portrait.jpg')
    },
    // 联盟工作室
    studioList: [
      {name: 'A协会、C协会符合认同和让他', img: require('../assets/img/iron-man.jpg')},
      {name: 'B协会、C协会', img: require('../assets/img/iron-man.jpg')},
      {name: 'A协会、B协会', img: require('../assets/img/iron-man.jpg')},
      {name: 'A协会、C协会', img: require('../assets/img/iron-man.jpg')},
      {name: 'B协会、C协会', img: require('../assets/img/iron-man.jpg')}
    ],
    // 联盟成果
    achieveList: [
      {name: 'A协会、C协会符合认同和让他', img: require('../assets/img/join-portrait.jpg')},
      {name: 'B协会、C协会', img: require('../assets/img/join-portrait.jpg')},
      {name: 'A协会、B协会', img: require('../assets/img/join-portrait.jpg')},
      {name: 'A协会、C协会', img: require('../assets/img/join-portrait.jpg')},
      {name: 'B协会、C协会', img: require('../assets/img/join-portrait.jpg')}
    ],
    // 最新活动
    activityList: [
      {name: '输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同', time: '2020/04/09', isJoin: 1, man: '876', img: require('../assets/img/photo.jpg')},
      {name: '输电专业工作室联盟2', time: '2020/04/09', isJoin: 0, man: '333', img: require('../assets/img/joined-studio-union.jpeg')},
      {name: '输电专业工作室联盟3', time: '2020/04/09', isJoin: 1, man: '876', img: require('../assets/img/joined-studio-union.jpeg')},
    ],
    // 热门话题
    topicList: [
      {name: '线路故障到底怎么解决儿童和认同和让他'},
      {name: '技术贴'},
      {name: '供电线路保障'},
      {name: '高压输电安全'},
      {name: '网络通信保障'}
    ],
    // 这是话题标签
    tagList: [
      {name: '输电专业工作室联盟1水电费个地方更舒服的感受到发让他忽然他和特红儿童和认同和投入和认同', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, issuer: '王海平', img: require('../assets/img/photo.jpg')},
      {name: '输电专业工作室联盟2', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, issuer: '王海平', img: require('../assets/img/joined-studio-union.jpeg')},
      {name: '输电专业工作室联盟3', time: '2020/04/09', thumb: 45, isThumb: 0, share: 999, issuer: '王海平', img: require('../assets/img/joined-studio-union.jpeg')},
    ],
  }
  },
  created () {
    this.studioName = this.$route.query.studioName;
    this.isFollow = this.$route.query.isFollow;
    // this.joinedActivityList();
    // this.recruitTest();
    this.setLoginStorage();
  },
  methods:{
    setLoginStorage() {
      storage.set('list', 999);
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
      this.$router.push("/studioUnionHome");
    },
    // 更多联盟工作室
    studioMore() {
      // this.$router.push("/photoAlbum");
    },
    // 更多联盟成果
    achieveMore() {
      // this.$router.push("/photoAlbum");
    },
    // 关注更多
    moreActivity() {
      this.$router.push("/studioMoreHome");
      // Toast('关注更多');
    },
    // 话题广场
    topicSquare() {
      this.$router.push("/topicSquare");
    },
    // 这是话题标签点赞
    tagThumb(i, isThumb) {
      this.tagList.forEach(function(ele, y){
        if (i == y && isThumb == 0) {
          ele.isThumb = 1;
          ele.thumb = ele.thumb + 1;

        }else if (i == y && isThumb == 1) {
          ele.isThumb = 0;
          ele.thumb = ele.thumb - 1;
        }
      });
    },
    // 动态编辑
    goDynamic() {
      this.$router.push('/dynamicPublish');
    },
    // 活动编辑
    goActivity() {
      this.$router.push('/activityPublish');
    },
    // 话题编辑
    goTopic() {
      this.$router.push('/topicPublish');
    },
    // 投票编辑
    goVote() {
      this.$router.push('/votePublish');
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .studio-sub{
  background-color: #fff;
  padding: 0.7rem;
  margin: 0.8rem 0.8rem 1rem 0.8rem;
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  box-shadow: 0px 3px 10px 0px rgb(142, 186, 230);
}
.wrap .studio-sub .first-sub-row{
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
}
.wrap .studio-sub .first-sub-row .first-sub-col img{
  width: 3rem;
}
.wrap .studio-sub .first-sub-row .first-sub-col p{
  font-size: 1rem;
  font-weight: bold;
}
.wrap .studio-sub .first-sub-row .first-sub-col .action{
  background-color: #DFDFDF;
  text-align: center;
  padding: 0.2rem 0.4rem;
}
.wrap .studio-sub .second-sub-row{
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  border-top: 1px solid #E5E5E5;
  margin-top: 0.5rem;
  padding-top: 0.4rem;
}
.wrap .studio-sub .second-sub-row .second-sub-col img{
  width: 1.5rem;
  border-radius: 1.5rem;
}
.wrap .studio-sub .second-sub-row .second-sub-col2{
  text-align: right;
}
/* 联盟工作室 */
.wrap .studio-union{
  background-color: #fff;
  margin-top: 0.5rem;
}
.wrap .studio-union .head-title{
  font-size: 1rem;
  font-weight: bold;
}
.wrap .studio-union .head-more{
  font-size: 0.8rem;
  color: #595959;
}
.wrap .studio-union .container{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
.wrap .studio-union .container .scroll{
  overflow: auto;
  padding:0 0 1rem 0.8rem;
  background-color: #fff;
  border-radius: 0.5rem;
}
.wrap .studio-union .container .scroll .alive{
  display: inline-block;
  text-align: center;
  margin-right: 0.8rem;
  border-radius: 0.2rem;
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  box-shadow: 0px 3px 10px 0px #cac3c3;
}
.wrap .studio-union .container .scroll .alive .img-wrap .img{
  width: 8.5rem;
  height: 9rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.wrap .studio-union .container .scroll .alive .text-wrap{
  width: 8.5rem;
  font-weight: bold;
  padding: 0.3rem 0.2rem;
}
/* 联盟成果 */
.wrap .union-achieve{
  background-color: #fff;
  margin-top: 0.5rem;
}
.wrap .union-achieve .head-title{
  font-size: 1rem;
  font-weight: bold;
}
.wrap .union-achieve .head-more{
  font-size: 0.8rem;
  color: #595959;
}
.wrap .union-achieve .container{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
.wrap .union-achieve .container .scroll{
  overflow: auto;
  padding:0 0 1rem 0.8rem;
  background-color: #fff;
  border-radius: 0.2rem;
}
.wrap .union-achieve .container .scroll .alive{
  display: inline-block;
  /* text-align: center; */
  margin-right: 0.8rem;
  border-radius: 0.2rem;
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  box-shadow: 0px 3px 10px 0px #cac3c3;
}
.wrap .union-achieve .container .scroll .alive .img-wrap .img{
  width: 8.5rem;
  height: 7rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.wrap .union-achieve .container .scroll .alive .text-wrap{
  width: 8.5rem;
  color: #8C8C8C;
  padding: 0.3rem 0.2rem;
}
.wrap .union-achieve .container .scroll .alive .share-wrap{
  padding: 0.2rem 0.5rem;
  text-align: right;
}
/* 发布、编辑按钮 */
.publish-pop{
  position: fixed;
  top: 50%;
  right: 3%;
  z-index: 1;
}
.publish-pop .plus{
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom, #54b7f6, #488eee);
  border-radius: 2rem;
}
/* 遮罩层 */
.cover-layer{
  z-index: 2;
}
.cover-layer .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.cover-layer .wrapper .block {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.cover-layer .wrapper .block .blck-item{
  text-align: center;
  color: #fff;
}
.cover-layer .wrapper .block .blck-item img{
  height: 3rem;
}
.cover-layer .wrapper .block .blck-item p{
  padding-top: 0.5rem;
}
/* 最新活动 */
.wrap .new-activity{
  margin-top: 0.5rem;
}
.wrap .new-activity .head .head-title{
  font-weight: bold;
  font-size: 1rem;
}
.wrap .new-activity .head .head-more{
  color: #8C8C8C;
  font-size: 0.9rem;
}
.wrap .new-activity .activity-list{
  padding: 0.8rem 0.8rem;
  background-color: #fff;
}
.wrap .new-activity .activity-list .left .content{
  color: #262626;
  line-height: 1.4rem;
  font-size: 0.9rem;
  padding: 0 1rem 0 0;
}
.wrap .new-activity .activity-list .left .time{
  padding-top: 0.8rem;
}
.wrap .new-activity .activity-list .right{
  position: relative;
  text-align: center;
}
.wrap .new-activity .activity-list .right img{
  width: 100%;
  height: 4.5rem;
}
.wrap .new-activity .activity-list .right .status{
  position: absolute;
  right: 0;
  bottom: 0.2rem;
  padding: 0.2rem 0.4rem;
  color: #fff;
  background-color: #36B21D;
}
.wrap .new-activity .activity-list .right .joined-status{
  background-color: #36B21D;
}
.wrap .new-activity .activity-list .right .unjoin-status{
  background-color: #F5C656;
}
.wrap .new-activity .activity-list .footer{
  padding: 0.4rem 0 0.8rem 0;
  border-bottom: 1px solid #E5E5E5; 
}
/* 把最后一个条目的下边框去掉 */
.wrap .new-activity .activity-list:nth-last-child(1) .footer{
  border-bottom: none; 
}
.wrap .new-activity .activity-list .footer img{
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
}
/* 热门话题 */
.wrap .heat-topic{
  background-color: #fff;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
}
.wrap .heat-topic .head-title{
  font-weight: bold;
  font-size: 1rem;
}
.wrap .heat-topic .container{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
.wrap .heat-topic .container .scroll{
  overflow: auto;
  padding:0 0 1rem 0.8rem;
  background-color: #fff;
  border-radius: 0.2rem;
}
.wrap .heat-topic .container .scroll .alive{
  display: inline-block;
  /* text-align: center; */
  margin-right: 0.8rem;
  border-radius: 0.2rem;
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  box-shadow: 0px 3px 10px 0px #cac3c3;
}
.wrap .heat-topic .container .scroll .alive .text-wrap{
  max-width: 9rem;
  color: #8C8C8C;
  padding: 0.6rem 0.3rem;
  font-weight: bold;
}
.wrap .heat-topic .container .scroll .alive .text-wrap .index{
  padding-right: 0.2rem;
}
.wrap .heat-topic .topic-more{
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
}
.wrap .heat-topic .topic-more .action{
  color: #1E87F0;
  font-size: 1rem;
  border: 1px solid #1E87F0;
  padding: 0.5rem 2rem;
}
/* 这是话题标签 */
.wrap .topic-tag{
  margin-top: 0.5rem;
}
.wrap .topic-tag .head .head-title{
  font-weight: bold;
  font-size: 1rem;
}
.wrap .topic-tag .head .head-more{
  color: #8C8C8C;
  font-size: 0.9rem;
}
.wrap .topic-tag .tag-list{
  padding: 0.8rem 0.8rem;
  background-color: #fff;
}
.wrap .topic-tag .tag-list .left .content{
  color: #262626;
  line-height: 1.4rem;
  font-size: 0.9rem;
  padding: 0 1rem 0 0;
}
.wrap .topic-tag .tag-list .left .time{
  padding-top: 0.8rem;
}
.wrap .topic-tag .tag-list .right{
  position: relative;
  text-align: center;
}
.wrap .topic-tag .tag-list .right img{
  width: 100%;
  height: 4.5rem;
}
.wrap .topic-tag .tag-list .footer{
  padding: 0.5rem 0 0.8rem 0;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  color: #B2B2B2;
}
/* 把最后一个条目的下边框去掉 */
.wrap .topic-tag .tag-list:nth-last-child(1) .footer{
  border-bottom: none;
}
.wrap .topic-tag .tag-list .footer .left .thumb-value{
  padding-right: 1rem;
}
.wrap .topic-tag .tag-list .footer .left .thumbed{
  color: #f15f6d;
}
</style>