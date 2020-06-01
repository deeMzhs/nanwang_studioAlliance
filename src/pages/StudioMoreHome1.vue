<template>
  <div class="wrap">
    <van-nav-bar title="关注更多" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="1rem" color @click="showSearchPop" />
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    

    
    <van-tabs  animated title-active-color='#278bef' color="#278bef"   v-model="tabActive">
      <van-tab :title="'工作室联盟'">
      </van-tab>
      <van-tab :title="'星级工作室'">
        
      </van-tab>
      <van-tab :title="'所在单位工作室'">
      
      </van-tab>
    </van-tabs>
 
     <div class="choose">筛选</div>
        <van-tabs v-model="tabActive" animated @click="tabChange" title-active-color='#278bef' color="#278bef" >
          <van-tab :title="'工作室联盟'"></van-tab>
          <van-tab :title="'工作室联盟'"></van-tab>
          <van-tab :title="'工作室联盟'"></van-tab>
        </van-tabs>
        <van-collapse v-model="activeName" v-for="i of list" :key="i.id" accordion>
          <van-collapse-item :name="i.id">
            <template #title>
              <van-checkbox
                class="checkbox"
                v-model="i.checked"
                @click.stop="handclick(i)"
                shape="square"
                label-disabled
              ></van-checkbox>
              {{i.name}}
            </template>
            <van-checkbox-group v-model="result" :ref="i.id" class="group" @change="handChangeclick(i)">
              <div class="item" v-for="i1 of i.children" :key="i1.id">
                <van-checkbox :name="i1.id" shape="square" >{{i1.name}}</van-checkbox>
              </div>
            </van-checkbox-group>
          </van-collapse-item>
        </van-collapse>
    <div>

<van-row class="btn">
  <van-col span="12"><van-button type="default" size="large">重置</van-button></van-col>
  <van-col span="12"><van-button type="info" size="large" @click="addStudioMore">确定</van-button></van-col>
</van-row>

    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { joinedActivityList } from "@/request/api"; // 导入api接口
import storage from "../storage/storage"; // 导入storage
// import oneLoad from "../components/loading.vue"
export default {
  name: "StudioMoreHome",
  // components:{
  //   oneLoad
  // },
  data() {
    return {
      activeName: ["1"],
      result: [],
      tabActive: 0,
      studioUnionList: [
        {
          name: "A协会协会反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会协会反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "A协会联盟",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "B协会联盟",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      startStudioList: [
        {
          name: "星级工作室反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室2",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室3",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室4",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "星级工作室5",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      departStudioList: [
        {
          name: "所在单位工作室1反光杯风骨霸刀服不服",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室2",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室3",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室4",
          isFollow: 1,
          img: require("../assets/img/photo.jpg")
        },
        {
          name: "所在单位工作室5",
          isFollow: 0,
          img: require("../assets/img/photo.jpg")
        }
      ],
      list: [
        {
          id: 1,
          checked: false,
          name: "广东电网有限公司",
          children: [
            {
              id: 11,
              name: "广州电网公司"
            },
            {
              id: 12,
              name: "深圳电网公司"
            },
            {
              id: 13,
              name: "珠海电网公司"
            }
          ]
        },
        {
          id: 2,
          checked: false,
          name: "广东电网有限公司",
          children: [
            {
              id: 21,
              name: "广州电网公司"
            },
            {
              id: 22,
              name: "广州电网公司"
            },
            {
              id: 23,
              name: "广州电网公司"
            }
          ]
        }
      ]
    };
  },
  created() {
    // this.joinedActivityList();
    this.tabActive = this.$route.query.tab;
    this.setLoginStorage();
  },
  methods: {
    setLoginStorage() {
      storage.set("list", 999);
    },
    // h5与app交互较简单，以url跳转的形式即可，将app需要的参数以query的形式携带在url后面，如：
    setUserInfo(id) {
      window.location.href = `http://appName.local.com?action=webPushUserInfo&id=${id}`; // es6的字符串拼接写法
      // 注释：可以在 H5 的重定向链接后面拼接参数，app 获取后进行解析，推至内部详情页
      window.location.href =
        'com.English.AJ://?extra={"type":"3","h5_url":"[https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle](https://reading.talcloud.com/app/apppages/shareclass.html?act_id=18&raz_role=teacher&razflag=hideTitle)"}';
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
      this.$router.push({
        path: "/studioUnion",
        query: {
          isFollow: item.isFollow,
          studioName: item.name
        }
      });
    },
    handclick(i) {
      let newIndexs = i.children.map(val => val.id);
      if (i.checked == false) {
        this.result.push(...newIndexs.filter(el => this.result.indexOf(el) === -1));
      } else {
        this.result = this.result.filter(val => newIndexs.indexOf(val) === -1);
      }
    },
    addStudioMore(){
      let msg=this.result.length!=0?this.result.join(','):'请选择关注内容'
      Toast(msg);
    },
    handChangeclick(i){
      let newIndexs = i.children.map(val => val.id);
     i.checked=newIndexs.find(el=>this.result.indexOf(el) === -1)?false:true   
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  background-color: #f9f9f9;
}
.wrap .grid-wrap {
  background-color: #fff;
  margin-top: 2rem;
}
.wrap .grid-wrap .grid-item {
  /*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/
  /* box-shadow: 0px 0px 10px 0px #ccc; */
  /* border: 1px solid #E5E5E5; */
}
.wrap .grid-wrap p {
  padding: 0.4rem;
  color: #262626;
}
.wrap .grid-wrap .action-wrap .unfollow {
  background-color: #1e87f0;
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}
.wrap .grid-wrap .action-wrap .followed {
  background-color: rgb(219, 240, 30);
  color: #fff;
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}

.choose {
  height: 2.5rem;
  line-height: 2.5rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  color: #262626;
}
.van-tabs{
  box-sizing: border-box;
}

.group .item {
  padding: 10px;
  padding-left: 30px;
  border-bottom: 1px solid #f2f2f2;
}
.group :nth-child(1) {
  padding-top: 0;
}
.checkbox {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;

}


.btn{
  position: fixed;
  z-index:1;
  bottom: 0;
  left: 0;
  right: 0;
}
.van-col{
  padding: 10px;
  box-sizing: border-box;
}
</style>