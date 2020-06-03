<template>
  <div class="wrap">
    <button @click="change">1111</button>
    <button @click="changeOff">2222</button>
    <!--分享弹窗 -->
    <van-popup v-model="shareShow" position="bottom" :style="{height:'37%'}" class="shareShow" round>
      <div class="share-h">分享到</div>
      <div class="share-main">
        <!-- <div v-for="item in shareInfo"></div> -->
      </div>
    </van-popup>
    <!-- 筛选弹窗 -->
    <van-popup v-model="show"  position="bottom" :style="{ height: '80%' }">
      <div class="main">
        <div class="pop-block">
          <div class="pop-title">获奖</div>
          <div class="pop-context">
            <div v-for="(item,index) in Award" 
            :key="index" :class="{active:index === currentIndex}" 
            @click="tabClick(index)">{{item.context}}
            
            </div>
          </div>
        </div>
        <div class="pop-block">
          <div class="pop-title">分类</div>
          <div class="pop-context">
            <div v-for="(item,index) in FruitList" :key="index" :class="{active:item.selected}" @click="tabClick1(index)">{{item.context}}</div>
          </div>
        </div>
        <div class="pop-block">
          <div class="pop-title">所在单位</div>
          <div class="pop-context">
            <div v-for="(item,index) in CommpoyList" :key="index" :class="{active:index === currentIndex2}" @click="tabClick2(index)">{{item.context}}</div>
          </div>
        </div>
      </div>
      <div style="height: 3.5rem"></div>
      <van-row class="pop-btn">
        <van-col span="12"><van-button type="default" size="large" @click="currentIndex=[],currentIndex1=[],currentIndex2=[]">重置</van-button></van-col>
        <van-col span="12"><van-button type="info" size="large" @click="addStudioMore">确定</van-button></van-col>   
      </van-row>
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'CreatePagetest',
  data(){
    return{
      show : false,
      shareShow:false,
      currentIndex:'',
      currentIndex1:'',
      currentIndex2:'',
      Award : [{id: 11,context:'一等奖',selected:false},{id: 12,context:'二等奖',selected:false},{id: 13,context:'三等奖',selected:false}],
      FruitList : [{id:21,context:'qc创新成果',selected:false},{id:22,context:'输变电成果',selected:false},{id:23,context:'调度保护及综合类成果',selected:false}],
      CommpoyList : [ {id:31,context:'广东电网有限责任公司',selected:false},
                      {id:32,context:'广东供电局有限公司',selected:false},
                      {id:33,context:'广西电网有限责任公司',selected:false},
                      {id:34,context:'云南电网有限责任公司',selected:false},
                      {id:35,context:'贵州电网有限责任公司',selected:false},
                      {id:36,context:'海南电网有限责任公司',selected:false}],
      shareInfo : [ {name:'E-link', img:require('../../assets/img/elink.png')},
                    {name:'微信', img:require('../../assets/img/微信.png')},
                    {name:'朋友圈', img:require('../../assets/img/朋友圈.png')},
                    {name:'QQ', img:require('../../assets/img/QQ.png')},
      ]
    }
  },
  methods:{
    // 弹窗显示
    changeOff(){
      this.shareShow = true;
    },
    change(){
      this.show = true
    },
    //点击确定后

    //点击tab
    tabClick(index){
      this.currentIndex = index
      this.Award[index].selected = !this.Award[index].selected;
    },
     tabClick1(index){
      this.FruitList[index].selected = !this.FruitList[index].selected;
    },
     tabClick2(index){
      this.currentIndex2 = index;
      this.CommpoyList[index].selected = !this.CommpoyList[index].selected;
    },
    addStudioMore(){
      let ret = [];
      // this.FruitList = 
      ret = this.FruitList.filter(el=>el.selected === true );
      ret = ret.concat(this.CommpoyList.filter(el=>el.selected === true ));
      ret = ret.concat(this.Award.filter(el=>el.selected === true ));
      console.log(ret);
    }
  },
  computed:{
  }
}
</script>
<style scoped>
.shareShow{
  border-top-left-radius: '10%';border-top-right-radius: '10%';
}
.main{
  margin: 1.18rem 1rem 0 1rem;
}
.pop-context{
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #262626;
}
.pop-context div{
  padding: .55rem .7rem;
  border: 0.01rem solid #E5E5E5;
  line-height: .875rem;
  font-size: .875rem;
  border-radius: 0.125rem;
  text-align: center;
  margin-right: .43rem;
  margin-bottom: .55rem;
}
.active{
  background-color:#1E87F0;
  color: #ffffff;
}
.pop-block .pop-title{
  color: #262626;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 1.2rem;
  margin-bottom: .7rem;
  display: block;
}
.pop-btn{
  position: fixed;
  z-index:1;
  bottom: 0;
  left: 0;
  right: 0;
}

/* 分享弹窗样式 */
.share-h{
  text-align: center;
  height: 5rem;
  line-height: 5rem;
  font-size: .875rem;
  font-weight: 700;
  color: #262626;
}
/* .share-main{

} */
</style>

