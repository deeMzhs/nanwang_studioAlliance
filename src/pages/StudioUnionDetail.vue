<template>
  <div>
    <van-nav-bar
      title="联盟详情"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="height: 46px"></div>
    <div class="img">
      <img src="@/assets/img/photo.jpg" alt="" />
    </div>
    <div style="height: 12.43rem"></div>
    <van-tabs
      title-active-color="#1E87F0"
      color="#1E87F0"
      line-width="25vw" scrollspy sticky offset-top="250"
    >
      <van-tab title="联盟介绍">
        <div class="detail">
            <div class="detail-title">联盟介绍</div>
            <p>{{content[4]}}</p>
        </div>
      </van-tab>
      <van-tab title="工作制度">
        <div class="detail">
            <div class="detail-title">工作制度</div>
            <p>{{content[1]}}</p>
        </div>
      </van-tab>
      <van-tab title="组织架构">
        <div class="detail">
            <div class="detail-title">组织架构</div>
            <p>{{content[4]}}</p>
        </div>
      </van-tab>
      <van-tab title="工作计划">
        <div class="detail">
            <div class="detail-title">工作计划</div>
            <p>{{content[4]}}</p>
        </div>
      </van-tab>
      <van-tab title="经费管理细则">
        <div class="detail">
            <div class="detail-title">经费管理细则</div>
            <p>{{content[4]}}</p>
            <div style="height:120px"></div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'StudioUnionDetail',
  data() {
    return {
      top:0,
      active: 0,
      currentIndex:0,
      tabInfo:["针对问题","原理说明",'创新点'],
      content:['输电发电用爱发电联盟','做好核心目标','董事长，副董事长.....','2020年工作计划','这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则这是经费管理细则']       
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("InnovationIndex");
    },
  },
  mounted() {
    console.log(this.$route.query);
  },
};
</script>


<style scoped>
.van-hairline--bottom::after{
    border-bottom-width:0;
}
.img{
  width: 100%;
  height: 12.75rem;
  position: fixed;
  z-index: 10;
}
.img img{
	width:100%;
	height:100%;
	display:block;
}
.msg {
  margin: 1rem;
  display: flex;
  font-size: 1rem;
}
.msg :nth-child(1) {
  width: 6rem;
  color: #8c8c8c;
}
.msg :nth-child(2) {
  flex: 1;
  color: #595959;
}
.contact {
  margin-left: 1rem;
  color: #262626;
  padding-left: 0.5rem;
  font-weight: bold;
  border-left: 0.2rem solid #1e87f0;
}
.detail{
  padding: 1rem;
}
.detail-title{
  border-left:.125rem solid #1E87F0;
  padding: 0 .43rem;
  font-weight: 700;
  color: #262626;
  font-size: .875rem;
  margin-bottom: 1rem;
}
.detail p{
  font-size: .875rem;
  line-height: 1.5rem;
  color: #595959;
  margin-bottom: .4rem;
}

</style>