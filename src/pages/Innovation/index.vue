<template>
    <div>
    <van-nav-bar
    title="创新成果"
    fixed
    left-arrow
    @click-left="onClickLeft"
  >
  </van-nav-bar>
  <div style="height: 46px"></div>
   <van-search 
  v-model="value"
  background="#1E87F0"
  placeholder="请输入创新成果名称"
  @focus='onSearch'
  />

     <div class="screening">
  0条搜索结果 <span @click="screening">筛选 <van-icon name="arrow-down" /></span>
  </div>
   
   <div>
       <h3 class="title">工作室成果</h3>
       <div class="body">
          <div class="bd-item" v-for="(item, index) in list" :key="index" @click="to(item.id)">
              <img :src="item.imgurl" alt="" srcset="">
              <div>{{item.desc}}</div>
              <h5> <span>{{item.title}}</span>   <i><van-icon name="share" @click.stop="show=true" /></i></h5>
          </div>
       </div>
   </div>

   <van-popup v-model="show" round  position="bottom" :style="{ height: '40%' }" >
        <div class="share_title">
           分享到
       </div>
       <div class="share_body">
         <div class="share_item" v-for="(item, index) in 4" :key="index"  @click="share">
             <img src="@/assets/img/pop-dt.png" alt="" srcset="">
             <span>朋友圈</span>
         </div>
       </div>
       <button class="share_btn"  @click="show=false">
           取消
       </button>      
   </van-popup>



    </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
import storage  from '@/storage/storage' // 导入storage
export default {
    components:{
      [Dialog.Component.confirm]: Dialog.confirm
    },
    data(){
        return{
            value:'',
            show:false,
            list:[{
                id:1,
                title:'世项劳模创新工作室世项劳模创新工作室',
                imgurl:require('@/assets/img/mypage .png'),
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },
            {
                id:2,
                title:'世项劳模创新工作室世项劳模创新工作室',
                imgurl:require('@/assets/img/mypage .png'),
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },{
                id:3,
                imgurl:require('@/assets/img/mypage .png'),
                title:'世项劳模创新工作室世项劳模创新工作室',
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },{
                id:4,
                imgurl:require('@/assets/img/mypage .png'),
                title:'世项劳模创新工作室世项劳模创新工作室',
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },{
                id:5,
                title:'世项劳模创新工作室世项劳模创新工作室',
                imgurl:require('@/assets/img/mypage .png'),
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },
            {
                id:6,
                title:'世项劳模创新工作室世项劳模创新工作室',
                imgurl:require('@/assets/img/mypage .png'),
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            },
            {
                id:7,
                title:'世项劳模创新工作室世项劳模创新工作室',
                imgurl:require('@/assets/img/mypage .png'),
                desc:'小型发电车改造，节省了人 力抬搬环节，改造改造改小型发电车改造，节省了人 力抬搬环节，改造改造改'
            }]
        }
    },methods:{
        //回到首页
        onClickLeft() {
        this.$router.push("/studioUnionHome");
        },
        // 筛选
        screening(){
        },
        // 分享
        share(){
         Toast('点击了微信分享');
        },
        // 点击搜索
         onSearch() { 
          this.$router.push('InnovationSearch')
        },
        to(id){
         this.$router.push({
             path:'InnovationDetail',
             query:{
                 id
             }
         })
        }
    }

}
</script>

<style scoped>
.van-hairline--bottom::after{
    border-bottom-width:0;
}
.van-icon{
    vertical-align: middle;
}
.van-search__action{
    color: #fff;
}
.screening{
    padding:0 .5rem ;
 background-color: #E5E5E5;
 height: 3rem;
 line-height:3rem;
 color: #8C8C8C;
 font-size: 1rem;
}
.screening span {
    float: right;
    color: #262626;
}
.title{
    font-size:1rem;
    color:#262626 ;
    margin: .6rem;
    font-weight:700;
}
.body{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.bd-item{
    margin-left:4%;
    width: 44%;
    margin-bottom: 1rem;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, .1);
    border-radius: .2rem;
    overflow: hidden;
}

.bd-item img{
    width:100%;
}
.bd-item div{
    padding: .5rem ;
    height: 2.5rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
     overflow: hidden;
     color: #8C8C8C;
}
.bd-item h5{
    margin-top:.2rem;
    height: 2rem;
    line-height: 2rem;
    font-weight: bold;
    font-size:.86rem;
    padding: 0 .5rem;
    color: #262626;
}
.bd-item h5 span{
    display: inline-block;
    width: 85%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap; 
}
.bd-item h5 i{
    float: right;
    margin-top: .3rem;
    vertical-align: middle;
    color: #8C8C8C;
}
.share_title{
    text-align: center;
    margin: 2rem 0; 
    font-weight: bold;
    font-size: 1REM;
}
.share_body{
    display: flex;
    justify-content: space-around;
}
.share_item{
    width:2.5rem;
    text-align: center;
}
.share_item img{
  width: 100%;
}
.share_btn{
position: fixed;
display: block;
left: 0;
right: 0;
bottom: 0;
height: 3.5rem;
width: 100%;
background-color: #fff;
border: 0;
border-top: .1rem solid #f2f2f2;
text-align:center;
font-size: 1rem;
}
</style>