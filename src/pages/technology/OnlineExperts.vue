<template>
  <div class="onlineExperts_container">
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="onlineExperts_content">
      <div class="list" v-for="list in list">
        <div class="left">
          <div class="img">
            <img src="../../assets/img/photo.jpg" alt="">
          </div>
          <div class="msg">
            <p><span>{{list.name}}</span><span>{{list.tag}}</span></p>
            <p>{{list.msg}}</p>
            <p>{{list.qMember}}人已咨询</p>
          </div>
        </div>
        <p>咨询</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "online-experts",
    data(){
      return{
        title: '在线专家',
        list: [
          {
            id: 0,
            name: '李宏利',
            tag: '劳模专家',
            msg: '世界搜索传销工作室',
            qMember: 189
          },
          {
            id: 0,
            name: '李宏利',
            tag: '劳模专家',
            msg: '世界搜索传销工作室',
            qMember: 189
          },
          {
            id: 0,
            name: '李宏利',
            tag: '劳模专家',
            msg: '世界搜索传销工作室',
            qMember: 189
          },
          {
            id: 0,
            name: '李宏利',
            tag: '劳模专家',
            msg: '世界搜索传销工作室',
            qMember: 189
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.onlineExperts_content{
  background: #f8f8f8;
  .list{
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.31rem 1.46rem 1.31rem 1.06rem;
    border-bottom: 1px solid #f8f8f8;
    .left{
      display: flex;
      align-items: center;
      justify-content: center;
      .img{
        width:3.81rem;
        height:3.81rem;
        border-radius:50%;
        overflow: hidden;
        margin-right: .87rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .msg{
        p:first-of-type{
          margin-bottom: .56rem;
          span:first-of-type{
            font-size:1.06rem;
            font-weight:400;
            color:rgba(38,38,38,1);
          }
          span:last-of-type{
            margin-left: .5rem;
            background:rgba(241,87,71,.2);
            padding: .1rem .4rem;
            border-radius: 1rem;
            color:rgba(241,87,71,1);
          }
        }
        p:nth-of-type(2){
          font-size:0.87rem;
          font-weight:400;
          color:rgba(89,89,89,1);
          margin-bottom: .59rem;
        }
        p:last-of-type{
          font-size:0.87rem;
          font-weight:400;
          color:rgba(89,89,89,1);
        }
      }
    }
    >p{
      font-size:0.87rem;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding: .53rem 1rem;
      background: #1E87EF;
      border-radius: .1rem;
    }
  }
}
</style>
