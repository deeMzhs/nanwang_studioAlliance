<template>
    <div>
    <van-nav-bar
    title="创新成果详情"
    fixed
    left-arrow
    @click-left="onClickLeft"
  />
  <div style="height: 46px"></div>
   
    <div class="img">
        <img src="@/assets/img/photo.jpg" alt="">
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
                 <div class="contact">
                     联系方式
                 </div>
                 <div class="msg" v-for="(item, index) in 2" :key="index">
                 <div>成果专业</div>
                 <div>技术成果奖</div>
            </div>
             </div>
        </van-tab>
        <van-tab title="正文内容">
        </van-tab>
     </van-tabs>

  
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:0
        }
    },
    methods:{
     onClickLeft(){
         this.$router.push('InnovationIndex')
     }
    },
    mounted(){
       console.log(this.$route.query);    
    }
}
</script>

<style  scoped>
.img{
    width: 100%;
}
.img img{
    width: 100%;
    vertical-align:middle;
}
.box{
    position: relative;
    background-color: #f2f2f2;
    height: 5.6rem;
}
.title{
    position: absolute;
    top:-30%;
    left: 4%;
    right:4%;
    width: 92%;
    height: 6.5rem;
    background-color: #fff;
    box-shadow:0px 5px 10px 0px rgba(30,135,240,0.23);
    border-radius:4px;
}
.title h3{
    font-size: 1.2rem;
    margin:.5rem;
    margin-left:1.2rem;
    font-weight: bold;
}
.title p{
  color: #595959;
  padding: .3rem 1.2rem;
}
.msg{
    margin: 1rem;
    display: flex;
    font-size: 1rem;
}
.msg :nth-child(1){
    width: 6rem;
    color: #8C8C8C;
}
.msg :nth-child(2){
    flex: 1;
    color: #595959;
}
.contact{
   margin-left:1rem; 
   color: #262626;
   padding-left: .5rem;
   font-weight:bold;
   border-left: .2rem solid #1E87F0;

}
</style>