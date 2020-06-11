<template>
  <div class="activeValue_content">
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <span>
          <van-icon name="warning-o" />
        </span>
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    <div class="top">
      <p>
        <span>78</span>
        <span>当前活跃值</span>
      </p>
    </div>
    <div class="msg">
      <p>活跃值明细</p>
      <div class="list_content">
        <div class="list" v-for="list in 10">
          <p>
            <span>活动报名</span>
            <span>2019-03-01</span>
          </p>
          <p>+5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "active-value",
    data(){
      return{
        title: '活跃值'
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped>
  .activeValue_content{
    font-size: 0;
    .van-hairline--bottom:after{
      border-bottom-width: 0 !important;
    }
    .top{
      height: 8rem;
      width: 100%;
      background: linear-gradient(154deg,rgba(30,135,240,1) 0%,rgba(30,135,239,1) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      p{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span:first-of-type{
          font-size: 2.5rem;
          font-weight: bold;
        }
        span:last-of-type{
          font-size: 1rem;
        }
      }
    }
    .msg{
      font-size: 1rem;
      >p{
        font-size: .88rem;
        padding: 1.34rem 0 .63rem 1.09rem;
        background: rgb(248, 248, 248);
      }
      .list_content{
        background: white;
        padding: 0 1.06rem;
        .list{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: .84rem;
          padding-bottom: .72rem;
          border-bottom: 1px solid rgba(229,229,229,1);
          p:first-of-type{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            span:first-of-type{
              margin-bottom: .69rem;
            }
            span:last-of-type{
              font-size: .75rem;
              color: #b2b2b2;
            }
          }
          p:last-of-type{
            color: #1E87F0;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
