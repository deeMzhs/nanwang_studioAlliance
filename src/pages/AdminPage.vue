<template>
  <div class="adminPage-container">
    <van-nav-bar :title="title" fixed left-arrow @click-left="onClickLeft">
      <template #right>
        <span>
          <van-icon size="1.2rem" name="bars" />
        </span>
        <span>
          <van-icon size="1.2rem" style="margin-left: 1rem" name="records" @click="edit()" />
        </span>
      </template>
    </van-nav-bar>
    <div style="height: 46px"></div>
    <van-tabs v-model="active"
              class="vanTabs"
              swipeable color="#1E87F0"
              title-active-color="#1E87F0" line-width="50%" line-height="0.06rem">
      <van-search
        v-model="searchValue"
        placeholder="搜索" input-align="left" />
      <van-tab title="通知公告">

        <div class="noticeContent">
          <div class="list" v-for="list in notice" :key="list.id">
            <p>{{list.title}}</p>
            <p>{{list.date}}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="活动列表">
        <div class="activity_content">
          <van-checkbox-group  v-model="result" ref="checkboxGroup">
            <van-checkbox :name="activityList.id" v-for="activityList in activityList" :ket="activityList.id">
              <div class="activity_text">
                <div class="activity_left">
                  <p>{{activityList.title}}</p>
                  <p>{{activityList.time}}</p>
                </div>
                <div class="activity_right">
                  <div class="activity_right_img">
                    <img src="../assets/img/a.jpg" alt="">
                  </div>
                </div>
              </div>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </van-tab>
    </van-tabs>
    <div class="bottom_menu" v-show="isEdit">
      <div class="bottom_menu_left">
        <van-checkbox @click="checkAll" v-model="checkAlls">全选<span>(尽可删除未开始活动)</span></van-checkbox>
      </div>
      <div class="bottom_menu_right">
        <p @click="del">删除</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "admin-page",
    data(){
      return{
        title: '管理员',
        active: 0,
        checkAlls: false,
        searchValue: '',
        result: [],
        notice: [
          {
            id: 0,
            title: '这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知',
            date: '2020-03-01'
          },
          {
            id: 1,
            title: '这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知',
            date: '2020-03-01'
          },
          {
            id: 2,
            title: '这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知',
            date: '2020-03-01'
          },
          {
            id: 3,
            title: '这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知这是一条通知通知通知',
            date: '2020-03-01'
          }
        ],
        isEdit: false,
        activityList: [
          {
            id: 0,
            title: '这是活动这是活动这是活动这是活动这是活动这是活动这是活动',
            time: '2020.05.24-2020.05.24'
          },
          {
            id: 1,
            title: '这是活动这是活动这是活动这是活动这是活动这是活动这是活动',
            time: '2020.05.24-2020.05.24'
          },
          {
            id: 2,
            title: '这是活动这是活动这是活动这是活动这是活动这是活动这是活动',
            time: '2020-05-24'
          }
        ]
      }
    },
    mounted(){
    },
    watch: {
      active(n, o){
        if(n === 1) {
          setTimeout(() => {
            if(this.$refs.checkboxGroup){
              this.setCheck(this.activityList, '', 'none');
            }
          },20)
        } else {
          this.isEdit = false;
        }
      },
      isEdit(n, o){
        n ? this.showCheck() : this.hideCheck();
      },
      result(n,o){
        if (n.length === this.activityList.length) {
          this.checkAlls = true;
        } else {
          this.checkAlls = false;
        }
      }
    },
    methods: {
      hideCheck(){
        if(this.$refs.checkboxGroup){
          this.setCheck(this.activityList, 'block', 'none');
        }
      },
      showCheck(){
        if(this.$refs.checkboxGroup){
          this.setCheck(this.activityList, 'none', 'block');
        }
      },
      setCheck(list, a, b){
        for(let i = 0; i < list.length; i++){
          if(this.$refs.checkboxGroup.$children[i].$el.children[0].style
            && this.$refs.checkboxGroup.$children[i].$el.children[0].style.display === a){
            this.$refs.checkboxGroup.$children[i].$el.children[0].style.display = b;
          }
        }
      },
      onClickLeft() {
        this.$router.go(-1);
      },
      edit(){
        if(this.active === 1) this.isEdit = !this.isEdit;
      },
      checkAll() {
        if(!this.checkAlls){
          this.$refs.checkboxGroup.toggleAll(true);
        } else {
          this.$refs.checkboxGroup.toggleAll();
        }
      },
      del(){
        // if(this.result.length !== 0){
        //   this.
        // }
        // this.activityList = [];
        // this.isEdit = false;
      }
    }
  }
</script>

<style lang="less" scoped>
.adminPage-container{
  .vanTabs{
    /deep/ .van-tabs__content{
      .van-tab__pane{
        .van-search{
          background: #f8f8f8;
          .van-search__content{
            background: white;
            .van-cell{
            }
          }
        }
      }
    }
    .noticeContent{
      padding: 1.44rem 1.06rem;
      background: white;
      .list{
        border-bottom: 1px solid #f8f8f8;
        margin-bottom: 1.31rem;
        p:first-of-type{
          font-size:1rem;
          font-weight:400;
          color:rgba(4,4,4,1);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: .84rem;
          letter-spacing: 1px;
        }
        p:last-of-type{
          font-size:0.75rem;
          color:rgba(140,140,140,1);
          margin-bottom: 1.44rem;
        }
      }
    }
    .activity_content{
      padding: 1.25rem 1rem ;
      /deep/ .van-checkbox-group{
        .van-checkbox{
          .van-checkbox__icon{
            margin-right: 1rem;
          }
          margin-bottom: 1rem;
          .van-checkbox__label{
            padding-bottom: 1rem;
            border-bottom: 1px solid #f8f8f8;
            .activity_text{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              .activity_left{
                p:first-of-type{
                  font-size:1rem;
                  font-weight:400;
                  color:rgba(38,38,38,1);
                  letter-spacing: 1px;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  margin-bottom: .94rem;
                }
                p:last-of-type{
                  width:8.5rem;
                  font-size:0.75rem;
                  font-weight:400;
                  color:rgba(140,140,140,1);
                }
              }
              .activity_right{
                margin-left: 1.03rem;
                .activity_right_img{
                  width:6rem;
                  height:4.5rem;
                  border-radius:0rem;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .bottom_menu{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.03rem;
    height:2.94rem;
    border: 1px solid #f8f8f8;
    p{
      background:rgba(30,135,240,1);
      font-size:0.75rem;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding: .43rem 1.41rem;
      border-radius: 2px;
    }
  }
}
</style>
