<template>
  <div class="studioMembers_box">
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div style="height: 46px"></div>
    <div class="studioMembers_content">
      <div class="studioMembers_list">
        <div class="list" v-for="list in membersList">
          <div class="head_img">
            <img src="../assets/img/photo.jpg" alt="">
          </div>
          <div class="msg">
            <p>{{list.name}}</p>
            <p>
              <span v-for="(tag, index) in list.tag" :key="">
                <span :class="{one: index === 0, two: index === 1, three: index === 2, ml: index !== 0}">{{tag | setTag}}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'studio-members',
    data(){
      return{
        title: '工作室成员',
        membersList: [
          {
            id: 0,
            name: '周四',
            tag: [1,2,3]
          },
          {
            id: 1,
            name: '里斯',
            tag: [1]
          },
          {
            id: 2,
            name: '老王',
            tag: []
          },
          {
            id: 3,
            name: '王作礼',
            tag: [2]
          },
          {
            id: 4,
            name: '刘欣欣',
            tag: []
          },
          {
            id: 5,
            name: '张杰',
            tag: []
          },
          {
            id: 6,
            name: '黄大米',
            tag: []
          }
        ]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    },
    filters: {
      setTag(value){
        return value === 1 ? '一级技术' : (value === 2 ? '二级技术' : '专家称号')
      }
    }
  }
</script>

<style lang="less" scoped>
  .studioMembers_content{
    background: #f8f8f8;
    padding-top: 1rem;
    .studioMembers_list{
      .list{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.81rem 1.09rem;
        background: white;
        margin-bottom: .08rem;
        .head_img{
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 1.125rem;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .msg{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 1.06rem;
          p:last-of-type{
            margin-left: .75rem;
            span{
              border-radius:1rem;
              span{
                padding: 0.22rem 0.53rem;
                display: inline-block;
                font-size: .63rem;
              }
              .one{
                background: #36B21D;
              }
              .two{
                background: #F15747;
              }
              .three{
                background: #f1ea29;
              }
              .ml{
                margin-left: .34rem;
              }
            }
          }
        }
      }
    }
  }
</style>
