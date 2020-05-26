<template>
<div class="wrap">
  <van-nav-bar
    title="关注更多"
    fixed
    left-arrow
    @click-left="onClickLeft">
    <template #right>
      <van-icon name="search" size="1rem" color="" @click="showSearchPop" />
    </template>
  </van-nav-bar>
  <div style="height: 46px"></div>
  <van-tabs v-model="tabActive" animated @click="tabChange">
    <van-tab :title="'工作室联盟'">
      <van-grid class="grid-wrap" :gutter="10">
        <van-grid-item class="grid-item" v-for="(item, i) in studioUnionList" :key="i" :text="item.name" @click="studioUnion(item)" >
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <div class="action-wrap">
            <span v-if="item.isFollow == 0" class="unfollow">关注</span>
            <span v-else class="followed">已关注</span>
          </div>
        </van-grid-item>
      </van-grid>
    </van-tab>
    <van-tab :title="'星级工作室'">
      <div class="tab">
        煽动反共水电费
      </div>
    </van-tab>
    <van-tab :title="'所在单位工作室'">
      <div class="tab">
        煽动反共水电费
      </div>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import { Toast } from 'vant';
import { joinedActivityList } from '@/request/api';  // 导入api接口
import storage  from '../storage/storage' // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: 'StudioMoreHome',
  // components:{
  //   oneLoad
  // },
  data () {
  return {
    tabActive: 0,
    studioUnionList: [
      {name: 'A协会协会反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: 'B协会联盟', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: 'A协会联盟', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: 'A协会联盟', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: 'B协会联盟', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: 'A协会协会反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: 'B协会联盟', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: 'A协会联盟', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: 'A协会联盟', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: 'B协会联盟', isFollow: 0, img: require('../assets/img/photo.jpg')}
    ],
    startStudioList: [
      {name: '星级工作室反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: '星级工作室2', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: '星级工作室3', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: '星级工作室4', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: '星级工作室5', isFollow: 0, img: require('../assets/img/photo.jpg')}
    ],
    departStudioList: [
      {name: '所在单位工作室1反光杯风骨霸刀服不服', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: '所在单位工作室2', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: '所在单位工作室3', isFollow: 0, img: require('../assets/img/photo.jpg')},
      {name: '所在单位工作室4', isFollow: 1, img: require('../assets/img/photo.jpg')},
      {name: '所在单位工作室5', isFollow: 0, img: require('../assets/img/photo.jpg')}
    ],
  }
  },
  created () {
    // this.joinedActivityList();
    this.tabActive = this.$route.query.tab;
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
    onClickLeft() {
      this.$router.push("/studioUnionHome");
    },
    // 点击放大镜，搜索弹框出现
    showSearchPop() {
      // this.isSearchPop = true;
    },
    // 全部未关注工作室联盟
    allStudioUnion() {
      // this.$router.push("/photoAlbum");
    },
    // 切换tab
    tabChange() {
      console.log(this.active);
    },
    // 进入已关注/未关注工作室
    studioUnion(item) {
      this.$router.push(
        {
          path: '/studioUnion',
          query: {
            isFollow: item.isFollow,
            studioName: item.name
          }
        }
      )
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  background-color: #f9f9f9;
}
.wrap .grid-wrap{
  background-color: #fff;
  margin-top: 2rem;
}
.wrap .grid-wrap .grid-item{
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  /* box-shadow: 0px 0px 10px 0px #ccc; */
  /* border: 1px solid #E5E5E5; */
}
.wrap .grid-wrap p{
  padding: 0.4rem;
  color: #262626;
}
.wrap .grid-wrap .action-wrap .unfollow{
  background-color: #1E87F0;
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}
.wrap .grid-wrap .action-wrap .followed{
  background-color: rgb(219, 240, 30);
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}

</style>